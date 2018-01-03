import Ember from 'ember';
import ENV from '../../../config/environment';

//
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

export default Ember.Controller.extend({

    editMode: false,
    loading: false,
    metadata: {},
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
        },

        uploadFile(ev) {
            const reader = new FileReader();
            const fileHandle = ev.target.files[0];
            const filenameParts = ev.currentTarget.value.split('\\');
            const filename = filenameParts[filenameParts.length - 1];

            reader.onloadend = (ev) => {
                this.set('fileName', filename);
                this.set('fileChosen', true);
                const result = ev.target.result;
                this.set('fileData', result);
            };
            reader.readAsDataURL(fileHandle);
        },

        async submit() {

            const node = this.get('store').createRecord('node');
            node.set('category', 'other');
            node.set('title', 'Created by collections submission form.');
            node.set('public', true);
            await node.save();

            this.get('item').set('sourceId', node.get('id'));
            const uri = `${ENV.OSF.waterbutlerUrl}v1/resources/${node.get('id')}/providers/osfstorage/?kind=file&name=${this.get('fileName')}&direct=true`;

            const xhr = new XMLHttpRequest();
            xhr.open('PUT', uri, true);
            xhr.withCredentials = false;
            xhr.setRequestHeader('Authorization', `Bearer ${getToken()}`);

            const deferred = Ember.RSVP.defer();
            const item = this.get('item');
            item.set('collection', this.get('collection'));
            item.set('kind', 'repository');
            item.set('status','pending');
            item.set('metadata', this.get('metadata'));
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
                    item.set('url', 'http://example.com');
                    item.set('fileLink', JSON.parse(xhr.responseText).data.links.download);
                    item.save().then(() =>
                        this.transitionToRoute('items.item.index', item.id));
                } else if (xhr.readyState === 4 && xhr.status >= 409) {
                    this.attrs.toggleLoading();
                    this.toast.error('Duplicate file!');
                    this.set('disabled', false);
                } else if (xhr.readyState === 4 && xhr.status >= 400) {
                    this.toast.error('Some fields are missing!');
                }
            };
            // The base64 data needs to be converted to binary.
            // We followed this stackoverflow answer:
            // https://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
            if (this.get('fileData') === null) {
                this.set('disabled', false);
                this.attrs.toggleLoading();
                this.toast.error('Some fields are missing!');
                return false;
            }
            const b64Data = this.get('fileData').split(',')[1];
            const contentType = this.get('fileData').split(',')[0];
            const binaryData = atob(b64Data);
            const byteNumbers = new Array(binaryData.length);
            for (let i = 0; i < binaryData.length; i++) {
                byteNumbers[i] = binaryData.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], {type: contentType});
            xhr.send(blob);
        }
    }

});
