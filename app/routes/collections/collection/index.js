import Ember from 'ember';

export default Ember.Route.extend({

    model(params) {
        return this.modelFor("collections.collection");
    },

    setupController(controller, data) {
        controller.set("model", data);
    }

});
