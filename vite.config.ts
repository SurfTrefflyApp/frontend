import tailwindcss from "@tailwindcss/vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import react from "@vitejs/plugin-react";
import path from "path";
import type { AliasOptions } from "vite";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

import { manifest } from "./manifest";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), basicSsl(), VitePWA(manifest)],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    } as AliasOptions,
  },
  server: {
    port: 443,
    host: true,
    proxy: {
      "/api": "https://treffly.ru/",
    },
  },
  preview: {
    port: 443,
    host: true,
  },
});
