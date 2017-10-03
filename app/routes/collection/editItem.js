import Ember from 'ember';


export default Ember.Route.extend({

    panelActions: Ember.inject.service('panelActions'),
    caxe: Ember.inject.service(),

    model() {
        const collectionType = this.modelFor('collection').get('collectionType');
        let submissionFormId = {
            'meeting': 1,
            'appendix': 2,
            'dataset': 14
        }[collectionType];
        //const caxe = this.store.createRecord('case');
        return this.store.findRecord("case", '464').then(caxe => {
            this.set('caxe.activeCase', caxe);
            //return this.store.findRecord('workflow', submissionFormId)
                //.then(workflow => {
                    //caxe.set('workflow', workflow);
                //    return //caxe.save();
                //})
                //.then(caxe => {
                //    this.set('caxe.activeCase', caxe);
                //    return caxe;
                //})
                //.then(() => {
                    return Ember.RSVP.hash({
                        workflow: this.store.findRecord('workflow', submissionFormId),
                        collection: this.modelFor('collection')
                    });
                //});
            });
    },

    setupController(controller, model) {
        controller.set('workflow', model.workflow);
        controller.set('collection', model.collection);
    },

});
