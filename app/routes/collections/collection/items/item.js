import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        const collection = this.modelFor('collections.collection');
        const item = this.store.findRecord('item', params.item_id);
        // this.set('item', item);
        const node = item.then((_item) => {
            return this.store.findRecord('node', _item.get('sourceId'));
        });

        return Ember.RSVP.hash({
            collection,
            item,
            node
        });
    },

    afterModel() {
        this.set('nav.links', [{
            label: 'Edit',
            route: 'collections.collection.items.item.edit',
            models: []
        }]);
    },

    setupController(controller, model) {
        controller.set('collection', model.collection);
        controller.set('item', model.item);
        controller.set('node', model.node);
    }

});
