import Ember from 'ember';

export default Ember.Controller.extend({

    caxe: Ember.inject.service(),


    actions: {

        newCase(collection) {

            const caxe = this.store.createRecord('case');
            const wf = collection.get('workflow');
            caxe.set('workflow', wf);
            caxe.set('collection', collection);
            caxe.save().then((caxe) => {
                this.set('caxe.activeCase', caxe);
                this.transitionToRoute("collections.collection.add", collection, caxe.id)
            })
        },


    }

});
