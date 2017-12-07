import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        return this.modelFor('collections.collection');
    },

    afterModel(model) {
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
