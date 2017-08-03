// This component is derived from ember-cp-validations. See https://github.com/offirgolan/ember-cp-validations for more information
import Ember from 'ember';

const {
    isEmpty,
    computed,
    defineProperty,
} = Ember;

export default Ember.Component.extend({
    classNames: ['validated-input'],
    classNameBindings: ['showErrorClass:has-error', 'isValid:has-success'],
    model: null,
    value: null,
    type: 'text',
    valuePath: '',
    placeholder: '',
    validation: null,
    isTyping: false,

    notValidating: computed.not('validation.isValidating'),
    didValidate: computed.oneWay('targetObject.didValidate'),
    hasContent: computed.notEmpty('value'),
    isValid: computed.and('hasContent', 'validation.isValid', 'notValidating'),
    isInvalid: computed.oneWay('validation.isInvalid'),

    showErrorMessage: computed('validation.isDirty', 'isInvalid', 'didValidate', function() {
        return (this.get('validation.isDirty') || this.get('didValidate')) && this.get('isInvalid');
    }),

    showWarningMessage: computed('validation.{isDirty, warnings.[]}', 'isValid', 'didValidate', function() {
        return (this.get('validation.isDirty') || this.get('didValidate')) && this.get('isValid') && !isEmpty(this.get('validation.warnings'));
    }),

    init() {
        this._super(...arguments);
        const valuePath = this.get('valuePath');
        defineProperty(this, 'validation', computed.oneWay(`model.validations.attrs.${valuePath}`));
        defineProperty(this, 'value', computed.alias(`model.${valuePath}`));
    },
    actions: {
        pressSubmit() {
            this.sendAction('pressSubmit');
        },
    },
    keyPress(e) {
        if (e.keyCode === 13 && !this.get('large')) {
            e.preventDefault();
            this.send('pressSubmit');
        }
    },
});
