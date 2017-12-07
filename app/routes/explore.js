import Ember from 'ember';

export default Ember.Route.extend({

    title: 'Explore',
    crumb: {},

    beforeModel() {
        this.set('crumb.label', this.title);
        this.set('crumb.route', this.routeName);
        this.set('nav.links', [{
            label: 'Placeholder',
            route: 'collections.index'
        }, {
            label: 'Placeholder',
            route: 'collections.index'
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

