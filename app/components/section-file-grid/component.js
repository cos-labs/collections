import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';
import ENV from '../../config/environment';

export default Ember.Component.extend({

    store: Ember.inject.service(),
    session: Ember.inject.service(),
    router: Ember.inject.service('-routing'),

    classNames: ["section-file-grid"],
    tagName: "section",
    attributeBindings: ["id"],
    id: Ember.computed("layout.title", function() {
        return "section-" + this.get("index");
    }),
    showAsCards: true,
    showAsList: Ember.computed('showAsCards', function() {
       return !(this.get('showAsCards'));
    }),

    // Everything below is part of ember-cli-pagination setup for client-side-only pagination
    queryParams: ["page", "perPage"],
    page: 1,
    perPage: 12,
    filteredItems: Ember.computed('model.items', 'searchInput', function(){
        return this.get('model.items')
            .filter(item => 
                item.get('title').includes(this.get('searchInput')) ||
                item.get('description').includes(this.get('searchInput')) ||
                item.get('createdBy.fullName').includes(this.get('searchInput'))
            );
    }),
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
        },
        search() {
            const input = this.get('searchInput');
            const modelId = this.get('model.id');

            // make a call to the collections endpoint
            // this.set('pagedContent' , this.get('store').query("item", {q:input, filter:{"collection":modelId }}) , {
            //     page: this.get('page'),
            //     perPage: this.get('perPage')
            // })
            console.log(this.get("pagedContent") , this.get('page'))
        },
    }

});
