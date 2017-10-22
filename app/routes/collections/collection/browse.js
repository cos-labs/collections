import Ember from 'ember';

export default Ember.Route.extend({

    deactivate() {
        this.get("nav.crumbs").pop();
    }

});
