import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: 'public',
    publicDir: '../public', // serve public assets from public folder
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'public/index.html'),
            },
        },
    },
    server: {
        open: true,
    },
    resolve: {
        alias: {
            '/src': resolve(__dirname, 'src'), // Allow absolute imports from src
        }
    }
});
