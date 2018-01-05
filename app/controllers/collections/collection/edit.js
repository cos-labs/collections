import Ember from 'ember';

export default Ember.Controller.extend({

    session: Ember.inject.service(),
    jsonBodyHeight: '400px',
    jsonBtnText: 'Show More ▼',
    editMode: false,
    store: Ember.inject.service(),
    collectionSettings: {},

    types: [
        'Repository',
        'Meeting'
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
      addModerator(guid) {
        const collection = this.get('model');
        this.store.query('user', {
          'username': guid
        }).then((users) => {
          collection.get('moderators').pushObject(users.get('firstObject'));
          this.set('newModeratorGuid', '');
          collection.save();
        });
      },
      removeModerator(user) {
        const collection = this.get('model');
        collection.get('moderators').removeObject(user);
        collection.save();
      },
      addAdmin(guid) {
        const collection = this.get('model');
        this.store.query('user', {
          'username': guid
        }).then((users) => {
          collection.get('admins').pushObject(users.get('firstObject'));
          this.set('newAdminGuid', '');
          collection.save();
        });
      },
      removeAdmin(user) {
        const collection = this.get('model');
        collection.get('admins').removeObject(user);
        collection.save();
      },
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
        updateFormSettings (jsonSettings) {
          this.set('collection.submissionSettings', jsonSettings);
        },
        setCollectionType(ev) {
            this.set('collection.type', ev.target.value);
        },
        saveChanges() {
            // TODO: remove componentNames validation when we start supporting dynamically loaded components
            const componentNames = ['section-contributors','section-copyright','section-file-grid','section-hero',
                'section-item-table', 'section-landing-board', 'section-landing-default', 'section-landing-info',
                'section-landing-list', 'section-menu', 'section-paragraph', 'section-schedule', 'section-splash-image',
                'section-sponsors', 'section-title'];
            const jsonSettings = this.get('collection.settings');
            let isValid = true;
            isValid = (jsonSettings.layers !== undefined) && (jsonSettings.branding !== undefined);
            if (!isValid) {
                this.toast.error('Your collection settings are improperly configured. Please make sure you ' +
                    'have a "layers" array and a "branding" object in your settings.', 'Invalid JSON', { timeOut: 20000 });
            }
            for (const l of jsonSettings.layers) {
                if (l.settings === undefined || l.component === undefined || l['section-header'] === undefined) {
                    isValid = false;
                    this.toast.error(`A section of type "${l.component}" is improperly configured. ` +
                        'Please make sure there is a "settings" object,' +
                        ' a "component" field, and a "section-header" field included in the section.', 'Invalid JSON', { timeOut: 20000 });
                    continue;
                }
                // TODO: remove componentNames validation when we start supporting dynamically loaded components
                if (!(componentNames.includes(l.component))) {
                    this.toast.error(`Component "${l.component}" is not a valid component. Check documentation for valid` +
                        ' component names.', 'Invalid Component Name');
                    isValid = false;
                }
            }
            if (isValid) {
                this.get('collection').save().then(() => {
                    this.toast.success('You\'re good to go!', 'Changes Saved');
                });
            }
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
