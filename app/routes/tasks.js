import Ember from 'ember';


export default Ember.Route.extend({

    title: 'Tasks',
    crumb: {},

    model() {
        return Ember.RSVP.hash({
            cases: this.store.findAll('case'),
        });
    },

    afterModel(model, transition) {
        this.set('crumb.label', this.title);
        this.set('crumb.route', this.routeName);
        this.set('crumb.models', []);

        this.set('nav.links', [{
        }]);
    },

    setupController(controller, data) {
        controller.set('cases', data.cases);
    }

});
