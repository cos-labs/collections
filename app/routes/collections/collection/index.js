import Ember from 'ember';

export default Ember.Route.extend({

    model(params) {
        return this.modelFor('collections.collection');
    },

    afterModel(model, transition) {
        this.set('nav.links', [{
            label: 'Settings',
            route: 'collections.collection.edit',
            models: [model]
        }, {
            label: 'Submissions',
            route: 'collections.collection.submissions',
            models: [model]
        },{
            label: 'Moderation',
            route: 'collections.collection.moderation',
            models: [model]
        }]);
    },

    setupController(controller, model) {
        controller.set('collection', model);
    }

});
