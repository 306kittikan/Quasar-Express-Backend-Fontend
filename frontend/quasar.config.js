import { configure } from 'quasar/wrappers';

export default configure(function (/* ctx */) {
    return {
        boot: [],
        css: ['app.scss'],
        extras: ['roboto-font', 'material-icons'],
        build: {
            target: {
                browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
                node: 'node20'
            },
            vueRouterMode: 'hash',
        },
        framework: {
            config: {},
            plugins: []
        }
    }
});