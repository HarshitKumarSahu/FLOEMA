import { defineConfig } from 'vite';
// import ViteEjsPlugin from 'vite-plugin-ejs';
import ejs from 'vite-plugin-ejs';

export default defineConfig({
    plugins: [ejs],
    build: {
        outDir: 'dist',
        assetsDir: 'assets'
    },
    server: {
        proxy: {
            '/': {
                target: 'http://localhost:3000',
                changeOrigin: true
            }
        }
    }
});