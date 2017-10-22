import Ember from 'ember';

export default Ember.Route.extend({

    session: Ember.inject.service(),
    nav: Ember.inject.service(),

    title: "My Collections",
    crumb: {},

    

    model(params) {
        return Ember.RSVP.hash({
            collections: this.store.findAll('collection', {
                user: this.get('session.session.content.authenticated.user.username')
            }),
        });
    },

    setupController(controller, data) {
        controller.set("collections", data.collections);
    }

});
