import * as readline from "node:readline/promises";
import { stdin, stdout } from "node:process";
import * as path from "node:path";
import * as fs from "node:fs";
import { fileURLToPath } from "node:url";
import { executeWithStdoutCapture } from "./shared/utilities";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const REPOSITORY_ROOT_DIRECTORY_PATH = path.join(__dirname, "..");


const SCHEMA_OUTPUT_FILE_PATH_RELATIVE_TO_REPOSITORY_ROOT = "./src/lib/api/schema.d.ts";
const SCHEMA_OUTPUT_FILE_PATH_ABSOLUTE = path.join(__dirname, "..", SCHEMA_OUTPUT_FILE_PATH_RELATIVE_TO_REPOSITORY_ROOT);

const DEFAULT_API_SCHEMA_FILE_PATH = "./openapi.json";



async function main() {
    const reader = readline.createInterface(stdin, stdout);

    console.debug(`__dirname: ${__dirname}`);
    console.debug(`schema output file: ${SCHEMA_OUTPUT_FILE_PATH_ABSOLUTE}`);
    console.debug();

    let apiSpecificationPath = await reader.question(`Path to the OpenAPI schema JSON file [${DEFAULT_API_SCHEMA_FILE_PATH}]: `);

    if (apiSpecificationPath === "") {
        apiSpecificationPath = DEFAULT_API_SCHEMA_FILE_PATH;
    }

    if (!fs.existsSync(apiSpecificationPath)) {
        console.error("Provided file does not exist.");
        process.exit(1);
    }

    console.log(`Selected OpenAPI file: "${apiSpecificationPath}"`);

    console.log("Will generate TypeScript types from OpenAPI schema.");
    console.log(`Output file: "${SCHEMA_OUTPUT_FILE_PATH_RELATIVE_TO_REPOSITORY_ROOT}" (relative to repository root).`);
    await executeWithStdoutCapture(
        "yarn",
        [
            "openapi-typescript",
            apiSpecificationPath,
            "--default-non-nullable",
            "--alphabetize",
            "--output",
            SCHEMA_OUTPUT_FILE_PATH_RELATIVE_TO_REPOSITORY_ROOT,
        ],
        REPOSITORY_ROOT_DIRECTORY_PATH,
        "openapi-typscript"
    );

    console.log("Schema regenerated, reformatting with ESLint.");
    await executeWithStdoutCapture(
        "yarn",
        [
            "eslint",
            SCHEMA_OUTPUT_FILE_PATH_RELATIVE_TO_REPOSITORY_ROOT,
            "--fix"
        ],
        REPOSITORY_ROOT_DIRECTORY_PATH,
        "ESLint"
    );

    console.log("Done!");

    reader.close();   
}


await main();
