import Ember from 'ember';
import loadInitializers from 'ember-load-initializers';
import Resolver from './resolver';
import config from './config/environment';


Ember.Route.reopen({

    nav: Ember.inject.service(),

    beforeModel() {
        if (!this.get("crumb")) return;
        this.set("crumb.label", this.title);
        this.set("crumb.route", this.routeName);
    },

    activate() {
        console.log("activate");
        let crumb = this.get("crumb");
        if (crumb) this.get("nav.crumbs").pushObject(crumb)
        console.log(this.get("nav.crumbs"));
    },

    deactivate() {
        console.log("deactivate");
        let crumb = this.get("crumb");
        if (crumb) this.get("nav.crumbs").removeObject(crumb)
    }

});

Ember.MODEL_FACTORY_INJECTIONS = true;


const App = Ember.Application.extend({
    modulePrefix: config.modulePrefix,
    podModulePrefix: config.podModulePrefix,
    Resolver,
});

loadInitializers(App, config.modulePrefix);


export default App;
