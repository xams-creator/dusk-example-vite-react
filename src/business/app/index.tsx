import { useDispatch, useNamespacedSelector } from '@xams-framework/dusk';
import model from './index.model';
import './index.scss';
import { useLoading } from '@xams-framework/dusk-plugin-loading';

export default function App() {
    const state: any = useNamespacedSelector(model.namespace);
    const dispatch = useDispatch();
    const [loading] = useLoading();
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
                disabled={loading}
                onClick={() => {
                    dispatch(model.commands.add());
                }}
            >
                async add
            </button>
        </div>
    );
}
