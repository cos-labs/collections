import Ember from "ember";

export default Ember.Controller.extend({

    queryParams: ["kind", "q"],
    kind: null,
    q: null,

    actions: {
    
        addFilter(name, value) {
            this.set(name, value)
        }
    
    }

})
