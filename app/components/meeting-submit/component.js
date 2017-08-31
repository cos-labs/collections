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

    actions: {
        async pressButton() {
            const item = this.get('store').createRecord('item');
            item.set('title', this.get('widget.parameters.title.value'));
            item.set('type', 'event');
            item.set('status', 'none');
            item.set('collection', this.get('collection'));
            item.set('category', this.get('widget.parameters.category.value'));
            item.set('location', this.get('widget.parameters.location.value'));
            item.set('startTime', this.get('widget.parameters.startTime.value'));
            item.set('endTime', this.get('widget.parameters.endTime.value'));
            item.set('description', this.get('widget.parameters.description.value'));

            // TODO: REPLACE THESE WITH REAL WIDGETS
            item.set('metadata', '{}');
            item.set('source_id', 'mst3k');
            item.set('url', 'http://example.com');

            const node = this.get('store').createRecord('node');
            node.set('title', this.get('widget.parameters.title.value'));
            node.set('category', 'communication');
            await node.save();

            const uri = ENV.OSF.waterbutlerUrl + "v1/resources/" + node.get('id') + "/providers/osfstorage/?kind=file&name=" + item.get('title') + "&direct=true";

            const xhr = new XMLHttpRequest();
            xhr.open("PUT", uri, true);
            xhr.withCredentials = false;
            xhr.setRequestHeader('Authorization', 'Bearer ' + getToken());

            let deferred = Ember.RSVP.defer();
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
                    item.set('fileLink', JSON.parse(xhr.responseText).data.links.download);
                    item.save();
                }
            };

            xhr.send(this.get('widget.parameters.fileData.value'));
        },
    },

});
