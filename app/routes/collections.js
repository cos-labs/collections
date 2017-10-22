import Ember from 'ember';

export default Ember.Route.extend({

    nav: Ember.inject.service(),

    title: "Collections",
    crumb: {},

    model(params) {
        return this.store.findAll('collection');
    },

    afterModel() {

        this.set("crumb.label", this.title);
        this.set("crumb.route", this.routeName);

        this.set("nav.links", [{
            label: "Browse",
            route: "explore",
            models: []
        }]);

    },

    setupController(controller, data) {
        controller.set("collection", data);
    },



});
