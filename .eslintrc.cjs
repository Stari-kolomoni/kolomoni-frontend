/** @type { import("eslint").Linter.Config } */
module.exports = {
    root: true,
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:svelte/recommended"
    ],
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint"
    ],
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 2020,
        extraFileExtensions: [
            ".svelte"
        ]
    },
    env: {
        browser: true,
        es2017: true,
        node: true
    },
    rules: {
        "indent": "off",
        "@typescript-eslint/indent": ["error", 4],

        "no-multiple-empty-lines": [
            "warn",
            {
                "max": 4,
                "maxEOF": 1,
            }
        ],

        "quotes": "off",
        "@typescript-eslint/quotes": ["warn", "double"],
    },
    overrides: [
        {
            files: ["*.svelte"],
            parser: "svelte-eslint-parser",
            parserOptions: {
                parser: "@typescript-eslint/parser"
            }
        },
        // Auto-generated TypeScript types and ajv validators.
        {
            files: [
                "src/lib/api/auto-generated/**/*.js",
                "src/lib/api/auto-generated/**/*.ts"
            ],
            rules: {
                "@typescript-eslint/no-unused-vars": "off",
                "no-redeclare": "off",
                "@typescript-eslint/no-explicit-any": "off"
            }
        },
    ]
};
