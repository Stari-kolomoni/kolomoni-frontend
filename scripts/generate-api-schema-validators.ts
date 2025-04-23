import * as path from "node:path";
import * as fs from "node:fs/promises";
import * as readline from "node:readline/promises";
import * as fsPromises from "node:fs/promises";

import Ajv from "ajv";
import ajvStandalone from "ajv/dist/standalone";

import * as TJS from "typescript-json-schema";

import { executeWithStdoutCapture, pathExists } from "./shared/utilities";
import { API_LIBRARY_DIRECTORY_PATH, VALIDATORS_DIRECTORY_PATH, REPOSITORY_ROOT_DIRECTORY_PATH } from "./shared/paths";
import { ESLint } from "eslint";
import { stdin, stdout } from "node:process";


const DEFAULT_API_SCHEMA_INPUT_FILE_PATH = "./openapi.json";

const JSON_SCHEMAS_DIRECTORY_PATH = path.join(VALIDATORS_DIRECTORY_PATH, "json-schemas");
const API_SCHEMA_TYPES_INPUT_FILE = path.join(API_LIBRARY_DIRECTORY_PATH, "schemaTypes.ts");

const SCHEMA_TYPE_EXPORT_REGEX = /^export\s+type\s+(.+)\s+=\s+schemas\["(.*)"\];/gm


function extractJsonSchemaFromOpenApiFile(
    openApiJson: Record<string, any>,
    schemaName: string
): Record<string, any> | null {
    if (!Object.hasOwn(openApiJson, "components")) {
        throw new Error("Invalid OpenAPI file: no components field.");
    }

    const components = openApiJson.components;

    if (!Object.hasOwn(components, "schemas")) {
        throw new Error("Invalid OpenAPI file: no components.schemas field.");
    }

    const schemas: Record<string, Record<string, any>> = components.schemas;

    if (Object.hasOwn(schemas, schemaName)) {
        return schemas[schemaName];
    } else {
        return null;
    }
}


interface CompiledStandaloneValidator {
    ajvValidatorPath: string
}

async function compileStandaloneValidator(
    openApiJson: Record<string, any>,
    schemaInputName: string,
    validatorOutputName: string,
    validatorOutputDirectoryPath: string,
): Promise<CompiledStandaloneValidator> {
    const jsonSchema = extractJsonSchemaFromOpenApiFile(openApiJson, schemaInputName);
    if (jsonSchema === null) {
        throw new Error(`Invalid schemaTypes.ts or OpenAPI file: no schema by name "${schemaInputName}".`);
    }

    const validatorOutputFilePath = path.join(validatorOutputDirectoryPath, `${validatorOutputName}.js`);

    const ajvInstance = new Ajv({
        schemas: [openApiJson],
        code: {
            esm: true,
            lines: true,
            source: true,
            optimize: 2,
        }
    });

    const ajvGeneratedCode = ajvStandalone(
        ajvInstance,
        {
            [validatorOutputName]: `#/components/schemas/${schemaInputName}`
        }
    );


    await fsPromises.writeFile(
        validatorOutputFilePath,
        ajvGeneratedCode,
        { encoding: "utf-8" }
    );


    return {
        ajvValidatorPath: validatorOutputFilePath
    }
}

async function lintAndFormatStandaloneValidator(
    eslintInstance: ESLint,
    validatorFilePath: string,
) {
    const lintResults = await eslintInstance.lintFiles(validatorFilePath);
    await ESLint.outputFixes(lintResults);

    const formatter = await eslintInstance.loadFormatter("stylish");
    const resultText = String(formatter.format(lintResults));

    if (resultText.trim().length !== 0) {
        console.log(`ESLint output for "${validatorFilePath}":\n${resultText}`);
    }
}


const VALIDATOR_TYPE_TEMPLATE = `export function {TYPE_NAME}(
    data: any,
    {
        instancePath,
        parentData,
        parentDataProperty,
        rootData
    }?: {
        instancePath?: string;
        parentData: any;
        parentDataProperty: any;
        rootData?: any;
    }
): boolean;

export namespace {TYPE_NAME} {
    export let errors: Record<string, any>;
}
`;

async function generateDeclarationFileForStandaloneValidator(
    validatorName: string,
    validatorFilePath: string,
) {
    const declarationFileName = `${validatorName}.d.ts`;
    const declarationFilePath = path.join(path.dirname(validatorFilePath), declarationFileName);

    await fsPromises.writeFile(
        declarationFilePath,
        VALIDATOR_TYPE_TEMPLATE.replace(/{TYPE_NAME}/g, validatorName),
        { encoding: "utf-8" }
    );
}


function parseAllSchemasFromOpenApiFile(
    openApiJson: Record<string, any>,
): Record<string, any>[] {
    if (!Object.hasOwn(openApiJson, "components")) {
        throw new Error("Invalid OpenAPI file: no components field.");
    }

    const components = openApiJson.components;

    if (!Object.hasOwn(components, "schemas")) {
        throw new Error("Invalid OpenAPI file: no components.schemas field.");
    }

    const schemas: Record<string, Record<string, any>> = components.schemas;

    const parsedSchemas: Record<string, any>[] = []
    for (const schemaName of Object.keys(schemas)) {
        // TODO
    }

    return parsedSchemas;
}


interface FoundExportedSchema {
    inputSchemaName: string,
    outputTypeName: string,
}

