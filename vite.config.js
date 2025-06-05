import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    outDir: 'public/js',
    rollupOptions: {
      input: './src/js/main.js',
      output: {
        entryFileNames: 'bundle.js'
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});