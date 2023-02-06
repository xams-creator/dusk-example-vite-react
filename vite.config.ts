import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    process.env.REACT_APP_PATH_SRC_ALIAS_NAME = env.REACT_APP_PATH_SRC_ALIAS_NAME;

    return {
        server: {
            port: 1339,
        },
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src'),
                'src': path.join(__dirname, 'src'),
            },
        },
        plugins: [react()],
        envPrefix: ['VITE_', 'REACT_APP'],
        define: {
            // __APP_VERSION__: 1,  // 这将把代码里的 __APP_VERSION__ 替换成 1
        },
    };
});
