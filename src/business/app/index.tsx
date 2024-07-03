import React from 'react';

import { RouterProvider } from '@xams-framework/dusk';

import router from '@/configuration/router';

import './index.scss';

export default function App() {
    return <RouterProvider router={router} />;
}
