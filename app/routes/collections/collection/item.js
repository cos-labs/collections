import Ember from "ember";

export default Ember.Route.extend({

    model(params) {

        const collection = this.modelFor("collections.collection");
        const item = this.store.findRecord("item", params.item_id);
        const node = this.store.findRecord("node", item.get("source_id"));

        return Ember.RSVP.hash({
            collection,
            item,
            node
        });

    },

    afterModel(model, transition) {

        debugger;
        this.set("crumb.label", model.item.title);
        this.set("crumb.route", this.routeName);
        this.set("crumb.models", [
            model.collection,
            model.item
        ]);

        this.set("nav.links", [{
            label: "Edit",
            route: "collections.collection.submissions",
            models: [
                model.collection,
                model.item
            ]
        }]);

    },

    setupController(controller, data) {

        controller.set("collection", data.collection);
        controller.set("item", data.item);
        controller.set("node", data.node);

    }

});
