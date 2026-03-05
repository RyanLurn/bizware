import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-config-prettier/flat";
import { defineConfig } from "eslint/config";
import jsxA11y from "eslint-plugin-jsx-a11y";
import globals from "globals";

import { baseConfig } from "../utils/base.js";

/**
 * ESLint configuration for code that runs in the browser
 * @type {import("eslint").Linter.Config[]}
 */
export const browserConfig = defineConfig([
  baseConfig,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
      globals: {
        ...globals.browser,
      },
    },
  },
  reactHooks.configs.flat.recommended,
  jsxA11y.flatConfigs.recommended,
  prettier,
]);
