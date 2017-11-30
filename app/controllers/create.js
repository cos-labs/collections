import Ember from 'ember';

export default Ember.Controller.extend({
    title: '',
    collectionWorkflows: [],
    description: '',
    collectionType: undefined,

    typeList: [
        {
            label: 'Meeting',
            value: 'meeting',
            description: 'A meeting is a collection of talks and posters. Each talk or poster should have title and description.'
        }, {
            label: 'Repository',
            value: 'repository',
            description: 'A repository is a collection of items with the same data fields attached to each ofthem.'
        }, {
            label: 'Appendix',
            value: 'appendix',
            description: 'An appendix is a collection of additional materials that relate to apublished article.'
        }, {
            label: 'Preprints',
            value: 'preprints',
            description: 'A collection of articles that{ may be considered for publishin but have not yet been published.'
        }, {
            label: 'Registrations',
            value: 'registrations',
            descriptions: 'A collection of snapshots of the state of a project at a certain point in its lifecycle, registered publicly.'
        }, {
            label: 'Bookmarks',
            value: 'bookmarks',
            description: 'A collection of related URLs.'
        }, {
            label: 'Proposals',
            value: 'proposals',
            description: 'A collection of ideas to be pursued.'
        }
    ],

    actions: {
        moderationToggled(choice) {
            this.get('collection').set('moderationRequired', choice);
        },
        saveCollection () {
            const collection = this.get('collection');
            collection.collectionType = this.get('collectionType');
            collection.tags = '';
            this.get('collection').save().then(c =>
                this.transitionToRoute('collections.collection', c.id)
            );
        },
    },
});
