import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// @ts-ignore
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      failOnError: false,
      failOnWarning: false,
    }),
  ],
});
