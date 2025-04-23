/** @type {import("stylelint").Config} */
export default {
    extends: [
        "stylelint-config-standard-scss"
    ],
    rules: {
        "scss/dollar-variable-empty-line-before": null,
        "at-rule-empty-line-before": null,
        "selector-class-pattern": null,
        "declaration-block-no-redundant-longhand-properties": [
            true,
            {
                ignoreLonghands: [
                    "grid-template-areas",
                    "grid-template-columns",
                    "grid-template-rows",
                    "justify-items",
                    "align-items"
                ]
            }
        ]
    }
};
