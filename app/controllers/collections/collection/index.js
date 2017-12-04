import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),
    store: Ember.inject.service(),
    isModerator: Ember.computed('session', 'collection', function() {
        return this.store.findRecord('user', this.get('collection.createdBy.id'))
            .then((user) => {
                const currentUser = this.get('session.session.content.authenticated.user.username');
                // console.log(user.get('username') == currentUser);
                return user.get('username') == currentUser;
            });
    }),
    actions: {
        changeRoute(path, params) {
            this.transitionToRoute(path, params);
        },
    },
});
