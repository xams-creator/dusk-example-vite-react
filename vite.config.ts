import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import createViteDuskHmr from './plugins/vite-plugin-dusk-hmr';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    // const env = loadEnv(mode, process.cwd(), '');

    return {
        server: {
            port: 1339,
        },
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src'),
                'src': path.join(__dirname, 'src'),
            },
            // alias: [
            //     {
            //         find: '@',
            //         replacement: path.resolve(__dirname, 'src'),
            //     },
            //     {
            //         find: 'src',
            //         replacement: path.resolve(__dirname, 'src'),
            //     },
            // ],
        },
        plugins: [
            react(),
            createViteDuskHmr(),
        ],
        envPrefix: ['VITE_', 'REACT_APP'],
        define: {
            // __APP_VERSION__: 1,  // 这将把代码里的 __APP_VERSION__ 替换成 1
        },
    };
});



