import Ember from 'ember';


export default Ember.Component.extend({

    editing: true,

    description: 'Enter a title for the preprint.',
    metadata: false, 

    didReceiveAttrs() {
        this.set('description', this.attrs.description);
        if(this.get('parameters.value.name') === 'metadata') { 
         this.set('metadata' , true)
        }else { 
            this.set('metadata' , false)
        }
    },
    actions : {
        updateCacheSettings (jsonSettings) {
            this.set('parameters.value.value', jsonSettings);
        },
    }

});
