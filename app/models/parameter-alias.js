import DS from 'ember-data';

const {
    Model,
    attr,
    belongsTo,
} = DS;

export default Model.extend({

    alias: attr('string'),

    widget: belongsTo('widget', {
        inverse: 'parameterAliases',
    }),

    workflow: belongsTo('workflow', {
        inverse: 'parameterAliases'
    }),

    parameter: belongsTo('parameter', {
        inverse: 'aliases'
    }),

    parameterStub: belongsTo('parameter-stub', {
        inverse: 'aliases'
    })

});
