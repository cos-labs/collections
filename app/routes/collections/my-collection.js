import Ember from 'ember';

export default Ember.Route.extend({

    session: Ember.inject.service(),
    path: Ember.inject.service(),
    navLinks: Ember.inject.service(),

    title: "My Content",

    model(params) {
        return Ember.RSVP.hash({
            collections: this.store.findAll('collection', {
                user: this.get('session.session.content.authenticated.user.username')
            }),
        });
    },

    setupController(controller, data) {
        controller.set("collections", data.collections);
    },
});
