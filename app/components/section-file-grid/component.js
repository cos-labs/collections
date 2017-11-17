import Ember from 'ember';
import ENV from '../../config/environment'; // eslint-disable-line no-unused-vars

export default Ember.Component.extend({

    store: Ember.inject.service(),
    session: Ember.inject.service(),
    router: Ember.inject.service('-routing'),

    classNames: ['section-file-grid'],
    tagName: 'section',
    attributeBindings: ['id'],
    showAsCards: true,
    page: 1,
    page_size: 12,
    q: '',

    pageItems: Ember.computed('page', 'totalPages', function() {
        const page = this.get('page');
        const totalPages = this.get('totalPages');
        const prevPages = Array.from(
            new Array(Math.min(3, page - 1)),
            (x, i) => i + Math.max(page - 3, 1)
        );
        const nextPages = Array.from(
            new Array(Math.min(3, Math.max(0, totalPages - page - 1))),
            (x, i) => i + page + 1
        );
        const pageItems = Array.prototype.concat(prevPages, page, nextPages);
        return pageItems.map(num => ({ pageNumber: num }));
    }),
    totalPages: Ember.computed('items', function() {
        const pages = this.get('items.meta.pagination.pages');
        if (pages > 1) {
            return pages;
        } else {
            return 1;
        }
    }),
    id: Ember.computed('layout.title', function() {
        return `section-${this.get('index')}`;
    }),
    canStepForward: Ember.computed('page', function() {
        return this.get('page') < this.get('totalPages');
    }),
    canStepBackward: Ember.computed('page', function() {
        return this.get('page') > 1;
    }),
    showAsList: Ember.computed('showAsCards', function() {
        return !(this.get('showAsCards'));
    }),
    pageObserver: Ember.observer('q', function() {
        this.set('page', 1);
    }),

    itemsObserver: Ember.observer('q', 'page', 'collection', function() {
        Ember.run(() => {
            const page = this.get('page');
            const q = this.get('q');
            const page_size = this.get('page_size'); // eslint-disable-line camelcase
            const collection = this.get('collection').id;
            this.set('loading', true);
            this.set('items', this.get('store').query('item', {
                q,
                page,
                page_size,
                filter: {
                    collection
                }
            }).then((items) => {
                this.set('loading', false)
                this.set('items', items);
            }));
        });
    }),

    init() {
        Ember.run(() => {
            const page = 1;
            const q = this.get('q');
            const page_size = this.get('page_size'); // eslint-disable-line camelcase
            const collection = this.get('collection').id;
            this.set('loading', true)
            this.get('store').query('item', {
                q,
                page,
                page_size,
                filter: {
                    collection
                }
            }).then((items) => {
                this.set('loading', false)
                this.set('items', items);
            });
        });

        return this._super();
    },


    actions: {
        transition(route, ...models) {
            this.get('router').transitionTo(route, ...models);
        },
        jumpToPage(pageNum) {
            const totalPages = this.get('totalPages');
            if (pageNum < 1) this.set('page', 1);
            else if (pageNum > totalPages) this.set('page', totalPages);
            else this.set('page', pageNum);
        },
        nextPage() {
            const pageNum = this.get('page') + 1;
            this.actions.jumpToPage.call(this, pageNum);
        },
        prevPage() {
            const pageNum = this.get('page') - 1;
            this.actions.jumpToPage.call(this, pageNum);
        }

    }

});
