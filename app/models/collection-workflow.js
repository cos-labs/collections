import DS from 'ember-data';
import Ember from 'ember';

const {
    Model,
    attr,
    hasMany,
    belongsTo,
} = DS;

export default Model.extend({
    role: DS.attr("string"),
    collection: belongsTo("collection", {
        inverse: "collectionWorkflows"
    }),
    workflow: belongsTo('workflow', {
        inverse: 'collectionWorkflows'
    }),
    authorizedGroups: hasMany("group", {
        inverse: "authorizedCollectionWorkflows"
    })
});
