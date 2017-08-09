import Ember from 'ember';


export default Ember.Controller.extend({
    title: '',
    selectedType: 'Meeting',
    description: '',
    location: '',
    address: '',
    startDate: null,
    endDate: null,
    actions: {
        addCollection () {
            const selectedType = this.get('selectedType');
            const startDate = new Date(this.get('startDate'));
            const endDate = new Date(this.get('endDate'));

            const meeting = this.store.createRecord('meeting', {
                title: this.get('title'),
                tags: '',
                settings: { collectionType: selectedType },
                description: this.get('description'),
                location: this.get('location'),
                address: this.get('address'),
                startDate,
                endDate
            });
            meeting.save().then((record) => {
                this.set('newCollectionTitle', '');
                this.transitionToRoute('collection', record);
            });
        }
    }
});
