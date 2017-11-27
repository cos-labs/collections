import Ember from 'ember';


export default Ember.Route.extend({

    caxe: Ember.inject.service(),

    crumb: {},

    model(params) {
        return Ember.RSVP.hash({
            caxe: this.get('store').findRecord('case', params.case_id, {
                reload: true
            }),
            collection: this.modelFor('collections.collection')
        });
    },

    afterModel(model, transition) {
        this.set('crumb.label', `Submission ${model.caxe.id}`);
        this.set('crumb.route', this.routeName);
        this.set('crumb.models', [
            model.collection,
            model.caxe
            ]);

        this.set('nav.links', [{
            label: 'Settings',
            route: 'collections.collection.edit',
            models: [model.collection]
        }, {
            label: 'Submissions',
            route: 'collections.collection.submissions',
            models: [model.collection]
        }]);

        this.set('caxe.activeCase', model.caxe);




    },

    setupController(controller, model) {
        controller.set('caxe', model.caxe);
        controller.set('collection', model.collection);


        //Code that does nothing should remove....
        //console.log("the collection item" , model.collection.get('items'));
        // model.collection.get('items').then((results)=>{
        //     results.forEach((item)=>{
        //     })
        // })

    },

});
