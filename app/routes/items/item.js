import Ember from 'ember';

export default Ember.Route.extend({
    breadCrumb: {
        title: 'Item',
        path: 'items.item'
    },
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
    afterModel(model) {
        const collectionsCrumb = {
            title: 'Collections',
            path: 'collections.index',
            linkable: true
        };
        let collectionTitle = model.item.get('collection.title');
        const collectionId = model.item.get('collection.id');
        collectionTitle = collectionTitle ? collectionTitle : collectionId;
        const collectionCrumb = {
            title: collectionTitle,
            path: 'collections.collection',
            id: collectionId,
            linkable: true
        };
        const itemsCrumb = {
            title: 'Items',
            path: 'collections.index',
        };
        const itemTitle = model.item.get('title');
        const itemId = model.item.get('id');
        const itemCrumb = {
            title: itemTitle,
            path: 'items.item',
            id: itemId,
            linkable: true
        };
        this.set('breadCrumbs', [collectionsCrumb, collectionCrumb, itemsCrumb, itemCrumb]);
    },

    setupController(controller, model) {
        controller.set('item', model.item);
        controller.set('node', model.node);
    }

});
