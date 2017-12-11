import Ember from 'ember';

export default Ember.Controller.extend({
    store: Ember.inject.service(),
    session: Ember.inject.service(),
    isModerator: Ember.computed('session', 'item', function() {
        return this.store.findRecord('collection', this.get('item.collection.id')).then((c) => {
            return this.store.findRecord('user', c.get('createdBy.id'))
                .then((user) => {
                    const currentUser = this.get('session.session.content.authenticated.user.username');
                    console.log(user.get('username') === currentUser);
                    return user.get('username') === currentUser;
                });
        });
    }),
    isOwner: Ember.computed('session', 'item', function() {
        return this.store.findRecord('user', this.get('item.createdBy.id'))
            .then((user) => {
                const currentUser = this.get('session.session.content.authenticated.user.username');
                console.log(user.get('username') === currentUser);
                return user.get('username') === currentUser;
            });
    }),
    actions: {
        approveItem(item) {
            item.set('status', 'approved');
            item.content.save();
        },
        rejectItem(item) {
            item.set('status', 'rejected');
            item.content.save();
        }
    },

});
