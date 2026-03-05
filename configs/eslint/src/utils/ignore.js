import { globalIgnores } from "eslint/config";

export const ignoreConfig = globalIgnores([
  "**/routeTree.gen.ts",
  "**/migrations/",
  "**/.tanstack/",
  "**/dist/",
  "**/build/",
]);
