import Ember from 'ember';


export default Ember.Component.extend({

    chosen: null,
    create: false,
    node_created: false,

    store: Ember.inject.service(),

    createNodeObserver: Ember.observer('parameters.enable.value', function() {
        if (this.get('parameters.enable.value') === true) {
            if (this.nodeCreated === false) {
                node.save();
                this.nodeCreated = true;
            }
            Ember.run(() => {
                this.set('parameters.node.value', this.get('node'));
            });
        }
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
            //const parameters = this.get('parameters');
            //this.attrs.saveParameter(parameters.parameter, {
            //    value: await this.get('action')(this),
            //    state: ['defined'],
            //});
        },
    },

});

