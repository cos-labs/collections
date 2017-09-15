import DS from 'ember-data';

const {
    Model,
    attr,
    hasMany,
    belongsTo
} = DS;

export default Model.extend({
    name: attr('string'),

    widgetParameterMappings: hasMany('widget-parameter-mapping', {
        inverse: 'widget',
    }),

    case: belongsTo('case', {
        inverse: 'parameters'
    }),

    value: attr(),
    properties: attr(), // Property hash to store additional information about a parameter.
});
