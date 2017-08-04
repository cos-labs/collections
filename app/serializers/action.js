import Ember from 'ember';
import DS from 'ember-data';
import Workflow from 'collections/models/workflow';

const { JSONSerializer } = DS;


export default JSONSerializer.extend(DS.EmbeddedRecordsMixin, {

    attrs: {
        sections: {
            embedded: 'always',
        }
    },

    isSuccess(status) {
        if (status >= 200 && status < 300) return true;
        if (status === 304) return true;
        return false;
    },

});
