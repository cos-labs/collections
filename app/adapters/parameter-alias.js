import DS from 'ember-data';
import ENV from '../config/environment';

const { JSONAPIAdapter } = DS;

export default JSONAPIAdapter.extend({

    caxe: Ember.inject.service(),

    ajax(url, method, hash) {
        hash = hash || {};
        hash.headers = hash.headers || {};
        hash.headers['X-CSRFTOKEN'] = this.get('session.data.authenticated.csrfToken');
        return this._super(url, method, hash);
    },

    buildURL(type, id, snapshot, requestType, query) {
        const base = this._super(...arguments);
        let url = [];
        url.push(ENV.APP.apiURL)
        let caxe = this.get('caxe.activeCase.id');
        if (caxe) {
            url.push(`/cases/${caxe}`);
        }
        url.push(base);
        let builtUrl = url.join('');
        return builtUrl;
    }

    });
