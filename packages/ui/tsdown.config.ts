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
    index: "./src/components/index.ts",
    theme: "./src/theme/index.ts",
    utils: "./src/lib/utils.ts",
  },
  dts: {
    sourcemap: true,
  },
});
