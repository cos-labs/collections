import Ember from 'ember';

export default Ember.Route.extend({

    title: "Collections",
    crumb: {},

    model(params) {
        return this.store.findAll('collection');
    },

    afterModel() {
        this.set("nav.links", [{
            label: "Browse",
            route: "explore"
        }]);
    },

    setupController(controller, data) {
        controller.set("collections", data);
    }

});
