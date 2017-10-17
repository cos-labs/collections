import Ember from 'ember';

export default Ember.Route.extend({

    model(params) {
        return Ember.RSVP.hash({
            "collections": this.modelFor('collections')
        });
    },

    setupController(controller, data) {
        controller.set("collections", data.collections);
    }

});
