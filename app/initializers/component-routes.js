export function initialize(app) {
    app.inject('component', 'router', 'router:main');
}


export default {
    name: 'component-routes',
    initialize
};
