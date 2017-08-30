import Ember from 'ember';


export default Ember.Component.extend({

    chosen: null,

    store: Ember.inject.service(),

    createNodeObserver: Ember.observer('widget.parameters.create', function() {
        Ember.run(function() {
            let create = this.get('widget.parameters.create.value');
            if (create === true) {
                this.set('widget.parameters.node.value', this.get('node'));
            }
        });
    }),

    init() {
        const node = this.get('store').createRecord('node');
        node.set('category', 'other');
        node.set('title', 'Created by collections submission form.');
        this.set('node', node);
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

