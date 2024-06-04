import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import * as path from "path";
import { AntdResolve, createStyleImportPlugin } from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    react(),
    createStyleImportPlugin({
      resolves: [
        AntdResolve()
      ]
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')
    }
  }
})
