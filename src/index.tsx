import { createApp } from '@xams-framework/dusk';
import createDuskVite from '@xams-framework/dusk-plugin-vite';

import App from './business/app';
import createDuskAppInitializer from './configuration/plugins/dusk-plugin-app-initializer';

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
    .startup(<App />);
