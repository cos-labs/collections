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
            const item = this.get('store').createRecord('item');

            item.set('type', this.get('parameters.type.value'));
            item.set('title', this.get('parameters.title.value'));
            item.set('status', 'none');
            item.set('collection', this.get('collection'));
            item.set('category', this.get('parameters.category.value'));
            item.set('location', this.get('parameters.location.value'));
            item.set('startTime', this.get('parameters.startTime.value'));
            item.set('endTime', this.get('parameters.endTime.value'));
            item.set('description', this.get('parameters.description.value'));

            // TODO: REPLACE THESE WITH REAL WIDGETS
            item.set('metadata', '{}');
            let node = this.get('parameters.node.value');
            //const node = this.get('store').createRecord('node');
            //node.set('title', this.get('widget.parameters.title.value'));
            //node.set('category', 'communication');
            await node.save();
            item.set('source_id', node.get('id'));

            const uri = ENV.OSF.waterbutlerUrl + "v1/resources/" + node.get('id') + "/providers/osfstorage/?kind=file&name=" + this.get('parameters.fileName.value') + "&direct=true";

            const xhr = new XMLHttpRequest();
            xhr.open("PUT", uri, true);
            xhr.withCredentials = false;
            xhr.setRequestHeader('Authorization', 'Bearer ' + getToken());

            let deferred = Ember.RSVP.defer();
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
                    item.set('url', 'http://example.com');
                    item.set('fileLink', JSON.parse(xhr.responseText).data.links.download);
                    item.save().then(item => {
                        console.log('about to transition');
                        this.get('router').transitionTo('collection.item', this.get('collection'), item);

                    }, err => console.log(err));
                }
            };

            xhr.send(this.get('parameters.fileData.value'));
        },
    },

});
