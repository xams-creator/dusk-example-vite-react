import { createApp } from '@xams-framework/dusk';
import createDuskVite from '@xams-framework/dusk-plugin-vite';

import createDuskAppInitializer from './configuration/plugins/dusk-plugin-app-initializer';
import router from './configuration/router';
import createDuskLoading from '@xams-framework/dusk-plugin-loading';

const app = createApp({
    container: '#root',
    redux: {
        logger: {
            collapsed: false,
        },
    },
});

app
    .use(createDuskAppInitializer())
    .use(createDuskVite())
    .use(createDuskLoading())
    .router(router)
    .startup();
// .startup(<App />);

window.app = app;
