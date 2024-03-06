import * as fs from "node:fs/promises";
import { stdin, stdout } from "node:process";
import * as readline from "node:readline/promises";
import { OPENAPI_SCHEMA_OUTPUT_FILE_PATH, VALIDATION_DIRECTORY_PATH } from "./shared/paths";

async function main() {
    console.log("This script CAN BE DESTRUCTIVE!");
    console.log(
        "It should generally only clean the auto-generated directory, "
        + "but it is your responsibility to make sure paths are correct." 
    );

    console.log();
    console.log("The script will do the following:");
    console.log(" - remove the \"validation\" directory that contains the JSON schemas and ajv validators");
    console.log(`   (at "${VALIDATION_DIRECTORY_PATH}")`);
    console.log(" - remove the TypeScript types that were generated from the OpenAPI schema");
    console.log(`   (at "${OPENAPI_SCHEMA_OUTPUT_FILE_PATH}")`);
    console.log();

    const reader = readline.createInterface(stdin, stdout);
    const userConfirmation = await reader.question("Are you sure you want to continue? [y/N]: ");
    reader.close(); 

    if (userConfirmation.toLowerCase() !== "y") {
        console.log("User did not confirm, aborting.");
        process.exit(1);
    }

    // Remove validation directory that contains the JSON schemas and ajv validators.
    console.log("Removing validation directory.");
    await fs.rm(
        VALIDATION_DIRECTORY_PATH,
        {
            force: true,
            recursive: true,
            maxRetries: 2,
        }
    );

    console.log("Removing TypeScript types generated from the OpenAPI schema.");
    await fs.rm(
        OPENAPI_SCHEMA_OUTPUT_FILE_PATH,
        {
            force: true,
            maxRetries: 2,
        }
    );

    console.log("Auto-generated types and validators deleted.");
}

await main();
