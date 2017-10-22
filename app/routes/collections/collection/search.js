import Ember from 'ember';

export default Ember.Route.extend({

    title: "Search In Collection",

    deactivate() {
        this.get("nav.crumbs").pop();
    }
});
