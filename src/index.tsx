import { createApp } from '@xams-framework/dusk';

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
app.use(createDuskAppInitializer()).startup(<App />);

window.app = app;
