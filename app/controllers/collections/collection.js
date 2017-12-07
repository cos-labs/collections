import Ember from 'ember';

export default Ember.Controller.extend({

    searchGuid: 'fkat6',
    loadingGuid: false,
    organizeMode: false,
    breadCrumb: 'Collection',
    breadCrumbPath: 'collections.collection',
    breadCrumbModel: Ember.computed.alias('collection'),
    actions: {
        toggleOrganizeMode () {
            this.toggleProperty('organizeMode');
        },
    },

});
