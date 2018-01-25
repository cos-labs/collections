import Ember from 'ember';

export default Ember.Route.extend({

    beforeModel() {
        this.set('nav.links', [{
            label: 'Create Collection',
            route: 'create'
        }, {
            label: 'Search',
            route: 'search'
        }]);
    },

    model() {
        return Ember.RSVP.hash({
            collections: this.store.findAll('collection'),
        });
    },

    setupController(collection, data) {
        collection.set('collections', data.collections);
    },

});
