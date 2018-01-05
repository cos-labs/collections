import Ember from 'ember';
import formTemplate from '../../utils/custom_form';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  store: Ember.inject.service(),
  metaDataString: Ember.computed('output', function() {
    return JSON.stringify(this.get('output'));
  }),
  actions: {

  },
  didRender() {
    const that = this;
    let originalForm = this.get('input');
    if (!originalForm.options) {
      originalForm['options'] = {};
    }
    if (!originalForm['view']) {
      originalForm['view'] = 'web-edit';
    }
    originalForm.options.form = {
      "buttons": {
        "submit": {
          "label": "Save Changes to Metadata",
          "click": function() {
            var value = this.getValue();
            that.set('output', value);
          }
        }
      }
    };

    $(document).ready(function() {
      $("#myAlpacaForm").alpaca(originalForm);
    });
  }
});
