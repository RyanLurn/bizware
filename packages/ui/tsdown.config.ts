import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    index: "./src/components/index.ts",
    theme: "./src/theme/index.ts",
    utils: "./src/lib/utils.ts",
  },
  dts: {
    sourcemap: true,
  },
});
