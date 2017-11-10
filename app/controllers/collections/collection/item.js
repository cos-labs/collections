import Ember from 'ember';

export default Ember.Controller.extend({

    store: Ember.inject.service(),

    actions: {

        continueWorkflow(role) {
            this.get("store").queryRecord("case", {
                for_item: this.get("item").id,
                role: "approval"
            }).then(caxe => {
                this.transitionToRoute("collections.collection.add", caxe.id)
            });
        
        }
    
    }

});
