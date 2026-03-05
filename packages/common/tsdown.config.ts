import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    ports: "./src/constants/ports.ts",
  },
  dts: {
    sourcemap: true,
  },
});
