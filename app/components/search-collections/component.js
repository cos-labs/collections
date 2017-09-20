import Ember from 'ember';
import ENV from '../../config/environment';

export default Ember.Component.extend({
    session: Ember.inject.service(),
    searchText: '',
    results: null,
    actions: {
        search() {
            // make a call to the collections endpoint
            const input = this.get('searchText');
            return Ember.$.get(`${ENV.apiBaseUrl}/api/collections/search/?text__contains=${input}`, (data) => {
                debugger;
                this.set('results', data);
            });
        }
    }
});
