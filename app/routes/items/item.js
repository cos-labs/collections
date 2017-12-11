import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        const item = this.store.findRecord('item', params.item_id);
        const node = item.then((_item) => {
            return this.store.findRecord('node', _item.get('sourceId'));
        });

        return Ember.RSVP.hash({
            item,
            node
        });
    },

    setupController(controller, model) {
        controller.set('item', model.item);
        controller.set('node', model.node);
    }

});
