import Ember from 'ember';


export default Ember.Component.extend({

    editing: true,

    description: 'Enter a start time for this presentation.',

    textFieldValueObserver: Ember.observer('dtFieldValue', function() {
        debugger;
        this.set('parameters.date.value', this.get('dtFieldValue'));
        this.get('parameters.date').save();
    }),

    didReceiveAttrs() {
        this.set('description', this.attrs.description);
        this.set('dtFieldValue', this.get('widget.parameters.date'));
    },

});
