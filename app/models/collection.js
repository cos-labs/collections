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
    settings: attr(),
    location: attr('string'),
    address: attr('string'),
    collectionType: attr('string'),
    moderationRequired: attr('boolean'),
    canModerate: attr('boolean'),
    canEdit: attr('boolean'),
    createdBy: belongsTo('user'),
    items: hasMany('item'),
    titleCaseCollectionType: Ember.computed('collectionType', function() {
        const t = this.get('collectionType');
        return t.charAt(0).toUpperCase() + t.slice(1);
    })
});
