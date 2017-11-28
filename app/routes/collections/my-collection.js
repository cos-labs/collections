import Ember from 'ember';

export default Ember.Route.extend({
    session: Ember.inject.service(),
    title: 'My Collection',
    crumb: {},

    beforeModel() {
        this.set('crumb.label', this.title);
        this.set('crumb.route', this.routeName);
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
            debugger;
            return Ember.RSVP.hash({
                collections: myCollections
            });
        });
    },

    setupController(collection, data) {
        collection.set('collections', data.collections);
    },
});
