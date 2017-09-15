import Ember from 'ember';


export default Ember.Route.extend({

    panelActions: Ember.inject.service('panelActions'),
    caxe: Ember.inject.service(),

    model() {
        const collectionType = this.modelFor('collection').get('collectionType');
        let submissionFormId = {
            'meeting': 1
        }[collectionType];
        const caxe = this.store.createRecord('case');
        this.store.findRecord('workflow', submissionFormId).then(workflow => {
            caxe.set('workflow', workflow);
            caxe.save();
        });
        return Ember.RSVP.hash({
            workflow: this.store.findRecord('workflow', submissionFormId),
            collection: this.modelFor('collection'),
        });
    },

    setupController(controller, model) {
        controller.set('workflow', model.workflow);
        controller.set('collection', model.collection);
    },

});
