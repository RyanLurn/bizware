import perfectionist from "eslint-plugin-perfectionist";
import { defineConfig } from "eslint/config";
import ts from "typescript-eslint";
import js from "@eslint/js";

import { ignoreConfig } from "./ignore.js";

export const baseConfig = defineConfig([
  ignoreConfig,
  js.configs.recommended,
  ts.configs.recommendedTypeChecked,
  {
    rules: {
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/consistent-type-imports": "error",
    },
  },
  perfectionist.configs["recommended-line-length"],
]);
