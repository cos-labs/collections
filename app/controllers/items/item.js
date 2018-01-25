import Ember from 'ember';

export default Ember.Controller.extend({
    breadCrumb: 'Item',
    breadCrumbPath: 'items.item.index',
    breadCrumbModel: Ember.computed.alias('item')
});
