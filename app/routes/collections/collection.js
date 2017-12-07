import Ember from 'ember';

export default Ember.Route.extend({

    model(params) {
        debugger;
        return this.store.findRecord('collection', params.collection_id, {reload: true});
    },

    afterModel(model) {
        if (model) {
            this.set('nav.links', [
                {
                    label: 'Settings',
                    route: 'collections.collection.edit',
                    models: [model]
                }, {
                    label: 'Submissions',
                    route: 'collections.collection.submissions',
                    models: [model]
                }]);
        }
    },

    setupController(controller, model) {
        controller.set('collection', model);
    }

});
