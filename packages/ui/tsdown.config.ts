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
  entry: ["src/**/*.ts", "src/**/*.tsx"],
  dts: {
    sourcemap: true,
  },
  unbundle: true,
});
