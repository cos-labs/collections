import Ember from 'ember';


export default Ember.Route.extend({
    model(params) {
        return Ember.RSVP.hash({
            collection: this.modelFor('collections.collection'),
            item: this.store.createRecord('item')
        });
    },

    afterModel(model, transition) {
    },

    setupController(controller, model) {
        controller.set('collection', model.collection);
        controller.set('item', model.item);
    }
});
