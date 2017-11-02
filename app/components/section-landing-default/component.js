import Ember from 'ember';

export default Ember.Component.extend({
    session: Ember.inject.service(),
    attributeBindings: ["id"],
    id: Ember.computed("layout.title", function() {
        return "section-" + this.get("index");
    }),
    tagName: 'section',
});
