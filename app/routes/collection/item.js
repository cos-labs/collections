import Ember from 'ember';

export default Ember.Route.extend({
    model (params) {
        const that = this;
        return this.store.findRecord('item', params.item_id).then(function(item) {
            const node = that.store.findRecord('node', item.get('sourceId'));
            return Ember.RSVP.hash({
                item,
                node
            });
        });
    },
});
