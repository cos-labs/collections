import Ember from 'ember';

export default Ember.Route.extend({

    model(params) {
        return Ember.RSVP.hash({
            "collections": this.modelFor('collections')
        });
    },

    setupController(controller, model) {
        controller.set("collections", model.collections);
    }

});
