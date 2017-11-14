import Ember from 'ember';

export default Ember.Controller.extend({

    queryParams: ['kind', 'q'],
    kind: null,
    q: null,
    loading:false,

    actions: {

        addFilter(name, value) {
            this.set(name, value);
        }

    }

});
