import Ember from 'ember';

export default Ember.Component.extend({

    tagName: 'input',
    type: 'radio',

    attributeBindings: ['id', 'type', 'htmlChecked:checked', 'value', 'name', 'disabled'],


    htmlChecked: Ember.computed('value', 'checked', function() {
        return this.get('value') === this.get('checked');
    }),

    change() {
        this.set('checked', this.get('value'));
    },

    _setCheckedProp() {
        if (!this.$()) { return; }
        this.$().prop('checked', this.get('htmlChecked'));
    },

    _updateElementValue: Ember.observer('htmlChecked', function() {
        Ember.run.once(this, '_setCheckedProp');
    }),

    /* Used temporally till we make all radio buttons work */
    didRender() {
        if (this.get('value') == 'appendix' || this.get('value') == 'preprints' || this.get('value') == 'registrations' || this.get('value') == 'bookmarks' || this.get('value') == 'proposals') {
            this.set('disabled', true);
        }
    }

});
