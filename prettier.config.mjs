// prettier.config.mjs (拡張子を .mjs にするか、package.json に `"type": "module"` を設定して .js のまま使う)
//
// @see https://prettier.io/docs/en/configuration.html
// @type {import("prettier").Config}

import * as importOrganize from "prettier-plugin-organize-imports";
import * as tailwindPlugin from "prettier-plugin-tailwindcss";

const config = {
    trailingComma: "es5",
    tabWidth: 4,
    semi: true,
    singleQuote: false,
    plugins: [tailwindPlugin, importOrganize],
    tailwindConfig: "./tailwind.config.ts",
};

export default config;
