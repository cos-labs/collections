import Ember from 'ember';
import ENV from '../../config/environment';

function getToken() {
    let token;
    const session = window.localStorage['ember_simple_auth-session'];
    if (session) {
        token = JSON.parse(session).authenticated;
        if ('attributes' in token) {

            return token.attributes.accessToken;
        }
        return token;
    }
}

export default Ember.Component.extend({

    store: Ember.inject.service(),

    buttonString: 'Save',
    disabled: false,
    description: 'Submit',

    parameters: {},

    init() {
        this.set('parameters.type', {
            value: 'meeting'}
            );
        return this._super(...arguments);
    },

    actions: {
        async pressButton() {
            this.attrs.toggleLoading();
            this.set('disabled' , true)
            const item = this.get('store').createRecord('item');

            item.set('kind', this.get("parameters.kind.value"));
            item.set('title', this.get('parameters.title.value'));
            item.set('status', 'pending');
            item.set('collection', this.get('collection'));
            item.set('category', this.get('parameters.category.value'));
            item.set('location', this.get('parameters.location.value'));
            item.set('startTime', this.get('parameters.startTime.value'));
            item.set('endTime', this.get('parameters.endTime.value'));
            item.set('description', this.get('parameters.description.value'));
            item.set('fileName', this.get('parameters.fileName.value'));

            // TODO: REPLACE THESE WITH REAL WIDGETS
            item.set('metadata', '{}');

            let node = this.get('parameters.node.value');
            if(node == undefined || node === undefined ){
                this.set('disabled' , false)
                this.attrs.toggleLoading();
                this.toast.error('Some fields are missing!');
                return false;
            }
            await node.save();
            item.set('sourceId', node.get('id'));
            const uri = ENV.OSF.waterbutlerUrl + "v1/resources/" + node.get('id') + "/providers/osfstorage/?kind=file&name=" + this.get('parameters.fileName.value') + "&direct=true";

            const xhr = new XMLHttpRequest();
            xhr.open("PUT", uri, true);
            xhr.withCredentials = false;
            xhr.setRequestHeader('Authorization', 'Bearer ' + getToken());

            let deferred = Ember.RSVP.defer();
            xhr.onreadystatechange = () => {
                if ( xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300 ) {

                    item.set('url', 'http://example.com');
                    item.set('fileLink', JSON.parse(xhr.responseText).data.links.download);
                    item.save().then(item => {

                        this.get('store').findRecord(
                            'workflow',
                            this.get('parameters.nextWorkflow.value'),
                            {reload: true}
                            ).then(wf => {
                                let caxe = this.get('store').createRecord('case');
                                caxe.set('collection', this.get('collection'));
                                caxe.set('workflow', wf);
                                caxe.save().then(caxe => {

                                    this.get('store').queryRecord('parameter', {
                                        name: "item",
                                        case: caxe.id
                                    }).then(itemParameter => {

                                        if (!itemParameter) {
                                            itemParameter = this.get('store').createRecord('parameter');
                                            itemParameter.disableAutosave = true;
                                            itemParameter.set('workflow', wf);
                                            itemParameter.set('name', "item");
                                            itemParameter.get('cases').then(cases => cases.addObject(caxe));
                                        }

                                        itemParameter.set('value', item.id);
                                        itemParameter.save().then(itemParameter =>
                                            this.get('router').transitionTo('collections.collection.item', this.get('collection').id, item.id));
                                            this.set('disabled' , false)
                                            this.attrs.toggleLoading();

                                    });
                                });


                            });

                        }, err => {
                            console.log(err)        
                            this.set('disabled' , false)
                            this.attrs.toggleLoading();
                        });
                }else if(xhr.readyState === 4 && xhr.status >= 409){
                    this.attrs.toggleLoading();
                    this.toast.error('Duplicate file!');
                    this.set('disabled' , false)

                }else if(xhr.readyState === 4 && xhr.status >= 400){
                    this.toast.error('Some fields are missing!');

                }
            };
            // The base64 data needs to be converted to binary. We followed this stackoverflow answer:
            // https://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
            const b64Data = this.get('parameters.fileData.value').split(',')[1];
            const contentType = this.get('parameters.fileData.value').split(',')[0];
            const binaryData = atob(b64Data);
            const byteNumbers = new Array(binaryData.length);
            for (let i = 0; i < binaryData.length; i++) {
                byteNumbers[i] = binaryData.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: contentType });
            xhr.send(blob);
        },
    },

});
