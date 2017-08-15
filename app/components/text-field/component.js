import Ember from 'ember';


export default Ember.Component.extend({

    editing: true,

    description: 'Enter a title for the preprint.',

    textFieldValueObserver: Ember.observer('textFieldValue', function() {
        this.set('widget.parameters.value.value', this.get('textFieldValue'));
    }),

    didReceiveAttrs() {
        this.set('description', this.attrs.description);
    },

});
