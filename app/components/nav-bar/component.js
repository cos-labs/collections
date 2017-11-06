import Ember from 'ember';

export default Ember.Component.extend({

    session: Ember.inject.service(),
    nav: Ember.inject.service(),
    router: Ember.inject.service('-routing'),

    elementId: "collections-nav",
    tagName: "nav",
    attributeBindings: ['style'],

    style: Ember.computed("model.settings.branding.colors.primary", function() {
        let pColor = this.get("model.settings.branding.colors.primary");
        if (!pColor) pColor = "#3c515b";
        return "background-color:" + pColor;
    }),

    actions: {
        transition(link) {
            const models = link.models || [];
            this.get("router").transitionTo(link.route, ...models);
        }
    }

});
