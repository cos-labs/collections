import Ember from 'ember';
import ENV from '../../../config/environment';

//

export default Ember.Controller.extend({

    editMode: false,
    loading: false,
    toggleLoading() {
        this.toggleProperty('loading');
    },
    didRender() {
        this.set('loading', false);

    },
    actions: {
        updateProperty(oldValue, newValue) {
            this.set(oldValue, newValue);
            this.set('methodSelected', true); // Change view to show the methods
        },

        transition(name, id) {
            this.transitionToRoute(name, id);
        }
    }

});
