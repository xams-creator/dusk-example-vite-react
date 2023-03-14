import { useDispatch, useNamespacedSelector, useReactive } from '@xams-framework/dusk';
import model from './index.model';
import './index.scss';
import React, { useEffect, useState } from 'react';

export default function App() {
    return (
        <div className={'app'}>
            <Home />
            <Child />
        </div>
    );
}

function Home() {
    const state: any = useNamespacedSelector(model.namespace);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
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
                    setLoading(true);
                    dispatch(model.commands.add())
                        .finally(() => {
                            setLoading(false);
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
    return (
        <div>child</div>
    );
}
