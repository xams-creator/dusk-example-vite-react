import { createApp } from '@xams-framework/dusk';

import createDuskAppInitializer from './configuration/plugins/dusk-plugin-app-initializer';
import router from './configuration/router';

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
    .router(router)
    .startup();
// .startup(<App />);

window.app = app;
