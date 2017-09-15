import DS from 'ember-data';
import ENV from '../config/environment';

const { JSONAPIAdapter } = DS;

export default JSONAPIAdapter.extend({
    ajax(url, method, hash) {
        hash = hash || {};
        hash.headers = hash.headers || {};
        return this._super(url, method, hash);
    },
    buildURL(type, id) {
        const base = this._super(...arguments);
        const url = `${ENV.APP.apiURL}${base}`;
        console.log(url);
        return url;
    }
});
