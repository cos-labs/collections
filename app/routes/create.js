import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        return this.store.createRecord('collection');
    },
    setupController(controller, model) {
        controller.set('collection', model);
        controller.set('collection.anyoneCanSubmit', true);
        controller.set('collection.collectionType', 'repository');
        controller.set('collection.moderationRequired', false);
    }
});
