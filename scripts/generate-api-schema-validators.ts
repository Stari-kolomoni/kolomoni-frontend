import * as path from "node:path";
import * as fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import Ajv from "ajv";
import * as TJS from "typescript-json-schema";
import ajvStandalone from "ajv/dist/standalone";
import { executeWithStdoutCapture, pathExists } from "./shared/utilities";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const REPOSITORY_ROOT_DIRECTORY_PATH = path.join(__dirname, "..");
const VALIDATION_DIRECTORY_PATH = path.join(
    REPOSITORY_ROOT_DIRECTORY_PATH,
    "src/lib/api/validation"
);
const JSON_SCHEMAS_DIRECTORY_PATH = path.join(
    VALIDATION_DIRECTORY_PATH,
    "json-schemas"
);

interface CompiledJsonSchema {
    typeName: string,
    jsonSchemaTypeId: string,
    jsonSchemaFilePath: string,
}


async function compileJsonSchemas(
    typeFilePath: string,
    typeNames: string[],
    outputDirectoryPath: string,
    repositoryRootDirectoryPath: string,
): Promise<CompiledJsonSchema[]> {
    if (!await pathExists(typeFilePath)) {
        throw new Error("Provided typeFilePath does not exist: " + typeFilePath);
    }

    if (!await pathExists(outputDirectoryPath)) {
        console.log("JSON schema directory does not exist yet, creating.");
        await fs.mkdir(JSON_SCHEMAS_DIRECTORY_PATH, {
            recursive: true,
        });
    }

    
    const compiledJsonSchemas: CompiledJsonSchema[] = [];


    for (const typeName of typeNames) {
        console.log(`[JSON Schema Generator] Generating "${typeName}.json".`);

        const outputPath = path.join(
            outputDirectoryPath,
            `${typeName}.json`
        );
        const schemaId = `#/schemas/${typeName}`;

        const generatorOptions: TJS.PartialArgs = {
            required: true,
            strictNullChecks: true,
            id: schemaId
        };

        const program = TJS.getProgramFromFiles(
            [typeFilePath],
            {},
            repositoryRootDirectoryPath,
        );

        const schema = TJS.generateSchema(
            program,
            typeName,
            generatorOptions,
            [],
        );

        await fs.writeFile(
            outputPath,
            JSON.stringify(schema, null, 4),
            { encoding: "utf-8" }
        );


        compiledJsonSchemas.push({
            typeName,
            jsonSchemaFilePath: outputPath,
            jsonSchemaTypeId: schemaId,
        });
    }

    return compiledJsonSchemas;
}


interface CompiledValidator {
    typeName: string,
    validatorJsFilePath: string,
}


async function compileValidatorsFromSchemas(
    schemas: CompiledJsonSchema[],
    validatorOutputDirectoryPath: string,
    repositoryRootDirectoryPath: string,
): Promise<CompiledValidator[]> {
    const compiledValidators: CompiledValidator[] = [];

    for (const schema of schemas) {
        console.log(`[ajv validation generator] Generating "${schema.typeName}.js".`);

        const schemaFileContent = await fs.readFile(
            schema.jsonSchemaFilePath,
            { encoding: "utf-8", flag: "r" }
        );
        const schemaObject = JSON.parse(schemaFileContent);

        const validatorOutputFilePath = path.join(
            validatorOutputDirectoryPath,
            `${schema.typeName}.js`
        );

        const ajvInstance = new Ajv({
            schemas: [schemaObject],
            code: {
                esm: true,
                lines: true,
                source: true,
                optimize: 2,
            }
        });
    
        const ajvGeneratedCode = ajvStandalone(ajvInstance, {
            [schema.typeName]: schema.jsonSchemaTypeId
        });
    

        await fs.writeFile(
            validatorOutputFilePath,
            ajvGeneratedCode,
            { encoding: "utf8" }
        );

        compiledValidators.push({
            typeName: schema.typeName,
            validatorJsFilePath: validatorOutputFilePath
        });
    }
    
    console.log("[ajv validation generator] Reformatting validator files with ESLint.");
    await executeWithStdoutCapture(
        "yarn",
        ["eslint", `${validatorOutputDirectoryPath}/**/*.js`, "--fix"],
        repositoryRootDirectoryPath,
        "ESLint"
    );


    return compiledValidators;
}

async function generateTypingsForValidators(
    validators: CompiledValidator[],
    repositoryRootDirectoryPath: string,
) {
    for (const validator of validators) {
        const parentDirectoryPath = path.dirname(validator.validatorJsFilePath);

        const declarationFileName = `${validator.typeName}.d.ts`;
        console.log(`[TypeScript Declaration Generator] Generating "${declarationFileName}".`);

        await executeWithStdoutCapture(
            "yarn",
            [
                "tsc",
                "--allowJs",
                "--declaration",
                "--emitDeclarationOnly",
                validator.validatorJsFilePath,
                "--outDir",
                parentDirectoryPath
            ],
            repositoryRootDirectoryPath,
            "tsx"
        );
    }
}


async function main() {
    const typeDefinitionFilePath = path.join(
        REPOSITORY_ROOT_DIRECTORY_PATH,
        "src/lib/api/types.ts"
    );

    const typeNames = [
        "UserInformationResponse",
        "UserPermissionListResponse",
    ];


    console.log("Generating JSON schemas.");
    const compiledSchemas = await compileJsonSchemas(
        typeDefinitionFilePath,
        typeNames,
        JSON_SCHEMAS_DIRECTORY_PATH,
        REPOSITORY_ROOT_DIRECTORY_PATH
    );
    console.log(`Generated ${compiledSchemas.length} schemas.`);

    
    console.log("Compiling ajv validators from JSON schemas.");
    const compiledValidators = await compileValidatorsFromSchemas(
        compiledSchemas,
        VALIDATION_DIRECTORY_PATH,
        REPOSITORY_ROOT_DIRECTORY_PATH
    );
    console.log("Validators saved.");


    console.log("Generating TypeScript declarations for validators.");
    await generateTypingsForValidators(
        compiledValidators,
        REPOSITORY_ROOT_DIRECTORY_PATH
    );
    console.log("Typings generated.");
}

await main();
