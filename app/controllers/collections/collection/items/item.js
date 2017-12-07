import Ember from 'ember';

export default Ember.Controller.extend({
    breadCrumb: 'Item',
    breadCrumbPath: 'collections.collection.items.item',
    breadCrumbModel: Ember.computed.alias('item')
});
