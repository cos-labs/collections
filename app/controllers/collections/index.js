import Ember from "ember";

export default Ember.Controller.extend({

    queryParams: ["kind", "q"],
    kind: null,
    q: null,

})
