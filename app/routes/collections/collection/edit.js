import Ember from 'ember';

export default Ember.Route.extend({

    caxe: Ember.inject.service(),

    title: "Settings",
    crumb: {},

    model() {
        const collection = this.modelFor('collections.collection');
        return Ember.RSVP.hash({
            cases: this.store.query("case", {
                collection: collection.id
            }),
            collection: collection
        });
    },

    afterModel(model, transition) {

        this.set("nav.links", [{
            label: "",
            route: "explore"
        }, {
            label: "Settings",
            route: "collections.collection.edit",
            models: [model.collection]
        }, {
            label: "Submissions",
            route: "collections.collection.submissions",
            models: [model.collection]
        }]);

    },

    setupController(controller, data) {
        controller.set("collection", data.collection);
    }

});
