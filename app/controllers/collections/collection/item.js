import Ember from 'ember';

export default Ember.Controller.extend({
    store: Ember.inject.service(),
    isModerator: true,
    actions: {
        approveItem() {
            this.get('item').set('status', 'approved');
            debugger;
            this.get('item').save();
        },
        rejectItem() {
            this.get('item').set('status', 'rejected');
            debugger;
            this.get('item').save();
        }
    }
});
