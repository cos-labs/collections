import Ember from 'ember';
import _ from 'lodash';
import ENV from '../../config/environment';


export default Ember.Component.extend({
    filterString: '',
    eventFilter: '',
    searchResults: null,
    pageNumber: 1,
    totalPages: 1,
    searchInput: '',
    pageNumberButtons:'',
    tagName: 'section',
    theadStyle: Ember.computed('layout', function () {
        const headerColor = this.get('layout.background_color') ? this.get('layout.background_color') : this.get('branding.colors.primary');
        const textColor = this.get('layout.text_color') ? this.get('layout.text_color') : this.get('branding.colors.text');
        return Ember.String.htmlSafe(`background-color: ${headerColor}; color: ${textColor};`);
    }),
    eventTypes: Ember.computed('model', function () {
        return this.get('model.items').then((results) => {
            const eventsList = [];
            results.forEach(function (i) {
                eventsList.push(i.get('type'));
            });
            return _.uniq(eventsList).sort();
        });
    }),
    nextPageAvailable: Ember.computed('pageNumber', 'totalPages', function () {
        return this.get('pageNumber') < this.get('totalPages');
    }),
    previousPageAvailable: Ember.computed('pageNumber', function() {
        return this.get('pageNumber') > 1;
    }),
    didReceiveAttrs() {
        const modelId = this.get('model.id');
        const pageNumber = this.get('pageNumber');
        Ember.$.get(`${ENV.apiBaseUrl}/api/items/search/?collection=${modelId}&page=${pageNumber}`, (data) => {
            this.set('searchResults', data);

            this.set('totalPages', data.meta.pagination.pages);

            let totalPages = this.get('totalPages');
            let buttonHTML=[];
            for(let i = 1; i <= totalPages; i++){
                buttonHTML.push(i)
            }
            this.set('pageNumberButtons' , buttonHTML)
        });



    },
    didRender(){
        if(this.get('pageNumber') === 1){
            $("li[data-id='1']").addClass("active")
        }

        if( this.get('pageNumber')  < this.get('totalPages')){
            $('.nextPage').removeClass("disabled");
        }else{
            $('.nextPage').addClass("disabled");
        }

        if( this.get('pageNumber') === 1){
            $('.prevPage').addClass("disabled");
        }else{
            $('.prevPage').removeClass("disabled");
        }
    },
    actions: {
        search() {
            // make a call to the collections endpoint
            const input = this.get('searchInput');
            const modelId = this.get('model.id');
            const pageNumber = 1;
            this.set('pageNumber' , 1)
            let query = `${ENV.apiBaseUrl}/api/items/search/?collection=${modelId}&page=${pageNumber}`;
            if (input !== '') {
                query += `&text__contains=${input}`;
            }
            return Ember.$.get(query, (data) => {
                this.set('searchResults', data);
                this.set('totalPages', data.meta.pagination.pages);
                let totalPages = this.get('totalPages');
                let buttonHTML=[];
                for(let i = 1; i <= totalPages; i++){
                    buttonHTML.push(i)
                }
                this.set('pageNumberButtons' , buttonHTML)
                $("li[data-id='1']").addClass("active")

            });

        },
        loadPage(pageNo) {
            $('.pagination li').removeClass('active')
            $("li[data-id='" + pageNo +"']").addClass("active")

            const modelId = this.get('model.id');
            const input = this.get('searchInput');

            Ember.$.get(`${ENV.apiBaseUrl}/api/items/search/?collection=${modelId}&page=${pageNo}&text__contains=${input}`, (data) => {
                this.set('searchResults', data);
                this.set('totalPages', data.meta.pagination.pages);
                this.set('pageNumber', pageNo);
            });
        },
        nextPage() {
            if (this.get('nextPageAvailable')) {
                this.send('loadPage', this.get('pageNumber') + 1);
            } else {
                console.log('you are already on the last page');
            }
        },
        prevPage() {
            if (this.get('previousPageAvailable')) {
                this.send('loadPage', this.get('pageNumber') - 1);
            }
            else {
                console.log('you are already on the first page');
            }

        }
    }
});
