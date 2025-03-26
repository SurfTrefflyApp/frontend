import tailwindcss from '@tailwindcss/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import path from 'path';
import { AliasOptions, defineConfig } from 'vite';

const root = path.resolve(__dirname, './src');

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), basicSsl()],
  resolve: {
    alias: {
      '@': root,
    } as AliasOptions,
  },
  server: {
    port: 443,
    host: true,
    proxy: {
      '/api': 'https://treffly.ru/',
    },
  },
});
