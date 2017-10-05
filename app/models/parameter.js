import DS from 'ember-data';

const {
    Model,
    attr,
    hasMany,
    belongsTo
} = DS;

export default Model.extend({

    name: attr('string'),
    value: attr(),
    properties: attr(), // Property hash to store additional information about a parameter.

    aliases: hasMany('parameter-aliases', {
        inverse: 'parameters'
    }),

    cases: hasMany('case', {
        inverse: 'parameters'
    }),

    workflow: belongsTo('workflow', {
        inverse: 'parameters'
    }),

    stub: belongsTo('parameter-stub', {
        inverse: 'parameters'
    }),

    autoSave: Ember.observer('currentState.isDirty', function() {
        if (this.get('currentState.isDirty')) {
            Ember.run.next(() => this.save());
        }
        if ((() => {
            let attrs = [];
            this.eachAttribute(attr => attrs.push(attr));
            return Object.keys(this, this.changedAttributes())
                .find(key => attrs.includes(key));
        })()) {}
    }),


});
