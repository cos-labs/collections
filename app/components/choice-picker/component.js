import Ember from 'ember';


export default Ember.Component.extend({

    caxe: Ember.inject.service(),
    store: Ember.inject.service(),

    choiceObserver: Ember.observer('chosen', function() {
        Ember.run(async () => {
            let chosenParameter = await this.get('store').queryRecord('parameter', {
                name: this.get('chosen')
            });
            if (!chosenParameter) {
                chosenParameter = this.get('store').createRecord('parameter');
                let caxe = await this.get('store').findRecord('case', this.get('caxe.activeCase'));
                chosenParameter.set('case', caxe);
                let wf = await caxe.get('workflow')
                chosenParameter.set('workflow', wf);
                chosenParameter.set('name', this.get('chosen'));
            }
            this.get('widget.parameters.choices.value').filter(choice => {
                return chosenParameter.get('name') !== choice.parameter;
            }).map(async (choice) => {
                let parameter = await this.get('store').queryRecord('parameter', {
                    name: choice.parameter
                });
                if (!parameter) {
                    parameter = this.get('store').createRecord('parameter');
                    let caxe = await this.get('store').findRecord('case', this.get('caxe.activeCase'));
                    parameter.set('case', caxe);
                    let wf = await caxe.get('workflow');
                    parameter.set('workflow', wf);
                    parameter.set('name', choice.parameter);
                }
                parameter.set('value', false);
                await parameter.save();
            });
            chosenParameter.set('value', true);
            await chosenParameter.save();
        })
    })

});


