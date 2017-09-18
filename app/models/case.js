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

    workflow: belongsTo('workflow', {
        inverse: 'cases'
    }),

    parameters: hasMany('parameter', {
        inverse: 'case'
    })

});
