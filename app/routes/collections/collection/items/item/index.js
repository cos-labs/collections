import Ember from 'ember';

export default Ember.Route.extend({

    // crumb: {},
    // collection: '',
    // item: '',
    model() {
        this.set('item', this.modelFor('collections.collection.items.item')['item']);
        return this.modelFor('collections.collection.items.item');
    },

    // afterModel(model, transition) {
    //     this.set('crumb.label', this.get('item.title'));
    //     this.set('crumb.route', this.routeName);
    //     this.set('crumb.models', [
    //         this.get('collection'),
    //         this.get('item')
    //     ]);
    // },

    setupController(controller, model) {
        const parentModel = this.modelFor('collections.collection.items.item');
        controller.set('collection', parentModel.collection);
        controller.set('item', parentModel.item);
        controller.set('node', parentModel.node);
    }

});
