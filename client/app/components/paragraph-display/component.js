import Ember from 'ember';


export default Ember.Component.extend({

    description: "Enter a title for the preprint.",

    textFieldValueObserver: Ember.observer('textFieldValue', function() {

        this.attrs.saveParameter(this.attrs.widget.value.parameters.textFieldValue, {
            state: ['defined'],
            value: this.get('textFieldValue')
        })

    }),

});
