import Ember from 'ember';

export default Ember.Route.extend({
    breadCrumb: {
        title: 'Collections',
        path: 'collections.index'
    },

    beforeModel() {
        this.set('nav.links', [{
            label: 'Showcase',
            route: 'explore'
        }, {
            label: 'Trending',
            route: 'explore'
        }]);
    },

    model() {
        return Ember.RSVP.hash({
            collections: this.store.findAll('collection'),
        });
    },

    setupController(controller, model) {
        controller.set('collections', model.collections);
    },

});