async function collectSchemasToGenerateValidatorsFor(
    schemaTypesFilePath: string,
): Promise<FoundExportedSchema[]> {
    const schemaTypesFileContent = await fsPromises.readFile(schemaTypesFilePath, { encoding: "utf-8"} );
    
    const typeExportMatches = schemaTypesFileContent.matchAll(SCHEMA_TYPE_EXPORT_REGEX);

    const foundExportedSchemas: FoundExportedSchema[] = []
    for (const typeExportMatch of typeExportMatches) {
        foundExportedSchemas.push({
            outputTypeName: String(typeExportMatch[1]),
            inputSchemaName: String(typeExportMatch[2])
        })
    }

    return foundExportedSchemas;
}

async function main() {
    console.debug(`Repository root path: "${REPOSITORY_ROOT_DIRECTORY_PATH}"`);
    console.debug();

    const reader = readline.createInterface(stdin, stdout);
    let openApiInputFilePath = await reader.question(`Path to the OpenAPI schema JSON file [${DEFAULT_API_SCHEMA_INPUT_FILE_PATH}]: `);
    reader.close();   

    if (openApiInputFilePath === "") {
        openApiInputFilePath = DEFAULT_API_SCHEMA_INPUT_FILE_PATH;
    }


    const openApiString = await fsPromises.readFile(openApiInputFilePath, { encoding: "utf-8" });
    const openApiJson = JSON.parse(openApiString);


    const collectedExportedSchemas = await collectSchemasToGenerateValidatorsFor(API_SCHEMA_TYPES_INPUT_FILE);

    console.log();
    console.log(
        `Collected ${collectedExportedSchemas.length} schemas from ${path.basename(API_SCHEMA_TYPES_INPUT_FILE)} to generate validators for:`
    );

    for (const foundExportedSchema of collectedExportedSchemas) {
        console.log(`  - ${foundExportedSchema.outputTypeName} (from schema: "${foundExportedSchema.inputSchemaName}")`);
    }

    console.log();


    const eslintInstance = new ESLint();

    console.log("Generating standalone ajv validators.");
    for (const foundExportedSchema of collectedExportedSchemas) {
        console.log(`[${foundExportedSchema.outputTypeName}] Generating standalone validator.`);
        const compiledValidator = await compileStandaloneValidator(
            openApiJson,
            foundExportedSchema.inputSchemaName,
            foundExportedSchema.outputTypeName,
            VALIDATORS_DIRECTORY_PATH
        );

        console.log(`[${foundExportedSchema.outputTypeName}] Linting and formatting validator.`);
        await lintAndFormatStandaloneValidator(
            eslintInstance,
            compiledValidator.ajvValidatorPath
        );

        console.log(`[${foundExportedSchema.outputTypeName}] Generating ${foundExportedSchema.outputTypeName}.d.ts file.`);
        await generateDeclarationFileForStandaloneValidator(
            foundExportedSchema.outputTypeName,
            compiledValidator.ajvValidatorPath
        );
    }
}


/*
// DEPRECATED below, rewriting above
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
            {
                strict: true,
            },
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
        ["eslint", `${validatorOutputDirectoryPath}/** /*.js`, "--fix"],
        repositoryRootDirectoryPath,
        "ESLint"
    );


    return compiledValidators;
}




async function generateTypingsForValidators(
    validators: CompiledValidator[],
) {
    for (const validator of validators) {
        const parentDirectoryPath = path.dirname(validator.validatorJsFilePath);        
        const declarationFileName = `${validator.typeName}.d.ts`;

        console.log(`[TypeScript declaration generator] Outputting TypeScript declarations for "${declarationFileName}".`);
        await fs.writeFile(
            path.join(parentDirectoryPath, declarationFileName),
            VALIDATOR_TYPE_TEMPLATE.replace(/{TYPE_NAME}/g, validator.typeName),
            {
                encoding: "utf-8",
            }
        );
    }
}


async function collectApiTypeNamesToCompileValidatorsFor(
    inputTypeScriptFilePath: string
): Promise<string[]> {
    const fileContent = await fs.readFile(inputTypeScriptFilePath, { encoding: "utf-8" });
    const typeNameMatches = fileContent.matchAll(API_TYPE_NAMES_REGEX);

    const parsedTypeNames: string[] = [];

    for (const typeNameMatch of typeNameMatches) {
        parsedTypeNames.push(typeNameMatch[1]);
    }

    return parsedTypeNames;
}


async function main() {
    const apiTypeNamesToCompileValidatorsFor 
        = await collectApiTypeNamesToCompileValidatorsFor(
            API_SCHEMA_TYPES_INPUT_FILE
        );

    console.log(`Collected API type names from ${API_SCHEMA_TYPES_INPUT_FILE}:`);
    for (const apiTypeName of apiTypeNamesToCompileValidatorsFor) {
        console.log(`  - ${apiTypeName}`);
    }

    console.log("Generating JSON schemas.");
    const compiledSchemas = await compileJsonSchemas(
        API_SCHEMA_TYPES_INPUT_FILE,
        apiTypeNamesToCompileValidatorsFor,
        JSON_SCHEMAS_DIRECTORY_PATH,
        REPOSITORY_ROOT_DIRECTORY_PATH
    );
    console.log(`Generated ${compiledSchemas.length} schemas.`);

    
    console.log("Compiling ajv validators from JSON schemas.");
    const compiledValidators = await compileValidatorsFromSchemas(
        compiledSchemas,
        VALIDATORS_DIRECTORY_PATH,
        REPOSITORY_ROOT_DIRECTORY_PATH
    );
    console.log("Validators saved.");


    console.log("Generating TypeScript declarations for validators.");
    await generateTypingsForValidators(compiledValidators);
    console.log("Typings generated.");
}
*/

await main();
