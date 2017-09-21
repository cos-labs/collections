import Ember from 'ember';

export default Ember.Controller.extend({
    title: '',
    selectedType: 'Preprint',
    description: '',
    // preprints, websites/links, etc. will be added later to the following list:
    typeList: Ember.A(['meeting', 'dataset', 'appendix']),

    actions: {
        addCollection () {
            const collection = this.store.createRecord('collection', {
                title: this.get('title'),
                tags: '',
                settings: {},
                collectionType: this.get('selectedType'),
                description: this.get('description')
            });
            collection.save().then((record) => {
                this.set('newCollectionTitle', '');
                this.transitionToRoute('collection', record);
            });
        },
        updateType (value) {
            this.set('selectedType', value);
        },
    },
});
