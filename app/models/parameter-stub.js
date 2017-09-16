import DS from 'ember-data';

const {
    Model,
    attr,
    belongsTo,
    hasMany
} = DS;

export default Model.extend({

    name: attr('string'),

    workflow: belongsTo('workflow', {
        inverse: null
    }),

    parameters: hasMany('parameter', {
        inverse: 'stub'
    }),

    aliases: hasMany('parameter-alias', {
        inverse: 'parameterStub'
    }),

    //widgets: hasMany('widget', {
    //    inverse: 'parameterStub'
    //})

});
