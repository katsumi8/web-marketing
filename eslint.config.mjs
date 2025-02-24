import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import eslintConfigPrettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
const config = [
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    {
        ignores: [
            "**/next-env.d.ts",
            "**/build/",
            "**/bin/",
            "**/obj/",
            "**/out/",
            "**/.next/",
            "**/__generated__/",
            "**/public/",
        ],
    },
    {
        name: "eslint/recommended",
        rules: js.configs.recommended.rules,
    },
    ...tseslint.configs.recommended,
    {
        name: "react/jsx-runtime",
        plugins: {
            react: reactPlugin,
        },
        rules: reactPlugin.configs["jsx-runtime"].rules,
        settings: {
            react: {
                version: "detect",
            },
        },
    },
    {
        name: "react-hooks/recommended",
        plugins: {
            "react-hooks": hooksPlugin,
        },
        rules: hooksPlugin.configs.recommended.rules,
    },
    {
        name: "next/core-web-vitals",
        plugins: {
            "@next/next": nextPlugin,
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs["core-web-vitals"].rules,
        },
    },
    {
        name: "prettier/config",
        ...eslintConfigPrettier,
    },
    {
        rules: {
            curly: "error",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_",
                },
            ],
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/consistent-type-imports": "error",
        },
    },
];

export default config;
