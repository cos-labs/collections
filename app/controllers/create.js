import Ember from 'ember';

export default Ember.Controller.extend({
    title: '',
    collectionWorkflows: [],
    description: '',
    workflows: undefined,
    collectionType: undefined,

    typeList: [
        {
            label: 'Meeting',
            value: "meeting",
            description: "A meeting is a collection of talks and posters. Each talk or poster should have title and description."
        }, {
            label: 'Repository',
            value: "repository",
            description: "A repository is a collection of items with the same data fields attached to each ofthem."
        }, {
            label: 'Appendix',
            value: "appendix",
            description: "An appendix is a collection of additional materials that relate to apublished article."
        }, {
            label: 'Preprints',
            value: "preprints",
            description: "A collection of articles that{ may be considered for publishin but have not yet been published."
        }, {
            label: 'Registrations',
            value: "registrations",
            descriptions: "A collection of snapshots of the state of a project at a certain point in its lifecycle, registered publicly."
        }, {
            label: 'Bookmarks',
            value: "bookmarks",
            description: "A collection of related URLs."
        }, {
            label: 'Proposals',
            value: "proposals",
            description: "A collection of ideas to be pursued."
        }
    ],

    actions: {

        addCollection () {
            const collection = this.store.createRecord('collection', {
                title: this.get('title'),
                location: this.get('location'),
                address: this.get('address'),
                tags: '',
                settings: {},
                collectionType: this.get('collectionType'),
                description: this.get('description'),
            });
            collection.save().then(record => {
                this.set('newCollectionTitle', '');
                collection.save().then(collection => {
                    Ember.RSVP.all(this.get("collectionWorkflows").map(cw => {
                        cw.set("collection", collection);
                        cw.save().then(cw => {
                            collection.get("collectionWorkflows").addObject(cw);
                        });
                    })).then(cws => this.transitionToRoute('collections.collection', record.id));
                })
            });
        },

        removeWorkflow(collectionWorkflow) {
            this.get("collectionWorkflows").removeObject(collectionWorkflow);
            collectionWorkflow.destroyRecord();
        },
        addWorkflow() {
            const collectionWorkflow = this.get("store").createRecord("collectionWorkflow");
            this.get("collectionWorkflows").addObject(collectionWorkflow)
        },
        setCollectionType(ev) {
            this.set('collection.type', ev.target.value);
        },
        setWorkflowTypeForWorkflowCollection(collectionWorkflow, ev) {
            collectionWorkflow.set("workflow", this.get("workflows")
                    .find(workflow => workflow.id === ev.target.value));
        },
        setGroupForCollectionWorkflow(collectionWorkflow, ev) {
            collectionWorkflow.set("selectedGroup", this.get("groups")
                    .find(group => group.id === ev.target.value));
        },
        addGroupToCollectionWorkflow(collectionWorkflow) {
            collectionWorkflow.get("authorizedGroups")
                .addObject(collectionWorkflow.get("selectedGroup"));
        },
        removeCollectionWorkflowGroup(collectionWorkflow, group) {
            collectionWorkflow.get("authorizedGroups").removeObject(group);
            collectionWorkflow.save()
        }
    },
});
