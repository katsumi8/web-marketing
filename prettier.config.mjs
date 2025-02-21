/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
    trailingComma: "es5",
    tabWidth: 4,
    semi: true,
    singleQuote: false,
    plugins: [
        "prettier-plugin-organize-imports",
        "prettier-plugin-tailwindcss",
    ],
    tailwindConfig: "./tailwind.config.ts",
};

export default config;
