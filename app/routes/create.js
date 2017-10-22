import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        return this.get('store').findAll('workflow');
    },

    setupController(controller, model) {
        controller.set('workflows', model)
    },

    deactivate() {
        this.get("nav.crumbs").pop();
    }

});
