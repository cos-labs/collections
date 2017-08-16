import Ember from 'ember';
import DS from 'ember-data';
import Workflow from 'collections/models/workflow';

const { JSONSerializer } = DS;


export default JSONSerializer.extend(DS.EmbeddedRecordsMixin, {

    attrs: {
        parameter: {
            embedded: 'always',
        }
    },

});
