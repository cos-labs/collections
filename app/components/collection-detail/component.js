import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['card', 'coll-single'],

    tags: Ember.computed(function() {
        if (this.get('collection.tags')) {
            return this.get('collection.tags').split(',').filter(tag => tag !== '');
        } else {
            return '';
        }
    })

});
