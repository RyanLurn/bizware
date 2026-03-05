import prettier from "eslint-config-prettier/flat";
import { defineConfig } from "eslint/config";
import globals from "globals";

import { baseConfig } from "../utils/base.js";

/**
 * ESLint configuration for code that runs in the Bun runtime
 * @type {import("eslint").Linter.Config[]}
 */
export const bunConfig = defineConfig([
  baseConfig,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
      globals: {
        ...globals.bunBuiltin,
      },
    },
  },
  prettier,
]);
