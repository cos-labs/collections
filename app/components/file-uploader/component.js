import Ember from 'ember';
// import ENV from 'analytics-dashboard/config/environment';

export default Ember.Component.extend({

    fileChosen: false,

    parameters: {},

    fileNameObserver: Ember.observer('widget.parameters.fileName', function() {
        this.set('parameters.fileName', this.get('widget.parameters.fileName'));
    }),

    fileDataObserver: Ember.observer('widget.parameters.fileData', function() {
        this.set('parameters.fileData', this.get('widget.parameters.fileData'));
    }),

    init() {
        this.set('parameters.fileName', this.get('widget.parameters.fileName'));
        this.set('parameters.fileData', this.get('widget.parameters.fileData'));
        return this._super(...arguments);
    },

    actions: {

        uploadFile(ev) {
            const reader = new FileReader();
            const fileHandle = ev.target.files[0];
            const saveParameter = this.attrs.saveParameter;
            const filenameParts = ev.currentTarget.value.split('\\');
            const filename = filenameParts[filenameParts.length - 1];

            reader.onloadend = (ev) => {
                this.set('parameters.fileName.value',  filename);
                this.set('fileChosen', true);
                this.set('parameters.fileData.value',  ev.target.result);
            };

            reader.readAsBinaryString(fileHandle);
        }

    },

});
