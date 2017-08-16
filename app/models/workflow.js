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
    sections: hasMany('section', {
        async: false,
        inverse: null,
    }),
    actions: hasMany('action', {
        async: false,
        inverse: null,
    }),
    initialParameters: hasMany('parameter', {
        async: false,
        inverse: null,
    }),
});
