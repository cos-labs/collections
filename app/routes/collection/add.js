import Ember from 'ember';


export default Ember.Route.extend({
    panelActions: Ember.inject.service('panelActions'),
    model() {
        debugger;
        const collectionType = this.modelFor('collection').get('collectionType');
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
