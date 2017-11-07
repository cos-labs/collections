import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';


export default Ember.Route.extend(ApplicationRouteMixin, {
    session: Ember.inject.service(),
    beforeModel() {

    $( document ).ajaxSuccess(()=> {
	    $('.loading').css('display' , 'none')
	});
	$( document ).ajaxError(()=> {
	    $('.loading').css('display' , 'none')
	});
	$( document ).ajaxStart(()=> {
	    $('.loading').css('display' , 'block')
	});

        const session = this.get('session');
        if (!session.get('isAuthenticated')) {
            session.authenticate('authenticator:osf-token', false).catch(() => {});
        }
    },
});
