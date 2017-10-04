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
    truncatedDescription: Ember.computed('description', function() {
        debugger;
        let desc = this.get('description');
        if (desc.length > 300) {
            return desc.substring(0,297) + '...'
        } else return desc;
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
