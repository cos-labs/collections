import Ember from 'ember';

export default Ember.Component.extend({
    session: Ember.inject.service(),
    tagName: 'section',
    attributeBindings: ['style', "id"],
    classNames: ["landing-paragraph-container"],
    id: Ember.computed("layout.title", function() {
        const layout = this.get("layout");
        if (!layout.title) return "";
        return layout.title.replace(/[.,/#!$%^&*;:{}=`~()]/g, '').replace(/\s/g, '_')
    }),
    style: Ember.computed('layout', function() {
        return Ember.String.htmlSafe(`background-color: ${this.get('layout.background-color')}; color: ${this.get('layout.text-color')}`);
    }),
    logoStyle: Ember.computed('branding.logo', function() {
        return Ember.String.htmlSafe(`background-image: url(${this.get('branding.logo.url')}); height: ${this.get('branding.logo.height')}`);
    }),
});
