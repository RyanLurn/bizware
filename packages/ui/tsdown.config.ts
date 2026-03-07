import pluginBabel from "@rollup/plugin-babel";
import { defineConfig } from "tsdown";

export default defineConfig({
  plugins: [
    pluginBabel({
      parserOpts: {
        plugins: ["jsx", "typescript"],
        sourceType: "module",
      },
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      plugins: ["babel-plugin-react-compiler"],
      babelHelpers: "bundled",
    }),
  ],
  entry: {
    theme: "./src/features/theme/index.ts",
    form: "./src/features/form/index.ts",
    index: "./src/components/index.ts",
    utils: "./src/lib/utils.ts",
  },
  dts: {
    sourcemap: true,
  },
});
