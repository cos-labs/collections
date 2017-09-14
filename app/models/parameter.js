import DS from 'ember-data';

const {
    Model,
    attr,
    hasMany
} = DS;

export default Model.extend({
    name: attr('string'),

    widgetParameterMappings: hasMany('widget-parameter-mapping', {
        inverse: 'widget',
    }),

    value: attr(),
    properties: attr(), // Property hash to store additional information about a parameter.
});
