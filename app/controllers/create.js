import Ember from 'ember';

export default Ember.Controller.extend({
    title: '',
    selectedType: 'Preprint',
    selectedWorkflow: undefined,
    description: '',
    workflows: undefined,
    // preprints, websites/links, etc. will be added later to the following list:
    typeList: Ember.A(['meeting', 'dataset', 'appendix']),

    actions: {
        addCollection () {
            const collection = this.store.createRecord('collection', {
                title: this.get('title'),
                tags: '',
                settings: {},
                collectionType: this.get('selectedType'),
                description: this.get('description'),
            });
            collection.set('workflow', this.get('selectedWorkflow'));
            collection.save().then((record) => {
                this.set('newCollectionTitle', '');
                this.transitionToRoute('collection', record);
            });
        },
        updateType (value) {
            this.set('selectedType', value);
        },
        setWorkflow(ev) {
            let workflows = this.get('workflows');
            this.set('selectedWorkflow', workflows.find(wf => wf.id === ev.target.value));
        }
    },
});
