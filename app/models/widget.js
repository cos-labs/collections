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
    index: attr('number'),
    parameterAliases: hasMany('parameter-alias', {
        inverse: 'widget'
    }),

    workflow: belongsTo('workflow', {
        inverse: 'widgets'
    }),

    section: belongsTo('section', {
        inverse: 'widgets'
    }),

    _parameters: {},
    parameters: Ember.computed('parameterAliases.@each.parameter', {
        get() {
            this.get('parameterAliases').then(aliases => {
                let promises = aliases.reduce((parameters, alias) => {
                    let deferred = Ember.RSVP.defer(alias.get('alias'));
                    alias.get('parameter').then((parameter) => {
                        deferred.resolve(parameter);
                    });
                    parameters[alias.get('alias')] = deferred.promise
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
