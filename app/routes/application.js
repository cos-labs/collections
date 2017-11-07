import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';


export default Ember.Route.extend(ApplicationRouteMixin, {
	session: Ember.inject.service(),
	beforeModel() {
		
		// let timer;
		// $( document ).ajaxStart(()=> {
		// 	timer && clearTimeout(timer);
		// 	timer = setTimeout(function()
		// 	{
		// 		$('.loading').css('display' , 'block')
		// 	},
		// 	500);
		// });
		// $( document ).ajaxStop(()=>{
		// 	clearTimeout(timer);
		// 	$('.loading').css('display' , 'none')
		// });

		const session = this.get('session');
		if (!session.get('isAuthenticated')) {
			session.authenticate('authenticator:osf-token', false).catch(() => {});
		}
	},
});
