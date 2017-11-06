import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL,
});

// eslint-disable-next-line array-callback-return
Router.map(function() {
    this.route('index', {
        path: ''
    });
    this.route('tasks', {
        path: "tasks"
    });
    this.route('explore', {
        path: "explore"
    });
    this.route('workflows', {
        path:'workflows'
    }, function() {
        this.route('workflow', {
            path: ":workflow_id"
        });
    });
    this.route('collections', {
        path: 'collections'
    }, function() {
        this.route('my-collection', {
            path: "my-collection"
        });
        this.route("collection", {
            path: ":collection_id"
        }, function() {
            this.route('item', {
                path: 'item/:item_id'
            });
            this.route('submissions');
            this.route('browse');
            this.route('edit');
            this.route('add', {
                path: "add/:case_id"
            });
        });
        this.route('search');
        this.route('browse');
    });
    this.route('create');
    this.route('not-found', {
        path: '/*path'
    });
});

export default Router;
