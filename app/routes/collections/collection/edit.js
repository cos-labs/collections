import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        const collection = this.modelFor('collections.collection');
        return Ember.RSVP.hash({
            collection,
        });
    },

    afterModel() {
    },

    setupController(controller, data) {
        controller.set('collection', data.collection);
    }

});
