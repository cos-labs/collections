import Ember from 'ember';


export default Ember.Component.extend({

    buttonString: 'Save',
    disabled: false,
    description: 'Submit',

    actions: {
        async pressButton() {
            const parameters = this.attrs.widget.value.parameters;
            this.attrs.saveParameter(parameters.parameter, {
                value: await this.get('action')(this),
                state: ['defined'],
            });
        },
    },

});
