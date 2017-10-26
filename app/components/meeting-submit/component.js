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
            this.set('disabled' , true)
            const item = this.get('store').createRecord('item');

            item.set('type', 'meeting');
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
            console.log(node)
            if(node === null){this.set('disabled' , false)}
            await node.save();
            item.set('sourceId', node.get('id'));

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

                                    });
                                });


                            });

                        }, err => {
                            console.log(err)        
                            this.set('disabled' , false)
                        });
                }
            };

            xhr.send(this.get('parameters.fileData.value'));

        },
    },

});
