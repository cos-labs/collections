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

    autoSave: Ember.observer('isDirty', function() {
        debugger;
        if (
            (this.get('status') === 'isDraft') &&
            !this.get('isNew') &&
            (() => {
                let attrs = [];
                this.eachAttribute(attrs.push);
                return Object.keys(this, this.changedAttributes())
                    .find(key => attrs.contains(key));
            })()
        ) {
            this.save()
        }
    }),


});
