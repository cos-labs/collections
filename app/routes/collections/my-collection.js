import Ember from 'ember';

export default Ember.Route.extend({
    session: Ember.inject.service(),

    beforeModel() {
        this.set('nav.links', [{
            label: 'Showcase',
            route: 'explore'
        }, {
            label: 'Trending',
            route: 'explore'
        }]);
    },

    model(params) {
        return this.store.query('collection', {
            filter: {
                createdBy: this.get('session.session.content.authenticated.user.username')
            }
        }).then((myCollections) =>  {
            return Ember.RSVP.hash({
                collections: myCollections
            });
        });
    },

    setupController(collection, data) {
        collection.set('collections', data.collections);
    },
});
