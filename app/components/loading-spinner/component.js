import Component from '@ember/component';

export default Component.extend({
	classNames: ['loading'],
	didRender(){
		if((document.URL).includes("add")  || (document.URL).includes("submissions")){
			$('.loading').addClass('full-page')

		}
	}
});

