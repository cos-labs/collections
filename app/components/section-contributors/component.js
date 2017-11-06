import Ember from 'ember';
import _ from 'lodash';
import ENV from '../../config/environment';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    session: Ember.inject.service(),
    data: Ember.computed('layout', function() {
        const dataSource = this.get('layout.data');
        return this.get('model.settings').data[dataSource];
    }),
    id: Ember.computed("layout.title", function() {
        return "section-" + this.get("index");
    }),
    tagName: "section",
    attributeBindings: ["style", "id"],
    classNames: ["users", "narrow"],
    style: Ember.computed('layout', function() {
        return Ember.String.htmlSafe(`background-color: ${this.get('layout.background_color')}; color: ${this.get('layout.text_color')};`);
    }),
    users: Ember.computed('model.items', function() {
        const items = this.get('model.items');
        const userIDs = [];
        items.forEach((item) => {
            const userID = item.get('createdBy.id');
            if (userID !== undefined) {
                userIDs.push(userID);
            }
        });
        return _.uniq(userIDs).map((userID) => {
            return this.get('store').findRecord('user', userID);
        });
    })
});
