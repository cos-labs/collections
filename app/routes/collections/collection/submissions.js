import Ember from 'ember';


export default Ember.Route.extend({

    title: 'My Submissions',
    session: Ember.inject.service(),

    model() {
        const collection = this.modelFor('collections.collection');
        return Ember.RSVP.hash({
            items: this.store.query('item', {
                username: this.get('session.session.authenticated.user.username'),
                collection: collection.id,
            }),
            collection
        });
    },
    afterModel(model) {
    },
    setupController(controller, data) {
        controller.set('collection', data.collection);
        controller.set('items', data.items);
    }
});
