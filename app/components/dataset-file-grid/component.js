import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    session: Ember.inject.service(),
    queryParams: ["page", "perPage"],
    page: 1,
    perPage: 12,
    // can be called anything, I've called it pagedContent
    // remember to iterate over pagedContent in your template
    pagedContent: pagedArray('model.items', {
        page: Ember.computed.alias("parent.page"),
        perPage: Ember.computed.alias("parent.perPage")
    }),

    // binding the property on the paged array
    // to a property on the controller
    totalPages: Ember.computed.oneWay("pagedContent.totalPages")
});
