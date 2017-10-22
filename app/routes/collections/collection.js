import Ember from 'ember';

export default Ember.Route.extend({

    crumb: {},

    model(params) {
        return this.store.findRecord("collection", params.collection_id)
    },

    afterModel(model, transition) {

        this.set("crumb.label", model.title);
        this.set("crumb.route", this.routeName)
        this.set("crumb.models", [model])

        this.set("nav.links", [{
            label: "",
            route: "explore",
        }, {
            label: "Settings",
            route: "collections.collection.edit",
            type: "routeWithModel",
            models: [model]
        }, {
            label: "Submissions",
            route: "collections.collection.submissions",
            type: "routeWithModel",
            models: [model]
        }]);

    },

    setupController(controller, model) {
        controller.set("collection", model);
    }

});
