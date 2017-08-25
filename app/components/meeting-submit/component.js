import Ember from 'ember';
import ENV from '../../config/environment';

function getToken() {
    let token;
    debugger;
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

    actions: {
        async pressButton() {
            const item = this.get('store').createRecord('item');
            item.set('title', this.get('widget.parameters.title.value'));
            item.set('type', 'event');
            item.set('status', 'none');
            item.set('collection', this.get('collection'));

            var node = {};

            if (typeof node.value === 'undefined') node.value = ENV.NODE_GUID;
            const uri = ENV.OSF.waterbutlerUrl + "v1/resources/" + node.value + "/providers/osfstorage/?kind=file&name=" + item.get('title') + "&direct=true";

            const xhr = new XMLHttpRequest();
            xhr.open("PUT", uri, true);
            xhr.withCredentials = false;
            xhr.setRequestHeader('Authorization', 'Bearer ' + getToken());

            let deferred = Ember.RSVP.defer();
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 300) {
                    item.set('fileLink', JSON.parse(xhr.responseText).data.links.download);
                    item.save();
                }
            };

            xhr.send(this.get('widget.parameters.fileData.value'));
        },
    },

});
