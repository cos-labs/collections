import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.modelFor('collections.collection.items.item');
    },

    setupController(controller, model) {
        controller.set('collection', model.collection);
        controller.set('item', model.item);
        controller.set('node', model.node);
    }

});
