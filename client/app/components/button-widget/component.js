import Ember from 'ember';


export default Ember.Component.extend({

    init() {
        this._super(...arguments);
    },

    didReceiveAttrs() {
        this.set('widgetClasses', this.attrs.widget.value.css_classes)
    },

    buttonString: 'Save',

    widgetClasses: ['section-submit-button'],
    widgetClassString: Ember.computed('widgetClasses', function() {
        let classArr = this.get('widgetClasses')
        if (classArr === undefined ||
            classArr.constructor !== Array
        ) {
            classArr = [];
        }
        return classArr.join(' ');
    }),

    actions: {
        async pressButton() {
            //try {
                const parameters = this.attrs.widget.value.parameters;
                let result = await this.get('action')(this);
                console.log(result);
                this.attrs.saveParameter(parameters.parameter, {
                    value: result,
                    state: ['defined']
                });
            //} catch(ex) {
            //    alert(ex);
            //}
        }
    }

});
