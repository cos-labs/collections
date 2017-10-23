import Ember from 'ember';


export default Ember.Route.extend({

    caxe: Ember.inject.service(),

    crumb: {},

    model() {
        const caxe = this.get('caxe.activeCase');
        return Ember.RSVP.hash({
            caxe: this.get('store').findRecord('case', caxe.get('id'), {
                reload: true
            }),
            collection: this.modelFor('collections.collection')
        });
    },

    afterModel(model, transition) {
        debugger;
        this.set("crumb.label", "Submission " + model.caxe.id);
        this.set("crumb.route", this.routeName);
        this.set("crumb.models", [
            model.collection,
            model.caxe
        ]);

        this.set("nav.links", [{
            label: "Settings",
            route: "collections.collection.edit",
            models: [model.collection]
        }, {
            label: "Submissions",
            route: "collections.collection.submissions",
            models: [model.collection]
        }]);


    },

    setupController(controller, model) {
        controller.set('caxe', model.caxe);
        controller.set('collection', model.collection);
    },

});
