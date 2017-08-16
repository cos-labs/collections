import Ember from 'ember';


export default Ember.Component.extend({

    store: Ember.inject.service(),

    buttonString: 'Save',
    disabled: false,
    description: 'Submit',

    actions: {
        async pressButton() {
            const item = this.get('store').createRecord('item');
            item.set('title', this.get('widget.parameters.title.value'));
            item.set('type', 'event');
            item.set('status', 'none');
            item.set('collection', this.get('collection'));
            item.save();
        },
    },

});
