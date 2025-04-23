const { defineConfig } = require("eslint/config");
const eslintJs = require("@eslint/js");
const tsEslint = require("typescript-eslint");
const svelte = require("eslint-plugin-svelte");

module.exports = defineConfig([
    eslintJs.configs.recommended,
    tsEslint.configs.strict,
    svelte.configs.recommended,
    {
        ignores: [
            ".DS_Store",
            "node_modules",
            "/build",
            "/.svelte-kit",
            "/package",
            ".env",
            ".env.*",
            "!.env.example",
            "pnpm-lock.yaml",
            "package-lock.json",
            "yarn.lock",
        ]
    },
    {
        languageOptions: {
            ecmaVersion: 2025,
            sourceType: "module",
            parserOptions: {
                sourceType: "module",
                ecmaVersion: 2020,
                extraFileExtensions: [
                    ".svelte"
                ]
            }
        },
        files: [
            "src/**/*.ts",
            "src/**/*.js",
        ],
        rules: {
            "no-multiple-empty-lines": [
                "warn",
                {
                    "max": 4,
                    "maxEOF": 1,
                }
            ],

            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    varsIgnorePattern: "^_",
                    argsIgnorePattern: "^_",
                }
            ],
        },
    },
    {
        files: [
            "src/lib/api/auto-generated/**/*.js",
            "src/lib/api/auto-generated/**/*.ts"
        ],
        rules: {
            "@typescript-eslint/no-unused-vars": "off",
            "no-redeclare": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-namespace": "off",
        }
    }
]);
