import Ember from 'ember';
import DS from 'ember-data';


const {
    computed,
} = Ember;

const {
    Model,
    attr,
    belongsTo,
    hasMany
} = DS;


export default Model.extend({

    label: attr('string'),
    description: attr('string'),
    widgetType: attr('string'),
    defaultValue: attr('string'),

    parameterMappings: hasMany('parameter-mapping', {
        inverse: 'widget',
    }),

    parameters: Ember.computed('parameterMapping.@each', function() {
        return this.get('parameterMappings')
            .reduce((parameters, mapping) => {
                parameters[mapping.get('mappingKey')] = mapping.get('parameter')
                return parameters
            }, {});
    }),

});
