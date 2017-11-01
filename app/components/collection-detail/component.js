import Ember from "ember";

export default Ember.Component.extend({
    classNames: ["card", "coll-single"],

    tags: Ember.computed(function() {
        return this.get("collection.tags").split(",");
    })

});
