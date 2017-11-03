import Ember from 'ember';

export default Ember.Route.extend({

    title: "Collections",
    crumb: {},


    beforeModel() {
        this.set("crumb.label", this.title);
        this.set("crumb.route", this.routeName);
        this.set("nav.links", [{
            label: "Showcase",
            route: "explore"
        }, {
            label: "Trending",
            route: "explore"
        }]);
    },

    model(params, transition) {
        return Ember.RSVP.hash({
            collections: this.store.query('collection', {
                filter: {
                    kind: transition.queryParams.kind
                }
            }),
        });
    },

    setupController(collection, data) {
        collection.set('collections', data.collections);
    },

});

