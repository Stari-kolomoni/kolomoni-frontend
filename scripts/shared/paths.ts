import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const REPOSITORY_ROOT_DIRECTORY_PATH = path.resolve(path.join(
    __dirname,
    "..",
    ".."
));

export const API_LIBRARY_DIRECTORY_PATH = path.join(
    REPOSITORY_ROOT_DIRECTORY_PATH,
    "src/lib/api"
);

export const AUTO_GENERATED_DIRECTORY_PATH = path.join(
    API_LIBRARY_DIRECTORY_PATH,
    "auto-generated"
);

export const VALIDATORS_DIRECTORY_PATH = path.join(
    AUTO_GENERATED_DIRECTORY_PATH,
    "validators"
);

export const OPENAPI_SCHEMA_OUTPUT_FILE_PATH = path.join(
    AUTO_GENERATED_DIRECTORY_PATH,
    "openApiSchema.d.ts"
);
