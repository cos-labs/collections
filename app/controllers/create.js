import Ember from 'ember';

  export default Ember.Controller.extend({
    title: '',
    collectionWorkflows: [],
    description: '',
    moderationStyle: false,
    collectionType: 'repository',
    submissionStyle: true,

    actions: {
        moderationToggled(choice) {
            this.get('collection').set('moderationRequired', choice);
            this.set('moderationRequired', choice);
            console.log('set moderationRequired value to', choice);
        },
        typeToggled(choice) {
            this.get('collection').set('collectionType', choice);
            this.set('collectionType', choice);
            console.log('set collection type to', choice);
        },
        submissionStyleToggled(choice) {
            this.get('collection').set('anyoneCanSubmit', choice);
            this.set('submissionStyle', choice);
            console.log('set anyoneCanSubmit to', choice);
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
