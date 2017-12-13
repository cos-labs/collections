import Ember from 'ember';

export default Ember.Controller.extend({
    store: Ember.inject.service(),
    session: Ember.inject.service(),
    isModerator: Ember.computed('session', 'collection', function() {
        return this.store.findRecord('user', this.get('collection.createdBy.id'))
            .then((user) => {
                const currentUser = this.get('session.session.content.authenticated.user.username');
                return user.get('username') === currentUser;
            });
    }),
    isOwner: Ember.computed('session', 'item', function() {
        return this.store.findRecord('user', this.get('item.createdBy.id'))
            .then((user) => {
                const currentUser = this.get('session.session.content.authenticated.user.username');
                return user.get('username') === currentUser;
            });
    }),
    actions: {
        approveItem(item) {
            item.set('status', 'approved');
            item.save();
        },
        rejectItem(item) {
            item.set('status', 'rejected');
            item.save();
        },
        addModerator(guid) {
            const collection = this.get('model');
            this.store.query('user', {
                'username': guid
            }).then((users) => {
                console.log('found users');
                collection.get('moderators').pushObject(users.get('firstObject'));
                this.set('newModeratorGuid', '');
                collection.save();
                console.log('saved and committed');
            });
        },
        removeModerator(user) {
            const collection = this.get('model');
            collection.get('moderators').removeObject(user);
            collection.save();
            console.log('removed moderator');
        }
    },

});