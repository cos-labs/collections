import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        const collection = this.modelFor('collections.collection');
        return collection;
    },
});
