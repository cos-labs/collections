import Route from '@ember/routing/route';

export default Route.extend({
    collection: '',
    item: '',
    model() {
        this.set('item', this.modelFor('items.item')['item']);
        return this.modelFor('items.item');
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
