import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),
    modelCache: null,
    filterText: '',
    currentPage: 1,
    loadingMore: false,
    showLoadMore: Ember.computed('collections.meta', function() {
        return this.get('collections.meta.pagination.count') > this.get('collections.length');
    }),
    actions: {
        filter () {
            const collections = this.get('collections');
            const text = this.get('filterText').toLowerCase();
            if (this.get('modelCache') === null) {
                this.set('modelCache', collections);
            }
            this.set('collections', this.get('modelCache').filter(function(item) {
                return item.get('title').toLowerCase().includes(text);
            }));
        },
        clearFilter() {
            this.set('filterText', '');
            return false;
        },
        loadMore() {
            this.set('loadingMore', true);
            this.store.query('collection', {
                page: this.get('currentPage') + 1,
            }).then((data) => {
                this.incrementProperty('currentPage');
                const currentModel = this.get('collections').toArray();
                const arr = data.toArray();
                currentModel.pushObjects(arr);
                this.set('collections', currentModel);
                this.set('loadingMore', false);
            });
        },
    }
});
