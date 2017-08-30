import DS from 'ember-data';
import ENV from '../config/environment';

import DisableableAdapter from '../mixins/disableable-adapter';

const { RESTAdapter } = DS;

export default RESTAdapter.extend(DisableableAdapter, {
    ajax(url, method, hash) {
        hash = hash || {};
        hash.headers = hash.headers || {};
        return this._super(url, method, hash);
    },
    buildURL() {
        const base = this._super(...arguments);
        return `${ENV.workflowUrl}/data${base}.json`;
    },
});

