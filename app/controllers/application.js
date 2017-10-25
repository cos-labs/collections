import Ember from 'ember';


export default Ember.Controller.extend({
    session: Ember.inject.service(),

    init() {
        this._super();
        window.addEventListener("scroll", function() {
            let nav = document.getElementById("osf-nav");
            if (window.pageYOffset > 0) {
                nav.style.position = "fixed";
                nav.style.top = "-1px";
            } else {
                nav.style.position = "absolute";
                nav.style.top = "0px";
            }
        })
    },

    actions: {
        login() {
            this.get('session').authenticate('authenticator:osf-token');
        },
    },
});
