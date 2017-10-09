import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('collection', params.collection_id).then((data) => {
            return data;
        });
    },
    afterModel(model) {
        $(document).attr('title', model.get('title'));
    }
});
