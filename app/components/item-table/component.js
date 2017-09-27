import Ember from 'ember';
import _ from 'lodash';
import ENV from '../../config/environment';


export default Ember.Component.extend({
    filterString: '',
    eventFilter: '',
    searchResults: null,
    searchInput: '',
    theadStyle: Ember.computed('layout', function () {
        const headerColor = this.get('layout.background_color') ? this.get('layout.background_color') : this.get('branding.colors.primary');
        const textColor = this.get('layout.text_color') ? this.get('layout.text_color') : this.get('branding.colors.text');
        return Ember.String.htmlSafe(`background-color: ${headerColor}; color: ${textColor};`);
    }),
    eventTypes: Ember.computed('model', function () {
        return this.get('model.items').then((results) => {
            const eventsList = [];
            results.forEach(function (i) {
                eventsList.push(i.get('type'));
            });
            return _.uniq(eventsList).sort();
        });
    }),
    actions: {
        search() {
            // make a call to the collections endpoint
            const input = this.get('searchInput');
            const modelId = this.get('model.id');
            let query = `${ENV.apiBaseUrl}/api/items/search/?collection=${modelId}`;
            if (input !== '') {
                query += `&text__contains=${input}`;
            }
            return Ember.$.get(query, (data) => {
                this.set('searchResults', data);
            });
        }
    },
    didReceiveAttrs() {
        const modelId = this.get('model.id');
        Ember.$.get(`${ENV.apiBaseUrl}/api/items/search/?collection=${modelId}`, (data) => {
            this.set('searchResults', data);
        });
    }
});
