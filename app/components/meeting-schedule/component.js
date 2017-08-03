import Ember from 'ember';
import _ from 'lodash';

export default Ember.Component.extend({
    session: Ember.inject.service(),
    store: Ember.inject.service(),
    filterString: '',
    trackFilter: '',
    roomFilter: '',
    data: Ember.computed('layout', function () {
        const dataSource = this.get('layout.data');
        return this.get('model.settings').data[dataSource];
    }),
    containerStyle: Ember.computed('layout', function() {
        const bg = this.get('layout.background_color') ? `background-color:${this.get('layout.background_color')};` : '';
        const txt = this.get('layout.text_color') ? `color: ${this.get('layout.text_color')};` : '';
        return Ember.String.htmlSafe(bg + txt);
    }),
    items: Ember.computed('model', function () {
        // fetches the items, sorts them into buckets by start time, returns them as a list
        return this.get('model.items').then((results) => {
            const tempList = [];
            results.forEach(function (i) {
                tempList.push(i);
            });
            const tempItems = tempList.sort(function (a, b) {
                if (a.get('startTime') === b.get('startTime')) {
                    if (a.get('endTime') === b.get('endTime')) {
                        return a.get('location') - b.get('location');
                    } else {
                        return a.get('endTime') - b.get('endTime');
                    }
                } else {
                    return a.get('startTime') - b.get('startTime');
                }
            });

            const retList = [];
            tempItems.forEach(function (i) {
                if (retList.length === 0) {
                    retList.push([i]);
                } else if (retList[retList.length - 1][0].get('startTime').toISOString() === i.get('startTime').toISOString()) {
                    retList[retList.length - 1].push(i);
                } else {
                    retList.push([i]);
                }
            });
            return retList;
        });
    }),
    rooms: Ember.computed('model', function () {
        return this.get('model.items').then((results) => {
            const roomsList = [];
            results.forEach(function (i) {
                roomsList.push(i.get('location'));
            });
            return _.uniq(roomsList).sort();
        });
    }),
    tracks: Ember.computed('model', function () {
        return this.get('model.items').then((results) => {
            const tracksList = [];
            results.forEach(function (i) {
                if (i.get('track')) {
                    tracksList.push(i.get('track'));
                }
            });
            return _.uniq(tracksList).sort();
        });
    }),
    selectedItem: Ember.computed('selectedItemId', 'model', function() {
        const id = parseInt(this.get('selectedItemId'), 10);
        if (id >= 0) {
            return this.get('store').findRecord('item', id).then((i) => {
                return i;
            });
        }
    }),
    selectedItemId: Ember.computed(function () {
        // return this.get('model.items').then((results) => {
        //     console.log(results.get('firstObject.id'));
        //     return results.get('firstObject.id');
        // });
        return 2;
    })
});
