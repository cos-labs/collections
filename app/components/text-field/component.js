import Ember from 'ember';


export default Ember.Component.extend({

    editing: true,

    description: 'Enter a title for the preprint.',

    textFieldValueObserver: Ember.observer('textFieldValue', function() {
        let currentComponentValue = this.get('textFieldValue');
        let currentParameterValue = this.get('widget.parameters.value.value');
        if (currentComponentValue === currentParameterValue) return;
        this.set('widget.parameters.value.value', currentComponentValue);
        this.get('widget.parameters.value').save();
    }),

    didReceiveAttrs() {
        this.set('description', this.attrs.description);
        this.set('textFieldValue', this.get('widget.parameters.value.value'));
    },

});
