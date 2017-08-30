import Ember from 'ember';
import DS from 'ember-data';
import Workflow from 'collections/models/workflow';

const { JSONSerializer } = DS;

export default JSONSerializer.extend(DS.EmbeddedRecordsMixin, {

    attrs: {
        sections: {
            embedded: 'always'
        },
        initialParameters: {
            embedded: 'always'
        }
    },

    normalize: function(modelClass, resourceHash, prop) {
        console.log(modelClass);
        console.log(resourceHash);
        if (resourceHash.initialParameters) {
            resourceHash.initialParameters = Object.keys(resourceHash.initialParameters).map((key) => {
                const record = resourceHash.initialParameters[key];
                record['id'] = key;
                return record;
            });
        }
        return this._super(modelClass, resourceHash, prop);
    },

    isSuccess(status) {
        if (status >= 200 && status < 300) return true;
        if (status === 304) return true;
        return false;
    },

});
