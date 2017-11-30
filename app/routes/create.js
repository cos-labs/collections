import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        return this.store.createRecord('collection');
    },
    setupController(controller, model) {
        controller.set('collection', model);
    },
    actions: {
    }

});
