import DS from 'ember-data';
import ENV from '../config/environment';

const { RESTAdapter } = DS;

export default RESTAdapter.extend({
    caxe: ember.inject.service(),
    ajax(url, method, hash) {
        hash = hash || {};
        hash.headers = hash.headers || {};
        return this._super(url, method, hash);
    },
    buildURL(type, id) {
        const base = this._super(...arguments);
        return `${ENV.APP.apiUrl}${base}`;
    }
});
