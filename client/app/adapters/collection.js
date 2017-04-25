import Ember from 'ember';
import DS from 'ember-data';


export default DS.JSONAPIAdapter.extend({
    session: Ember.inject.service(),
    host: 'http://localhost:8000',
    namespace: 'api',
    ajax(url, method, hash) {
        hash = hash || {};
        hash.crossOrigin = true;
        hash.xhrFields = { withCredentials: true };
        return this._super(url, method, hash);
    },
    buildURL() {
        var base = this._super(...arguments);
        return `${base}/`;
    }
});
