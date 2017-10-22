import Ember from 'ember';

export default Ember.Route.extend({

    nav: Ember.inject.service(),

    setupController(controller, data) {
        controller.set("collection", data);
    },

});
