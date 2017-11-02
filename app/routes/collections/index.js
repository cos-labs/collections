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

    model(params, transition) {
        console.log('model hook')
        return Ember.RSVP.hash({
            collections: this.store.query('collection', {
                q: transition.queryParams.q,
                filter: {
                    kind: transition.queryParams.kind
                }
            }),
        });
    },

    setupController(controller, model) {
        controller.set("collections", model.collections);
    }

});
