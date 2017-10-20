import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'section',
    data: Ember.computed('layout', function() {
        const dataSource = this.get('layout.data');
        return this.get('model.settings').data[dataSource];
    }),
});
