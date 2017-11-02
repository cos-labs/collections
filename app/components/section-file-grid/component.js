import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Component.extend({

    store: Ember.inject.service(),
    session: Ember.inject.service(),
    router: Ember.inject.service('-routing'),

    classNames: ["layer-file-grid"],
    tagName: "section",
    attributeBindings: ["id"],
    id: Ember.computed("layout.title", function() {
        return "section-" + this.get("index");
    }),

    // Everything below is part of ember-cli-pagination setup for client-side-only pagination
    queryParams: ["page", "perPage"],
    page: 1,
    perPage: 12,
    pagedContent: pagedArray('model.items', {
        page: Ember.computed.alias("parent.page"),
        perPage: Ember.computed.alias("parent.perPage")
    }),

    // binding the property on the paged array
    // to a property on the controller
    totalPages: Ember.computed.oneWay("pagedContent.totalPages"),

    actions: {
        transition(route, ...models) {
            this.get("router").transitionTo(route, ...models);
        }
    }

});
