import Ember from 'ember';


export default Ember.Component.extend({

    store: Ember.inject.service(),

    choiceObserver: Ember.observer('chosen', function() {
        Ember.run(() => {
            let chosenParameter = this.get('store').peekRecord('parameter', this.get('chosen'));
            if (!chosenParameter) {
                chosenParameter = this.get('store').createRecord('parameter');
            }
            chosenParameter.set('id', this.get('chosen'));
            chosenParameter.set('value', true);
            chosenParameter.saveWithoutSave();
        })
    })

});


