import Ember from 'ember';
import DS from 'ember-data';

const {
    Model,
    attr,
    hasMany,
} = DS;

export default Model.extend({
    title: attr('string'),
    description: attr('string'),
    sortedSections: Ember.computed('sections.@each.index', function() {
        return this.get('sections').sortBy('index');
    }),
    sections: hasMany('section', {
        inverse: null,
    }),
    actions: hasMany('action', {
        inverse: null,
    }),
    initialParameters: hasMany('parameter', {
        inverse: null,
    }),
});
