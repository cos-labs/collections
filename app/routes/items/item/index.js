import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.modelFor('items.item');
    },

    setupController(controller, model) {
        debugger;
        controller.set('item', model.item);
        controller.set('node', model.node);
    }

});
