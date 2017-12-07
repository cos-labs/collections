import Route from '@ember/routing/route';

export default Route.extend({
    collection: '',
    item: '',
    model() {
        this.set('item', this.modelFor('collections.collection.items.item')['item']);
        return this.modelFor('collections.collection.items.item');
    },

    afterModel(model, transition) {
    },
    actions: {
        submit(item) {
            item.save();
        }
    },
    setupController(controller, model) {
        controller.set('item', model.item);
    }
});
