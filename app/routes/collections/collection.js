import Ember from 'ember';

export default Ember.Route.extend({

    path: Ember.inject.service(),
    navLinks: Ember.inject.service(),

    model(params) {
        return this.store.findRecord("collection", params.collection_id)
    },

    afterModel(model, transition) {

        this.set("navLinks.links", [
            {
                label: "",
                route: "explore"
            },
            {
                label: "Settings",
                route: "collections.collection.edit",
                type: "routeWithModel",
                model: model.collection
            },
            {
                label: "Submissions",
                route: "collections.collection.submissions",
                type: "routeWithModel",
                model: model.collection
            }
        ]);

    },

    setupController(controller, data) {
        controller.set("model", data);
        controller.set("hasDynamicPart", true);
        controller.set("title", data.get("title"));
        controller.set("collection", data);
        this.set("path.parts", this.routeName.split(".").map((cur, i, arr) => {
            let routeName = arr.slice(0, i+1).join(".");
            let controller = this.controllerFor(routeName);
            console.log("collections.collection")
            return {
                label: controller.get("title"),
                route: routeName,
                model: controller.get("model"),
                type: controller.get("hasDynamicPart") ? "routeWithModel" : "",
                routePart: cur
            };
        }));
    }

});
