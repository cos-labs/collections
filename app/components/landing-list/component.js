import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'section',
    data: Ember.computed('layout', function() {
        const dataSource = this.get('layout.data');
        return this.get('model.settings').data[dataSource];
    }),
    buttonStyle: Ember.computed('branding.colors', function() {
        return Ember.String.htmlSafe(`background-color: ${this.get('branding.colors.primary')}`);
    }),
});
