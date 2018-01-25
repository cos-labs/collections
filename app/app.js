import Ember from 'ember';
import loadInitializers from 'ember-load-initializers';
import Resolver from './resolver';
import config from './config/environment';


Ember.Route.reopen({

    nav: Ember.inject.service(),

    activate() {
        window.scrollTo(0, 0);
    },
});

const App = Ember.Application.extend({
    modulePrefix: config.modulePrefix,
    podModulePrefix: config.podModulePrefix,
    Resolver,
});

loadInitializers(App, config.modulePrefix);


export default App;
