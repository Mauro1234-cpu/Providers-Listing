import js from "@eslint/js";
import stylisticJs from "@stylistic/eslint-plugin";
import tanstackRouter from "@tanstack/eslint-plugin-router";
import type { ESLint, Linter } from "eslint";
import i18next from "eslint-plugin-i18next";
import preferArrowFunctions from "eslint-plugin-prefer-arrow-functions";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment -- The type doesn't exist.
// @ts-expect-error
import sortDestructureKeys from "eslint-plugin-sort-destructure-keys";
import storybook from "eslint-plugin-storybook";
import unicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import ts from "typescript-eslint";

const config: Linter.Config[] = [
  { settings: { react: { version: "detect" } } },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },

  // Base JS/ES rules
  {
    plugins: { js },
    rules: {
      ...js.configs.recommended.rules,
      "arrow-body-style": ["error", "always"],
      curly: "warn",
      "no-console": "warn",
      "no-extra-boolean-cast": "error",
      "no-nested-ternary": "error",
      "no-unneeded-ternary": "error",
      "object-shorthand": "warn",
    },
  },

  // React rules
  {
    plugins: { react },
    rules: {
      ...react.configs.recommended.rules,
      "react/hook-use-state": "warn",
      "react/jsx-curly-brace-presence": "warn",
      "react/jsx-no-leaked-render": "warn",
      "react/jsx-no-useless-fragment": "warn",
      "react/jsx-sort-props": ["warn", { shorthandLast: true }],
      "react/react-in-jsx-scope": "off",
      "react/self-closing-comp": "warn",
      "react/prop-types": "off",
    },
  },

  // TypeScript rules
  ...([
    ...ts.configs.recommended,
    {
      rules: {
        "@typescript-eslint/consistent-type-imports": "warn",
        "@typescript-eslint/method-signature-style": ["error", "property"],
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
      },
    },
  ] as Linter.Config[]),

  // Custom plugins rules
  {
    plugins: {
      "@stylistic": stylisticJs,
      "@tanstack/router": tanstackRouter as unknown as ESLint.Plugin,
      i18next,
      "prefer-arrow-functions": preferArrowFunctions as ESLint.Plugin,
      "react-hooks": reactHooks as ESLint.Plugin,
      "simple-import-sort": simpleImportSort,
      "sort-destructure-keys": sortDestructureKeys,
      unicorn,
      "unused-imports": unusedImports,
    },
    rules: {
      "@stylistic/no-multi-spaces": "warn",
      "@stylistic/no-multiple-empty-lines": ["warn", { max: 1 }],
      "@stylistic/no-trailing-spaces": "warn",
      "@stylistic/object-curly-spacing": ["warn", "always"],
      "@stylistic/padding-line-between-statements": [
        "warn",
        { blankLine: "always", prev: "*", next: "return" },
      ],
      "@tanstack/router/create-route-property-order": "error",
      "i18next/no-literal-string": "warn",
      "prefer-arrow-functions/prefer-arrow-functions": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "simple-import-sort/exports": "warn",
      "simple-import-sort/imports": [
        "warn",
        {
          groups: [
            // Packages. `react` related packages come first.
            ["^react", "^@?\\w"],

            // Internal packages and relative paths.
            [
              "^(@/.*)(/.*|$)",

              // Side effect imports.
              "^\\u0000",

              // Parent imports. Put `..` last.
              "^\\.\\.(?!/?$)",
              "^\\.\\./?$",
              // Other relative imports. Put same-folder imports and `.` last.
              "^\\./(?=.*/)(?!/?$)",
              "^\\.(?!/?$)",
              "^\\./?$",
            ],

            // Style imports.
            ["^.+\\.s?css$"],
          ],
        },
      ],
      "sort-destructure-keys/sort-destructure-keys": "warn",
      "unicorn/filename-case": ["error", { case: "kebabCase" }],
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": [
        "warn",
        { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
      ],
    },
  },

  // Storybook rules
  ...(storybook.configs["flat/recommended"] as Linter.Config[]),
  { files: ["**/*.stories.{ts,tsx}"], rules: { "i18next/no-literal-string": "off" } },
  { ignores: ["!.storybook"] },
];

export default config;
