import Ember from 'ember';

export default Ember.Route.extend({
    caxe: Ember.inject.service(),
    model() {
        const collection = this.modelFor('collections.collection');
        return Ember.RSVP.hash({
            cases: this.store.query("case", {
                collection: collection.id
            }),
            collection: collection
        });
    },

    setupController(controller, data) {
        controller.set("model", data.collection);
    }

});
