import DS from 'ember-data';
import Ember from 'ember';

const {
    Model,
    attr,
    hasMany,
    belongsTo,
} = DS;

export default Model.extend({
    title: attr('string'),
    description: attr('string'),
    tags: attr('string'),
    dateCreated: attr('date'),
    dateUpdated: attr('date'),
    collection: belongsTo('collection'),
    authorizedCollectionWorkflows: hasMany("collection-workflow", {
        inverse: "authorizedGroups"
    }),
    createdBy: belongsTo('user'),
    items: hasMany('item'),
    list: Ember.computed.alias('items')
});
