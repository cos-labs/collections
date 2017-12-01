import Route from '@ember/routing/route';

export default Route.extend({
    crumb: {},
    collection: '',
    item: '',
    model() {
        this.set('item', this.modelFor('collections.collection.items.item')['item']);
        return this.modelFor('collections.collection.items.item');
    },

    afterModel(model, transition) {
        this.set('crumb.label', 'Edit');
        this.set('crumb.route', this.routeName);
        this.set('crumb.models', [
            this.get('collection'),
            this.get('item')
        ]);
    },
    actions: {
        submit(item) {
            debugger;
            item.save();
        }
    },
    setupController(controller, model) {
        controller.set('item', model.item);
    }
});
