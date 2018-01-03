import Ember from 'ember';
import formTemplate from '../../utils/custom_form';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  store: Ember.inject.service(),
  form: formTemplate,
  // output: {}, //TODO: define this in the parent route instead
  metaDataString: Ember.computed('output', function() {
    return JSON.stringify(this.get('output'));
  }),
  actions: {

  },
  didRender() {
    const that = this;
    let originalForm = this.get('form');
    originalForm.options.form = {
      "buttons": {
        "submit": {
          "label": "Save Metadata",
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
