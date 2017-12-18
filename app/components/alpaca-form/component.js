import Ember from 'ember';
import formTemplate from '../../utils/custom_form';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  store: Ember.inject.service(),
  form: formTemplate,
  actions: {},
  didRender() {
    const that = this;
      $(document).ready(function() {
        $("#myAlpacaForm").alpaca(that.get('form'));
      });
  }
});
