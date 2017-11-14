import Ember from 'ember';

export default Ember.Route.extend({

    queryParams: {
        kind: {
            refreshModel: true
        },
        q: {
            refreshModel: true
        }
    },
    actions: {
        willTransition(transition) {
            console.log('willTransition')
            this.controllerFor("collections.index").set('loading' , true)             
        }
    },

    model(params, transition) {
        return Ember.RSVP.hash({
            collections: this.store.query('item', {
                q: transition.queryParams.q,
                filter: {
                    kind: transition.queryParams.kind
                }
            }),
        });
    },

    setupController(controller, model) { 
        controller.set("loading", false);
        controller.set("collections", model.collections);
    }

});
