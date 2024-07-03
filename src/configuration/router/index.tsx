import { Link, Navigate, Outlet, RouteObject, createBrowserRouter } from '@xams-framework/dusk';

import Page1 from '@/business/pages/page1';

function routes(): RouteObject[] {
    return [
        {
            path: '/',
            element: (
                <div>
                    browser app
                    <ul>
                        <li>
                            <Link to={'/'}>home</Link>
                        </li>
                        <li>
                            <Link to={'/page1'}>page1</Link>
                        </li>
                        <li>
                            <Link to={'/page2'}>page2</Link>
                        </li>
                        <img src={`${import.meta.env.BASE_URL}vite.svg`} alt={''} />
                    </ul>
                    <Outlet />
                </div>
            ),
            children: [
                {
                    path: 'page1',
                    element: <Page1 />,
                },
                {
                    path: 'page2',
                    element: <div>page2</div>,
                },
                {
                    path: '*',
                    element: <div>Not Found</div>,
                },
            ],
        },
        {
            path: '*',
            element: <Navigate to={'/'} />,
        },
    ];
}

export default createBrowserRouter(routes(), {
    basename: import.meta.env.BASE_URL || '/',
});
