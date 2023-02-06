import { createApp } from '@xams-framework/dusk';
import App from './business/app';
import createDuskVite from '@xams-framework/dusk-plugin-vite';

const app = createApp({
    container: '#root',
    redux: {
        logger: {
            collapsed: false,
        },
    },
});

app
    .use(createDuskVite())
    .startup(<App />);

window.app = app;

