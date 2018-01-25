import Ember from 'ember';

export default Ember.Controller.extend({
    breadCrumb: 'Edit',
    breadCrumbPath: 'items.item.edit',
    breadCrumbModel: Ember.computed.alias('item'),
});
