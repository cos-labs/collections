import Ember from 'ember';

export default Ember.Controller.extend({

    session: Ember.inject.service(),
    jsonBodyHeight: '400px',
    jsonBtnText: 'Show More ▼',
    editMode: false,
    store: Ember.inject.service(),
    collectionSettings: {},

    types: [
        "Repository",
        "Meeting"
    ],

    modelCache: Ember.computed('collection', function() {
        return this.resetModelCache();
    }),
    formattedTags: Ember.computed('collection.tags', function() {
        const tags = this.get('collection.tags');
        if (tags) {
            return this.get('collection.tags').split(',');
        }
        return [];
    }),
    actions: {
        showEdit () {
            this.set('editMode', true);
        },
        cancelEdit() {
            this.set('editMode', false);
            this.set('modelCache', this.resetModelCache());
        },
        saveEdit () {
            const collection = this.get('collection');
            const location = this.get('modelCache.location');
            const address = this.get('modelCache.address');
            const startDate = this.get('modelCache.startDate');
            const endDate = this.get('modelCache.endDate');

            collection.set('settings', JSON.parse(this.get('modelCache.settings')));
            collection.set('title', this.get('modelCache.title'));
            collection.set('description', this.get('modelCache.description'));
            collection.set('tags', this.get('modelCache.tags'));
            collection.set('location', location);
            collection.set('address', address);
            collection.set('startDate', startDate);
            collection.set('endDate', endDate);
            collection.save();
            this.set('editMode', false);
        },
        updateCacheSettings (jsonSettings) {
            this.set('collection.settings', jsonSettings);
        },
        deleteCollection() {
            this.get('collection').destroyRecord().then(() => this.transitionToRoute('/'));
        },
        removeWorkflow(collectionWorkflow) {
            collectionWorkflow.destroyRecord();
        },
        addWorkflow() {
            const collectionWorkflow = this.get("store").createRecord("collectionWorkflow");

            collectionWorkflow.save().then(collectionWorkflow => {
                const collection = this.get("collection");
                collection.get("collectionWorkflows").addObject(collectionWorkflow);
                collection.save();
            })
        },
        setCollectionType(ev) {
            this.set('collection.type', ev.target.value);
        },
        setWorkflowTypeForWorkflowCollection(collectionWorkflow, ev) {
            collectionWorkflow.set("workflow", this.get("workflows")
                    .find(workflow => workflow.id === ev.target.value));
        },
        saveChanges() { 
            this.get("collection").save()
        },
        setGroupForCollectionWorkflow(collectionWorkflow, ev) {
            collectionWorkflow.set("selectedGroup", this.get("groups")
                    .find(group => group.id === ev.target.value));
        },
        addGroupToCollectionWorkflow(collectionWorkflow) {
            collectionWorkflow.get("authorizedGroups").addObject(collectionWorkflow.get("selectedGroup"));
            collectionWorkflow.save()
        },
        removeCollectionWorkflowGroup(collectionWorkflow, group) {
            collectionWorkflow.get("authorizedGroups").removeObject(group);
            collectionWorkflow.save()
        }



    },
    resetModelCache() {
        const collection = this.get('collection');
        return {
            title: collection.get('title'),
            description: collection.get('description'),
            tags: collection.get('tags'),
            settings: JSON.stringify(collection.get('settings'), null, 2),
            location: collection.get('location'),
            address: collection.get('address'),
            startDate: collection.get('startDate'),
            endDate: collection.get('endDate')
        };
    },

});
