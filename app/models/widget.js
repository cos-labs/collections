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

    widgetParameterMappings: hasMany('widget-parameter-mapping', {
        inverse: 'widget',
    }),

    _parameters: {},
    parameters: Ember.computed('widgetParameterMappings.@each.parameter', {
        get() {
            this.get('widgetParameterMappings').then(mappings => {
                let promises = mappings.reduce((parameters, mapping) => {
                    let deferred = Ember.RSVP.defer(mapping.get('name'));
                    mapping.get('parameter').then((parameter) => {
                        deferred.resolve(parameter);
                    });
                    parameters[mapping.get('name')] = deferred.promise
                    return parameters;
                }, {});
                Ember.RSVP.hash(promises).then(resolved => {
                    this.set('parameters', resolved);
                });
            });
            return this.get('_parameters');
        },
        set(key, value) {
            this.set('_parameters', value);
            return value;
        }
    })

});
