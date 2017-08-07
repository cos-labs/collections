import Ember from 'ember';
import DS from 'ember-data';
import Workflow from 'collections/models/workflow';

const { JSONSerializer } = DS;

function uuid() {
  var uuid = "", i, random;
  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;

    if (i == 8 || i == 12 || i == 16 || i == 20) {
      uuid += "-"
    }
    uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
  }
  return uuid;
}

export default JSONSerializer.extend(DS.EmbeddedRecordsMixin, {

    normalize: function(modelClass, resourceHash, prop) {
        console.log(modelClass);
        console.log(resourceHash);
        if (resourceHash.parameters) {
            resourceHash.parameters = Object.keys(resourceHash.parameters).map((key) => {
                return {
                    id: uuid(),
                    mappingKey: key,
                    widget: resourceHash.id,
                    parameter: resourceHash.parameters[key],
                };
            });
        }
        return this._super(modelClass, resourceHash, prop);
    },

    attrs: {
        parameters: {
            embedded: 'always',
        }
    },

    isSuccess(status) {
        if (status >= 200 && status < 300) return true;
        if (status === 304) return true;
        return false;
    },

});
