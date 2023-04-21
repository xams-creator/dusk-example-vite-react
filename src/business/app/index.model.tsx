import { createDuskModel } from '@xams-framework/dusk';

const model = createDuskModel({
    namespace: 'app',
    initialState: {
        value: 1,
    },
    reducers: {
        add(state) {
            state.value += 1;
        },
        minus(state) {
            state.value -= 1;
        },
    },
    effects: {
        async add(dispatch, state, action, { sleep, put }) {
            await sleep(1000);
            put();
        },
    },
});

export default model;

