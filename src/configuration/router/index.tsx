import { createBrowserRouter, RouteObject } from '@xams-framework/dusk';
import App from '@/business/app';

function routes(): RouteObject[] {
    return [
        {
            path: '/',
            element: <App />,
            children: [
            ],
        },
    ];
}

export default createBrowserRouter(
    routes(), {
        basename: import.meta.env.BASE_URL || '/',
    },
);
