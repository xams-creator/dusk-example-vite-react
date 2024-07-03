import React, { useEffect, useState } from 'react';

import { useDispatch, useNamespacedSelector } from '@xams-framework/dusk';
import { useLoading } from '@xams-framework/dusk-plugin-loading';

import model from '@/business/inject/models/app.model';

export default function Page1() {
    return (
        <div className={'app'}>
            <Home />
            <Child />
        </div>
    );
}

function Home() {
    const state = useNamespacedSelector<any>(model.namespace);
    const dispatch = useDispatch();
    // const [loading, setLoading] = useState(false);
    const [loading] = useLoading();
    return (
        <>
            <button
                onClick={() => {
                    dispatch(model.actions.add());
                }}
            >
                +1
            </button>

            <span style={{ padding: 12 }}>{state.value}</span>

            <button
                onClick={() => {
                    dispatch(model.actions.minus());
                }}
            >
                -1
            </button>

            <hr />

            <button
                disabled={loading}
                onClick={() => {
                    // setLoading(true);
                    dispatch(model.commands.add()).finally(() => {
                        // setLoading(false);
                    });
                }}
            >
                async add
            </button>
        </>
    );
}

function Child() {
    useEffect(() => {
        console.log('child');
    }, []);
    console.log('child console');
    return <div>child</div>;
}
