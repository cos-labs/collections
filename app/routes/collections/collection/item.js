import Ember from "ember";

export default Ember.Route.extend({

    nav: Ember.inject.service(),

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

        this.get("nav.crumbs").push({
            label: this.item.title,
            route: this.routeName,
            models: [
                model.collection,
                model.item
            ],
        });

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

    },

    deactivate() {
        this.get("nav.crumbs").pop();
    }

});
