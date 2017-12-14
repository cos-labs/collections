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
        }
    },

});
