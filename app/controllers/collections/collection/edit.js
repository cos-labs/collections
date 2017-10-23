import Ember from 'ember';

export default Ember.Controller.extend({

    session: Ember.inject.service(),

    editMode: false,
    collectionSettings: {},

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
    settingsString: Ember.computed('collection.settings', function() {
        return JSON.stringify(this.get('collection.settings'), null, 2);
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
            this.set('modelCache.settings', JSON.stringify(jsonSettings, null, 2));
        },
        deleteCollection() {
            this.get('collection').destroyRecord().then(() => this.transitionToRoute('/'));
        },
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
