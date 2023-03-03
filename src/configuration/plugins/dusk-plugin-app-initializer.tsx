import { PluginFunction } from '@xams-framework/dusk';

export default function createDuskAppInitializer(): PluginFunction {
    return (app) => {
        return {
            name: 'dusk-plugin-app-initializer',
            setup() {

            },
        };
    };
}
