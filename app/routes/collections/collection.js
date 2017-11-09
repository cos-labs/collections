import Ember from 'ember';

export default Ember.Route.extend({

    crumb: {},

    model(params) {
        return this.store.findRecord("collection",  params.collection_id, {reload: true})
    },

    afterModel(model, transition) {

        this.set("crumb.label", model.get("title"));
        this.set("crumb.route", this.routeName)
        this.set("crumb.models", [model])

        this.set("nav.links", [
        {
            label: "Settings",
            route: "collections.collection.edit",
            models: [model]
        }, {
            label: "Submissions",
            route: "collections.collection.submissions",
            models: [model]
        }]);

    },

    setupController(controller, model) {
        controller.set("collection", model);
    }

});
