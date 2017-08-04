import DS from 'ember-data';

const {
    Model,
    attr,
} = DS;

export default Model.extend({
    mappingKey: attr('string'),
    widget: belongsTo('widget', {
        inverse: 'parameters',
    }),
    parameter: belongsTo('parameter', {
        inverse: null,
    }),
});
