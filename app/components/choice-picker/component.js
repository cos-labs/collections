import Ember from 'ember';


export default Ember.Component.extend({

    store: Ember.inject.service(),

    choiceObserver: Ember.observer('chosen', function() {
        Ember.run(async () => {
            let chosenParameter = await this.get('store').queryRecord('parameter', {
                name: this.get('chosen')
            });
            if (!chosenParameter) {
                chosenParameter = this.get('store').createRecord('parameter');
            }
            chosenParameter.set('id', this.get('chosen'));
            chosenParameter.set('value', true);
            chosenParameter.save();
        })
    })

});


