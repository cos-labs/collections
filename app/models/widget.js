import Ember from 'ember';
import DS from 'ember-data';
import hashMany from 'collections/utils/hash-many';


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
    parameterMapping: hasMany('parameter-mapping', {
        inverse: 'widget',
    }),
    parameters: Ember.computed('parameterMapping.@each', function() {
        let ps = this.get('parameterMapping')
            .reduce((parameters, mapping) => {
                parameters[mapping.get('mappingKey')] = mapping.get('parameter')
                return parameters
            }, {});
        debugger;
        return ps
    }),
});
