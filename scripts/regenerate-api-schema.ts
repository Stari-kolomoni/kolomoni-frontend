import * as readline from "node:readline/promises";
import { stdin, stdout } from "node:process";
import * as childProcess from "node:child_process";
import * as path from "node:path";
import * as fs from "node:fs";
import { fileURLToPath } from "node:url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const REPOSITORY_ROOT_DIRECTORY_PATH = path.join(__dirname, "..");

const SCHEMA_OUTPUT_FILE_PATH_RELATIVE_TO_REPOSITORY_ROOT = "./src/lib/api/schema.d.ts";
const SCHEMA_OUTPUT_FILE_PATH_ABSOLUTE = path.join(__dirname, "..", SCHEMA_OUTPUT_FILE_PATH_RELATIVE_TO_REPOSITORY_ROOT);

console.debug(`__dirname: ${__dirname}`);
console.debug(`schema output file: ${SCHEMA_OUTPUT_FILE_PATH_ABSOLUTE}`);
console.debug();


async function executeWithStdoutCapture(
    command: string,
    args: string[],
    cwd: string,
    logTitle: string,
) {
    const process = childProcess.spawn(
        command,
        args,
        {
            cwd,
            shell: true,
        }
    );
    
    process.stdout.setEncoding("utf-8");
    process.stdout.on("data", (data) => {
        const dataWithoutNewline = (new String(data)).trimEnd();
        console.log(`[${logTitle}|stdout] ${dataWithoutNewline}`);
    });
    
    process.stderr.setEncoding("utf-8");
    process.stderr.on("data", (data) => {
        const dataWithoutNewline = (new String(data)).trimEnd();
        console.log(`[${logTitle}|stderr] ${dataWithoutNewline}`);
    });
    
    
    return new Promise<void>((resolve, reject) => {
        process.on("close", () => {
            resolve();
        });
    
        process.on("error", (reason) => {
            console.error("Failed to execute with stdout capture: " + reason);
            reject();
        });
    });
}


const reader = readline.createInterface(stdin, stdout);

const DEFAULT_API_SCHEMA_FILE_PATH = "./openapi.json";


let apiSpecificationPath = await reader.question(`Path to the OpenAPI schema JSON file [${DEFAULT_API_SCHEMA_FILE_PATH}]: `);

if (apiSpecificationPath === "") {
    apiSpecificationPath = DEFAULT_API_SCHEMA_FILE_PATH;
}

if (!fs.existsSync(apiSpecificationPath)) {
    console.error("Provided file does not exist.");
    process.exit(1);
}

console.log(`Selected OpenAPI file: "${apiSpecificationPath}"`);

console.log(`(Re)generating the TypeScript API schema at "${SCHEMA_OUTPUT_FILE_PATH_ABSOLUTE}"...`);
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

console.log("Schema regenerated, reformatting...");
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
