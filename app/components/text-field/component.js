import Ember from 'ember';


export default Ember.Component.extend({

    editing: true,

    description: 'Enter a title for the preprint.',

/*    parameterValueObserver: Ember.observer('parameters', 'parameters.value.value', function() {
        this.set('textFieldValue', this.get('parameters.value.value'));
    }),

    /*textFieldValueObserver: Ember.observer('textFieldValue', function() {
        let currentComponentValue = this.get('textFieldValue');
        let currentParameterValue = this.get('parameters.value.value');
        if (currentComponentValue === currentParameterValue) return;
        this.set('parameters.value.value', currentComponentValue);
        this.get('parameters.value').save();
    }),*/

    didReceiveAttrs() {
        this.set('description', this.attrs.description);
        //let v = this.get('parameters.value.value')
        //if (typeof v === "object") {
        //    this.set('parameters.value.value', '');
        //    this.set('textFieldValue', '');
        //} else {
        //    this.set('textFieldValue', v);
        //}
    },

});
