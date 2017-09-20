import DS from 'ember-data';
import ENV from '../config/environment';

const { JSONAPIAdapter } = DS;

export default JSONAPIAdapter.extend({

    ajax(url, method, hash) {
        hash = hash || {};
        hash.headers = hash.headers || {};
        return this._super(url, method, hash);
    },

    buildURL(type, id, snapshot, requestType, query) {
        const base = this._super(...arguments);
        let url = [];
        url.push(ENV.APP.apiURL)
        url.push(base);
        let builtUrl = url.join('');
        return builtUrl;
    }

    });
