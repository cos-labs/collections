import Ember from 'ember';
import itemClasses from 'collections/utils/itemClasses';

export default Ember.Controller.extend({
    store: Ember.inject.service(),
    session: Ember.inject.service(),
    constructedItem: Ember.computed('model', function () {
        // const type = this.get('model.type');
        const type = 'meeting';
        return itemClasses[type].create({
            session: this.get('session'),
            store: this.get('store'),
            item: this.get('model.item')
        });
    }),
});
