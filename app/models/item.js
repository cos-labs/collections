import DS from 'ember-data';
import Ember from 'ember';
import moment from 'moment';

const {
    Model,
    attr,
    belongsTo,
} = DS;

export default Model.extend({
    sourceId: attr('string'),
    title: attr('string'),
    description: attr('string'),
    type: attr('string'),
    status: attr('string'),
    url: attr('string'),
    metadata: attr('string'),
    dateAdded: attr('date'),
    dateUpdated: attr('date'),
    location: attr('string'),
    startTime: attr('string'),
    endTime: attr('string'),
    collection: belongsTo('collection'),
    group: belongsTo('group'),
    createdBy: belongsTo('user'),
    fileLink: attr('string'),
    category: attr('string'),
    fileName: attr('string'),
    fileFormat: Ember.computed('fileName', function() {
        let name =  this.get('fileName');
        if (name) {
            let arr = this.get('fileName').split('.')
            return arr[arr.length-1];
        } else {
            return "";
        }
    }),
    startTimeFormatted: Ember.computed('startTime', function () {
        const st = moment(this.get('startTime'));
        return st.format('h:mmA');
    }),
    endTimeFormatted: Ember.computed('startTime', function () {
        const st = moment(this.get('endTime'));
        return st.format('h:mmA');
    }),
    scheduleFilterText: Ember.computed('title', 'location', 'startTimeFormatted', function () {
        return this.get('title') +
            this.get('location') + this.get('startTimeFormatted') + this.get('userName');
    })
});
