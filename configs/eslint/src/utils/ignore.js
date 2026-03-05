import { globalIgnores } from "eslint/config";

/**
 * Global ignore patterns for all projects
 * @type {import("eslint").Linter.Config}
 */
export const ignoreConfig = globalIgnores([
  "**/routeTree.gen.ts",
  "**/migrations/",
  "**/.tanstack/",
  "**/dist/",
  "**/build/",
]);
