import { useDispatch, useNamespacedSelector } from '@xams-framework/dusk';
import model from './index.model';
import './index.scss';

export default function App() {
    const state: any = useNamespacedSelector(model.namespace);
    const dispatch = useDispatch();
    console.log(state);
    return (
        <div className={'app'}>
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
                disabled={state.loading}
                onClick={() => {
                    dispatch(model.commands.add());
                }}
            >
                async add
            </button>
        </div>
    );
}
