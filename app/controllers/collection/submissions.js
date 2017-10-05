import Ember from 'ember';

export default Ember.Controller.extend({

    caxe: Ember.inject.service(),

    actions: {

        newCase(collection) {

            const caxe = this.store.createRecord('case');
            const wf = collection.get('workflow');
            caxe.set('workflow', wf);
            const case_saved_Promise = caxe.save()
            case_saved_Promise.then((caxe) => {
                this.set('caxe.activeCase', caxe);
                this.transitionToRoute("collection.add", collection)
            })
        }

    }

});
