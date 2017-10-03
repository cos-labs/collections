import Ember from 'ember';

export default Ember.Controller.extend({

    caxe: Ember.inject.service(),

    actions: {

        newCase(collection) {

            debugger;
            const caxe = this.store.createRecord('case');
            const wf = collection.get('workflow');
            caxe.set('workflow', wf);
            debugger;
            const case_saved_Promise = caxe.save()
            debugger;
            case_saved_Promise.then((caxe) => {
                debugger;
                this.set('caxe.activeCase', caxe);
                this.transitionToRoute("collection.add", collection)
            })
        }

    }

});
