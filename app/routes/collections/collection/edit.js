import Ember from 'ember';

export default Ember.Route.extend({

    title: 'Settings',
    crumb: {},

    model() {
        const collection = this.modelFor('collections.collection');
        return Ember.RSVP.hash({
            collection,
        });
    },

    afterModel(model, transition) {
        this.set('nav.links', [
            {
                label: 'Settings',
                route: 'collections.collection.edit',
                models: [model.collection]
            }, {
                label: 'Submissions',
                route: 'collections.collection.submissions',
                models: [model.collection]
            }]);
    },

    setupController(controller, data) {
        controller.set('collection', data.collection);
    }

});
