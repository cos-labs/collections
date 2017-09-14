import DS from 'ember-data';
import ENV from '../config/environment';

const { RESTAdapter } = DS;

export default RESTAdapter.extend({
    ajax(url, method, hash) {
        hash = hash || {};
        hash.headers = hash.headers || {};
        return this._super(url, method, hash);
    },
    buildURL() {
        const base = this._super(...arguments);
        return `${ENV.APP.apiURL}${base}`;
    },
});
