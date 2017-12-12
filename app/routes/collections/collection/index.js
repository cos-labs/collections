import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        return this.modelFor('collections.collection');
    },

    afterModel(model) {
        const links = [];
        if (model.get('canEdit')) {
            links.push({
                label: 'Settings',
                route: 'collections.collection.edit',
                models: [model]
            });
        }
        if (model.get('canModerate')) {
            links.push({
                label: 'Moderation',
                route: 'collections.collection.moderation',
                models: [model]
            });
        }
        links.push({
            label: 'Submissions',
            route: 'collections.collection.submissions',
            models: [model]
        });
        this.set('nav.links', links);
    },

    setupController(controller, model) {
        controller.set('collection', model);
    }

});
