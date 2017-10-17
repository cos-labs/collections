import Ember from 'ember';

export default Ember.Route.extend({

    navLinks: Ember.inject.service(),
    title: "Explore",

    model () {
        return this.store.query('collection', {
            page: 1,
        }).then(function(data) {
            return data;
        });
    },

    afterModel(model, transition) {

        this.set("navLinks.links", [
             {
                label: "Showcase",
                route: "explore"
            },
            {
                label: "Trending",
                route: "explore"
            }
        ]);

    }

});
