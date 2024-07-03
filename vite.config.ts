import react from '@vitejs/plugin-react';
import createViteDusk from '@xams-framework/vite-plugin-dusk';
import { URL, fileURLToPath } from 'node:url';
import postcss from 'postcss-preset-env';
import { defineConfig, loadEnv } from 'vite';
import eslint from 'vite-plugin-eslint';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd());
    return {
        base: env.VITE_APP_BASE_URL,
        server: {
            port: 1339,
        },
        css: {
            postcss: {
                plugins: [postcss()],
            },
        },
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
                src: fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
        plugins: [
            react(),
            createViteDusk(),
            eslint(),
            // viteCommonjs(),
        ],
        envPrefix: ['VITE_', 'REACT_APP'],
        define: {
            // __APP_VERSION__: 1,  // 这将把代码里的 __APP_VERSION__ 替换成 1
        },
    };
});
