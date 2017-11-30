import Ember from 'ember';

export default Ember.Controller.extend({
    store: Ember.inject.service(),
    isModerator: true,
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
    }
});
