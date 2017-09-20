import Ember from 'ember';


export default Ember.Component.extend({

    chosen: null,
    create: false,

    store: Ember.inject.service(),

    createNodeObserver: Ember.observer('create', function() {
        Ember.run(() => {
            let create = this.get('widget.parameters.create.value');
            if (create === true) {
                this.get('node').save();
                this.set('widget.parameters.node.value', this.get('node'));
            }
        });
    }),

    parametersObserver: Ember.observer('widget.parameters', 'widget.parameters.create.value', function() {
        this.set('create', this.get('widget.parameters.create.value'));
    }),

    init() {
        const node = this.get('store').createRecord('node');
        node.set('category', 'other');
        node.set('title', 'Created by collections submission form.');
        this.set('node', node);
        this.set('create', this.get('widget.parameters.create.value'));
        return this._super(...arguments);
    },

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

