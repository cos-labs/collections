import Ember from 'ember';


export default Ember.Route.extend({
    panelActions: Ember.inject.service('panelActions'),
    model() {
        var collectionSettings = this.modelFor('collection').get('settings');
        const collectionType = collectionSettings.collection_type;
        return Ember.RSVP.hash({
            workflow: this.store.findRecord('workflow', collectionType),
            collection: this.modelFor('collection'),
        });
    },

    setupController(controller, model) {
        controller.set('workflow', model.workflow);
        controller.set('collection', model.collection);
    },

});
