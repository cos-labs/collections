import Ember from 'ember';

export default Ember.Controller.extend({
    store: Ember.inject.service(),
    session: Ember.inject.service(),
    isModerator: Ember.computed('session', 'collection', function() {
        return this.store.findRecord('user', this.get('collection.createdBy.id'))
            .then((user) => {
                const currentUser = this.get('session.session.content.authenticated.user.username');
                console.log(user.get('username') == currentUser);
                return user.get('username') == currentUser;
            });
    }),
    isOwner: Ember.computed('session', 'item', function() {
        return this.store.findRecord('user', this.get('item.createdBy.id'))
            .then((user) => {
                const currentUser = this.get('session.session.content.authenticated.user.username');
                console.log(user.get('username') == currentUser);
                return user.get('username') == currentUser;
            });
    }),
    actions: {
        approveItem(item) {
            // const item = this.get('model.item');
            item.set('status', 'approved');
            item.content.save();
        },
        rejectItem(item) {
            // const item = this.get('model.item');
            item.set('status', 'rejected');
            item.content.save();
        }
    },

});
