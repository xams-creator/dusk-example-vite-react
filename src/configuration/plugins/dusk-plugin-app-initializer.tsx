import { definePlugin, PluginFunction } from '@xams-framework/dusk';
import createDuskHmr from '@xams-framework/dusk-plugin-hmr';
import createDuskVite from '@xams-framework/dusk-plugin-vite';
import createDuskLoading from '@xams-framework/dusk-plugin-loading';

export default function createDuskAppInitializer(): PluginFunction {
    return definePlugin({
        name: 'dusk-plugin-app-initializer',
        setup(app) {
            app
                .use(createDuskHmr())
                .use(createDuskVite())
                .use(createDuskLoading())
            ;
        },
        // 修改 index.model.tsx 触发
        onHmr(ctx, next) {
            console.log('onHmr start...');
            next();
            console.log('onHmr end...');
        },
    });
}
