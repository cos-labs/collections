import Ember from 'ember';


export default Ember.Route.extend({

    crumb: {},

    model(params) {
        return Ember.RSVP.hash({
            collection: this.modelFor('collections.collection'),
            item: this.store.createRecord('item')
        });
    },

    afterModel(model, transition) {
        this.set('crumb.label', 'New Submission');
        this.set('crumb.route', this.routeName);
        this.set('crumb.models', [
            model.collection,
        ]);

        this.set('nav.links', [{
            label: 'Settings',
            route: 'collections.collection.edit',
            models: [model.collection]
        }, {
            label: 'Submissions',
            route: 'collections.collection.submissions',
            models: [model.collection]
        }]);
    },

    setupController(controller, model) {
        controller.set('collection', model.collection);
        controller.set('item', model.item);
    }
});
