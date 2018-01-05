import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  session: Ember.inject.service(),
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
        collection.get('moderators').pushObject(users.get('firstObject'));
        this.set('newModeratorGuid', '');
        collection.save();
      });
    },
    removeModerator(user) {
      const collection = this.get('model');
      collection.get('moderators').removeObject(user);
      collection.save();
      console.log('removed moderator');
    },
    addAdmin(guid) {
      const collection = this.get('model');
      this.store.query('user', {
        'username': guid
      }).then((users) => {
        collection.get('admins').pushObject(users.get('firstObject'));
        this.set('newAdminGuid', '');
        collection.save();
      });
    },
    removeAdmin(user) {
      const collection = this.get('model');
      collection.get('admins').removeObject(user);
      collection.save();
    }
  },

});
