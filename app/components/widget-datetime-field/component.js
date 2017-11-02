import Ember from 'ember';


export default Ember.Component.extend({

    editing: true,

    description: 'Enter a start time for this presentation.',

    didReceiveAttrs() {
        this.set('description', this.attrs.description);
        this.set('dtFieldValue', this.get('widget.parameters.date'));
    },

});
