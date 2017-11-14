import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        return Ember.RSVP.hash({
            workflows: this.get('store').findAll('workflow'),
            groups: this.get('store').findAll('group')
        });
    },

    setupController(controller, model) {
        controller.set('workflows', model.workflows);
        controller.set('groups', model.groups);
    }

});
