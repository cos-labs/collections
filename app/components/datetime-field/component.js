import Ember from 'ember';


export default Ember.Component.extend({

    editing: true,

    description: 'Enter a start time for this presentation.',

    textFieldValueObserver: Ember.observer('textFieldValue', function() {
        this.set('widget.parameters.date.value', this.get('dtFieldValue'));
    }),

    didReceiveAttrs() {
        this.set('description', this.attrs.description);
    },

});
