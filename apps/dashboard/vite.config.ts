import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { PORTS } from "@bizware/common/ports";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [
    // Make sure that '@tanstack/react-start/plugin/vite' is passed before '@vitejs/plugin-react'
    tanstackStart(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    port: PORTS.DASHBOARD,
  },
});
