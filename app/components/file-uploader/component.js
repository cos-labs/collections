import Ember from 'ember';
// import ENV from 'analytics-dashboard/config/environment';

export default Ember.Component.extend({


    didRender() {
        console.log('hello')
    },

    actions: {

        uploadFile(ev) {
            const reader = new FileReader();
            const fileHandle = ev.target.files[0];
            const saveParameter = this.attrs.saveParameter;
            const filenameParts = ev.currentTarget.value.split('\\');
            const filename = filenameParts[filenameParts.length - 1];

            reader.onloadend = (ev) => {
                this.set('widget.parameters.fileName.value',  filename);
                this.set('widget.parameters.fileData.value',  ev.target.result);
            };

            reader.readAsBinaryString(fileHandle);
        },
    },

});
