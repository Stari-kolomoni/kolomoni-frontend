import * as readline from "node:readline/promises";
import { stdin, stdout } from "node:process";
import * as path from "node:path";
import * as fs from "node:fs";
import { executeWithStdoutCapture, pathExists } from "./shared/utilities";
import { OPENAPI_SCHEMA_OUTPUT_FILE_PATH, REPOSITORY_ROOT_DIRECTORY_PATH } from "./shared/paths";


const DEFAULT_API_SCHEMA_INPUT_FILE_PATH = "./openapi.json";



async function generateTypesFromOpenApiSchema(
    openApiSchemaFilePath: string,
    typeScriptDeclarationOutputFilePath: string,
) {
    // Don't ask me why we need to do this, but for some convoluted reason
    // apparently openapi-typescript expects forward slashes.
    openApiSchemaFilePath 
        = openApiSchemaFilePath.replace(/\\/g, "/");
    typeScriptDeclarationOutputFilePath 
        = typeScriptDeclarationOutputFilePath.replace(/\\/g, "/");


    if (!await pathExists(openApiSchemaFilePath)) {
        throw new Error("Provided openApiSchemaFilePath does not exist.");
    }

    const inputPathRelativeToRoot
        = path.relative(REPOSITORY_ROOT_DIRECTORY_PATH, openApiSchemaFilePath)
            .replace(/\\/g, "/");

    const outputPathRelativeToRoot 
        = path.relative(REPOSITORY_ROOT_DIRECTORY_PATH, typeScriptDeclarationOutputFilePath)
            .replace(/\\/g, "/");   

    console.log("Will generate TypeScript types from OpenAPI schema.");
    console.log(`Input file: "${openApiSchemaFilePath}".`);
    console.log(`Input file relative to repository root: "${inputPathRelativeToRoot}".`);
    console.log(`Output file: "${typeScriptDeclarationOutputFilePath}".`);
    console.log(`Output file relative to repository root: "${outputPathRelativeToRoot}".`);
    console.log("Generating types.");


    await executeWithStdoutCapture(
        "yarn",
        [
            "openapi-typescript",
            inputPathRelativeToRoot,
            "--default-non-nullable",
            "--alphabetize",
            "--output",
            outputPathRelativeToRoot,
        ],
        REPOSITORY_ROOT_DIRECTORY_PATH,
        "openapi-typscript"
    );

    console.log("Types generated, reformatting file with ESLint.");

    await executeWithStdoutCapture(
        "yarn",
        [
            "eslint",
            typeScriptDeclarationOutputFilePath,
            "--fix"
        ],
        REPOSITORY_ROOT_DIRECTORY_PATH,
        "ESLint"
    );
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

    if (!fs.existsSync(openApiInputFilePath)) {
        console.error("Provided file path does not exist.");
        process.exit(1);
    }

    if (!openApiInputFilePath.endsWith("json")) {
        console.error("Provided file does not have the \".json\" extension.");
        process.exit(2);
    }

    console.log(`Selected OpenAPI file: "${openApiInputFilePath}"`);

    await generateTypesFromOpenApiSchema(
        openApiInputFilePath,
        OPENAPI_SCHEMA_OUTPUT_FILE_PATH,
    );

    console.log("Done!");
}


await main();
