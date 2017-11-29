import Ember from 'ember';
import Compiler from 'npm:ember-source/dist/ember-template-compiler';

export default Ember.Component.extend({

    classNames: ['case-details'],
    parameters: {},
    store: Ember.inject.service(),
    router: Ember.inject.service('-routing'),
    loading: true,
    caseDescriptionTemplate: Ember.computed(async function() {
        const refreshParameters = () => {
            this.get('store').findRecord('case', this.get('case.id'), { reload: true }).then((caxe) => {
                this.set('parameters', this.get('case.parameters').reduce((parameters, parameter) => {
                    parameters[parameter.get('name').replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); })] = parameter.get('value');
                    return parameters;
                }, {}));
            });
        };
        refreshParameters();
        this.set('refreshParameters', setInterval(refreshParameters, 10000));
        const wf = await this.get('store').findRecord('workflow', this.get('case.workflow.id'), { reload: true });
        const templateName = `case-description-${this.get('case.id')}`;
        Ember.TEMPLATES[templateName] = Compiler.compile(wf.get('caseDescription'));
        this.set('loading', false);
        return templateName;
    }),

    willDestroyElement() {
        clearInterval(this.get('refreshParameters'));
    },

    actions: {
        continueCase(caxe, collection) {
            this.get('router').transitionTo('collections.collection.add', this.get('collection').id, this.get('case').id);
        }
    }

});

// TODO: flagged for deletion but keeping for now just in case some
// of this logic is necessary, or a class name is
