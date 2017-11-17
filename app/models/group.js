import DS from 'ember-data';
import Ember from 'ember';

const {
    Model,
    attr,
    hasMany,
    belongsTo,
} = DS;

export default Model.extend({
    name: attr('string'),
    authorizedCollectionWorkflows: hasMany('collection-workflow', {
        inverse: 'authorizedGroups'
    }),
    createdBy: belongsTo('user'),
    items: hasMany('item'),
    list: Ember.computed.alias('items')
});
