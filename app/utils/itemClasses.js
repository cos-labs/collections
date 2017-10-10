/*
 *  Classes for the Item detail view
 */

import Ember from 'ember';
import config from 'ember-get-config';
import loadAll from 'ember-osf/utils/load-relationship';

/*
 *  Construct the individual data pieces shown to user and their states
 */
const ViewData = Ember.Object.extend({
    value: null,
    loaded: false,
    visible: true,
    setValue(newValue) {
        if (Ember.isNone(newValue)) {
            return;
        }
        this.set('value', newValue);
        this.set('loaded', true);
    },
    show() {
        this.set('visible', true);
    },
    hide() {
        this.set('visible', false);
    },
    reset() {
        this.set('value', null);
        this.set('loaded', false);
    },
});

/*
  *  Base item variables and helpers, sets content common to all or most
  */
const Item = Ember.Object.extend({
    viewContent: null,
    setAuthors() {
        const contributors = Ember.A();
        const node = this.get('node');
        loadAll(node, 'contributors', contributors).then(() => {
            this.get('viewContent.authors').setValue(contributors);
        });
    },
    setCommonNodeContent(node) {
        this.set('node', node);
        this.get('viewContent.description').setValue(this.get('item.description'));
        const tags = node.get('tags');
        if (tags.length === 0) {
            this.get('viewContent.tags').set('visible', false);
        } else {
            this.get('viewContent.tags').setValue(tags);
        }
        if (node.get('links.html')) {
            this.get('viewContent.sourceLink').setValue(node.get('links.html'));
        } else {
            this.get('viewContent.sourceLink').set('visible', false);
        }
        this.setAuthors();
    },
    resetContent() {
        this.set('viewContent', Ember.Object.create({
            title: ViewData.create(),
            description: ViewData.create(),
            tags: ViewData.create(),
            authors: ViewData.create(),
            sourceLink: ViewData.create(),
            wiki: ViewData.create({ visible: false }),
            file: ViewData.create({ visible: false }),
        }));
    },
    init () {
        this.resetContent();
        this.get('viewContent.title').setValue(this.get('item.title'));
    },
});

/*
  *  Builds data points for project ('node') type item
  */
const Project = Item.extend({
    setWiki () {
        const node = this.get('node');
        const wikis = node.get('wikis');
        this.get('viewContent.wiki').show();
        if (wikis) {
            wikis.then((result) => {
                if (result.objectAt(0)) {
                    const url = result.objectAt(0).get('links.download');
                    const headers = {};
                    const authType = config['ember-simple-auth'].authorizer;
                    this.get('session').authorize(authType, (headerName, content) => {
                        headers[headerName] = content;
                    });
                    Ember.$.ajax({
                        method: 'GET',
                        headers,
                        url,
                    }).done((data) => {
                        this.get('viewContent.wiki').setValue(data); // eslint-disable-line ember/jquery-ember-run
                    });
                } else {
                    this.get('viewContent.wiki').setValue('This project does not have wikis.');
                }
            });
        } else {
            this.get('viewContent.wiki').setValue('Could not find wiki for this project.');
        }
    },
    init() {
        this._super();
        this.get('store').findRecord('node', this.get('item.sourceId')).then((node) => {
            this.setCommonNodeContent(node);
            this.setWiki();
        });
    },
});


export default {
    viewData: ViewData,
    item: Item,
    project: Project,
    presentation: Project, // TODO: Look at different detail pages for event and presentation items, but for now use project detail page
    event: Project,
    meeting: Project
};
