"use strict";



define('collections/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var JSONAPIAdapter = _emberData.default.JSONAPIAdapter;
  exports.default = JSONAPIAdapter.extend({});
});
define('collections/adapters/citation', ['exports', 'ember-osf/adapters/citation'], function (exports, _citation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _citation.default;
    }
  });
});
define('collections/adapters/collection', ['exports', 'ember', 'ember-data', 'collections/config/environment'], function (exports, _ember, _emberData, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var JSONAPIAdapter = _emberData.default.JSONAPIAdapter;
    exports.default = JSONAPIAdapter.extend({
        session: _ember.default.inject.service(),
        host: _environment.default.apiBaseUrl,
        namespace: 'api',
        ajax: function ajax(url, method, hash) {
            hash = hash || {};
            hash.crossOrigin = true;
            hash.xhrFields = { withCredentials: true };
            hash.headers = hash.headers || {};
            hash.headers['X-CSRFTOKEN'] = this.get('session.data.authenticated.csrfToken');
            return this._super(url, method, hash);
        },
        buildURL: function buildURL() {
            var base = this._super.apply(this, arguments);
            return base + '/';
        }
    });
});
define('collections/adapters/comment-report', ['exports', 'ember-osf/adapters/comment-report'], function (exports, _commentReport) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _commentReport.default;
    }
  });
});
define('collections/adapters/comment', ['exports', 'ember-osf/adapters/comment'], function (exports, _comment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _comment.default;
    }
  });
});
define('collections/adapters/contributor', ['exports', 'ember-osf/adapters/contributor'], function (exports, _contributor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contributor.default;
    }
  });
});
define('collections/adapters/draft-registration', ['exports', 'ember-osf/adapters/draft-registration'], function (exports, _draftRegistration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _draftRegistration.default;
    }
  });
});
define('collections/adapters/file-contents', ['exports', 'ember-osf/adapters/file-contents'], function (exports, _fileContents) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fileContents.default;
    }
  });
});
define('collections/adapters/file-provider', ['exports', 'ember-osf/adapters/file-provider'], function (exports, _fileProvider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fileProvider.default;
    }
  });
});
define('collections/adapters/file-version', ['exports', 'ember-osf/adapters/file-version'], function (exports, _fileVersion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fileVersion.default;
    }
  });
});
define('collections/adapters/file', ['exports', 'ember-osf/adapters/file'], function (exports, _file) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _file.default;
    }
  });
});
define('collections/adapters/group', ['exports', 'collections/adapters/collection'], function (exports, _collection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _collection.default.extend({});
});
define('collections/adapters/institution', ['exports', 'ember-osf/adapters/institution'], function (exports, _institution) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _institution.default;
    }
  });
});
define('collections/adapters/item', ['exports', 'collections/adapters/collection'], function (exports, _collection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _collection.default.extend({});
});
define('collections/adapters/license', ['exports', 'ember-osf/adapters/license'], function (exports, _license) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _license.default;
    }
  });
});
define('collections/adapters/log', ['exports', 'ember-osf/adapters/log'], function (exports, _log) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _log.default;
    }
  });
});
define('collections/adapters/meeting', ['exports', 'collections/adapters/collection'], function (exports, _collection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _collection.default.extend({});
});
define('collections/adapters/metaschema', ['exports', 'ember-osf/adapters/metaschema'], function (exports, _metaschema) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _metaschema.default;
    }
  });
});
define('collections/adapters/node-link', ['exports', 'ember-osf/adapters/node-link'], function (exports, _nodeLink) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nodeLink.default;
    }
  });
});
define('collections/adapters/node', ['exports', 'ember-osf/adapters/node'], function (exports, _node) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _node.default;
    }
  });
});
define('collections/adapters/osf-adapter', ['exports', 'ember-osf/adapters/osf-adapter'], function (exports, _osfAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _osfAdapter.default;
    }
  });
});
define('collections/adapters/preprint-provider', ['exports', 'ember-osf/adapters/preprint-provider'], function (exports, _preprintProvider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _preprintProvider.default;
    }
  });
});
define('collections/adapters/preprint', ['exports', 'ember-osf/adapters/preprint'], function (exports, _preprint) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _preprint.default;
    }
  });
});
define('collections/adapters/registration', ['exports', 'ember-osf/adapters/registration'], function (exports, _registration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _registration.default;
    }
  });
});
define('collections/adapters/taxonomy', ['exports', 'ember-osf/adapters/taxonomy'], function (exports, _taxonomy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _taxonomy.default;
    }
  });
});
define('collections/adapters/user', ['exports', 'collections/adapters/collection'], function (exports, _collection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _collection.default.extend({});
});
define('collections/adapters/workflow', ['exports', 'ember-data', 'collections/config/environment'], function (exports, _emberData, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var RESTAdapter = _emberData.default.RESTAdapter;
    exports.default = RESTAdapter.extend({
        ajax: function ajax(url, method, hash) {
            hash = hash || {};
            hash.headers = hash.headers || {};
            return this._super(url, method, hash);
        },
        buildURL: function buildURL() {
            var base = this._super.apply(this, arguments);
            return _environment.default.workflowUrl + '/data' + base + '.json';
        }
    });
});
define('collections/app', ['exports', 'ember', 'ember-load-initializers', 'collections/resolver', 'collections/config/environment'], function (exports, _ember, _emberLoadInitializers, _resolver, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    _ember.default.MODEL_FACTORY_INJECTIONS = true;

    var App = _ember.default.Application.extend({
        modulePrefix: _environment.default.modulePrefix,
        podModulePrefix: _environment.default.podModulePrefix,
        Resolver: _resolver.default
    });

    (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

    exports.default = App;
});
define('collections/authenticators/osf-cookie', ['exports', 'ember-osf/authenticators/osf-cookie'], function (exports, _osfCookie) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _osfCookie.default;
    }
  });
});
define('collections/authenticators/osf-token', ['exports', 'ember', 'ember-simple-auth/authenticators/base', 'collections/config/environment'], function (exports, _ember, _base, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _base.default.extend({
        session: _ember.default.inject.service(),

        csrfToken: function csrfToken() {
            if (!document.cookie && document.cookie === '') {
                return null;
            }
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                if (cookie.substring(0, _environment.default.csrfCookie.length + 1) === _environment.default.csrfCookie + '=') {
                    return decodeURIComponent(cookie.substring(_environment.default.csrfCookie.length + 1));
                }
            }
        },
        restore: function restore() {
            return this.authenticate(false);
        },
        authenticate: function authenticate() {
            var _this = this;

            var redirectToLogin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            return new _ember.default.RSVP.Promise(function (resolve, reject) {
                _this.getUserInfo().then(function (response) {
                    response = response.data.attributes;
                    if (!response || !response.token) {
                        if (redirectToLogin) {
                            window.location = _environment.default.apiBaseUrl + '/accounts/osf/login/?' + _ember.default.$.param({ next: _environment.default.apiBaseUrl });
                            return window.location;
                        }
                        reject('not logged in');
                    } else {
                        resolve({
                            user: response,
                            csrfToken: _this.csrfToken(),
                            attributes: {
                                accessToken: response.token
                            }
                        });
                    }
                });
            });
        },
        invalidate: function invalidate() {
            return _ember.default.$.ajax({
                method: 'POST',
                url: _environment.default.apiBaseUrl + '/accounts/logout/',
                crossDomain: true,
                xhrFields: { withCredentials: true },
                headers: {
                    'X-CSRFTOKEN': this.get('session.data.authenticated.csrfToken')
                }
            });
        },
        getUserInfo: function getUserInfo() {
            return _ember.default.$.ajax({
                url: _environment.default.APP.apiURL + '/userinfo/',
                crossDomain: true,
                xhrFields: { withCredentials: true }
            });
        }
    });
});
define('collections/authorizers/osf-cookie', ['exports', 'ember-osf/authorizers/osf-cookie'], function (exports, _osfCookie) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _osfCookie.default;
    }
  });
});
define('collections/authorizers/osf-token', ['exports', 'ember-osf/authorizers/osf-token'], function (exports, _osfToken) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _osfToken.default;
    }
  });
});
define('collections/components/add-node/component', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Component = _ember.default.Component,
        inject = _ember.default.inject,
        computed = _ember.default.computed;
    exports.default = Component.extend({

        store: inject.service(),

        showResults: false,
        searchGuid: '',
        searchFilter: '',
        loadingItem: false,
        showAddItemDetails: false,
        findItemError: null,
        results: null,

        newItemNode: _ember.default.Object.create(),

        displayItemType: computed('type', function () {
            return this.get('type') === 'node' ? 'projects' : this.get('type') + 's';
        }),
        recordType: computed('type', function () {
            var collectionType = this.get('type');
            return collectionType === 'project' || collectionType === 'preprint' ? 'node' : collectionType;
        }),

        didUpdateAttrs: function didUpdateAttrs() {
            this.clearView();
            this.clearFilters();
        },


        actions: {
            findNode: function findNode() {
                var _this = this;

                if (!this.get('searchGuid')) {
                    return;
                }
                this.clearView();
                this.set('loadingItem', true);
                // We need to add type variable here because there is no
                // model for project in ember-osf but 'node
                var type = this.get('type') === 'project' ? 'node' : this.get('type');
                this.get('store').findRecord(type, this.get('searchGuid')).then(function (item) {
                    if (_this.get('type') === 'preprint') {
                        item.get('node').then(function (node) {
                            item.set('title', node.get('title'));
                            _this.buildNodeObject(node);
                        });
                    } else {
                        _this.buildNodeObject(item);
                    }
                    _this.set('showAddItemDetails', true);
                    _this.set('loadingItem', false);
                }).catch(function (error) {
                    _this.clearView();
                    _this.clearFilters();
                    _this.set('findItemError', error.errors);
                });
            },
            addItem: function addItem(node) {
                var _this2 = this;

                if (node) {
                    this.buildNodeObject(node);
                }
                var nodeObject = this.get('newItemNode');
                var item = this.get('store').createRecord('item', {
                    title: nodeObject.get('title'),
                    type: nodeObject.get('type'),
                    metadata: '',
                    status: 'pending',
                    url: nodeObject.get('link'),
                    source_id: nodeObject.get('source_id'),
                    collection: this.get('model')
                });
                item.save().then(function () {
                    _this2.get('transition')('collection.browse', _this2.get('model.id'));
                });
                this.clearView();
                this.clearFilters();
            },
            searchNode: function searchNode() {
                var _this3 = this;

                var filterText = this.get('searchFilter');
                if (!filterText) {
                    return;
                }
                this.clearView();
                this.set('loadingItem', true);
                var filter = {};
                filter['filter[title]'] = filterText;
                if (this.get('type') === 'preprint') {
                    filter['filter[preprint]'] = true;
                }
                this.get('store').query(this.get('recordType'), filter).then(function (results) {
                    _this3.set('results', results);
                    _this3.set('loadingItem', false);
                    _this3.set('showResults', true);
                }).catch(function (error) {
                    _this3.clearView();
                    _this3.clearFilters();
                    _this3.set('findItemError', error.errors);
                });
            },
            enterPressSearch: function enterPressSearch() {
                this.get('actions').searchNode.call(this);
            },
            enterPressGuid: function enterPressGuid() {
                this.get('actions').findNode.call(this);
            }
        },

        clearFilters: function clearFilters() {
            this.set('searchGuid', '');
            this.set('searchFilter', '');
        },
        clearView: function clearView() {
            this.set('loadingItem', false);
            this.set('showAddItemDetails', false);
            this.set('findItemError', null);
            this.set('results', null);
            this.set('showResults', false);
        },
        buildNodeObject: function buildNodeObject(item) {
            this.get('newItemNode').setProperties({
                title: item.get('title'),
                description: item.get('description'),
                type: this.get('type'), // set by the app based on selection of tab
                source_id: item.get('id'),
                link: item.get('links.html')
            });
        }
    });
});
define("collections/components/add-node/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "bvk9N2DZ", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"coll-add-item break-word\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"container-fluid\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"col-sm-8\"],[13],[1,[33,[\"input\"],null,[[\"class\",\"value\",\"placeholder\",\"enter\"],[\"form-control\",[28,[\"searchFilter\"]],\"Search\",\"enterPressSearch\"]]],false],[11,\"button\",[]],[16,\"class\",[34,[\"btn btn-success m-t-sm \",[33,[\"unless\"],[[28,[\"searchFilter\"]],\"disabled\"],null]]]],[5,[\"action\"],[[28,[null]],\"searchNode\"]],[13],[0,\"Search \"],[1,[26,[\"displayItemType\"]],false],[14],[14],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"col-sm-4\"],[13],[1,[33,[\"input\"],null,[[\"class\",\"value\",\"placeholder\",\"enter\"],[\"form-control\",[28,[\"searchGuid\"]],\"Enter guid\",\"enterPressGuid\"]]],false],[0,\" \"],[11,\"button\",[]],[16,\"class\",[34,[\"btn btn-success m-t-sm \",[33,[\"unless\"],[[28,[\"searchGuid\"]],\"disabled\"],null]]]],[5,[\"action\"],[[28,[null]],\"findNode\"]],[13],[0,\"Preview\"],[14],[14],[0,\"\\n        \"],[14],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"loadingItem\"]]],null,{\"statements\":[[0,\"            \"],[11,\"div\",[]],[15,\"class\",\"p-lg text-center\"],[13],[0,\"\\n                \"],[11,\"div\",[]],[15,\"class\",\"loader\"],[13],[0,\"\\n                    \"],[11,\"div\",[]],[15,\"class\",\"loader-inner ball-pulse ball-pulse-dark\"],[13],[0,\"\\n                      \"],[11,\"div\",[]],[13],[14],[0,\"\\n                      \"],[11,\"div\",[]],[13],[14],[0,\"\\n                      \"],[11,\"div\",[]],[13],[14],[0,\"\\n                    \"],[14],[0,\"\\n                \"],[14],[0,\"\\n             \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[\"showResults\"]]],null,{\"statements\":[[6,[\"if\"],[[33,[\"gt\"],[[28,[\"results\",\"length\"]],0],null]],null,{\"statements\":[[0,\"                \"],[11,\"p\",[]],[15,\"class\",\"text-muted m-t-sm\"],[13],[0,\" Showing at most 10 items. Narrow search for better results. \"],[14],[0,\"\\n\"],[6,[\"each\"],[[28,[\"results\"]]],null,{\"statements\":[[0,\"                    \"],[11,\"div\",[]],[15,\"class\",\"p-xs coll-search-result\"],[13],[1,[28,[\"result\",\"title\"]],false],[0,\" \"],[11,\"button\",[]],[15,\"class\",\"btn btn-link\"],[5,[\"action\"],[[28,[null]],\"addItem\",[28,[\"result\"]]]],[13],[11,\"i\",[]],[15,\"class\",\"fa fa-plus\"],[13],[14],[0,\" Add Item \"],[14],[14],[0,\"\\n\"]],\"locals\":[\"result\"]},null]],\"locals\":[]},{\"statements\":[[0,\"                \"],[11,\"p\",[]],[15,\"class\",\"text-muted m-t-sm\"],[13],[0,\" We couldn't find any \"],[1,[26,[\"displayItemType\"]],false],[0,\" with this search. Please try another search. \"],[14],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[\"findItemError\"]]],null,{\"statements\":[[0,\"            \"],[11,\"div\",[]],[15,\"class\",\"p-lg text-center text-danger\"],[13],[0,\"\\n                \"],[11,\"p\",[]],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"findItemError\"]]],null,{\"statements\":[[0,\"                        \"],[1,[28,[\"error\",\"detail\"]],false],[0,\"\\n\"]],\"locals\":[\"error\"]},null],[0,\"                \"],[14],[0,\"\\n                \"],[11,\"p\",[]],[13],[0,\" Please try again or try another \"],[1,[26,[\"displayItemType\"]],false],[0,\" ID \"],[14],[0,\"\\n             \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[\"showAddItemDetails\"]]],null,{\"statements\":[[0,\"        \"],[11,\"div\",[]],[15,\"class\",\"coll-find-details p-md\"],[13],[0,\"\\n            \"],[11,\"h4\",[]],[13],[0,\"Title \"],[14],[0,\"\\n            \"],[11,\"p\",[]],[15,\"class\",\"m-t-sm\"],[13],[1,[28,[\"newItemNode\",\"title\"]],false],[14],[0,\"\\n\\n            \"],[11,\"h4\",[]],[13],[0,\"Description \"],[14],[0,\"\\n            \"],[11,\"p\",[]],[15,\"class\",\"m-t-sm\"],[13],[1,[28,[\"newItemNode\",\"description\"]],false],[14],[0,\"\\n\\n            \"],[11,\"h4\",[]],[13],[0,\"Type \"],[14],[0,\"\\n            \"],[11,\"p\",[]],[15,\"class\",\"m-t-sm\"],[13],[1,[28,[\"newItemNode\",\"type\"]],false],[14],[0,\"\\n\\n            \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n                \"],[11,\"div\",[]],[15,\"class\",\"col-xs-12 text-right\"],[13],[0,\"\\n                    \"],[11,\"button\",[]],[15,\"class\",\"btn btn-success\"],[5,[\"action\"],[[28,[null]],\"addItem\"]],[13],[0,\"Add Item \"],[14],[0,\"\\n                \"],[14],[0,\"\\n            \"],[14],[0,\"\\n        \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/add-node/template.hbs" } });
});
define('collections/components/add-website/component', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Component.extend({
        store: _ember.default.inject.service(),
        urlTitle: '',
        urlAddress: '',
        urlDescription: '',
        urlSaveErrors: null,
        actions: {
            addWebsite: function addWebsite() {
                var _this = this;

                var item = this.get('store').createRecord('item', {
                    title: this.get('urlTitle'),
                    type: 'website',
                    metadata: this.get('urlDescription'),
                    status: 'pending',
                    url: this.get('urlAddress'),
                    source_id: this.get('urlAddress'),
                    collection: this.get('model')
                });
                item.save().then(function () {
                    _this.get('transition')('collection.browse', _this.get('model.id'));
                }).catch(function (error) {
                    _this.set('urlSaveErrors', error.errors);
                });
                this.clearInputs();
            }
        },
        clearInputs: function clearInputs() {
            this.set('urlTitle', '');
            this.set('urlAddress', '');
            this.set('urlDescription', '');
        }
    });
});
define("collections/components/add-website/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "SawQ3DDn", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"add-url m-t-lg\"],[13],[0,\"\\n    \"],[11,\"h4\",[]],[13],[0,\" Add a Website \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"row m-t-md\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"col-sm-6\"],[13],[0,\"\\n            \"],[1,[33,[\"input\"],null,[[\"class\",\"value\",\"placeholder\"],[\"form-control\",[28,[\"urlTitle\"]],\"Enter Title\"]]],false],[0,\"\\n        \"],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"col-sm-6\"],[13],[0,\"\\n            \"],[1,[33,[\"input\"],null,[[\"class\",\"value\",\"placeholder\"],[\"form-control\",[28,[\"urlAddress\"]],\"Enter Address\"]]],false],[0,\"\\n        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"row m-t-md\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"col-sm-9\"],[13],[0,\"\\n            \"],[1,[33,[\"textarea\"],null,[[\"class\",\"value\",\"placeholder\"],[\"form-control\",[28,[\"urlDescription\"]],\"Enter Notes\"]]],false],[0,\"\\n        \"],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"col-sm-3\"],[13],[11,\"button\",[]],[15,\"class\",\"btn btn-success\"],[5,[\"action\"],[[28,[null]],\"addWebsite\"]],[13],[0,\"Add\"],[14],[14],[0,\"\\n    \"],[14],[0,\"\\n\\n    \"],[11,\"div\",[]],[15,\"class\",\"text-center\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"urlSaveErrors\"]]],null,{\"statements\":[[0,\"            \"],[11,\"div\",[]],[15,\"class\",\"text-danger\"],[13],[1,[28,[\"error\",\"detail\"]],false],[14],[0,\"\\n\"]],\"locals\":[\"error\"]},null],[0,\"    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/add-website/template.hbs" } });
});
define('collections/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'collections/config/environment'], function (exports, _appVersion, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = _environment.default.APP.name;
  var version = _environment.default.APP.version;

  exports.default = _appVersion.default.extend({
    version: version,
    name: name
  });
});
define('collections/components/author-link/component', ['exports', 'ember-osf/components/author-link/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define("collections/components/bread-crumbs", ["exports", "ember", "ember-breadcrumbs/components/bread-crumbs"], function (exports, _ember, _breadCrumbs) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _breadCrumbs.default;
});
define('collections/components/browse-list/component', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Component.extend({
        session: _ember.default.inject.service(),
        store: _ember.default.inject.service(),
        organizeMode: false,
        groupView: false,
        cardView: true,
        showDeleteConfirmation: false, // Modal for deleting items
        showGroupConfirmation: false, // Modal for grouping
        addingGroup: false,
        groupTitle: '',
        selectedItems: _ember.default.A(), // List of items selected for actions like delete
        actions: {
            toggleOrganizeMode: function toggleOrganizeMode() {
                this.send('emptySelectedList');
                this.toggleProperty('organizeMode');
            },
            toggleDeleteConfirmation: function toggleDeleteConfirmation() {
                this.toggleProperty('showDeleteConfirmation');
            },
            clearSelected: function clearSelected() {
                var selected = this.get('selectedItems');
                selected.clear();
            },
            clearModals: function clearModals() {
                this.set('showGroupConfirmation', false);
                this.set('showDeleteConfirmation', false);
                this.set('groupTitle', '');
                this.set('addingGroup', false);
            },
            deleteSelected: function deleteSelected() {
                var items = this.get('model.list');
                var selected = this.get('selectedItems');
                selected.forEach(function (item) {
                    return _ember.default.run.once(function () {
                        return item.destroyRecord();
                    });
                });
                items.removeObjects(selected);
                this.send('clearSelected');
                this.send('clearModals');
                this.send('toggleOrganizeMode');
            },
            toggleGroupConfirmation: function toggleGroupConfirmation() {
                this.toggleProperty('showGroupConfirmation');
            },
            groupSelected: function groupSelected() {
                var _this = this;

                this.set('addingGroup', true);
                var selected = this.get('selectedItems');
                // Create new group
                var newGroup = this.get('store').createRecord('group', {
                    title: this.get('groupTitle'),
                    description: '',
                    collection: this.get('model')
                });
                newGroup.save().then(function (record) {
                    // For each item, set group to new group
                    selected.forEach(function (item) {
                        item.set('group', record);
                        item.save();
                    });

                    // remove items that were put into the group;
                    var list = _this.get('model.items');
                    list.removeObjects(selected);
                    _this.send('clearSelected');
                    _this.send('clearModals');
                    _this.send('toggleOrganizeMode');
                });
            },

            // Adds or removes item to the selectedItems list
            toggleSelectedList: function toggleSelectedList(selected, item) {
                var currentList = this.get('selectedItems');
                if (!selected) {
                    currentList.removeObject(item);
                } else {
                    currentList.addObject(item);
                }
            },
            emptySelectedList: function emptySelectedList() {
                this.get('selectedItems').clear();
                this.get('model.list').setEach('selected', false);
            },
            changeView: function changeView(cardView) {
                this.set('cardView', cardView);
            }
        }
    });
});
define("collections/components/browse-list/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5pIyafeI", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"coll-items\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"row m-b-lg\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"model\",\"list\"]]],null,{\"statements\":[[0,\"                \"],[11,\"div\",[]],[15,\"class\",\"col-xs-6\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"organizeMode\"]]],null,{\"statements\":[[6,[\"if\"],[[33,[\"not\"],[[28,[\"groupView\"]]],null]],null,{\"statements\":[[0,\"                            \"],[11,\"button\",[]],[15,\"class\",\"btn btn-default\"],[16,\"disabled\",[33,[\"if\"],[[28,[\"selectedItems\",\"length\"]],\"\",\"disabled\"],null],null],[5,[\"action\"],[[28,[null]],\"toggleGroupConfirmation\"]],[13],[0,\"Group Selected\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"                        \"],[11,\"button\",[]],[15,\"class\",\"btn btn-danger\"],[16,\"disabled\",[33,[\"if\"],[[28,[\"selectedItems\",\"length\"]],\"\",\"disabled\"],null],null],[5,[\"action\"],[[28,[null]],\"toggleDeleteConfirmation\"]],[13],[0,\"Delete selected \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"                \"],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"                    \"],[11,\"div\",[]],[15,\"class\",\"col-xs-6 text-right\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"organizeMode\"]]],null,{\"statements\":[[0,\"                          \"],[11,\"button\",[]],[15,\"class\",\"btn btn-default\"],[5,[\"action\"],[[28,[null]],\"toggleOrganizeMode\"]],[13],[0,\"Cancel organizing \"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"                          \"],[11,\"button\",[]],[15,\"class\",\"btn btn-info\"],[5,[\"action\"],[[28,[null]],\"toggleOrganizeMode\"]],[13],[0,\"Organize Items \"],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"                      \"],[11,\"div\",[]],[15,\"class\",\"btn-group\"],[13],[0,\"\\n                          \"],[11,\"button\",[]],[16,\"class\",[34,[\"btn \",[33,[\"if\"],[[28,[\"cardView\"]],\"btn-info\",\"btn-default\"],null]]]],[5,[\"action\"],[[28,[null]],\"changeView\",true]],[13],[0,\"\\n                              \"],[11,\"i\",[]],[15,\"class\",\"fa fa-th\"],[13],[14],[0,\"\\n                          \"],[14],[0,\"\\n                          \"],[11,\"button\",[]],[16,\"class\",[34,[\"btn \",[33,[\"unless\"],[[28,[\"cardView\"]],\"btn-info\",\"btn-default\"],null]]]],[5,[\"action\"],[[28,[null]],\"changeView\",false]],[13],[0,\"\\n                              \"],[11,\"i\",[]],[15,\"class\",\"fa fa-list\"],[13],[14],[0,\"\\n                          \"],[14],[0,\"\\n                      \"],[14],[0,\"\\n                  \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"        \"],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"model\",\"list\"]]],null,{\"statements\":[[6,[\"if\"],[[28,[\"cardView\"]]],null,{\"statements\":[[6,[\"each\"],[[28,[\"model\",\"list\"]]],null,{\"statements\":[[0,\"                        \"],[1,[33,[\"collection-item\"],null,[[\"item\",\"cardView\",\"toggleSelectedList\",\"organizeMode\",\"class\"],[[28,[\"item\"]],[28,[\"cardView\"]],[33,[\"action\"],[[28,[null]],\"toggleSelectedList\"],null],[28,[\"organizeMode\"]],\"col-sm-6 col-lg-4\"]]],false],[0,\"\\n\"]],\"locals\":[\"item\"]},null]],\"locals\":[]},{\"statements\":[[0,\"                   \"],[1,[33,[\"item-table\"],null,[[\"model\",\"cardView\",\"toggleSelectedList\",\"organizeMode\"],[[28,[\"model\"]],[28,[\"cardView\"]],[33,[\"action\"],[[28,[null]],\"toggleSelectedList\"],null],[28,[\"organizeMode\"]]]]],false],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[]},{\"statements\":[[0,\"                \"],[11,\"p\",[]],[15,\"class\",\"text-center text-muted p-xl\"],[13],[0,\" You don't have any items yet. Go to \\\"Add content\\\" to add items\"],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"showDeleteConfirmation\"]]],null,{\"statements\":[[11,\"div\",[]],[15,\"class\",\"modal fade in\"],[15,\"tabindex\",\"-1\"],[15,\"role\",\"dialog\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"modal-dialog\"],[15,\"role\",\"document\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"modal-content\"],[13],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"modal-header\"],[13],[0,\"\\n        \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"close\"],[15,\"aria-label\",\"Close\"],[5,[\"action\"],[[28,[null]],\"toggleDeleteConfirmation\"]],[13],[11,\"span\",[]],[15,\"aria-hidden\",\"true\"],[13],[0,\"×\"],[14],[14],[0,\"\\n        \"],[11,\"h4\",[]],[15,\"class\",\"modal-title\"],[13],[0,\"Delete items?\"],[14],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"modal-body\"],[13],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"The following items will be removed:\"],[14],[0,\"\\n        \"],[11,\"ul\",[]],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"selectedItems\"]]],null,{\"statements\":[[0,\"                \"],[11,\"li\",[]],[13],[1,[28,[\"item\",\"title\"]],false],[14],[0,\"\\n\"]],\"locals\":[\"item\"]},null],[0,\"        \"],[14],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"modal-footer\"],[13],[0,\"\\n        \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"btn btn-default\"],[5,[\"action\"],[[28,[null]],\"toggleDeleteConfirmation\"]],[13],[0,\"Close\"],[14],[0,\"\\n        \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"btn btn-danger\"],[5,[\"action\"],[[28,[null]],\"deleteSelected\"]],[13],[0,\"Delete\"],[14],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[4,\" /.modal-content \"],[0,\"\\n  \"],[14],[4,\" /.modal-dialog \"],[0,\"\\n\"],[14],[4,\" /.modal \"],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"modal-backdrop fade in\"],[13],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[\"showGroupConfirmation\"]]],null,{\"statements\":[[11,\"div\",[]],[15,\"class\",\"modal fade in\"],[15,\"tabindex\",\"-1\"],[15,\"role\",\"dialog\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"modal-dialog\"],[15,\"role\",\"document\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"modal-content\"],[13],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"modal-header\"],[13],[0,\"\\n        \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"close\"],[15,\"aria-label\",\"Close\"],[5,[\"action\"],[[28,[null]],\"toggleGroupConfirmation\"]],[13],[11,\"span\",[]],[15,\"aria-hidden\",\"true\"],[13],[0,\"×\"],[14],[14],[0,\"\\n        \"],[11,\"h4\",[]],[15,\"class\",\"modal-title\"],[13],[0,\"Group selected items?\"],[14],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"modal-body\"],[13],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\" Enter title for Group \"],[14],[0,\"\\n        \"],[1,[33,[\"input\"],null,[[\"class\",\"value\",\"placeholder\",\"enter\"],[\"form-control\",[28,[\"groupTitle\"]],\"e.g. Microbiology studies\",\"groupSelected\"]]],false],[0,\"\\n        \"],[11,\"p\",[]],[15,\"class\",\"m-t-md\"],[13],[0,\"The following items will be added to the group:\"],[14],[0,\"\\n        \"],[11,\"ul\",[]],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"selectedItems\"]]],null,{\"statements\":[[0,\"                \"],[11,\"li\",[]],[13],[1,[28,[\"item\",\"title\"]],false],[14],[0,\"\\n\"]],\"locals\":[\"item\"]},null],[0,\"        \"],[14],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"modal-footer\"],[13],[0,\"\\n        \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"btn btn-default\"],[5,[\"action\"],[[28,[null]],\"toggleGroupConfirmation\"]],[13],[0,\"Close\"],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"addingGroup\"]]],null,{\"statements\":[[0,\"            \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"btn btn-success disabled\"],[13],[0,\"Grouping \"],[11,\"i\",[]],[15,\"class\",\"fa fa-spinner fa-pulse\"],[13],[14],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"            \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"btn btn-success\"],[16,\"disabled\",[33,[\"unless\"],[[28,[\"groupTitle\"]],\"disabled\"],null],null],[5,[\"action\"],[[28,[null]],\"groupSelected\"]],[13],[0,\"Group\"],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"      \"],[14],[0,\"\\n    \"],[14],[4,\" /.modal-content \"],[0,\"\\n  \"],[14],[4,\" /.modal-dialog \"],[0,\"\\n\"],[14],[4,\" /.modal \"],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"modal-backdrop fade in\"],[13],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/browse-list/template.hbs" } });
});
define('collections/components/bs-accordion-item', ['exports', 'ember-bootstrap/components/bs-accordion-item'], function (exports, _bsAccordionItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAccordionItem.default;
    }
  });
});
define('collections/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _bsAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
define('collections/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _bsAlert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
define('collections/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _bsButtonGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsButtonGroup.default;
});
define('collections/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsButton.default;
});
define('collections/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _bsCollapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
define('collections/components/bs-datetimepicker', ['exports', 'ember-cli-bootstrap-datetimepicker/components/bs-datetimepicker', 'collections/config/environment'], function (exports, _bsDatetimepicker, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bsDatetimepicker.default.extend({
    config: _environment.default['ember-cli-bootstrap-datetimepicker']
  });
});
define('collections/components/bs-dropdown-button', ['exports', 'ember-bootstrap/components/bs-dropdown-button'], function (exports, _bsDropdownButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdownButton.default;
    }
  });
});
define('collections/components/bs-dropdown-menu', ['exports', 'ember-bootstrap/components/bs-dropdown-menu'], function (exports, _bsDropdownMenu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdownMenu.default;
    }
  });
});
define('collections/components/bs-dropdown-toggle', ['exports', 'ember-bootstrap/components/bs-dropdown-toggle'], function (exports, _bsDropdownToggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdownToggle.default;
    }
  });
});
define('collections/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _bsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
define('collections/components/bs-form-element', ['exports', 'ember-bootstrap/components/bs-form-element'], function (exports, _bsFormElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsFormElement.default;
    }
  });
});
define('collections/components/bs-form-group', ['exports', 'ember-bootstrap/components/bs-form-group'], function (exports, _bsFormGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsFormGroup.default;
    }
  });
});
define('collections/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
define('collections/components/bs-input', ['exports', 'ember-bootstrap/components/bs-input'], function (exports, _bsInput) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsInput.default;
    }
  });
});
define('collections/components/bs-modal-backdrop', ['exports', 'ember-bootstrap/components/bs-modal-backdrop'], function (exports, _bsModalBackdrop) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalBackdrop.default;
    }
  });
});
define('collections/components/bs-modal-body', ['exports', 'ember-bootstrap/components/bs-modal-body'], function (exports, _bsModalBody) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalBody.default;
    }
  });
});
define('collections/components/bs-modal-dialog', ['exports', 'ember-bootstrap/components/bs-modal-dialog'], function (exports, _bsModalDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalDialog.default;
    }
  });
});
define('collections/components/bs-modal-footer', ['exports', 'ember-bootstrap/components/bs-modal-footer'], function (exports, _bsModalFooter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalFooter.default;
    }
  });
});
define('collections/components/bs-modal-header', ['exports', 'ember-bootstrap/components/bs-modal-header'], function (exports, _bsModalHeader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalHeader.default;
    }
  });
});
define('collections/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _bsModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
define('collections/components/bs-progress-bar', ['exports', 'ember-bootstrap/components/bs-progress-bar'], function (exports, _bsProgressBar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsProgressBar.default;
    }
  });
});
define('collections/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _bsProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
define('collections/components/bs-select', ['exports', 'ember-bootstrap/components/bs-select'], function (exports, _bsSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsSelect.default;
    }
  });
});
define('collections/components/bs-textarea', ['exports', 'ember-bootstrap/components/bs-textarea'], function (exports, _bsTextarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTextarea.default;
    }
  });
});
define('collections/components/button-widget/component', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    exports.default = _ember.default.Component.extend({

        buttonString: 'Save',

        widgetClasses: ['section-submit-button'], // eslint-disable-line ember/avoid-leaking-state-in-components
        widgetClassString: _ember.default.computed('widgetClasses', function () {
            var classes = this.get('widgetClasses');
            if (classes === undefined || classes.constructor !== Array) {
                return '';
            }
            return classes.join(' ');
        }),

        didReceiveAttrs: function didReceiveAttrs() {
            this.set('widgetClasses', this.attrs.widget.value.cssClasses);
        },


        actions: {
            pressButton: function () {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                    var parameters;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    parameters = this.attrs.widget.value.parameters;
                                    _context.t0 = this.attrs;
                                    _context.t1 = parameters.parameter;
                                    _context.next = 5;
                                    return this.get('action')(this);

                                case 5:
                                    _context.t2 = _context.sent;
                                    _context.t3 = ['defined'];
                                    _context.t4 = {
                                        value: _context.t2,
                                        state: _context.t3
                                    };

                                    _context.t0.saveParameter.call(_context.t0, _context.t1, _context.t4);

                                case 9:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function pressButton() {
                    return _ref.apply(this, arguments);
                }

                return pressButton;
            }()
        }

    });
});
define("collections/components/button-widget/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Yqb8omlt", "block": "{\"statements\":[[11,\"button\",[]],[16,\"class\",[34,[\"btn btn-primary \",[26,[\"widgetClassString\"]]]]],[16,\"disabled\",[33,[\"if\"],[[28,[\"disabled\"]],\"disabled\",null],null],null],[5,[\"action\"],[[28,[null]],\"pressButton\"]],[13],[1,[26,[\"description\"]],false],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/button-widget/template.hbs" } });
});
define('collections/components/citation-widget/component', ['exports', 'ember-osf/components/citation-widget/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/collection-item/component', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Component.extend({
        tagName: null,
        classNameBindings: ['rowSelected:item-row-selected'],
        cardView: true,
        item: null,
        selected: false,
        rowSelected: _ember.default.computed('organizeMode', 'item.selected', function () {
            return this.get('organizeMode') ? this.get('item.selected') : false;
        }),
        actions: {
            markSelected: function markSelected(item) {
                this.get('item').toggleProperty('selected');
                this.sendAction('toggleSelectedList', this.get('item.selected'), item);
            }
        }
    });
});
define("collections/components/collection-item/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "RbKXfafk", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"cardView\"]]],null,{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"coll-item-wrapper\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"organizeMode\"]]],null,{\"statements\":[[6,[\"unless\"],[[33,[\"eq\"],[[28,[\"item\",\"type\"]],\"group\"],null]],null,{\"statements\":[[0,\"                \"],[11,\"div\",[]],[16,\"class\",[34,[\"coll-item-organize pointer \",[33,[\"if\"],[[28,[\"item\",\"selected\"]],\"item-selected\"],null]]]],[5,[\"action\"],[[28,[null]],\"markSelected\",[28,[\"item\"]]]],[13],[0,\"\\n                    \"],[11,\"i\",[]],[15,\"class\",\"fa fa-check\"],[13],[14],[0,\"\\n                    \"],[11,\"p\",[]],[13],[1,[33,[\"if\"],[[28,[\"item\",\"selected\"]],\"Click to unselect\",\"Click to select\"],null],false],[14],[0,\"\\n                \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"        \"],[11,\"div\",[]],[16,\"class\",[34,[\"coll-item coll-item-type-\",[28,[\"item\",\"type\"]],\" \",[33,[\"if\"],[[33,[\"eq\"],[[28,[\"item\",\"type\"]],\"group\"],null],\"coll-item-isgroup\"],null]]]],[13],[0,\"\\n\"],[6,[\"if\"],[[33,[\"eq\"],[[28,[\"item\",\"type\"]],\"group\"],null]],null,{\"statements\":[[0,\"                \"],[11,\"h4\",[]],[13],[6,[\"link-to\"],[\"collection.group\",[28,[\"item\",\"id\"]]],null,{\"statements\":[[1,[28,[\"item\",\"title\"]],false]],\"locals\":[]},null],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[6,[\"if\"],[[33,[\"eq\"],[[28,[\"parent\"]],\"group\"],null]],null,{\"statements\":[[0,\"                \"],[11,\"h4\",[]],[13],[6,[\"link-to\"],[\"collection.group.item\",[28,[\"item\",\"id\"]]],null,{\"statements\":[[1,[28,[\"item\",\"title\"]],false]],\"locals\":[]},null],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"                \"],[11,\"h4\",[]],[13],[6,[\"link-to\"],[\"collection.item\",[28,[\"item\",\"id\"]]],null,{\"statements\":[[1,[28,[\"item\",\"title\"]],false]],\"locals\":[]},null],[14],[0,\"\\n            \"]],\"locals\":[]}]],\"locals\":[]}],[0,\"            \"],[11,\"p\",[]],[13],[0,\" Author: \"],[1,[28,[\"item\",\"createdBy\",\"computedFullName\"]],false],[0,\" \"],[14],[0,\"\\n            \"],[11,\"p\",[]],[13],[0,\" Type: \"],[1,[28,[\"item\",\"type\"]],false],[0,\" \"],[14],[0,\"\\n        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"    \"],[11,\"td\",[]],[13],[0,\"\\n\"],[6,[\"if\"],[[33,[\"eq\"],[[28,[\"item\",\"type\"]],\"group\"],null]],null,{\"statements\":[[0,\"            \"],[11,\"p\",[]],[13],[6,[\"link-to\"],[\"collection.group\",[28,[\"item\",\"id\"]]],null,{\"statements\":[[1,[28,[\"item\",\"title\"]],false]],\"locals\":[]},null],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[6,[\"if\"],[[33,[\"eq\"],[[28,[\"parent\"]],\"group\"],null]],null,{\"statements\":[[0,\"            \"],[11,\"p\",[]],[13],[6,[\"link-to\"],[\"collection.group.item\",[28,[\"item\",\"id\"]]],null,{\"statements\":[[1,[28,[\"item\",\"title\"]],false]],\"locals\":[]},null],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"            \"],[11,\"p\",[]],[13],[6,[\"link-to\"],[\"collection.item\",[28,[\"item\",\"id\"]]],null,{\"statements\":[[1,[28,[\"item\",\"title\"]],false]],\"locals\":[]},null],[14],[0,\"\\n        \"]],\"locals\":[]}]],\"locals\":[]}],[0,\"    \"],[14],[0,\"\\n    \"],[11,\"td\",[]],[13],[1,[28,[\"item\",\"createdBy\",\"computedFullName\"]],false],[14],[0,\"\\n    \"],[11,\"td\",[]],[13],[1,[28,[\"item\",\"type\"]],false],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"organizeMode\"]]],null,{\"statements\":[[0,\"        \"],[11,\"td\",[]],[13],[0,\"\\n\\n\"],[6,[\"unless\"],[[33,[\"eq\"],[[28,[\"item\",\"type\"]],\"group\"],null]],null,{\"statements\":[[0,\"                \"],[1,[33,[\"input\"],null,[[\"checked\",\"type\",\"click\"],[[28,[\"item\",\"selected\"]],\"checkbox\",[33,[\"action\"],[[28,[null]],\"markSelected\",[28,[\"item\"]]],null]]]],false],[0,\"\\n\"]],\"locals\":[]},null],[0,\"        \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]}]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/collection-item/template.hbs" } });
});
define('collections/components/collection-nav/component', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Component.extend({
        session: _ember.default.inject.service()
    });
});
define("collections/components/collection-nav/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "MxF7xMc5", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"coll-navbar\"],[16,\"style\",[34,[\"background-color:\",[28,[\"model\",\"settings\",\"branding\",\"colors\",\"primary\"]]]]],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"coll-navbar-inner\"],[13],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"navbar-header\"],[13],[0,\"\\n                \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"navbar-toggle\"],[15,\"data-toggle\",\"collapse\"],[15,\"data-target\",\"#myNavbar\"],[13],[0,\"\\n                    \"],[11,\"span\",[]],[15,\"class\",\"icon-bar\"],[13],[14],[0,\"\\n                    \"],[11,\"span\",[]],[15,\"class\",\"icon-bar\"],[13],[14],[0,\"\\n                    \"],[11,\"span\",[]],[15,\"class\",\"icon-bar\"],[13],[14],[0,\"\\n                \"],[14],[0,\"\\n                \"],[6,[\"link-to\"],[\"collection\",[28,[\"model\",\"id\"]]],[[\"class\"],[\"navbar-brand\"]],{\"statements\":[[1,[28,[\"model\",\"title\"]],false]],\"locals\":[]},null],[0,\"\\n            \"],[14],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"collapse navbar-collapse\"],[15,\"id\",\"myNavbar\"],[13],[0,\"\\n                \"],[11,\"div\",[]],[15,\"class\",\"navbar navbar-right\"],[13],[0,\"\\n                    \"],[11,\"ul\",[]],[15,\"class\",\"nav navbar-nav\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"                            \"],[11,\"li\",[]],[13],[6,[\"link-to\"],[\"collection.add\"],null,{\"statements\":[[0,\"Add content \"]],\"locals\":[]},null],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"                        \"],[11,\"li\",[]],[13],[6,[\"link-to\"],[\"collection.browse\"],null,{\"statements\":[[0,\" Browse \"]],\"locals\":[]},null],[14],[0,\"\\n                        \"],[11,\"li\",[]],[13],[6,[\"link-to\"],[\"collection.search\"],null,{\"statements\":[[0,\" Search \"]],\"locals\":[]},null],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"                            \"],[11,\"li\",[]],[13],[6,[\"link-to\"],[\"collection.edit\"],null,{\"statements\":[[0,\" Edit\"]],\"locals\":[]},null],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"                    \"],[14],[0,\"\\n                \"],[14],[0,\"\\n            \"],[14],[0,\"\\n        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/collection-nav/template.hbs" } });
});
define('collections/components/comment-detail/component', ['exports', 'ember-osf/components/comment-detail/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/comment-form/component', ['exports', 'ember-osf/components/comment-form/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/comment-pane/component', ['exports', 'ember-osf/components/comment-pane/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/cp-panel-body', ['exports', 'ember-collapsible-panel/components/cp-panel-body'], function (exports, _cpPanelBody) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cpPanelBody.default;
    }
  });
});
define('collections/components/cp-panel-toggle', ['exports', 'ember-collapsible-panel/components/cp-panel-toggle'], function (exports, _cpPanelToggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cpPanelToggle.default;
    }
  });
});
define('collections/components/cp-panel', ['exports', 'ember-collapsible-panel/components/cp-panel'], function (exports, _cpPanel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cpPanel.default;
    }
  });
});
define('collections/components/cp-panels', ['exports', 'ember-collapsible-panel/components/cp-panels'], function (exports, _cpPanels) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cpPanels.default;
    }
  });
});
define('collections/components/datetime-picker/component', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Component.extend({
        pickerValue: null,
        didInsertElement: function didInsertElement() {
            this.$('.datetimepicker').datetimepicker();
        }
    });
});
define("collections/components/datetime-picker/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "u8wXIEwn", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"input-group date datetimepicker\"],[13],[0,\"\\n        \"],[1,[33,[\"input\"],null,[[\"class\",\"value\"],[\"form-control\",[28,[\"pickerValue\"]]]]],false],[0,\"\\n        \"],[11,\"span\",[]],[15,\"class\",\"input-group-addon\"],[13],[0,\"\\n            \"],[11,\"span\",[]],[15,\"class\",\"glyphicon glyphicon-calendar\"],[13],[14],[0,\"\\n        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/datetime-picker/template.hbs" } });
});
define('collections/components/discover-page/component', ['exports', 'ember-osf/components/discover-page/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/dropzone-widget/component', ['exports', 'ember-osf/components/dropzone-widget/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/ember-collection', ['exports', 'ember-collection/components/ember-collection'], function (exports, _emberCollection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberCollection.default;
    }
  });
});
define('collections/components/ember-native-scrollable', ['exports', 'ember-collection/components/ember-native-scrollable'], function (exports, _emberNativeScrollable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberNativeScrollable.default;
    }
  });
});
define('collections/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormhole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});
define('collections/components/eosf-project-nav/component', ['exports', 'ember-osf/components/eosf-project-nav/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/fa-icon', ['exports', 'ember-font-awesome/components/fa-icon'], function (exports, _faIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _faIcon.default;
    }
  });
});
define('collections/components/fa-list', ['exports', 'ember-font-awesome/components/fa-list'], function (exports, _faList) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _faList.default;
    }
  });
});
define('collections/components/fa-stack', ['exports', 'ember-font-awesome/components/fa-stack'], function (exports, _faStack) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _faStack.default;
    }
  });
});
define('collections/components/faceted-search/component', ['exports', 'ember-osf/components/faceted-search/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/file-browser-icon/component', ['exports', 'ember-osf/components/file-browser-icon/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/file-browser-item/component', ['exports', 'ember-osf/components/file-browser-item/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/file-browser-tree/component', ['exports', 'ember-osf/components/file-browser-tree/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/file-browser/component', ['exports', 'ember-osf/components/file-browser/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/file-chooser/component', ['exports', 'ember-osf/components/file-chooser/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/file-renderer/component', ['exports', 'ember-osf/components/file-renderer/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/file-uploader/component', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Component.extend({

        fileChosen: false,

        actions: {
            uploadFile: function uploadFile(ev) {
                var _this = this;

                var reader = new FileReader();
                var fileHandle = ev.target.files[0];
                var saveParameter = this.attrs.saveParameter;
                var filenameParts = ev.currentTarget.value.split('\\');
                var filename = filenameParts[filenameParts.length - 1];

                reader.onloadend = function (ev) {
                    _this.set('widget.parameters.fileName.value', filename);
                    _this.set('fileChosen', true);
                    _this.set('widget.parameters.fileData.value', ev.target.result);
                };

                reader.readAsBinaryString(fileHandle);
            }
        }

    });
});
define("collections/components/file-uploader/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "FpYGDhU5", "block": "{\"statements\":[[11,\"style\",[]],[13],[0,\"\\n\\n    .submission-upload {\\n        position: relative;\\n        overflow: hidden;\\n        border: 2px dashed #ddd;\\n        border-radius: 3px;\\n        padding: 10px;\\n        background-color: #f5f5f5;\\n    }\\n\\n    .submission-upload input.upload {\\n        position: absolute;\\n        top: 0;\\n        right: 0;\\n        width: 100%;\\n        margin: 0;\\n        padding: 0;\\n        font-size: 20px;\\n        cursor: pointer;\\n        opacity: 0;\\n        filter: alpha(opacity=0);\\n    }\\n\\n    .submission-upload .directions {\\n        position: relative;\\n        text-align: center;\\n        margin: 0 auto;\\n        color: #666;\\n    }\\n\\n\"],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"submission-upload\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"directions\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"fileChosen\"]]],null,{\"statements\":[[0,\"      \"],[1,[28,[\"widget\",\"parameters\",\"fileName\",\"value\"]],false],[0,\" selected for upload.\\n\"]],\"locals\":[]},{\"statements\":[[0,\"      Select a preprint file to upload\\n\"]],\"locals\":[]}],[0,\"  \"],[14],[0,\"\\n  \"],[11,\"input\",[]],[15,\"class\",\"upload\"],[15,\"type\",\"file\"],[16,\"onchange\",[33,[\"action\"],[[28,[null]],\"uploadFile\"],[[\"value\"],[[28,[\"target\"]]]]],null],[13],[14],[0,\"\\n\"],[14],[0,\"\\n\\n\"],[18,\"default\"],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/file-uploader/template.hbs" } });
});
define('collections/components/file-version/component', ['exports', 'ember-osf/components/file-version/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/file-widget/component', ['exports', 'ember-osf/components/file-widget/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/group-detail/component', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Component.extend({
        editMode: false,
        showDeleteGroupConfirmation: false, // Modal for deleting group
        modelCache: _ember.default.computed('model', function () {
            return this.resetModelCache();
        }),
        actions: {
            showEdit: function showEdit() {
                this.set('editMode', true);
            },
            cancelEdit: function cancelEdit() {
                this.set('editMode', false);
                this.set('modelCache', this.resetModelCache());
            },
            saveEdit: function saveEdit() {
                var model = this.get('model');
                model.set('title', this.get('modelCache.title'));
                model.set('description', this.get('modelCache.description'));
                model.save();
                this.set('editMode', false);
            },
            deletePartial: function deletePartial() {
                // Move items to collection before deleting group
                var items = this.get('model.items');
                items.forEach(function (item) {
                    item.set('group', null);
                    item.save();
                });
                this.send('deleteGroup');
                this.set('showDeleteGroupConfirmation', false);
            },
            deleteGroup: function deleteGroup() {
                var _this = this;

                // Delete group and any items it contains
                var collection = this.get('model.collection');
                this.get('model').destroyRecord().then(function () {
                    _this.set('showDeleteGroupConfirmation', false);
                    _this.get('changeRoute')('collection.browse', collection.get('id'));
                });
            }
        },
        resetModelCache: function resetModelCache() {
            var model = this.get('model');
            return {
                title: model.get('title'),
                description: model.get('description')
            };
        }
    });
});
define("collections/components/group-detail/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "kkZpamc0", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"coll-add-layer p-xl\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"editMode\"]]],null,{\"statements\":[[0,\"        \"],[11,\"div\",[]],[15,\"class\",\"form\"],[13],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n                \"],[11,\"label\",[]],[15,\"for\",\"collectionTitle\"],[13],[0,\"Title\"],[14],[0,\"\\n                \"],[1,[33,[\"input\"],null,[[\"class\",\"value\",\"placeholder\",\"id\"],[\"form-control\",[28,[\"modelCache\",\"title\"]],\"Enter title\",\"collectionTitle\"]]],false],[0,\"\\n            \"],[14],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n                \"],[11,\"label\",[]],[15,\"for\",\"collectionDescription\"],[13],[0,\"Description\"],[14],[0,\"\\n                \"],[1,[33,[\"textarea\"],null,[[\"class\",\"value\",\"id\"],[\"form-control\",[28,[\"modelCache\",\"description\"]],\"collectionDescription\"]]],false],[0,\"\\n            \"],[14],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"text-right\"],[13],[0,\"\\n                \"],[11,\"button\",[]],[15,\"class\",\"btn btn-default\"],[5,[\"action\"],[[28,[null]],\"cancelEdit\"]],[13],[0,\"Cancel\"],[14],[0,\"\\n                \"],[11,\"button\",[]],[15,\"class\",\"btn btn-success\"],[5,[\"action\"],[[28,[null]],\"saveEdit\"]],[13],[0,\"Save\"],[14],[0,\"\\n            \"],[14],[0,\"\\n        \"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"        \"],[11,\"h2\",[]],[13],[0,\" \"],[11,\"span\",[]],[13],[0,\" \"],[6,[\"link-to\"],[\"collection.browse\"],null,{\"statements\":[[0,\" \"],[11,\"i\",[]],[15,\"class\",\"fa fa-angle-left\"],[13],[14]],\"locals\":[]},null],[14],[0,\" \"],[1,[28,[\"model\",\"title\"]],false],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"m-b-md\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"model\",\"description\"]]],null,{\"statements\":[[0,\"                \"],[1,[28,[\"model\",\"description\"]],false],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"                \"],[11,\"span\",[]],[15,\"class\",\"text-muted\"],[5,[\"action\"],[[28,[null]],\"showEdit\"]],[13],[0,\"Add description \"],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"        \"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"Date created: \"],[1,[28,[\"model\",\"dateCreated\"]],false],[0,\" \"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"Date updated : \"],[1,[28,[\"model\",\"dateUpdated\"]],false],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"pull-right\"],[13],[0,\"\\n            \"],[11,\"button\",[]],[15,\"class\",\"btn btn-danger btn-collection\"],[5,[\"action\"],[[28,[null]],[28,[\"toggleProperty\"]],\"showDeleteGroupConfirmation\"]],[13],[0,\" \"],[11,\"i\",[]],[15,\"class\",\"fa fa-times\"],[13],[14],[0,\" Delete \"],[14],[0,\"\\n            \"],[11,\"button\",[]],[15,\"class\",\"btn btn-info btn-collection\"],[5,[\"action\"],[[28,[null]],\"showEdit\"]],[13],[0,\" \"],[11,\"i\",[]],[15,\"class\",\"fa fa-pencil\"],[13],[14],[0,\" Edit\"],[14],[0,\"\\n        \"],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"showDeleteGroupConfirmation\"]]],null,{\"statements\":[[11,\"div\",[]],[15,\"class\",\"modal fade in\"],[15,\"tabindex\",\"-1\"],[15,\"role\",\"dialog\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"modal-dialog\"],[15,\"role\",\"document\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"modal-content\"],[13],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"modal-header\"],[13],[0,\"\\n        \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"close\"],[15,\"aria-label\",\"Close\"],[5,[\"action\"],[[28,[null]],[28,[\"toggleProperty\"]],\"showDeleteGroupConfirmation\"]],[13],[11,\"span\",[]],[15,\"aria-hidden\",\"true\"],[13],[0,\"×\"],[14],[14],[0,\"\\n        \"],[11,\"h4\",[]],[15,\"class\",\"modal-title\"],[13],[0,\"Delete this group?\"],[14],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"modal-body\"],[13],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\" Are you sure you want to delete this group? \"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"You can delete the group and keep items. This option will put the items back into the collection.\"],[14],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"modal-footer\"],[13],[0,\"\\n        \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"btn btn-default\"],[5,[\"action\"],[[28,[null]],[28,[\"toggleProperty\"]],\"showDeleteGroupConfirmation\"]],[13],[0,\"Close\"],[14],[0,\"\\n        \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"btn btn-warning\"],[5,[\"action\"],[[28,[null]],\"deletePartial\"]],[13],[0,\"Delete Group and keep items\"],[14],[0,\"\\n        \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"btn btn-danger\"],[5,[\"action\"],[[28,[null]],\"deleteGroup\"]],[13],[0,\"Delete all\"],[14],[0,\"\\n\\n      \"],[14],[0,\"\\n    \"],[14],[4,\" /.modal-content \"],[0,\"\\n  \"],[14],[4,\" /.modal-dialog \"],[0,\"\\n\"],[14],[4,\" /.modal \"],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"modal-backdrop fade in\"],[13],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/group-detail/template.hbs" } });
});
define('collections/components/item-detail-page/component', ['exports', 'ember', 'collections/utils/itemClasses'], function (exports, _ember, _itemClasses) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Component.extend({
        store: _ember.default.inject.service(),
        session: _ember.default.inject.service(),
        constructedItem: null,
        didReceiveAttrs: function didReceiveAttrs() {
            var type = this.get('item.type');
            this.set('constructedItem', _itemClasses.default[type].create({
                session: this.get('session'),
                store: this.get('store'),
                item: this.get('item')
            }));
        }
    });
});
define("collections/components/item-detail-page/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "sB2z2itu", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"coll-item-header\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"col-xs-12 col-sm-10\"],[13],[0,\"\\n                \"],[11,\"h1\",[]],[15,\"class\",\"p-b-md\"],[13],[1,[28,[\"constructedItem\",\"viewContent\",\"title\",\"value\"]],false],[14],[0,\"\\n                \"],[11,\"h5\",[]],[15,\"class\",\"view-authors\"],[13],[0,\"\\n                    \"],[11,\"ul\",[]],[15,\"class\",\"comma-list\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"constructedItem\",\"viewContent\",\"authors\",\"visible\"]]],null,{\"statements\":[[6,[\"if\"],[[28,[\"constructedItem\",\"viewContent\",\"authors\",\"loaded\"]]],null,{\"statements\":[[6,[\"each\"],[[28,[\"constructedItem\",\"viewContent\",\"authors\",\"value\"]]],null,{\"statements\":[[6,[\"if\"],[[28,[\"author\",\"bibliographic\"]]],null,{\"statements\":[[0,\"                                        \"],[11,\"li\",[]],[13],[11,\"a\",[]],[16,\"href\",[28,[\"author\",\"users\",\"profileURL\"]],null],[5,[\"action\"],[[28,[null]],\"click\",\"link\",\"Content - Author\",[28,[\"author\",\"users\",\"profileURL\"]]]],[13],[1,[28,[\"author\",\"users\",\"givenName\"]],false],[0,\" \"],[1,[28,[\"author\",\"users\",\"familyName\"]],false],[14],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[\"author\",\"index\"]},null]],\"locals\":[]},{\"statements\":[[0,\"                                \"],[11,\"div\",[]],[15,\"class\",\"loader\"],[13],[0,\"\\n                                    \"],[11,\"div\",[]],[15,\"class\",\"loader-inner ball-pulse\"],[13],[0,\"\\n                                      \"],[11,\"div\",[]],[13],[14],[0,\"\\n                                      \"],[11,\"div\",[]],[13],[14],[0,\"\\n                                      \"],[11,\"div\",[]],[13],[14],[0,\"\\n                                    \"],[14],[0,\"\\n                                \"],[14],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[]},null],[0,\"                    \"],[14],[0,\"\\n                \"],[14],[0,\"\\n                \"],[11,\"p\",[]],[13],[0,\"Added on: \"],[1,[33,[\"moment-format\"],[[28,[\"model\",\"datePublished\"]],\"MMMM DD, YYYY\"],null],false],[0,\" | Last edited: \"],[1,[33,[\"moment-format\"],[[28,[\"model\",\"dateModified\"]],\"MMMM DD, YYYY\"],null],false],[0,\" \"],[14],[0,\"\\n            \"],[14],[0,\"\\n        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"row p-t-lg\"],[13],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"col-sm-8\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"constructedItem\",\"viewContent\",\"file\",\"visible\"]]],null,{\"statements\":[[6,[\"if\"],[[28,[\"constructedItem\",\"viewContent\",\"file\",\"loaded\"]]],null,{\"statements\":[[0,\"                        \"],[11,\"div\",[]],[13],[0,\"\\n                            \"],[1,[33,[\"file-renderer\"],null,[[\"download\",\"width\",\"height\",\"allowfullscreen\"],[[28,[\"constructedItem\",\"viewContent\",\"file\",\"value\"]],\"99%\",\"1000\",true]]],false],[0,\"\\n                        \"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"                        \"],[11,\"div\",[]],[15,\"class\",\"loader text-center\"],[13],[0,\"\\n                            \"],[11,\"div\",[]],[15,\"class\",\"loader-inner ball-pulse ball-pulse-dark\"],[13],[0,\"\\n                              \"],[11,\"div\",[]],[13],[14],[0,\"\\n                              \"],[11,\"div\",[]],[13],[14],[0,\"\\n                              \"],[11,\"div\",[]],[13],[14],[0,\"\\n                            \"],[14],[0,\"\\n                        \"],[14],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[]},null],[6,[\"if\"],[[28,[\"constructedItem\",\"viewContent\",\"wiki\",\"visible\"]]],null,{\"statements\":[[6,[\"if\"],[[28,[\"constructedItem\",\"viewContent\",\"wiki\",\"loaded\"]]],null,{\"statements\":[[0,\"                        \"],[11,\"div\",[]],[13],[0,\"\\n                            \"],[11,\"pre\",[]],[15,\"style\",\"white-space: pre-wrap; border:none; width:100%; text-align:justify; max-height: 300px;\"],[13],[0,\"\\n                                \"],[1,[28,[\"constructedItem\",\"viewContent\",\"wiki\",\"value\"]],false],[0,\"\\n                            \"],[14],[0,\"\\n                        \"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"                        \"],[11,\"div\",[]],[15,\"class\",\"loader text-center\"],[13],[0,\"\\n                            \"],[11,\"div\",[]],[15,\"class\",\"loader-inner ball-pulse ball-pulse-dark\"],[13],[0,\"\\n                              \"],[11,\"div\",[]],[13],[14],[0,\"\\n                              \"],[11,\"div\",[]],[13],[14],[0,\"\\n                              \"],[11,\"div\",[]],[13],[14],[0,\"\\n                            \"],[14],[0,\"\\n                        \"],[14],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[]},null],[0,\"            \"],[14],[0,\"\\n        \"],[11,\"div\",[]],[16,\"class\",[34,[[33,[\"if\"],[[33,[\"or\"],[[28,[\"constructedItem\",\"viewContent\",\"file\",\"visible\"]],[28,[\"constructedItem\",\"viewContent\",\"wiki\",\"visible\"]]],null],\"col-sm-4\",\"col-sm-12\"],null]]]],[13],[0,\"\\n            \"],[11,\"h4\",[]],[15,\"class\",\"p-v-md f-w-md\"],[13],[11,\"strong\",[]],[13],[0,\"Description\"],[14],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"constructedItem\",\"viewContent\",\"description\",\"visible\"]]],null,{\"statements\":[[6,[\"if\"],[[28,[\"constructedItem\",\"viewContent\",\"description\",\"loaded\"]]],null,{\"statements\":[[0,\"                    \"],[11,\"p\",[]],[13],[1,[28,[\"constructedItem\",\"viewContent\",\"description\",\"value\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"                    \"],[11,\"div\",[]],[15,\"class\",\"loader text-center\"],[13],[0,\"\\n                        \"],[11,\"div\",[]],[15,\"class\",\"loader-inner ball-pulse ball-pulse-dark\"],[13],[0,\"\\n                          \"],[11,\"div\",[]],[13],[14],[0,\"\\n                          \"],[11,\"div\",[]],[13],[14],[0,\"\\n                          \"],[11,\"div\",[]],[13],[14],[0,\"\\n                        \"],[14],[0,\"\\n                    \"],[14],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[]},null],[0,\"\\n            \"],[11,\"h4\",[]],[15,\"class\",\"p-v-md f-w-md\"],[13],[11,\"strong\",[]],[13],[0,\"Status\"],[14],[14],[0,\"\\n            \"],[11,\"p\",[]],[16,\"class\",[34,[\"coll-item-status \",[28,[\"item\",\"status\"]]]]],[13],[0,\" \"],[1,[28,[\"item\",\"status\"]],false],[0,\" \"],[14],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"constructedItem\",\"viewContent\",\"tags\",\"visible\"]]],null,{\"statements\":[[0,\"                \"],[11,\"h4\",[]],[15,\"class\",\"p-v-md f-w-md\"],[13],[11,\"strong\",[]],[13],[0,\"Tags\"],[14],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"constructedItem\",\"viewContent\",\"tags\",\"loaded\"]]],null,{\"statements\":[[0,\"                    \"],[11,\"div\",[]],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"constructedItem\",\"viewContent\",\"tags\",\"value\"]]],null,{\"statements\":[[0,\"                            \"],[11,\"span\",[]],[15,\"class\",\"coll-item-tag\"],[13],[1,[28,[\"tag\"]],false],[14],[0,\"\\n\"]],\"locals\":[\"tag\"]},null],[0,\"                    \"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"                    \"],[11,\"div\",[]],[15,\"class\",\"loader text-center\"],[13],[0,\"\\n                        \"],[11,\"div\",[]],[15,\"class\",\"loader-inner ball-pulse ball-pulse-dark\"],[13],[0,\"\\n                          \"],[11,\"div\",[]],[13],[14],[0,\"\\n                          \"],[11,\"div\",[]],[13],[14],[0,\"\\n                          \"],[11,\"div\",[]],[13],[14],[0,\"\\n                        \"],[14],[0,\"\\n                    \"],[14],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[\"constructedItem\",\"viewContent\",\"sourceLink\",\"visible\"]]],null,{\"statements\":[[6,[\"if\"],[[28,[\"constructedItem\",\"viewContent\",\"sourceLink\",\"loaded\"]]],null,{\"statements\":[[0,\"                    \"],[11,\"div\",[]],[15,\"class\",\"m-t-md\"],[13],[0,\"\\n                        \"],[11,\"a\",[]],[16,\"href\",[34,[[28,[\"constructedItem\",\"viewContent\",\"sourceLink\",\"value\"]]]]],[15,\"class\",\"btn btn-default btn-block\"],[13],[0,\" Go to Source\"],[14],[0,\"\\n                    \"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"                    \"],[11,\"div\",[]],[15,\"class\",\"loader text-center\"],[13],[0,\"\\n                        \"],[11,\"div\",[]],[15,\"class\",\"loader-inner ball-pulse ball-pulse-dark\"],[13],[0,\"\\n                          \"],[11,\"div\",[]],[13],[14],[0,\"\\n                          \"],[11,\"div\",[]],[13],[14],[0,\"\\n                          \"],[11,\"div\",[]],[13],[14],[0,\"\\n                        \"],[14],[0,\"\\n                    \"],[14],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[]},null],[0,\"\\n        \"],[14],[0,\"\\n\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/item-detail-page/template.hbs" } });
});
define('collections/components/item-table/component', ['exports', 'ember', 'lodash'], function (exports, _ember, _lodash) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Component.extend({
        filterString: '',
        eventFilter: '',
        theadStyle: _ember.default.computed('layout', function () {
            var headerColor = this.get('layout.header_color') ? this.get('layout.header_color') : this.get('branding.colors.primary');
            var textColor = this.get('layout.text_color') ? this.get('layout.text_color') : this.get('branding.colors.text');
            return _ember.default.String.htmlSafe('background-color: ' + headerColor + '; color: ' + textColor + ';');
        }),
        eventTypes: _ember.default.computed('model', function () {
            return this.get('model.items').then(function (results) {
                var eventsList = [];
                results.forEach(function (i) {
                    eventsList.push(i.get('type'));
                });
                return _lodash.default.uniq(eventsList).sort();
            });
        })
    });
});
define("collections/components/item-table/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "2UEp65eu", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"row m-b-md\"],[13],[0,\"\\n        \"],[1,[33,[\"input\"],null,[[\"value\",\"placeholder\"],[[28,[\"filterString\"]],\"Filter\"]]],false],[0,\"\\n        | Filter by:\\n        \"],[11,\"select\",[]],[16,\"onchange\",[33,[\"action\"],[[28,[null]],[33,[\"mut\"],[[28,[\"eventFilter\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[13],[0,\"\\n            \"],[11,\"option\",[]],[15,\"value\",\"\"],[16,\"selected\",[33,[\"eq\"],[\"\",[28,[\"eventFilter\"]]],null],null],[13],[0,\"Event type\"],[14],[0,\"\\n\"],[6,[\"each\"],[[33,[\"await\"],[[28,[\"eventTypes\"]]],null]],null,{\"statements\":[[0,\"                \"],[11,\"option\",[]],[16,\"value\",[28,[\"event\"]],null],[16,\"selected\",[33,[\"eq\"],[[28,[\"event\"]],[28,[\"eventFilter\"]]],null],null],[13],[1,[28,[\"event\"]],false],[14],[0,\"\\n\"]],\"locals\":[\"event\"]},null],[0,\"        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"row m-b-lg\"],[13],[0,\"\\n        \"],[11,\"table\",[]],[15,\"class\",\"coll-table\"],[13],[0,\"\\n            \"],[11,\"thead\",[]],[16,\"style\",[26,[\"theadStyle\"]],null],[13],[0,\"\\n                \"],[11,\"tr\",[]],[13],[0,\"\\n                    \"],[11,\"th\",[]],[13],[0,\"Title\"],[14],[0,\"\\n                    \"],[11,\"th\",[]],[13],[0,\"Author\"],[14],[0,\"\\n                    \"],[11,\"th\",[]],[13],[0,\"Type\"],[14],[0,\"\\n                \"],[14],[0,\"\\n            \"],[14],[0,\"\\n            \"],[11,\"tbody\",[]],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"model\",\"list\"]]],null,{\"statements\":[[6,[\"if\"],[[33,[\"and\"],[[33,[\"or\"],[[33,[\"contains-substring\"],[[28,[\"item\",\"title\"]],[28,[\"filterString\"]]],null],[33,[\"contains-substring\"],[[33,[\"await\"],[[28,[\"item\",\"createdBy\",\"computedFullName\"]]],null],[28,[\"filterString\"]]],null]],null],[33,[\"contains-substring\"],[[28,[\"item\",\"type\"]],[28,[\"eventFilter\"]]],null]],null]],null,{\"statements\":[[0,\"                        \"],[1,[33,[\"collection-item\"],null,[[\"item\",\"cardView\",\"tagName\",\"toggleSelectedList\",\"organizeMode\"],[[28,[\"item\"]],[28,[\"cardView\"]],\"tr\",[28,[\"toggleSelectedList\"]],[28,[\"organizeMode\"]]]]],false],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[\"item\"]},null],[0,\"            \"],[14],[0,\"\\n        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/item-table/template.hbs" } });
});
define('collections/components/json-editor', ['exports', 'ember-cli-jsoneditor/components/json-editor'], function (exports, _jsonEditor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _jsonEditor.default;
    }
  });
});
define('collections/components/landing-board/component', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Component.extend({
        listColumns: _ember.default.computed('layout', function () {
            var dataSource = this.get('layout.data');
            var list = this.get('model.settings').data[dataSource];
            var column = {};
            var splitIndex = Math.round(list.length / 2);
            column.left = list.splice(0, splitIndex);
            column.right = list;
            return column;
        }),
        containerStyle: _ember.default.computed('branding.colors', function () {
            return _ember.default.String.htmlSafe('background-color: ' + this.get('branding.colors.background') + '; color: ' + this.get('branding.colors.backgroundText'));
        })
    });
});
define("collections/components/landing-board/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4QZuoPyb", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"landing-board-wrapper p-xl\"],[16,\"style\",[26,[\"containerStyle\"]],null],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n        \"],[11,\"h2\",[]],[13],[0,\" \"],[1,[28,[\"layout\",\"title\"]],false],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"col-xs-6\"],[13],[0,\"\\n                \"],[11,\"ul\",[]],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"listColumns\",\"left\"]]],null,{\"statements\":[[0,\"                        \"],[11,\"li\",[]],[13],[11,\"b\",[]],[13],[1,[28,[\"person\",\"firstName\"]],false],[0,\" \"],[1,[28,[\"person\",\"lastName\"]],false],[14],[0,\", \"],[1,[28,[\"person\",\"institution\"]],false],[14],[0,\"\\n\"]],\"locals\":[\"person\"]},null],[0,\"                \"],[14],[0,\"\\n            \"],[14],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"col-xs-6\"],[13],[0,\"\\n                \"],[11,\"ul\",[]],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"listColumns\",\"right\"]]],null,{\"statements\":[[0,\"                        \"],[11,\"li\",[]],[13],[11,\"b\",[]],[13],[1,[28,[\"person\",\"firstName\"]],false],[0,\" \"],[1,[28,[\"person\",\"lastName\"]],false],[14],[0,\", \"],[1,[28,[\"person\",\"institution\"]],false],[14],[0,\"\\n\"]],\"locals\":[\"person\"]},null],[0,\"                \"],[14],[0,\"\\n            \"],[14],[0,\"\\n        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/landing-board/template.hbs" } });
});
define('collections/components/landing-copyright/component', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Component.extend({
        data: _ember.default.computed('layout', function () {
            var dataSource = this.get('layout.data');
            return this.get('model.settings').data[dataSource];
        })
    });
});
define("collections/components/landing-copyright/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "QxNkXUAJ", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"landing-copyright-wrapper p-xl text-center\"],[13],[0,\"\\n    \"],[11,\"span\",[]],[15,\"class\",\"m-r-sm\"],[13],[1,[28,[\"model\",\"title\"]],false],[14],[0,\"\\n\"],[6,[\"each\"],[[28,[\"data\"]]],null,{\"statements\":[[0,\"        \"],[11,\"a\",[]],[16,\"href\",[34,[[28,[\"link\",\"url\"]]]]],[15,\"class\",\"m-r-sm\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"link\",\"icon\"]]],null,{\"statements\":[[0,\"                \"],[11,\"i\",[]],[16,\"class\",[34,[\"fa \",[28,[\"link\",\"icon\"]]]]],[13],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"                \"],[1,[28,[\"link\",\"label\"]],false],[0,\"\\n\"]],\"locals\":[]}],[0,\"        \"],[14],[0,\"\\n\"]],\"locals\":[\"link\"]},null],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/landing-copyright/template.hbs" } });
});
define('collections/components/landing-default/component', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Component.extend({
        session: _ember.default.inject.service()
    });
});
define("collections/components/landing-default/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "1+05HfCk", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"landing-default-container p-xl\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n       \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n           \"],[11,\"div\",[]],[15,\"class\",\"text-center m-t-lg col-xs-12\"],[13],[0,\"\\n                \"],[11,\"h2\",[]],[13],[1,[28,[\"model\",\"title\"]],false],[14],[0,\"\\n                \"],[11,\"p\",[]],[15,\"class\",\"p-v-md\"],[13],[1,[28,[\"model\",\"description\"]],false],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"                   \"],[6,[\"link-to\"],[\"collection.add\"],[[\"class\"],[\"btn btn-success btn-lg\"]],{\"statements\":[[0,\"Add to Collection \"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[]},null],[0,\"           \"],[14],[0,\"\\n       \"],[14],[0,\"\\n   \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"  \"],[11,\"div\",[]],[15,\"class\",\"landing-default-footer p-xl text-center\"],[13],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n          \"],[11,\"h4\",[]],[13],[0,\" Customize your landing page\"],[14],[0,\"\\n          \"],[11,\"p\",[]],[13],[0,\" You can add details to your landing page by changing settings to add layout layers. Visit Edit page to make changes. \"],[14],[0,\"\\n      \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/landing-default/template.hbs" } });
});
define('collections/components/landing-hero/component', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Component.extend({
        session: _ember.default.inject.service(),
        searchQuery: '',
        data: _ember.default.computed('layout', function () {
            var dataSource = this.get('layout.data');
            return this.get('model.settings').data[dataSource];
        }),
        containerStyle: _ember.default.computed('branding.colors', function () {
            return _ember.default.String.htmlSafe('background-color: ' + this.get('branding.colors.background') + '; color: ' + this.get('branding.colors.backgroundText'));
        }),
        logoStyle: _ember.default.computed('branding.logo', function () {
            return _ember.default.String.htmlSafe('background-image: url(' + this.get('branding.logo.url') + '); height: ' + this.get('branding.logo.height'));
        }),
        actions: {
            search: function search() {
                this.get('changeRoute')('collection.search', this.get('model.id'));
            }
        }
    });
});
define("collections/components/landing-hero/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "yTOnuweO", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"landing-hero-container p-xl\"],[16,\"style\",[26,[\"containerStyle\"]],null],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n       \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n           \"],[11,\"div\",[]],[15,\"class\",\"text-center m-t-lg col-xs-12\"],[13],[0,\"\\n               \"],[11,\"div\",[]],[15,\"class\",\"preprint-brand\"],[13],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"layout\",\"settings\",\"useLogo\"]]],null,{\"statements\":[[0,\"                    \"],[11,\"div\",[]],[15,\"class\",\"coll-hero-logo\"],[16,\"style\",[26,[\"logoStyle\"]],null],[15,\"aria-role\",\"img\"],[16,\"aria-label\",[34,[[28,[\"branding\",\"logo\",\"label\"]]]]],[13],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"                    \"],[11,\"h2\",[]],[13],[1,[28,[\"layout\",\"title\"]],false],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"               \"],[11,\"p\",[]],[15,\"class\",\"lead\"],[13],[1,[28,[\"layout\",\"tagline\"]],false],[14],[0,\"\\n\\n               \"],[11,\"div\",[]],[15,\"class\",\"input-group input-group-lg m-b-md\"],[13],[0,\"\\n                   \"],[1,[33,[\"input\"],null,[[\"value\",\"placeholder\",\"class\"],[[28,[\"searchQuery\"]],\"Search preprints...\",\"form-control\"]]],false],[0,\"\\n                   \"],[11,\"span\",[]],[15,\"class\",\"input-group-btn\"],[13],[0,\"\\n                       \"],[11,\"button\",[]],[15,\"class\",\"btn btn-default\"],[15,\"type\",\"button\"],[5,[\"action\"],[[28,[null]],\"search\"]],[13],[0,\"Search\"],[14],[0,\"\\n                   \"],[14],[0,\"\\n               \"],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"                \"],[6,[\"link-to\"],[\"collection.add\"],[[\"class\"],[\"btn btn-success btn-lg\"]],{\"statements\":[[0,\"Add to Collection \"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[]},null],[0,\"           \"],[14],[0,\"\\n       \"],[14],[0,\"\\n   \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/landing-hero/template.hbs" } });
});
define('collections/components/landing-info/component', ['exports', 'ember', 'moment'], function (exports, _ember, _moment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Component.extend({
        meetingDates: _ember.default.computed('model.startDate', function () {
            var startDate = this.get('model.startDate');
            var endDate = this.get('model.endDate');
            if ((0, _moment.default)(startDate).format('MM D YY') === (0, _moment.default)(endDate).format('MM D YY')) {
                return (0, _moment.default)(startDate).format('MMMM D');
            }
            return (0, _moment.default)(startDate).format('MMMM D') + ' - ' + (0, _moment.default)(endDate).format('MMMM D');
        })
    });
});
define("collections/components/landing-info/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "zuBzp1sV", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"text-center\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"m-t-sm\"],[13],[0,\"\\n        \"],[11,\"h2\",[]],[13],[1,[26,[\"meetingDates\"]],false],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"m-t-sm m-b-lg\"],[13],[0,\"\\n        \"],[11,\"h3\",[]],[13],[1,[28,[\"model\",\"location\"]],false],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"m-t-sm m-b-lg\"],[13],[0,\"\\n        \"],[11,\"h4\",[]],[13],[1,[28,[\"model\",\"address\"]],false],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[18,\"default\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/landing-info/template.hbs" } });
});
define('collections/components/landing-list/component', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Component.extend({
        data: _ember.default.computed('layout', function () {
            var dataSource = this.get('layout.data');
            return this.get('model.settings').data[dataSource];
        }),
        buttonStyle: _ember.default.computed('branding.colors', function () {
            return _ember.default.String.htmlSafe('background-color: ' + this.get('branding.colors.primary'));
        })
    });
});
define("collections/components/landing-list/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mCskfmUt", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"landing-list-container p-xl\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n        \"],[11,\"h2\",[]],[13],[0,\" \"],[1,[28,[\"layout\",\"title\"]],false],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"subject row m-b-sm\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"data\"]]],null,{\"statements\":[[0,\"                \"],[11,\"div\",[]],[15,\"class\",\"col-xs-12 col-sm-6 subject-item hint--bottom hint--large\"],[16,\"aria-label\",[34,[[28,[\"subject\",\"label\"]]]]],[13],[0,\"\\n                    \"],[11,\"a\",[]],[16,\"href\",[34,[[28,[\"subject\",\"link\"]]]]],[15,\"class\",\"btn btn-primary p-sm ember-view\"],[16,\"style\",[26,[\"buttonStyle\"]],null],[13],[1,[28,[\"subject\",\"name\"]],false],[14],[0,\"\\n                \"],[14],[0,\"\\n\"]],\"locals\":[\"subject\"]},null],[0,\"        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/landing-list/template.hbs" } });
});
define('collections/components/landing-paragraph/component', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Component.extend({
        session: _ember.default.inject.service(),
        containerStyle: _ember.default.computed('layout', function () {
            return _ember.default.String.htmlSafe('background-color: ' + this.get('layout.background_color') + '; color: ' + this.get('layout.text_color'));
        }),
        logoStyle: _ember.default.computed('branding.logo', function () {
            return _ember.default.String.htmlSafe('background-image: url(' + this.get('branding.logo.url') + '); height: ' + this.get('branding.logo.height'));
        })
    });
});
define("collections/components/landing-paragraph/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "f7g61+xF", "block": "{\"statements\":[[11,\"div\",[]],[16,\"id\",[34,[[33,[\"get-section-id\"],[[28,[\"layout\",\"title\"]]],null]]]],[15,\"class\",\"landing-paragraph-container p-xl\"],[16,\"style\",[26,[\"containerStyle\"]],null],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"text-center col-xs-12\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"layout\",\"title\"]]],null,{\"statements\":[[0,\"                    \"],[11,\"h2\",[]],[15,\"style\",\"display: inline\"],[13],[0,\"\\n                        \"],[1,[28,[\"layout\",\"title\"]],false],[0,\"\\n                        \"],[11,\"a\",[]],[15,\"class\",\"headerlink\"],[16,\"href\",[34,[\"#\",[33,[\"get-section-id\"],[[28,[\"layout\",\"title\"]]],null]]]],[13],[0,\"\\n                            \"],[11,\"i\",[]],[15,\"class\",\"fa fa-link\"],[13],[14],[0,\"\\n                        \"],[14],[0,\"\\n                    \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"                \"],[11,\"p\",[]],[15,\"class\",\"text-left\"],[13],[1,[28,[\"layout\",\"body\"]],false],[14],[0,\"\\n            \"],[14],[0,\"\\n        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/landing-paragraph/template.hbs" } });
});
define('collections/components/landing-splash-image/component', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Component.extend({
        session: _ember.default.inject.service(),
        imageStyle: _ember.default.computed('layout', function () {
            var url = this.get('layout.img_url') ? 'url(' + this.get('layout.img_url') + ')' : 'url(\'/img/splash-default-f3de214dacadd81632e3369b542d7fc9.jpg\')';
            var height = this.get('layout.height') ? this.get('layout.height') + 'px' : '300px';
            return 'background: ' + url + ' no-repeat left center; ' + 'background-size: cover; ' + ('height: ' + height + ';');
        })
    });
});
define("collections/components/landing-splash-image/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "cCrla8lx", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"splash-container p-xl\"],[16,\"style\",[26,[\"imageStyle\"]],null],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/landing-splash-image/template.hbs" } });
});
define('collections/components/landing-sponsors/component', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Component.extend({
        containerStyle: _ember.default.computed('layout', function () {
            var bg = this.get('layout.background_color') ? this.get('layout.background_color') : this.get('branding.colors.background');
            var txt = this.get('layout.text_color') ? this.get('layout.text_color') : this.get('branding.colors.text');
            return _ember.default.String.htmlSafe('background-color: ' + bg + '; color: ' + txt);
        }),
        data: _ember.default.computed('layout', function () {
            var dataSource = this.get('layout.data');
            return this.get('model.settings').data[dataSource];
        })
    });
});
define("collections/components/landing-sponsors/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "GjOnDMhE", "block": "{\"statements\":[[11,\"div\",[]],[16,\"id\",[34,[[33,[\"get-section-id\"],[[28,[\"layout\",\"title\"]]],null]]]],[15,\"class\",\"p-xl\"],[16,\"style\",[26,[\"containerStyle\"]],null],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"row text-center\"],[13],[0,\"\\n            \"],[11,\"h2\",[]],[15,\"style\",\"display: inline\"],[13],[0,\"\\n                \"],[1,[28,[\"layout\",\"title\"]],false],[0,\"\\n                \"],[11,\"a\",[]],[15,\"class\",\"headerlink\"],[16,\"href\",[34,[\"#\",[33,[\"get-section-id\"],[[28,[\"layout\",\"title\"]]],null]]]],[13],[0,\"\\n                    \"],[11,\"i\",[]],[15,\"class\",\"fa fa-link\"],[13],[14],[0,\"\\n                \"],[14],[0,\"\\n            \"],[14],[0,\"\\n        \"],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"data\"]]],null,{\"statements\":[[0,\"                \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"categorySponsors\",\"category\"]]],null,{\"statements\":[[0,\"                    \"],[11,\"h3\",[]],[13],[1,[28,[\"categorySponsors\",\"category\"]],false],[14],[11,\"hr\",[]],[13],[14],[0,\"\\n\"]],\"locals\":[]},null],[6,[\"each\"],[[28,[\"categorySponsors\",\"sponsors\"]]],null,{\"statements\":[[0,\"                    \"],[11,\"div\",[]],[15,\"class\",\"text-center col-xl-1 col-lg-3 col-md-3 col-sm-4 col-xs-12\"],[13],[0,\"\\n                        \"],[11,\"div\",[]],[15,\"class\",\"logo-wrapper\"],[13],[0,\"\\n                            \"],[11,\"a\",[]],[16,\"href\",[34,[[28,[\"sponsor\",\"website_url\"]]]]],[13],[0,\"\\n                                \"],[11,\"img\",[]],[15,\"class\",\"sponsors-logo m-b-md\"],[16,\"src\",[34,[[28,[\"sponsor\",\"img_url\"]]]]],[13],[14],[0,\"\\n                            \"],[14],[0,\"\\n                        \"],[14],[0,\"\\n                    \"],[14],[0,\"\\n\"]],\"locals\":[\"sponsor\"]},null],[0,\"                \"],[14],[0,\"\\n\"]],\"locals\":[\"categorySponsors\"]},null],[0,\"        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/landing-sponsors/template.hbs" } });
});
define('collections/components/landing-title/component', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Component.extend({
        session: _ember.default.inject.service(),
        containerStyle: _ember.default.computed('layout', 'branding', function () {
            // if image is specified for background, use that
            // otherwise, check if a background color has been specified.
            // if so, use that. if not, use the branding background color
            // if text color is specified, use that. otherwise, use branding text color
            var bgColor = this.get('layout.background_color') ? this.get('layout.background_color') : this.get('branding.colors.background');
            var bgImage = this.get('layout.img_url');
            var bg = bgImage ? 'background:url(' + bgImage + ') no-repeat left center; background-size: cover;' : 'background-color:' + bgColor + ';';
            var textColor = this.get('layout.text_color') ? this.get('layout.text_color') : this.get('branding.colors.text');
            textColor = 'color:' + textColor + ';';
            return _ember.default.String.htmlSafe(bg + textColor);
        }),
        titleColor: _ember.default.computed('layout', function () {
            return _ember.default.String.htmlSafe(this.get('layout.title_color') ? 'color: ' + this.get('layout.title_color') + ';' : '');
        }),
        taglineColor: _ember.default.computed('layout', function () {
            return _ember.default.String.htmlSafe(this.get('layout.tagline_color') ? 'color: ' + this.get('layout.tagline_color') + ';' : '');
        }),
        logoStyle: _ember.default.computed('branding.logo', function () {
            return _ember.default.String.htmlSafe('background-image: url(' + this.get('branding.logo.url') + '); height: ' + this.get('branding.logo.height'));
        })
    });
});
define("collections/components/landing-title/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "8asqO9g6", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"landing-title-container p-xl\"],[16,\"style\",[26,[\"containerStyle\"]],null],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"text-center m-t-lg col-xs-12\"],[13],[0,\"\\n                \"],[11,\"div\",[]],[15,\"class\",\"preprint-brand\"],[13],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"layout\",\"settings\",\"useLogo\"]]],null,{\"statements\":[[0,\"                    \"],[11,\"div\",[]],[15,\"class\",\"coll-hero-logo\"],[16,\"style\",[26,[\"logoStyle\"]],null],[15,\"aria-role\",\"img\"],[16,\"aria-label\",[34,[[28,[\"branding\",\"logo\",\"label\"]]]]],[13],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[6,[\"if\"],[[28,[\"layout\",\"title\"]]],null,{\"statements\":[[0,\"                    \"],[11,\"h1\",[]],[16,\"style\",[26,[\"titleColor\"]],null],[13],[1,[28,[\"layout\",\"title\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"                    \"],[11,\"h1\",[]],[13],[1,[28,[\"model\",\"title\"]],false],[14],[0,\"\\n                \"]],\"locals\":[]}]],\"locals\":[]}],[6,[\"if\"],[[28,[\"layout\",\"tagline\"]]],null,{\"statements\":[[0,\"                    \"],[11,\"p\",[]],[15,\"class\",\"lead\"],[16,\"style\",[26,[\"taglineColor\"]],null],[13],[1,[28,[\"layout\",\"tagline\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"                    \"],[11,\"p\",[]],[15,\"class\",\"lead\"],[16,\"style\",[26,[\"taglineColor\"]],null],[13],[1,[28,[\"model\",\"description\"]],false],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"            \"],[14],[0,\"\\n        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/landing-title/template.hbs" } });
});
define('collections/components/license-list/component', ['exports', 'ember-osf/components/license-list/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/license-picker/component', ['exports', 'ember-osf/components/license-picker/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/meeting-keynote-speakers/component', ['exports', 'ember', 'lodash'], function (exports, _ember, _lodash) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Component.extend({
        store: _ember.default.inject.service(),
        session: _ember.default.inject.service(),
        data: _ember.default.computed('layout', function () {
            var dataSource = this.get('layout.data');
            return this.get('model.settings').data[dataSource];
        }),
        containerStyle: _ember.default.computed('layout', function () {
            return _ember.default.String.htmlSafe('background-color: ' + this.get('layout.background_color') + '; color: ' + this.get('layout.text_color') + ';');
        }),
        users: _ember.default.computed('model.items', function () {
            var _this = this;

            var items = this.get('model.items');
            var userIDs = [];
            items.forEach(function (item) {
                var userID = item.get('createdBy.id');
                if (userID !== undefined) {
                    userIDs.push(userID);
                }
            });
            return _lodash.default.uniq(userIDs).map(function (userID) {
                return _this.get('store').findRecord('user', userID);
            });
        })
    });
});
define("collections/components/meeting-keynote-speakers/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "d7JH1KDR", "block": "{\"statements\":[[11,\"div\",[]],[16,\"id\",[34,[[33,[\"get-section-id\"],[[28,[\"layout\",\"title\"]]],null]]]],[15,\"class\",\"meeting-keynote-speakers-container p-xl\"],[16,\"style\",[26,[\"containerStyle\"]],null],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"layout\",\"title\"]]],null,{\"statements\":[[0,\"            \"],[11,\"div\",[]],[15,\"class\",\"row text-center section-title\"],[13],[0,\"\\n                \"],[11,\"h2\",[]],[15,\"style\",\"display: inline\"],[13],[0,\"\\n                    \"],[1,[28,[\"layout\",\"title\"]],false],[0,\"\\n                    \"],[11,\"a\",[]],[15,\"class\",\"headerlink\"],[16,\"href\",[34,[\"#\",[33,[\"get-section-id\"],[[28,[\"layout\",\"title\"]]],null]]]],[13],[0,\"\\n                        \"],[11,\"i\",[]],[15,\"class\",\"fa fa-link\"],[13],[14],[0,\"\\n                    \"],[14],[0,\"\\n                \"],[14],[0,\"\\n            \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"        \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"data\"]]],null,{\"statements\":[[6,[\"each\"],[[28,[\"data\"]]],null,{\"statements\":[[0,\"                        \"],[11,\"div\",[]],[15,\"class\",\"col-xl-1 col-lg-3 col-md-4 col-sm-4 col-xs-12\"],[13],[0,\"\\n                            \"],[11,\"div\",[]],[15,\"class\",\"speaker-detail\"],[13],[0,\"\\n                                \"],[11,\"img\",[]],[15,\"class\",\"speaker-pic-thumbnail\"],[16,\"src\",[34,[[28,[\"speaker\",\"img_url\"]]]]],[13],[14],[0,\"\\n                                \"],[11,\"p\",[]],[15,\"class\",\"speaker-name\"],[13],[1,[28,[\"speaker\",\"first_name\"]],false],[0,\" \"],[1,[28,[\"speaker\",\"last_name\"]],false],[0,\"\\n                                    \"],[11,\"br\",[]],[13],[14],[0,\"\\n                                    \"],[11,\"span\",[]],[15,\"class\",\"affiliation\"],[13],[1,[28,[\"speaker\",\"affiliation\"]],false],[14],[0,\"\\n                                \"],[14],[0,\"\\n                            \"],[14],[0,\"\\n                        \"],[14],[0,\"\\n\"]],\"locals\":[\"speaker\"]},null]],\"locals\":[]},{\"statements\":[[6,[\"if\"],[[28,[\"users\"]]],null,{\"statements\":[[6,[\"each\"],[[28,[\"users\"]]],null,{\"statements\":[[0,\"                        \"],[11,\"div\",[]],[15,\"class\",\"col-xl-1 col-lg-3 col-md-4 col-sm-4 col-xs-12 m-b-s m-t-lg\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"speaker\",\"gravatar\"]]],null,{\"statements\":[[0,\"                                    \"],[11,\"img\",[]],[15,\"class\",\"speaker-pic-thumbnail\"],[15,\"alt\",\"User gravatar\"],[16,\"src\",[34,[[28,[\"speaker\",\"gravatar\"]]]]],[13],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"                                    \"],[11,\"img\",[]],[15,\"class\",\"speaker-pic-thumbnail\"],[15,\"alt\",\"User gravatar\"],[15,\"src\",\"https://udayton.edu/0/img/generic-profile.png\"],[13],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"                            \"],[11,\"p\",[]],[15,\"class\",\"speaker-name p-t-xs\"],[13],[1,[28,[\"speaker\",\"computedFullName\"]],false],[14],[0,\"\\n                        \"],[14],[0,\"\\n\"]],\"locals\":[\"speaker\"]},null],[0,\"                \"]],\"locals\":[]},null]],\"locals\":[]}],[0,\"            \"],[14],[0,\"\\n        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/meeting-keynote-speakers/template.hbs" } });
});
define('collections/components/meeting-schedule/component', ['exports', 'ember', 'lodash', 'moment'], function (exports, _ember, _lodash, _moment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Component.extend({
        session: _ember.default.inject.service(),
        store: _ember.default.inject.service(),
        filterString: '',
        trackFilter: '',
        roomFilter: '',
        selectedItemId: 0,
        data: _ember.default.computed('layout', function () {
            var dataSource = this.get('layout.data');
            return this.get('model.settings').data[dataSource];
        }),
        containerStyle: _ember.default.computed('layout', function () {
            var bg = this.get('layout.background_color') ? 'background-color:' + this.get('layout.background_color') + ';' : '';
            var txt = this.get('layout.text_color') ? 'color: ' + this.get('layout.text_color') + ';' : '';
            return _ember.default.String.htmlSafe(bg + txt);
        }),
        items: _ember.default.computed('model', function () {
            var _this = this;

            // fetches the items, sorts them into buckets by start time, returns them as a list
            return this.get('model.items').then(function (results) {
                var tempList = [];
                results.forEach(function (i) {
                    tempList.push(i);
                });
                var tempItems = tempList.sort(function (a, b) {
                    var startTimeA = (0, _moment.default)(a.get('startTime'));
                    var startTimeB = (0, _moment.default)(b.get('startTime'));
                    var endTimeA = (0, _moment.default)(a.get('endTime'));
                    var endTimeB = (0, _moment.default)(b.get('endTime'));
                    var locationA = a.get('location');
                    var locationB = b.get('location');

                    // Sorts by: 1st) start time, 2nd) end time, 3rd) location
                    if (startTimeA.isSame(startTimeB)) {
                        if (endTimeA.isSame(endTimeB)) {
                            return locationA > locationB;
                        } else {
                            return endTimeA.diff(endTimeB);
                        }
                    } else {
                        return startTimeA.diff(startTimeB);
                    }
                });

                var retList = [];
                tempItems.forEach(function (i) {
                    if (retList.length === 0) {
                        retList.push([i]);
                    } else if (retList[retList.length - 1][0].get('startTime').toISOString() === i.get('startTime').toISOString()) {
                        retList[retList.length - 1].push(i);
                    } else {
                        retList.push([i]);
                    }
                });
                if (retList.length > 0) {
                    _this.set('selectedItemId', retList[0][0].id);
                }
                return retList;
            });
        }),
        rooms: _ember.default.computed('model', function () {
            return this.get('model.items').then(function (results) {
                var roomsList = [];
                results.forEach(function (i) {
                    roomsList.push(i.get('location'));
                });
                return _lodash.default.uniq(roomsList).sort();
            });
        }),
        tracks: _ember.default.computed('model', function () {
            return this.get('model.items').then(function (results) {
                var tracksList = [];
                results.forEach(function (i) {
                    if (i.get('track')) {
                        tracksList.push(i.get('track'));
                    }
                });
                return _lodash.default.uniq(tracksList).sort();
            });
        }),
        selectedItem: _ember.default.computed('selectedItemId', 'model', function () {
            var id = parseInt(this.get('selectedItemId'), 10);
            if (id >= 0) {
                return this.get('store').findRecord('item', id).then(function (i) {
                    return i;
                });
            }
        })
    });
});
define("collections/components/meeting-schedule/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "NQmjS8zf", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"meetings-schedule-container p-lg\"],[16,\"style\",[26,[\"containerStyle\"]],null],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"col-sm-6\"],[13],[0,\"\\n                \"],[11,\"div\",[]],[15,\"id\",\"schedule-header\"],[13],[0,\"\\n                    \"],[1,[33,[\"input\"],null,[[\"value\",\"placeholder\",\"style\"],[[28,[\"filterString\"]],\"Filter schedule\",\"color:black;\"]]],false],[0,\" | Filter by:\\n                    \"],[11,\"select\",[]],[16,\"onchange\",[33,[\"action\"],[[28,[null]],[33,[\"mut\"],[[28,[\"trackFilter\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[13],[0,\"\\n                        \"],[11,\"option\",[]],[15,\"value\",\"\"],[16,\"selected\",[33,[\"eq\"],[\"\",[28,[\"trackFilter\"]]],null],null],[13],[0,\"All Tracks\"],[14],[0,\"\\n\"],[6,[\"each\"],[[33,[\"await\"],[[28,[\"tracks\"]]],null]],null,{\"statements\":[[0,\"                            \"],[11,\"option\",[]],[16,\"value\",[28,[\"track\"]],null],[16,\"selected\",[33,[\"eq\"],[[28,[\"track\"]],[28,[\"trackFilter\"]]],null],null],[13],[1,[28,[\"track\"]],false],[14],[0,\"\\n\"]],\"locals\":[\"track\"]},null],[0,\"                    \"],[14],[0,\"\\n                    \"],[11,\"select\",[]],[16,\"onchange\",[33,[\"action\"],[[28,[null]],[33,[\"mut\"],[[28,[\"roomFilter\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[13],[0,\"\\n                        \"],[11,\"option\",[]],[15,\"value\",\"\"],[16,\"selected\",[33,[\"eq\"],[\"\",[28,[\"roomFilter\"]]],null],null],[13],[0,\"All Rooms\"],[14],[0,\"\\n\"],[6,[\"each\"],[[33,[\"await\"],[[28,[\"rooms\"]]],null]],null,{\"statements\":[[0,\"                            \"],[11,\"option\",[]],[16,\"value\",[28,[\"room\"]],null],[16,\"selected\",[33,[\"eq\"],[[28,[\"room\"]],[28,[\"roomFilter\"]]],null],null],[13],[1,[28,[\"room\"]],false],[14],[0,\"\\n\"]],\"locals\":[\"room\"]},null],[0,\"                    \"],[14],[0,\"\\n                \"],[14],[0,\"\\n                \"],[11,\"div\",[]],[15,\"id\",\"schedule-window\"],[13],[0,\"\\n\"],[6,[\"each\"],[[33,[\"await\"],[[28,[\"items\"]]],null]],null,{\"statements\":[[0,\"                        \"],[11,\"h4\",[]],[15,\"class\",\"time-slot-header\"],[13],[1,[28,[\"itemlist\",\"0\",\"startTimeFormatted\"]],false],[14],[0,\"\\n                        \"],[11,\"table\",[]],[15,\"class\",\"time-slot\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"itemlist\"]]],null,{\"statements\":[[6,[\"if\"],[[33,[\"and\"],[[33,[\"or\"],[[33,[\"contains-substring\"],[[28,[\"item\",\"scheduleFilterText\"]],[28,[\"filterString\"]]],null],[33,[\"contains-substring\"],[[33,[\"await\"],[[28,[\"item\",\"createdBy\",\"computedFullName\"]]],null],[28,[\"filterString\"]]],null]],null],[33,[\"contains-substring\"],[[28,[\"item\",\"location\"]],[28,[\"roomFilter\"]]],null]],null]],null,{\"statements\":[[0,\"                                    \"],[11,\"tbody\",[]],[16,\"onclick\",[33,[\"action\"],[[28,[null]],[33,[\"mut\"],[[28,[\"selectedItemId\"]]],null],[28,[\"item\",\"id\"]]],null],null],[13],[0,\"\\n                                    \"],[11,\"tr\",[]],[13],[0,\"\\n                                        \"],[11,\"td\",[]],[15,\"class\",\"top-row left-cell event-title\"],[13],[11,\"strong\",[]],[13],[1,[28,[\"item\",\"title\"]],false],[14],[14],[0,\"\\n                                        \"],[11,\"td\",[]],[15,\"class\",\"top-row right-cell event-location\"],[13],[1,[28,[\"item\",\"location\"]],false],[14],[0,\"\\n                                    \"],[14],[0,\"\\n                                    \"],[11,\"tr\",[]],[13],[0,\"\\n                                        \"],[11,\"td\",[]],[15,\"class\",\"bottom-row left-cell event-presenter\"],[13],[1,[33,[\"await\"],[[28,[\"item\",\"createdBy\",\"computedFullName\"]]],null],false],[14],[0,\"\\n                                        \"],[11,\"td\",[]],[15,\"class\",\"bottom-row right-cell event-end-time\"],[13],[0,\"Ends\\n                                            at \"],[1,[28,[\"item\",\"endTimeFormatted\"]],false],[14],[0,\"\\n                                    \"],[14],[0,\"\\n                                    \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[\"item\"]},null],[0,\"                        \"],[14],[0,\"\\n                        \"],[11,\"br\",[]],[13],[14],[0,\"\\n\"]],\"locals\":[\"itemlist\"]},null],[0,\"                    \"],[11,\"br\",[]],[13],[14],[11,\"br\",[]],[13],[14],[0,\"\\n                \"],[14],[0,\"\\n            \"],[14],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"col-sm-6\"],[13],[0,\"\\n                \"],[11,\"div\",[]],[15,\"class\",\"item-detail\"],[13],[0,\"\\n                    \"],[11,\"h2\",[]],[13],[1,[33,[\"get\"],[[33,[\"await\"],[[28,[\"selectedItem\"]]],null],\"title\"],null],false],[11,\"br\",[]],[13],[14],[0,\"\\n                        \"],[11,\"small\",[]],[13],[1,[33,[\"get\"],[[33,[\"await\"],[[28,[\"selectedItem\"]]],null],\"createdBy.computedFullName\"],null],false],[14],[0,\"\\n                    \"],[14],[0,\"\\n                    \"],[11,\"p\",[]],[13],[1,[33,[\"get\"],[[33,[\"await\"],[[28,[\"selectedItem\"]]],null],\"description\"],null],false],[14],[0,\"\\n                    \"],[11,\"p\",[]],[13],[11,\"a\",[]],[15,\"href\",\"#\"],[13],[0,\"Link to author\"],[14],[0,\" | \"],[11,\"a\",[]],[15,\"href\",\"#\"],[13],[0,\"Link to presentation\"],[14],[14],[0,\"\\n                \"],[14],[0,\"\\n            \"],[14],[0,\"\\n        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/meeting-schedule/template.hbs" } });
});
define('collections/components/meeting-submit/component', ['exports', 'ember', 'collections/config/environment'], function (exports, _ember, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    function getToken() {
        var token = void 0;
        debugger;
        var session = window.localStorage['ember_simple_auth-session'];
        if (session) {
            token = JSON.parse(session).authenticated;
            if ('attributes' in token) {

                return token.attributes.accessToken;
            }
            return token;
        }
    }

    exports.default = _ember.default.Component.extend({

        store: _ember.default.inject.service(),

        buttonString: 'Save',
        disabled: false,
        description: 'Submit',

        actions: {
            pressButton: function () {
                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                    var item, node, uri, xhr, deferred;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    item = this.get('store').createRecord('item');

                                    item.set('title', this.get('widget.parameters.title.value'));
                                    item.set('type', 'event');
                                    item.set('status', 'none');
                                    item.set('collection', this.get('collection'));

                                    node = {};


                                    if (typeof node.value === 'undefined') node.value = _environment.default.NODE_GUID;
                                    uri = _environment.default.OSF.waterbutlerUrl + "v1/resources/" + node.value + "/providers/osfstorage/?kind=file&name=" + item.get('title') + "&direct=true";
                                    xhr = new XMLHttpRequest();

                                    xhr.open("PUT", uri, true);
                                    xhr.withCredentials = false;
                                    xhr.setRequestHeader('Authorization', 'Bearer ' + getToken());

                                    deferred = _ember.default.RSVP.defer();

                                    xhr.onreadystatechange = function () {
                                        if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 300) {
                                            item.set('fileLink', JSON.parse(xhr.responseText).data.links.download);
                                            item.save();
                                        }
                                    };

                                    xhr.send(this.get('widget.parameters.fileData.value'));

                                case 15:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function pressButton() {
                    return _ref.apply(this, arguments);
                }

                return pressButton;
            }()
        }

    });
});
define("collections/components/meeting-submit/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "DyN1C6PG", "block": "{\"statements\":[[11,\"button\",[]],[15,\"class\",\"btn btn-primary submit_button\"],[16,\"disabled\",[33,[\"if\"],[[28,[\"disabled\"]],\"disabled\",null],null],null],[5,[\"action\"],[[28,[null]],\"pressButton\"]],[13],[0,\"\\n    \"],[1,[26,[\"description\"]],false],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/meeting-submit/template.hbs" } });
});
define('collections/components/navbar-auth-dropdown/component', ['exports', 'ember', 'ember-osf/components/navbar-auth-dropdown/component', 'collections/config/environment'], function (exports, _ember, _component, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _component.default.extend({
        gravatarUrl: _ember.default.computed('session.data.authenticated.user', function () {
            var userData = this.get('session.data.authenticated.user');
            var imgLink = userData.gravatar;
            return imgLink ? imgLink + '&s=25' : '';
        }),
        userName: _ember.default.computed('session.data.authenticated.user', function () {
            var userData = this.get('session.data.authenticated.user');
            if (userData) {
                return userData.first_name + ' ' + userData.last_name;
            }
        }),
        actions: {
            logout: function logout() {
                this.get('session').invalidate().catch(function () {
                    window.location.href = _environment.default.apiBaseUrl;
                });
            }
        }
    });
});
define("collections/components/navbar-auth-dropdown/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "UENUf4Rk", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"    \"],[11,\"a\",[]],[15,\"href\",\"#\"],[15,\"class\",\"dropdown-toggle nav-user-dropdown\"],[15,\"data-toggle\",\"dropdown\"],[15,\"role\",\"button\"],[15,\"aria-expanded\",\"false\"],[13],[0,\"\\n        \"],[11,\"span\",[]],[15,\"class\",\"osf-gravatar\"],[13],[0,\"\\n            \"],[11,\"img\",[]],[16,\"src\",[34,[[26,[\"gravatarUrl\"]]]]],[15,\"alt\",\"User gravatar\"],[13],[14],[0,\"\\n        \"],[14],[0,\" \"],[1,[26,[\"userName\"]],false],[0,\"\\n        \"],[11,\"span\",[]],[15,\"class\",\"caret\"],[13],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"ul\",[]],[15,\"class\",\"dropdown-menu\"],[15,\"role\",\"menu\"],[13],[0,\"\\n        \"],[11,\"li\",[]],[13],[0,\"\\n            \"],[11,\"a\",[]],[16,\"href\",[34,[[26,[\"host\"]],\"profile/\"]]],[13],[11,\"i\",[]],[15,\"class\",\"fa fa-user fa-lg p-r-xs\"],[13],[14],[0,\" My Profile\"],[14],[0,\"\\n        \"],[14],[0,\"\\n        \"],[11,\"li\",[]],[13],[0,\"\\n            \"],[11,\"a\",[]],[16,\"href\",[34,[[26,[\"host\"]],\"support/\"]]],[13],[11,\"i\",[]],[15,\"class\",\"fa fa-life-ring fa-lg p-r-xs\"],[13],[14],[0,\" Support\"],[14],[0,\"\\n        \"],[14],[0,\"\\n        \"],[11,\"li\",[]],[13],[0,\"\\n            \"],[11,\"a\",[]],[16,\"href\",[34,[[26,[\"host\"]],\"settings/\"]]],[13],[11,\"i\",[]],[15,\"class\",\"fa fa-cog fa-lg p-r-xs\"],[13],[14],[0,\" Settings\"],[14],[0,\"\\n        \"],[14],[0,\"\\n        \"],[11,\"li\",[]],[15,\"class\",\"pointer\"],[13],[0,\"\\n            \"],[11,\"a\",[]],[16,\"onclick\",[33,[\"action\"],[[28,[null]],\"logout\"],null],null],[13],[11,\"i\",[]],[15,\"class\",\"fa fa-sign-out fa-lg p-r-xs\"],[13],[14],[0,\" Log out\"],[14],[0,\"\\n        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"col-sm-12\"],[13],[0,\"\\n        \"],[11,\"a\",[]],[15,\"class\",\"btn btn-info btn-top-login m-r-xs\"],[5,[\"action\"],[[28,[null]],[28,[\"loginAction\"]]]],[13],[0,\"Sign in with OSF\"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/navbar-auth-dropdown/template.hbs" } });
});
define('collections/components/new-navbar-auth-dropdown/component', ['exports', 'ember-osf/components/new-navbar-auth-dropdown/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/new-osf-navbar/component', ['exports', 'ember-osf/components/new-osf-navbar/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/oauth-popup/component', ['exports', 'ember-osf/components/oauth-popup/component'], function (exports, _component) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.defineProperty(exports, 'default', {
        enumerable: true,
        get: function () {
            return _component.default;
        }
    });
});
define('collections/components/osf-copyright/component', ['exports', 'ember-osf/components/osf-copyright/component'], function (exports, _component) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.defineProperty(exports, 'default', {
        enumerable: true,
        get: function () {
            return _component.default;
        }
    });
});
define('collections/components/osf-footer/component', ['exports', 'ember-osf/components/osf-footer/component'], function (exports, _component) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.defineProperty(exports, 'default', {
        enumerable: true,
        get: function () {
            return _component.default;
        }
    });
});
define('collections/components/osf-mode-footer/component', ['exports', 'ember-osf/components/osf-mode-footer/component'], function (exports, _component) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.defineProperty(exports, 'default', {
        enumerable: true,
        get: function () {
            return _component.default;
        }
    });
});
define('collections/components/osf-navbar/component', ['exports', 'ember-osf/components/osf-navbar/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/osf-paginator/component', ['exports', 'ember-osf/components/osf-paginator/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/osf-user-picker/component', ['exports', 'ember', 'ember-osf/const/permissions', 'ember-osf/mixins/node-actions', 'collections/config/environment'], function (exports, _ember, _permissions, _nodeActions, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _Ember$Component$exte;

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    exports.default = _ember.default.Component.extend(_nodeActions.default, (_Ember$Component$exte = {
        i18n: _ember.default.inject.service(),

        // Variables that used to pass in from Controller
        store: _ember.default.inject.service(),
        toast: _ember.default.inject.service('toast'),
        currentUser: _ember.default.inject.service('currentUser'),
        editMode: 'Submit', // defaults, need update
        parentNode: null, // defaults, need update
        isAdmin: true, // defaults, need update
        canEdit: true, // defaults, need update
        node: null,
        authorModification: false,
        currentPage: 1,
        // Permissions labels for dropdown
        permissionOptions: _permissions.permissionSelector,
        parentContributorsAdded: false,
        addState: 'emptyView', // There are 3 view states on left side of Authors panel.
        // Default state just shows search bar.
        query: null,
        // In Add mode, contributors are emailed on creation of preprint. In Edit mode,
        // contributors are emailed as soon as they are added to preprint.
        sendEmail: false,

        parentContributors: _ember.default.A(),
        searchResults: _ember.default.A(), // defaults, need update

        contributors: _ember.default.computed('node', function () {
            var contribs = this.get('node.contributors');
            this.set('widget.parameter', {
                contribs: contribs,
                state: ['defined']
            });
            return contribs;
        }),
        // Returns list of user ids associated with current node
        currentContributorIds: _ember.default.computed('contributors', function () {
            var contribIds = [];
            this.get('contributors').forEach(function (contrib) {
                return contribIds.push(contrib.get('userId'));
            });
            return contribIds;
        })
    }, _defineProperty(_Ember$Component$exte, 'sendEmail', false), _defineProperty(_Ember$Component$exte, 'editing', true), _defineProperty(_Ember$Component$exte, 'numParentContributors', _ember.default.computed('parentNode', function () {
        if (this.get('parentNode')) {
            return this.get('parentNode').get('contributors').get('length');
        } else {
            return 0;
        }
    })), _defineProperty(_Ember$Component$exte, 'totalSearchResults', _ember.default.computed('searchResults.[]', function () {
        var searchResults = this.get('searchResults');
        if (searchResults && searchResults.links) {
            return searchResults.meta.pagination.total;
        }
    })), _defineProperty(_Ember$Component$exte, 'pages', _ember.default.computed('searchResults.[]', function () {
        var searchResults = this.get('searchResults');
        if (searchResults && searchResults.links) {
            return searchResults.meta.total;
        }
    })), _defineProperty(_Ember$Component$exte, 'valid', _ember.default.observer('contributors.length', function () {
        var hasContributors = this.get('contributors.length');
        this.set('isSectionSaved', hasContributors);
        return hasContributors;
    })), _defineProperty(_Ember$Component$exte, 'elementsLoaded', _ember.default.observer('isOpen', function () {
        if (this.get('isOpen')) {
            _ember.default.run.once(this.get('applyPopovers').bind(this));
        }
    })), _defineProperty(_Ember$Component$exte, 'init', function init() {
        var _this = this;

        this._super.apply(this, arguments);
        this.get('store').findRecord('node', _environment.default.NODE_GUID).then(function (result) {
            return _this.set('node', result);
        });
    }), _defineProperty(_Ember$Component$exte, 'actions', {
        // Adds contributor then redraws view - addition of contributor
        // may change which update/remove contributor requests are permitted
        addContributorLocal: function addContributorLocal(user) {
            var _this2 = this;

            this.get('actions.addContributor').call(this, user.id, 'write', true, false, undefined, undefined, true).then(function (res) {
                _this2.toggleAuthorModification();
                _this2.get('contributors').pushObject(res);
                _this2.get('toast').success(_this2.get('i18n').t('submit.preprint_author_added'));
                _this2.highlightSuccessOrFailure(res.id, _this2, 'success');
            }, function () {
                _this2.get('toast').error(_this2.get('i18n').t('submit.error_adding_author'));
                _this2.highlightSuccessOrFailure(user.id, _this2, 'error');
                user.rollbackAttributes();
            });
        },

        // Adds all contributors from parent project to current
        // component as long as they are not current contributors
        addContributorsFromParentProject: function addContributorsFromParentProject() {
            var _this3 = this;

            this.set('parentContributorsAdded', true);
            var contributorsToAdd = _ember.default.A();
            this.get('parentContributors').toArray().forEach(function (contributor) {
                if (_this3.get('currentContributorIds').indexOf(contributor.get('userId')) === -1) {
                    contributorsToAdd.push({
                        permission: contributor.get('permission'),
                        bibliographic: contributor.get('bibliographic'),
                        userId: contributor.get('userId')
                    });
                }
            });
            this.get('actions.addContributors').call(this, contributorsToAdd, this.get('sendEmail')).then(function (contributors) {
                contributors.forEach(function (contrib) {
                    _this3.get('contributors').pushObject(contrib);
                });
                _this3.toggleAuthorModification();
            }).catch(function () {
                _this3.get('toast').error('Some contributors may not have been added. ' + 'Try adding manually.');
            });
        },

        // Adds unregistered contributor, then clears form and switches back to search view.
        // Should wait to transition until request has completed.
        addUnregisteredContributor: function addUnregisteredContributor(fullName, email) {
            var _this4 = this;

            if (fullName && email) {
                var res = this.get('actions.addContributor').call(this, null, 'write', true, this.get('sendEmail'), fullName, email, true);
                res.then(function (contributor) {
                    _this4.get('contributors').pushObject(contributor);
                    _this4.toggleAuthorModification();
                    _this4.set('addState', 'searchView');
                    _this4.set('fullName', '');
                    _this4.set('email', '');
                    _this4.get('toast').success(_this4.get('i18n').t('submit.preprint_unregistered_author_added'));
                    _this4.highlightSuccessOrFailure(contributor.id, _this4, 'success');
                }, function (error) {
                    if (error.errors[0] && error.errors[0].detail && error.errors[0].detail.indexOf('is already a contributor') > -1) {
                        _this4.get('toast').error(error.errors[0].detail);
                    } else {
                        _this4.get('toast').error(_this4.get('i18n').t('submit.error_adding_unregistered_author'));
                    }
                    _this4.highlightSuccessOrFailure('add-unregistered-contributor-form', _this4, 'error');
                });
            }
        },

        // Requests a particular page of user results
        findContributors: function findContributors(page) {
            var _this5 = this;

            var query = this.get('query');
            if (query) {
                this.findContributors(query, page).then(function () {
                    return _this5.set('addState', 'searchView');
                }, function () {
                    _this5.get('toast').error('Could not perform search query.');
                    _this5.highlightSuccessOrFailure('author-search-box', _this5, 'error');
                });
            }
        },

        // Removes contributor then redraws contributor list view -
        // removal of contributor may change which additional update/remove requests are permitted.
        removeContributorLocal: function removeContributorLocal(contrib) {
            var _this6 = this;

            this.get('actions.removeContributor').call(this, contrib).then(function () {
                _this6.toggleAuthorModification();
                _this6.removedSelfAsAdmin(contrib, contrib.get('permission'));
                _this6.get('contributors').removeObject(contrib);
                _this6.get('toast').success(_this6.get('i18n').t('submit.preprint_author_removed'));
            }, function () {
                _this6.get('toast').error(_this6.get('i18n').t('submit.error_adding_author'));
                _this6.highlightSuccessOrFailure(contrib.id, _this6, 'error');
                contrib.rollbackAttributes();
            });
        },

        // Updates contributor then redraws contributor list view - updating contributor
        // permissions may change which additional update/remove requests are permitted.
        updatePermissions: function updatePermissions(contributor, permission) {
            var _this7 = this;

            this.get('actions.updateContributor').call(this, contributor, permission, '').then(function () {
                _this7.toggleAuthorModification();
                _this7.highlightSuccessOrFailure(contributor.id, _this7, 'success');
                _this7.removedSelfAsAdmin(contributor, permission);
            }, function () {
                _this7.get('toast').error('Could not modify author permissions');
                _this7.highlightSuccessOrFailure(contributor.id, _this7, 'error');
                contributor.rollbackAttributes();
            });
        },

        // Updates contributor then redraws contributor list view - updating contributor
        // bibliographic info may change which additional update/remove requests are permitted.
        updateBibliographic: function updateBibliographic(contributor, isBibliographic) {
            var _this8 = this;

            this.get('actions.updateContributor').call(this, contributor, '', isBibliographic).then(function () {
                _this8.toggleAuthorModification();
                _this8.highlightSuccessOrFailure(contributor.id, _this8, 'success');
            }, function () {
                _this8.get('toast').error('Could not modify citation');
                _this8.highlightSuccessOrFailure(contributor.id, _this8, 'error');
                contributor.rollbackAttributes();
            });
        },

        // There are 3 view states on left side of Authors panel.
        // This switches to add unregistered contrib view.
        unregisteredView: function unregisteredView() {
            this.set('addState', 'unregisteredView');
        },

        // There are 3 view states on left side of Authors panel.
        // This switches to searching contributor results view.
        searchView: function searchView() {
            this.set('addState', 'searchView');
            this.set('fullName', '');
            this.set('email', '');
        },

        // There are 3 view states on left side of Authors panel.
        // This switches to empty view and clears search results.
        resetfindContributorsView: function resetfindContributorsView() {
            this.set('addState', 'searchView');
        },

        // Reorders contributors in UI then sends server request to reorder contributors.
        // If request fails, reverts contributor list in UI back to original.
        reorderItems: function reorderItems(itemModels, draggedContrib) {
            var _this9 = this;

            var originalOrder = this.get('contributors');
            this.set('contributors', itemModels);
            var newIndex = itemModels.indexOf(draggedContrib);
            this.get('actions.reorderContributors').call(this, draggedContrib, newIndex, itemModels).then(function () {
                _this9.highlightSuccessOrFailure(draggedContrib.id, _this9, 'success');
            }, function () {
                _this9.highlightSuccessOrFailure(draggedContrib.id, _this9, 'error');
                _this9.set('contributors', originalOrder);
                _this9.get('toast').error('Could not reorder contributors');
                draggedContrib.rollbackAttributes();
            });
        },

        // Action used by the pagination-pager component to the handle user-click event.
        pageChanged: function pageChanged(current) {
            var _this10 = this;

            var query = this.get('query');
            if (query) {
                this.findContributors(query, current).then(function () {
                    _this10.set('addState', 'searchView');
                    _this10.set('currentPage', current);
                }).catch(function () {
                    _this10.get('toast').error('Could not perform search query.');
                    _this10.highlightSuccessOrFailure('author-search-box', _this10, 'error');
                });
            }
        }
    }), _defineProperty(_Ember$Component$exte, 'findContributors', function findContributors(query, page) {
        var _this11 = this;

        return this.get('store').query('user', {
            filter: {
                'full_name,given_name,middle_names,family_name': query
            },
            page: page
        }).then(function (contributors) {
            _this11.set('searchResults', contributors);
            return contributors;
        }).catch(function () {
            _this11.get('toast').error(_this11.get('i18n').t('submit.search_contributors_error'));
            _this11.highlightSuccessOrFailure('author-search-box', _this11, 'error');
        });
    }), _defineProperty(_Ember$Component$exte, 'highlightSuccessOrFailure', function highlightSuccessOrFailure(elementId, context, status) {
        var highlightClass = (status === 'success' ? 'success' : 'error') + 'Highlight';
        context.$('#' + elementId).addClass(highlightClass);
        _ember.default.run.later(function () {
            return context.$('#' + elementId).removeClass(highlightClass);
        }, 2000);
    }), _defineProperty(_Ember$Component$exte, 'applyPopovers', function applyPopovers() {
        this.$('#permissions-popover').popover({
            container: 'body',
            content: '<dl>' + '<dt>Read</dt>' + '<dd><ul><li>View preprint</li></ul></dd>' + '<dt>Read + Write</dt>' + '<dd><ul><li>Read privileges</li> ' + '<li>Add and configure preprint</li> ' + '<li>Add and edit content</li></ul></dd>' + '<dt>Administrator</dt><dd><ul>' + '<li>Read and write privileges</li>' + '<li>Manage authors</li>' + '<li>Public-private settings</li></ul></dd>' + '</dl>'
        });
        this.$('#bibliographic-popover').popover({
            container: 'body',
            content: 'Only checked authors will be included in preprint citations. ' + 'Authors not in the citation can read and modify the preprint as normal.'
        });
        this.$('#author-popover').popover({
            container: 'body',
            content: 'Preprints must have at least one registered administrator ' + 'and one author showing ' + 'in the citation at all times.  ' + 'A registered administrator is a user who has both confirmed their account and has ' + 'administrator privileges.'
        });
    }), _defineProperty(_Ember$Component$exte, 'removedSelfAsAdmin', function removedSelfAsAdmin(contributor, permission) {
        if (this.get('currentUser').id === contributor.get('userId') && permission !== 'ADMIN') {
            this.set('isAdmin', false);
        }
    }), _defineProperty(_Ember$Component$exte, 'toggleAuthorModification', function toggleAuthorModification() {
        this.toggleProperty('authorModification');
    }), _Ember$Component$exte));
});
define("collections/components/osf-user-picker/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "d98FaXFx", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"editing\"]]],null,{\"statements\":[[0,\"        \"],[11,\"div\",[]],[15,\"class\",\"row form\"],[13],[0,\"\\n          \"],[11,\"div\",[]],[15,\"class\",\"col-xs-12 col-md-5 col-division-right\"],[13],[0,\"\\n            \"],[11,\"form\",[]],[5,[\"action\"],[[28,[null]],\"findContributors\",1],[[\"on\"],[\"submit\"]]],[13],[0,\"\\n              \"],[11,\"div\",[]],[15,\"class\",\"input-group author-search-box\"],[13],[0,\"\\n                \"],[11,\"input\",[]],[15,\"id\",\"author-search-box\"],[15,\"type\",\"text\"],[15,\"class\",\"form-control searchQuery\"],[16,\"onchange\",[33,[\"action\"],[[28,[null]],[33,[\"mut\"],[[28,[\"query\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[16,\"placeholder\",[33,[\"t\"],[\"components.preprint-form-authors.search.placeholder\"],null],null],[13],[14],[0,\"\\n                \"],[11,\"span\",[]],[15,\"class\",\"input-group-btn\"],[13],[0,\"\\n                            \"],[11,\"button\",[]],[15,\"class\",\"btn btn-default authors-search-button\"],[15,\"type\",\"button\"],[5,[\"action\"],[[28,[null]],\"findContributors\",1]],[13],[0,\"\\n                                \"],[11,\"i\",[]],[15,\"class\",\"fa fa-search\"],[13],[14],[0,\"\\n                            \"],[14],[0,\"\\n                        \"],[14],[0,\"\\n              \"],[14],[0,\"\\n            \"],[14],[0,\"\\n\"],[6,[\"if\"],[[33,[\"not-eq\"],[[28,[\"addState\"]],\"emptyView\"],null]],null,{\"statements\":[[6,[\"if\"],[[33,[\"eq\"],[[28,[\"addState\"]],\"searchView\"],null]],null,{\"statements\":[[0,\"                \"],[4,\" <div class=\\\"unregisteredUsers\\\">\\n                  <p>{{t \\\"components.preprint-form-authors.unregistered_users.paragraph\\\"}}</p>\\n                  <button class=\\\"btn btn-primary btn-small\\\" {{action \\\"unregisteredView\\\"}}>{{t \\\"components.preprint-form-authors.unregistered_users.button\\\"}}</button>\\n                </div> \"],[0,\"\\n                \"],[11,\"h3\",[]],[13],[0,\" \"],[1,[33,[\"t\"],[\"components.preprint-form-authors.results\"],null],false],[0,\" \"],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"searchResults\"]]],null,{\"statements\":[[0,\"                  \"],[11,\"table\",[]],[15,\"class\",\"table author-table\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"searchResults\"]]],null,{\"statements\":[[0,\"                      \"],[11,\"tr\",[]],[16,\"id\",[28,[\"result\",\"id\"]],null],[13],[0,\"\\n                        \"],[11,\"td\",[]],[15,\"class\",\"p-v-xs\"],[13],[0,\"\\n                          \"],[11,\"img\",[]],[15,\"class\",\"m-l-xs\"],[16,\"src\",[28,[\"result\",\"links\",\"profile_image\"]],null],[15,\"height\",\"30\"],[15,\"width\",\"30\"],[13],[14],[0,\"\\n                          \"],[11,\"a\",[]],[16,\"href\",[28,[\"result\",\"links\",\"html\"]],null],[15,\"target\",\"_blank\"],[13],[0,\" \"],[1,[28,[\"result\",\"fullName\"]],false],[0,\" \"],[14],[0,\"\\n\"],[6,[\"if\"],[[33,[\"eq\"],[[28,[\"currentUser\"]],[28,[\"result\"]]],null]],null,{\"statements\":[[0,\"                            \"],[11,\"span\",[]],[15,\"class\",\"small\"],[13],[0,\" \"],[1,[33,[\"t\"],[\"components.preprint-form-authors.yourself\"],null],false],[0,\" \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"                        \"],[14],[0,\"\\n                        \"],[11,\"td\",[]],[15,\"class\",\"p-v-xs\"],[13],[0,\"\\n\"],[6,[\"if\"],[[33,[\"user-is-contributor\"],[[28,[\"result\"]],[28,[\"contributors\"]],[28,[\"authorModification\"]]],null]],null,{\"statements\":[[0,\"                            \"],[11,\"span\",[]],[15,\"class\",\"hint hint--left pull-right\"],[16,\"aria-label\",[34,[[33,[\"t\"],[\"components.preprint-form-authors.already_added\"],null]]]],[13],[0,\"\\n                                \"],[11,\"button\",[]],[15,\"class\",\"btn btn-default btn-small disabled disabled-checkmark\"],[13],[0,\"\\n                                    \"],[11,\"i\",[]],[15,\"class\",\"fa fa-check\"],[15,\"aria-hidden\",\"true\"],[13],[14],[0,\"\\n                                \"],[14],[0,\"\\n                            \"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"                            \"],[11,\"button\",[]],[15,\"class\",\"btn btn-success btn-small pull-right\"],[5,[\"action\"],[[28,[null]],\"addContributorLocal\",[28,[\"result\"]]]],[13],[0,\" \"],[1,[33,[\"t\"],[\"global.add\"],null],false],[0,\" \"],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"                        \"],[14],[0,\"\\n                      \"],[14],[0,\"\\n\"]],\"locals\":[\"result\"]},null],[0,\"                  \"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"                  \"],[1,[33,[\"t\"],[\"global.no_results_found\"],null],false],[0,\"\\n\"]],\"locals\":[]}],[6,[\"if\"],[[33,[\"gt\"],[[28,[\"pages\"]],1],null]],null,{\"statements\":[[0,\"                  \"],[11,\"div\",[]],[15,\"class\",\"pull-right text-right\"],[13],[0,\"\\n                    \"],[1,[33,[\"pagination-pager\"],null,[[\"count\",\"current\",\"change\"],[[28,[\"pages\"]],[28,[\"currentPage\"]],[33,[\"action\"],[[28,[null]],\"pageChanged\"],null]]]],false],[0,\"\\n                  \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[6,[\"if\"],[[33,[\"eq\"],[[28,[\"addState\"]],\"unregisteredView\"],null]],null,{\"statements\":[[0,\"                \"],[11,\"h3\",[]],[13],[0,\" \"],[1,[33,[\"t\"],[\"components.preprint-form-authors.add_email\"],null],false],[0,\" \"],[14],[0,\"\\n                \"],[11,\"div\",[]],[15,\"class\",\"user-validation\"],[15,\"id\",\"add-unregistered-contributor-form\"],[13],[0,\"\\n                  \"],[1,[33,[\"unregistered-contributor-form\"],null,[[\"editMode\",\"resetfindContributorsView\",\"addUnregisteredContributor\"],[[28,[\"editMode\"]],[33,[\"action\"],[[28,[null]],\"resetfindContributorsView\"],null],[33,[\"action\"],[[28,[null]],\"addUnregisteredContributor\"],null]]]],false],[0,\"\\n                \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"          \"],[14],[0,\"\\n          \"],[11,\"div\",[]],[15,\"class\",\"col-xs-12 col-md-7\"],[13],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"author-header\"],[13],[0,\"\\n              \"],[11,\"h2\",[]],[15,\"class\",\"header-inline\"],[13],[0,\" \"],[1,[33,[\"t\"],[\"global.authors\"],null],false],[0,\" \"],[14],[0,\"\\n              \"],[11,\"span\",[]],[13],[0,\"\\n                        \"],[11,\"i\",[]],[15,\"class\",\"fa fa-question-circle permission-info\"],[15,\"data-toggle\",\"popover\"],[16,\"data-title\",[34,[[33,[\"t\"],[\"components.preprint-form-authors.authors.title\"],null]]]],[15,\"data-trigger\",\"hover\"],[15,\"data-html\",\"true\"],[15,\"data-placement\",\"bottom\"],[15,\"id\",\"author-popover\"],[13],[0,\"\\n                        \"],[14],[0,\"\\n                    \"],[14],[0,\"\\n\"],[6,[\"if\"],[[33,[\"and\"],[[33,[\"gt\"],[[28,[\"numParentContributors\"]],1],null],[33,[\"not\"],[[28,[\"parentContributorsAdded\"]]],null]],null]],null,{\"statements\":[[0,\"                \"],[11,\"button\",[]],[15,\"class\",\"btn btn-default pull-right\"],[5,[\"action\"],[[28,[null]],\"addContributorsFromParentProject\"]],[13],[0,\" \"],[11,\"i\",[]],[15,\"class\",\"fa fa-plus icon-large small\"],[13],[14],[0,\" \"],[11,\"em\",[]],[15,\"class\",\"small\"],[13],[0,\" \"],[1,[33,[\"t\"],[\"components.preprint-form-authors.authors.parent_contributors\"],null],false],[0,\" \"],[14],[0,\" \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"            \"],[14],[0,\"\\n            \"],[11,\"p\",[]],[15,\"class\",\"drag-drop small\"],[13],[0,\" \"],[1,[33,[\"t\"],[\"components.preprint-form-authors.authors.order_instructions\"],null],false],[0,\" \"],[14],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"panel-body\"],[13],[0,\"\\n              \"],[11,\"table\",[]],[15,\"class\",\"table author-table current-authors\"],[13],[0,\"\\n                \"],[11,\"tr\",[]],[13],[0,\"\\n                  \"],[11,\"th\",[]],[13],[0,\" \"],[14],[0,\"\\n                  \"],[11,\"th\",[]],[15,\"class\",\"contrib-column-header\"],[13],[0,\" \"],[1,[33,[\"t\"],[\"components.preprint-form-authors.authors.name\"],null],false],[0,\" \"],[14],[0,\"\\n                  \"],[11,\"th\",[]],[15,\"class\",\"contrib-column-header\"],[13],[0,\"\\n                    \"],[1,[33,[\"t\"],[\"components.preprint-form-authors.authors.permissions\"],null],false],[0,\"\\n                    \"],[11,\"span\",[]],[13],[0,\"\\n                          \"],[11,\"i\",[]],[15,\"class\",\"fa fa-question-circle permission-info\"],[15,\"data-toggle\",\"popover\"],[16,\"data-title\",[34,[[33,[\"t\"],[\"components.preprint-form-authors.authors.permission_info\"],null]]]],[15,\"data-trigger\",\"hover\"],[15,\"data-html\",\"true\"],[15,\"data-placement\",\"bottom\"],[15,\"id\",\"permissions-popover\"],[13],[0,\"\\n                          \"],[14],[0,\"\\n                      \"],[14],[0,\"\\n                    \"],[11,\"br\",[]],[13],[14],[0,\"\\n                  \"],[14],[0,\"\\n                  \"],[11,\"th\",[]],[15,\"class\",\"bib-padding\"],[13],[0,\"\\n                    \"],[1,[33,[\"t\"],[\"components.preprint-form-authors.authors.citation\"],null],false],[0,\"\\n                    \"],[11,\"span\",[]],[13],[0,\"\\n                                    \"],[11,\"i\",[]],[15,\"class\",\"fa fa-question-circle permission-info\"],[15,\"data-toggle\",\"popover\"],[16,\"data-title\",[34,[[33,[\"t\"],[\"components.preprint-form-authors.authors.citation_info\"],null]]]],[15,\"data-trigger\",\"hover\"],[15,\"data-html\",\"true\"],[15,\"data-placement\",\"bottom\"],[15,\"id\",\"bibliographic-popover\"],[13],[0,\"\\n                                    \"],[14],[0,\"\\n                                \"],[14],[0,\"\\n                    \"],[11,\"br\",[]],[13],[14],[0,\"\\n                  \"],[14],[0,\"\\n                  \"],[11,\"th\",[]],[13],[0,\" \"],[14],[0,\"\\n                \"],[14],[0,\"\\n\"],[6,[\"sortable-group\"],null,[[\"tagName\",\"onChange\"],[\"tbody\",\"reorderItems\"]],{\"statements\":[[6,[\"each\"],[[28,[\"contributors\"]]],null,{\"statements\":[[6,[\"sortable-item\"],null,[[\"tagName\",\"model\",\"class\",\"group\",\"spacing\",\"handle\",\"id\"],[\"tr\",[28,[\"contrib\"]],\"contributor-row\",[28,[\"group\"]],1,\".handle\",[28,[\"contrib\",\"id\"]]]],{\"statements\":[[0,\"                      \"],[11,\"td\",[]],[15,\"class\",\"text-nowrap author-cols\"],[13],[0,\"\\n                        \"],[11,\"div\",[]],[15,\"class\",\"form-group drag-drop-contrib\"],[13],[0,\"\\n                          \"],[11,\"span\",[]],[15,\"class\",\"fa fa-bars sortable-bars handle small\"],[13],[14],[0,\"\\n                          \"],[11,\"img\",[]],[15,\"class\",\"m-l-xs\"],[16,\"src\",[28,[\"contrib\",\"users\",\"profileImage\"]],null],[15,\"height\",\"30\"],[15,\"width\",\"30\"],[13],[14],[0,\"\\n                          \"],[11,\"span\",[]],[15,\"class\",\"visible-xs-inline\"],[13],[0,\" \"],[0,\"\\n\"],[6,[\"if\"],[[28,[\"contrib\",\"unregisteredContributor\"]]],null,{\"statements\":[[0,\"                              \"],[1,[28,[\"contrib\",\"unregisteredContributor\"]],false],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"                              \"],[11,\"a\",[]],[16,\"href\",[28,[\"contrib\",\"users\",\"links\",\"html\"]],null],[15,\"target\",\"_blank\"],[13],[0,\" \"],[1,[28,[\"contrib\",\"users\",\"fullName\"]],false],[0,\" \"],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"                            \"],[11,\"span\",[]],[15,\"class\",\"pull-right remove-contributor-padding-xs\"],[13],[0,\"\\n                              \"],[4,\" {{#if (and (permissionToRemoveContributor contrib currentUser isAdmin node) (conditionsForContribRemoval contrib contributors authorModification))}}\\n                                <button class=\\\"remove-contributor-xs\\\" {{action 'removeContributor' contrib}} aria-label={{t \\\"components.preprint-form-authors.authors.remove_author\\\"}}>\\n                                                            <i class=\\\"fa fa-times\\\"> </i>\\n                                                        </button>\\n                              {{/if}} \"],[0,\"\\n                            \"],[14],[0,\"\\n                                            \"],[14],[0,\"\\n                        \"],[14],[0,\"\\n                      \"],[14],[0,\"\\n                      \"],[11,\"td\",[]],[13],[0,\"\\n                        \"],[11,\"div\",[]],[15,\"class\",\"vert-align-contributor-name hidden-xs\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"contrib\",\"unregisteredContributor\"]]],null,{\"statements\":[[0,\"                            \"],[1,[28,[\"contrib\",\"unregisteredContributor\"]],false],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"                            \"],[11,\"a\",[]],[16,\"href\",[28,[\"contrib\",\"users\",\"links\",\"html\"]],null],[15,\"target\",\"_blank\"],[13],[0,\" \"],[1,[28,[\"contrib\",\"users\",\"fullName\"]],false],[0,\" \"],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"                        \"],[14],[0,\"\\n                      \"],[14],[0,\"\\n                      \"],[11,\"td\",[]],[13],[0,\"\\n                        \"],[11,\"div\",[]],[15,\"class\",\"form-group vert-align-enabled-permissions\"],[13],[0,\"\\n\"],[6,[\"if\"],[[33,[\"and\"],[[33,[\"not\"],[[33,[\"contributor-is-current-user\"],[[28,[\"contrib\"]],[28,[\"currentUser\"]]],null]],null],[28,[\"isAdmin\"]],[33,[\"and\"],[[28,[\"canEdit\"]],[33,[\"min-admins\"],[[28,[\"contrib\"]],[28,[\"contributors\"]],[28,[\"authorModification\"]]],null]],null]],null]],null,{\"statements\":[[0,\"                            \"],[11,\"span\",[]],[15,\"class\",\"visible-xs-inline permission-label\"],[13],[11,\"em\",[]],[13],[0,\" \"],[1,[33,[\"t\"],[\"components.preprint-form-authors.authors.permissions\"],null],false],[0,\": \"],[14],[14],[0,\"\\n                            \"],[11,\"select\",[]],[15,\"class\",\"text-smaller form-control permission-select\"],[16,\"onchange\",[33,[\"action\"],[[28,[null]],[33,[\"action\"],[[28,[null]],\"updatePermissions\",[28,[\"contrib\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"permissionOptions\"]]],null,{\"statements\":[[0,\"                                \"],[11,\"option\",[]],[16,\"selected\",[33,[\"eq\"],[[28,[\"contrib\",\"permission\"]],[28,[\"option\",\"value\"]]],null],null],[16,\"value\",[28,[\"option\",\"value\"]],null],[13],[0,\"\\n                                  \"],[1,[28,[\"option\",\"text\"]],false],[0,\"\\n                                \"],[14],[0,\"\\n\"]],\"locals\":[\"option\"]},null],[0,\"                            \"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"                            \"],[11,\"div\",[]],[15,\"class\",\"vert-align-disabled-permissions\"],[13],[0,\"\\n                              \"],[11,\"span\",[]],[15,\"class\",\"visible-xs-inline permission-label\"],[13],[0,\" \"],[11,\"em\",[]],[13],[0,\" \"],[1,[33,[\"t\"],[\"components.preprint-form-authors.authors.permissions\"],null],false],[0,\":  \"],[14],[14],[0,\" \"],[11,\"span\",[]],[15,\"class\",\"text-smaller\"],[13],[0,\" \"],[1,[33,[\"permission-map\"],[[28,[\"contrib\",\"permission\"]]],null],false],[0,\" \"],[14],[0,\"\\n                            \"],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"                        \"],[14],[0,\"\\n                      \"],[14],[0,\"\\n                      \"],[11,\"td\",[]],[15,\"class\",\"bib-padding\"],[13],[0,\"\\n                        \"],[11,\"div\",[]],[15,\"class\",\"form-group vert-align\"],[13],[0,\"\\n                          \"],[11,\"span\",[]],[15,\"class\",\"visible-xs-inline checkbox-padding\"],[13],[11,\"em\",[]],[13],[1,[33,[\"t\"],[\"components.preprint-form-authors.authors.in_citation\"],null],false],[0,\":\"],[14],[14],[0,\"\\n                          \"],[11,\"input\",[]],[16,\"disabled\",[33,[\"if\"],[[33,[\"and\"],[[28,[\"isAdmin\"]],[33,[\"and\"],[[28,[\"canEdit\"]],[33,[\"min-bibliographic\"],[[28,[\"contrib\"]],[28,[\"contributors\"]],[28,[\"authorModification\"]]],null]],null]],null],false,true],null],null],[16,\"onchange\",[33,[\"action\"],[[28,[null]],[33,[\"action\"],[[28,[null]],\"updateBibliographic\",[28,[\"contrib\"]]],null]],[[\"value\"],[\"target.checked\"]]],null],[16,\"checked\",[33,[\"eq\"],[[28,[\"contrib\",\"bibliographic\"]],true],null],null],[15,\"type\",\"checkbox\"],[15,\"name\",\"bibliographic\"],[13],[14],[0,\"\\n                        \"],[14],[0,\"\\n                      \"],[14],[0,\"\\n                      \"],[11,\"td\",[]],[13],[0,\"\\n                        \"],[11,\"div\",[]],[15,\"class\",\"delete-contrib-button form-group vert-align nudge-right hidden-xs\"],[13],[0,\"\\n\"],[6,[\"if\"],[[33,[\"and\"],[[33,[\"permission-to-remove-contributor\"],[[28,[\"contrib\"]],[28,[\"currentUser\"]],[28,[\"isAdmin\"]],[28,[\"node\"]]],null],[33,[\"conditions-for-contrib-removal\"],[[28,[\"contrib\"]],[28,[\"contributors\"]],[28,[\"authorModification\"]]],null]],null]],null,{\"statements\":[[0,\"                            \"],[11,\"button\",[]],[15,\"class\",\"btn btn-danger btn-sm\"],[5,[\"action\"],[[28,[null]],\"removeContributorLocal\",[28,[\"contrib\"]]]],[13],[0,\" \"],[1,[33,[\"t\"],[\"components.preprint-form-authors.remove\"],null],false],[0,\" \"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"                            \"],[11,\"button\",[]],[15,\"class\",\"btn btn-danger btn-sm disabled\"],[13],[0,\" \"],[1,[33,[\"t\"],[\"components.preprint-form-authors.remove\"],null],false],[0,\" \"],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"                        \"],[14],[0,\"\\n                      \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[\"contrib\"]},null]],\"locals\":[\"group\"]},null],[0,\"              \"],[14],[0,\"\\n            \"],[14],[0,\"\\n          \"],[14],[0,\"\\n        \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[33,[\"not\"],[[28,[\"editing\"]]],null]],null,{\"statements\":[[0,\"        \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"col-xs-12\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"contributors\"]]],null,{\"statements\":[[0,\"                    \"],[11,\"ul\",[]],[15,\"class\",\"comma-list\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"contributors\"]]],null,{\"statements\":[[0,\"                            \"],[11,\"li\",[]],[13],[1,[28,[\"c\",\"users\",\"fullName\"]],false],[14],[0,\"\\n\"]],\"locals\":[\"c\"]},null],[0,\"                    \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n            \"],[14],[0,\"\\n        \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/osf-user-picker/template.hbs" } });
});
define('collections/components/page-controls/component', ['exports', 'ember-osf/components/page-controls/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/page-item', ['exports', 'ember', 'pagination-pager/components/page-item'], function (exports, _ember, _pageItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pageItem.default;
});
define('collections/components/pagination-control/component', ['exports', 'ember-osf/components/pagination-control/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/pagination-pager', ['exports', 'ember', 'pagination-pager/components/pagination-pager'], function (exports, _ember, _paginationPager) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paginationPager.default;
});
define('collections/components/paragraph-display/component', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({});
});
define("collections/components/paragraph-display/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "R+UnIxvY", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"m-t-sm\"],[13],[0,\"\\n\"],[1,[26,[\"description\"]],false],[0,\"\\n\"],[14],[0,\"\\n\"],[18,\"default\"],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/paragraph-display/template.hbs" } });
});
define('collections/components/preprint-basics/component', ['exports', 'ember', 'ember-osf/utils/fix-special-char', 'ember-cp-validations', 'collections/config/environment'], function (exports, _ember, _fixSpecialChar, _emberCpValidations, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    // Form data and validations
    var BASICS_VALIDATIONS = (0, _emberCpValidations.buildValidations)({
        basicsAbstract: {
            description: 'Abstract',
            validators: [(0, _emberCpValidations.validator)('presence', true), (0, _emberCpValidations.validator)('length', {
                // currently min of 20 characters --
                // this is what arXiv has as the minimum length of an abstract
                min: 20,
                max: 5000
            })]
        },
        basicsDOI: {
            description: 'DOI',
            validators: [(0, _emberCpValidations.validator)('format', {
                // Simplest regex- try not to diverge too much from the backend
                regex: /\b(10\.\d{4,}(?:\.\d+)*\/\S+(?:(?!["&'<>])\S))\b/,
                allowBlank: true,
                message: 'Please use a valid {description}'
            })]
        }
    });

    var DOI_REGEX = /\b(10\.\d{4,}(?:\.\d+)*\/\S+(?:(?!["&'<>])\S))\b/;

    function doiRegexExec(doi) {
        // Strips url out of inputted doi, if any.  For example, user input
        // this DOI: https://dx.doi.org/10.12345/hello. Returns 10.12345/hello.
        // If doi invalid, returns doi.
        if (doi) {
            var doiOnly = DOI_REGEX.exec(doi);
            return doiOnly !== null ? doiOnly[0] : doi;
        }
        return doi;
    }

    /* Does not support editing */
    exports.default = _ember.default.Component.extend(BASICS_VALIDATIONS, {
        store: _ember.default.inject.service(),
        editMode: true,
        applyLicense: false,
        basicsDOI: null,
        basicsLicense: null,
        savedValues: null,
        /* Validation */

        // Must have year and copyrightHolders filled if those are
        // required by the licenseType selected
        licenseValid: false,

        // Once the node has been locked (happens in step one of upload section),
        // users are free to navigate through form unrestricted
        uploadValid: _ember.default.computed.alias('nodeLocked'),

        abstractValid: _ember.default.computed.alias('validations.attrs.basicsAbstract.isValid'),
        doiValid: _ember.default.computed.alias('validations.attrs.basicsDOI.isValid'),

        // Basics fields that are being validated are abstract, license and doi
        // (title validated in upload section).
        // If validation added for other fields, expand basicsValid definition.
        basicsValid: _ember.default.computed.and('abstractValid', 'doiValid', 'licenseValid'),

        /* Initial values */
        basicsAbstract: _ember.default.computed('node.description', function () {
            var node = this.get('node');
            return node ? node.get('description') : null;
        }),
        basicsTags: _ember.default.computed('node', function () {
            var node = this.get('node');
            return node ? node.get('tags').map(_fixSpecialChar.default) : _ember.default.A();
        }),

        basicsChanged: _ember.default.observer('savedValues', 'basicsDOI', 'basicsLicense', 'basicsTags.@each', 'basicsAbstract', 'applyLicense', function () {
            var _this = this;

            var changed = false;
            var saved = this.get('savedValues');
            if (saved !== null) {
                var doiChanged = saved.basicsDOI !== this.get('basicsDOI');
                var licenseChanged = saved.basicsLicense !== this.get('basicsLicense') && this.get('applyLicense');
                var abstractChanged = saved.basicsAbstract ? saved.basicsAbstract !== this.get('basicsAbstract') : false;
                var tagsChanged = false;
                if (saved.basicsTags) {
                    tagsChanged = saved.basicsTags.length !== this.get('basicsTags').length || saved.basicsTags.some(function (v, i) {
                        return v !== _this.get('basicsTags')[i];
                    });
                }
                changed = doiChanged || licenseChanged || abstractChanged || tagsChanged;
            }
            this.set('isSectionSaved', !changed);
            return changed;
        }),

        init: function init() {
            var _this2 = this;

            this._super.apply(this, arguments);
            this.get('store').findRecord('node', _environment.default.NODE_GUID).then(function (result) {
                _this2.set('node', result);
                var node = _this2.get('node');
                var values = {
                    basicsDOI: null,
                    basicsLicense: null,
                    basicsTags: node.get('tags').map(_fixSpecialChar.default),
                    basicsAbstract: node.get('description')
                };
                _this2.set('savedValues', values);
            });
        },


        actions: {
            addTag: function addTag(tag) {
                this.get('basicsTags').pushObject(tag);
            },
            removeTag: function removeTag(tag) {
                this.get('basicsTags').removeObject(tag);
            },
            applyLicenseToggle: function applyLicenseToggle(apply) {
                this.set('applyLicense', apply);
            },
            discardBasics: function discardBasics() {
                // Discard changes since load or last save
                var saved = this.get('savedValues');

                this.set('basicsTags', saved.basicsTags.map(function (a) {
                    return a;
                }));
                this.set('basicsAbstract', saved.basicsAbstract);
                this.set('basicsDOI', saved.basicsDOI);
                this.set('basicsLicense', saved.basicsLicense);
                this.set('applyLicense', false);
            },
            preventDefault: function preventDefault(e) {
                e.preventDefault();
            },
            stripDOI: function stripDOI() {
                // Replaces the inputted doi link with just the doi itself
                var basicsDOI = this.get('basicsDOI');
                this.set('basicsDOI', doiRegexExec(basicsDOI));
            },
            editLicense: function editLicense(basicsLicense, licenseValid) {
                this.setProperties({
                    basicsLicense: basicsLicense,
                    licenseValid: licenseValid
                });
                this.set('initialLicenseChangeMade', true);
            },
            saveBasics: function saveBasics() {
                var _this3 = this;

                // Saves the description/tags on the node and the DOI on the preprint,
                // then advances to next panel
                if (!this.get('basicsValid')) {
                    return;
                }

                // Save locally
                var values = {
                    basicsDOI: this.get('basicsDOI'),
                    basicLicense: this.get('basicsLicense'),
                    basicsTags: this.get('basicsTags').slice(),
                    basicsAbstract: this.get('basicsAbstract')
                };
                this.set('savedValues', values);

                this.get('action')(this).then(function () {
                    _this3.attrs.saveParameter(_this3.attrs.widget.value.parameters.basicInfo, {
                        value: _this3.get('basicsAbstract'),
                        state: ['defined']
                    });
                    _this3.set('editMode', false);
                    _this3.attrs.closeSection(_this3.get('name'));
                });

                // Save at the end
                // Promise.all([
                //     node.save(),
                //     model.save()
                // ])
                //     .then(() => this.send('next', this.get('_names.2')))
                //     // If save fails, do not transition
                //     .catch(() => {
                //         this.get('toast').error(
                //             this.get('i18n').t('submit.basics_error')
                //         );
                //
                //         model.setProperties({
                //             licenseRecord: currentLicenseRecord,
                //             license: currentLicenseType,
                //             doi: currentDOI,
                //         });
                //
                //         node.setProperties({
                //             description: currentAbstract,
                //             tags: currentTags,
                //             license: currentNodeLicenseType,
                //             nodeLicense: currentNodeLicenseRecord,
                //         });
                //
                //         return Promise.all([
                //             node.save(),
                //             model.save()
                //         ]);
                //     });
            }
        }
    });
});
define("collections/components/preprint-basics/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "fZMkGzwY", "block": "{\"statements\":[[6,[\"preprint-form-body\"],null,null,{\"statements\":[[6,[\"if\"],[[28,[\"isOpen\"]]],null,{\"statements\":[[0,\"            \"],[11,\"div\",[]],[15,\"class\",\"row m-b-md\"],[13],[0,\"\\n              \"],[11,\"div\",[]],[15,\"class\",\"col-xs-12\"],[13],[0,\"\\n                  \"],[1,[33,[\"license-picker\"],null,[[\"currentValues\",\"showCategories\",\"editLicense\",\"allowDismiss\",\"autosave\",\"showBorder\",\"pressSubmit\"],[[28,[\"basicsLicense\"]],false,[33,[\"action\"],[[28,[null]],\"editLicense\"],null],false,true,false,[33,[\"action\"],[[28,[null]],\"saveBasics\"],null]]]],false],[0,\"\\n                  \"],[11,\"br\",[]],[13],[14],[0,\"\\n                  \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n                      \"],[11,\"div\",[]],[15,\"class\",\"col-xs-12\"],[13],[0,\"\\n                          \"],[11,\"label\",[]],[13],[0,\" \"],[1,[33,[\"t\"],[\"submit.body.basics.license.apply_license_title\"],null],false],[0,\" \"],[14],[0,\"\\n\"],[6,[\"if\"],[[33,[\"or\"],[[33,[\"not\"],[[28,[\"newNode\"]]],null],[28,[\"editMode\"]]],null]],null,{\"statements\":[[0,\"                              \"],[11,\"p\",[]],[13],[1,[33,[\"t\"],[\"submit.body.basics.license.apply_license_text\"],null],false],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"                          \"],[11,\"span\",[]],[15,\"style\",\"margin: 5px\"],[13],[0,\"\\n                              \"],[11,\"input\",[]],[16,\"onchange\",[33,[\"action\"],[[28,[null]],\"applyLicenseToggle\",true],null],null],[15,\"type\",\"radio\"],[16,\"checked\",[26,[\"applyLicense\"]],null],[13],[14],[0,\" Yes\\n                              \"],[11,\"input\",[]],[16,\"onchange\",[33,[\"action\"],[[28,[null]],\"applyLicenseToggle\",false],null],null],[15,\"type\",\"radio\"],[16,\"checked\",[33,[\"not\"],[[28,[\"applyLicense\"]]],null],null],[13],[14],[0,\" No\\n                          \"],[14],[0,\"\\n                      \"],[14],[0,\"\\n                  \"],[14],[0,\"\\n              \"],[14],[0,\"\\n          \"],[14],[0,\"\\n\\n            \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n              \"],[11,\"div\",[]],[15,\"class\",\"col-md-6\"],[13],[0,\"\\n                  \"],[11,\"div\",[]],[13],[0,\"\\n                      \"],[11,\"label\",[]],[13],[1,[33,[\"t\"],[\"submit.body.basics.doi.label\"],null],false],[0,\":\"],[14],[0,\"\\n                      \"],[11,\"form\",[]],[16,\"onchange\",[33,[\"action\"],[[28,[null]],\"stripDOI\"],null],null],[16,\"onsubmit\",[33,[\"action\"],[[28,[null]],\"preventDefault\"],null],null],[13],[0,\"\\n                          \"],[1,[33,[\"validated-input\"],null,[[\"model\",\"valuePath\",\"placeholder\",\"value\",\"pressSubmit\"],[[28,[null]],\"basicsDOI\",[33,[\"t\"],[\"global.doi\"],null],[28,[\"basicsDOI\"]],[33,[\"action\"],[[28,[null]],\"saveBasics\"],null]]]],false],[0,\"\\n                      \"],[14],[0,\"\\n                  \"],[14],[0,\"\\n                  \"],[11,\"div\",[]],[15,\"class\",\"clearfix\"],[13],[0,\"\\n                      \"],[11,\"label\",[]],[13],[1,[33,[\"t\"],[\"submit.body.basics.keywords.label\"],null],false],[0,\":\"],[14],[0,\"\\n                      \"],[11,\"p\",[]],[15,\"class\",\"text-smaller\"],[13],[1,[33,[\"t\"],[\"submit.body.basics.keywords.paragraph\"],null],false],[14],[0,\"\\n                      \"],[1,[33,[\"tags-widget\"],null,[[\"addATag\",\"removeATag\",\"tags\"],[[33,[\"action\"],[[28,[null]],\"addTag\"],null],[33,[\"action\"],[[28,[null]],\"removeTag\"],null],[28,[\"basicsTags\"]]]]],false],[0,\"\\n                  \"],[14],[0,\"\\n              \"],[14],[0,\"\\n              \"],[11,\"div\",[]],[15,\"class\",\"col-md-6\"],[13],[0,\"\\n                  \"],[11,\"label\",[]],[13],[0,\"\\n                      \"],[11,\"span\",[]],[15,\"class\",\"required\"],[13],[1,[33,[\"t\"],[\"global.abstract\"],null],false],[0,\":\"],[14],[0,\"\\n                  \"],[14],[0,\"\\n                  \"],[11,\"form\",[]],[13],[0,\"\\n                      \"],[1,[33,[\"validated-input\"],null,[[\"model\",\"valuePath\",\"placeholder\",\"value\",\"large\"],[[28,[null]],\"basicsAbstract\",[33,[\"t\"],[\"submit.body.basics.abstract.placeholder\"],null],[28,[\"basicsAbstract\"]],true]]],false],[0,\"\\n                  \"],[14],[0,\"\\n              \"],[14],[0,\"\\n          \"],[14],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n              \"],[11,\"div\",[]],[15,\"class\",\"col-md-12\"],[13],[0,\"\\n                  \"],[11,\"div\",[]],[15,\"class\",\"pull-right\"],[13],[0,\"\\n                      \"],[11,\"button\",[]],[15,\"class\",\"btn btn-default\"],[16,\"disabled\",[33,[\"unless\"],[[28,[\"basicsChanged\"]],true],null],null],[5,[\"action\"],[[28,[null]],\"discardBasics\"]],[13],[1,[33,[\"t\"],[\"global.discard\"],null],false],[14],[0,\"\\n                      \"],[11,\"button\",[]],[15,\"class\",\"btn btn-primary\"],[16,\"disabled\",[33,[\"unless\"],[[28,[\"basicsValid\"]],true],null],null],[5,[\"action\"],[[28,[null]],\"saveBasics\"]],[13],[1,[33,[\"t\"],[\"submit.body.save_continue\"],null],false],[14],[0,\"\\n                  \"],[14],[0,\"\\n              \"],[14],[0,\"\\n          \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[33,[\"not\"],[[28,[\"isOpen\"]]],null]],null,{\"statements\":[[6,[\"if\"],[[28,[\"basicsAbstract\"]]],null,{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"row m-b-md\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"col-xs-12\"],[13],[0,\"\\n            \"],[11,\"b\",[]],[13],[0,\"Abstract:\"],[14],[0,\"\\n            \"],[11,\"p\",[]],[13],[1,[26,[\"basicsAbstract\"]],false],[14],[0,\"\\n            \"],[11,\"b\",[]],[13],[0,\"License:\"],[14],[0,\"\\n            \"],[11,\"p\",[]],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"basicsLicense\"]]],null,{\"statements\":[[0,\"                    \"],[11,\"span\",[]],[13],[1,[28,[\"basicsLicense\",\"licenseType\",\"name\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"                    \"],[11,\"i\",[]],[13],[0,\"Not provided\"],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"            \"],[14],[0,\"\\n            \"],[11,\"b\",[]],[13],[0,\"DOI:\"],[14],[0,\"\\n            \"],[11,\"p\",[]],[13],[6,[\"if\"],[[28,[\"basicsDOI\"]]],null,{\"statements\":[[1,[26,[\"basicsDOI\"]],false]],\"locals\":[]},{\"statements\":[[11,\"i\",[]],[13],[0,\"Not provided\"],[14]],\"locals\":[]}],[14],[0,\"\\n            \"],[11,\"b\",[]],[13],[0,\"Tags:\"],[14],[0,\"\\n            \"],[11,\"p\",[]],[13],[6,[\"if\"],[[28,[\"basicsTags\"]]],null,{\"statements\":[[0,\"\\n                    \"],[6,[\"each\"],[[28,[\"basicsTags\"]]],null,{\"statements\":[[0,\" \"],[11,\"span\",[]],[15,\"class\",\"subject-preview\"],[13],[1,[28,[\"tag\"]],false],[14]],\"locals\":[\"tag\"]},null],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"                    \"],[11,\"i\",[]],[13],[0,\"Not provided\"],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"            \"],[14],[0,\"\\n        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/preprint-basics/template.hbs" } });
});
define('collections/components/preprint-form-body/component', ['exports', 'ember-collapsible-panel/components/cp-panel-body'], function (exports, _cpPanelBody) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _cpPanelBody.default.extend({
        didInsertElement: function didInsertElement() {
            this._super.apply(this, arguments);
            if (this.$('textarea').length) {
                // Make textarea fill vertical height
                this.$().height('auto');
                this.$('textarea').outerHeight(this.$().height() - this.$('span').height() - this.$('.col-xs-12').height());
                this.$().height('');
            }
        }
    });
});
define("collections/components/preprint-form-body/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "zV4Gavlw", "block": "{\"statements\":[[18,\"default\"],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/preprint-form-body/template.hbs" } });
});
define('collections/components/preprint-form-header/component', ['exports', 'ember', 'ember-collapsible-panel/components/cp-panel-toggle'], function (exports, _ember, _cpPanelToggle) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _cpPanelToggle.default.extend({
        tagName: 'header',
        // Variables to pass in
        enabled: true,
        showValidationIndicator: true,
        valid: null,
        isValidationActive: false,
        // CSS controls icon color and display.
        // If neither valid nor invalid state applies, don't show icon.
        classNameBindings: ['enabled::disabled', 'valid:valid', 'invalid:invalid', 'isValidationActive::not-validated'],

        // Calculated properties
        displayName: _ember.default.computed('name', function () {
            return this.get('name').capitalize();
        }),
        invalid: _ember.default.computed('valid', 'isValidationActive', function () {
            // If the user hasn't even opened the panel yet, don't run the validation check
            // In other words, not true or null
            if (this.get('isValidationActive')) {
                return !this.get('valid');
            } else {
                return false;
            }
        })
    });
});
define("collections/components/preprint-form-header/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "vnU71BfL", "block": "{\"statements\":[[4,\" template-lint block-indentation=false \"],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"section-header\"],[13],[0,\"\\n    \"],[1,[26,[\"displayName\"]],false],[0,\"\\n\"],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"preprint-section-status pull-right\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"showValidationIndicator\"]]],null,{\"statements\":[[0,\"        \"],[1,[33,[\"fa-icon\"],[\"fa-floppy-o\"],null],false],[0,\"\\n\"]],\"locals\":[]},null],[14],[0,\"\\n\\n\"],[6,[\"if\"],[[33,[\"not\"],[[28,[\"isOpen\"]]],null]],null,{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"m-t-md preprint-header-preview\"],[13],[0,\"\\n\"],[6,[\"if\"],[[33,[\"and\"],[[33,[\"is-section-editable\"],[[28,[\"name\"]]],null],[33,[\"or\"],[[28,[\"editMode\"]],[33,[\"or\"],[[33,[\"not\"],[[28,[\"showValidationIndicator\"]]],null],[28,[\"isValidationActive\"]]],null]],null]],null]],null,{\"statements\":[[0,\"            \"],[11,\"i\",[]],[15,\"class\",\"text-smaller m-t-md\"],[13],[1,[33,[\"t\"],[\"components.preprint-form-header.click_edit\"],null],false],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"    \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/preprint-form-header/template.hbs" } });
});
define('collections/components/preprint-form-section/component', ['exports', 'ember', 'ember-collapsible-panel/components/cp-panel'], function (exports, _ember, _cpPanel) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _cpPanel.default.extend({
        tagName: 'section',
        classNames: ['preprint-form-section'],
        animate: false,

        /**
         * Prevent toggling into form section if file has not been uploaded
         * @property {boolean} allowOpen
         */
        allowOpen: false,

        /**
         * Track whether this panel has ever been opened (eg to suppress
         * validation indicators until page is viewed)
         * @property {boolean} hasOpened
         */
        hasOpened: false,

        // Fix deprecation warning
        // eslint-disable-next-line ember/no-on-calls-in-components
        _setup: _ember.default.on('init', _ember.default.observer('open', function () {
            this.set('panelState.boundOpenState', this.get('open'));
        })),

        trackOpenState: _ember.default.observer('isOpen', function () {
            // Whenever panel is opened (via any means), update the hasOpened state to reflect this fact
            var isOpen = this.get('isOpen');
            if (isOpen) {
                this.set('hasOpened', true);
            }
        }),

        /* Manual animation
         * Can be omitted if using {{cp-panel-body}} instead of {{preprint-form-body}} because
         * cp-panel-body uses liquid-if for animation. preprint-form-body purposely avoids liquid-if
         * because liquid-if will cause elements to be removed from DOM. This is can cause some
         * information to be lost (e.g. dropzone state).
         */
        slideAnimation: _ember.default.observer('isOpen', function () {
            if (this.get('animate')) {
                // Allow liquid-fire to animate
                return;
            }
            var $body = this.$('.cp-Panel-body');
            if (this.get('isOpen')) {
                $body.height('auto');
                $body.height($body.height());
                $body.one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function () {
                    $body.addClass('no-transition');
                    $body.height('');
                    $body[0].offsetHeight; // eslint-disable-line no-unused-expressions
                    $body.removeClass('no-transition');
                });
            } else {
                $body.addClass('no-transition');
                $body.height($body.height());
                $body[0].offsetHeight; // eslint-disable-line no-unused-expressions
                $body.removeClass('no-transition');
                $body.height('');
            }
        }),
        // Called when panel is toggled
        handleToggle: function handleToggle() {
            // Prevent closing all views
            if (!this.get('isOpen')) {
                if (this.get('allowOpen')) {
                    // Crude mechanism to prevent opening a panel if conditions are not met
                    this._super.apply(this, arguments);
                } else {
                    this.sendAction('errorAction', 'Please complete upload section before continuing');
                }
            }
        }
    });
});
define("collections/components/preprint-form-section/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4qd10SwG", "block": "{\"statements\":[[18,\"default\",[[28,[\"hasOpened\"]],[28,[\"isOpen\"]]]],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/preprint-form-section/template.hbs" } });
});
define('collections/components/query-syntax/component', ['exports', 'ember-osf/components/query-syntax/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/radio-button', ['exports', 'ember-radio-buttons/components/radio-button'], function (exports, _radioButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _radioButton.default;
    }
  });
});
define('collections/components/search-dropdown/component', ['exports', 'ember-osf/components/search-dropdown/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/search-facet-daterange/component', ['exports', 'ember-osf/components/search-facet-daterange/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/search-facet-language/component', ['exports', 'ember-osf/components/search-facet-language/component', 'npm:langs'], function (exports, _component, _npmLangs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/search-facet-locked/component', ['exports', 'ember-osf/components/search-facet-locked/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/search-facet-source/component', ['exports', 'ember-osf/components/search-facet-source/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/search-facet-typeahead/component', ['exports', 'ember-osf/components/search-facet-typeahead/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/search-facet-worktype-button/component', ['exports', 'ember-osf/components/search-facet-worktype-button/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/search-facet-worktype-hierarchy/component', ['exports', 'ember-osf/components/search-facet-worktype-hierarchy/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/search-facet-worktype/component', ['exports', 'ember-osf/components/search-facet-worktype/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/search-help-modal/component', ['exports', 'ember-osf/components/search-help-modal/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/search-result/component', ['exports', 'ember-osf/components/search-result/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/sign-up/component', ['exports', 'ember-osf/components/sign-up/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/sortable-group', ['exports', 'ember-sortable/components/sortable-group'], function (exports, _sortableGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _sortableGroup.default;
});
define('collections/components/sortable-item', ['exports', 'ember-sortable/components/sortable-item'], function (exports, _sortableItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _sortableItem.default;
});
define('collections/components/subject-picker/component', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

    // Helper function to determine if discipline has changed (comparing list of lists)
    function disciplineArraysEqual(a, b) {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length !== b.length) return false;

        for (var i = 0; i < a.length; ++i) {
            if (a[i].length !== b[i].length) return false;
            for (var j = 0; j < a[i].length; ++j) {
                if (a[i][j] !== b[i][j]) return false;
            }
        }
        return true;
    }

    function subjectIdMap(subjectArray) {
        // Maps array of arrays of disciplines into array of arrays of discipline ids.
        return subjectArray.map(function (subjectBlock) {
            return subjectBlock.map(function (subject) {
                return subject.id;
            });
        });
    }

    function arrayEquals(arr1, arr2) {
        return arr1.length === arr2.length && arr1.reduce(function (acc, val, i) {
            return acc && val === arr2[i];
        }, true);
    }

    function arrayStartsWith(arr, prefix) {
        return prefix.reduce(function (acc, val, i) {
            return acc && val && arr[i] && val.id === arr[i].id;
        }, true);
    }
    /**
     * @module ember-preprints
     * @submodule components
     */

    /**
     * Add discipline when creating a preprint.
     *
     * Sample usage:
     * ```handlebars
     * {{subject-picker
     *      editMode=editMode
     *      selected=subjectList
     *      disciplineModifiedToggle=disciplineModifiedToggle
     *      save=(action 'setSubjects')
     *}}
     * ```
     * @class subject-picker
     */
    exports.default = _ember.default.Component.extend({
        store: _ember.default.inject.service(),
        theme: _ember.default.inject.service(),

        // Store the lists of subjects
        _tier1: null,
        _tier2: null,
        _tier3: null,
        // Filter the list of subjects if appropriate
        tier1FilterText: '',
        tier2FilterText: '',
        tier3FilterText: '',
        tierSorting: ['text:asc'], // eslint-disable-line ember/avoid-leaking-state-in-components
        // Currently selected subjects
        selection1: null,
        selection2: null,
        selection3: null,
        disciplineModifiedToggle: false,
        disciplineSaveState: false,
        editMode: false,

        disciplineValid: _ember.default.computed.notEmpty('selected'),

        tier1Sorted: _ember.default.computed.sort('tier1Filtered', 'tierSorting'),
        tier2Sorted: _ember.default.computed.sort('tier2Filtered', 'tierSorting'),
        tier3Sorted: _ember.default.computed.sort('tier3Filtered', 'tierSorting'),

        tier1Filtered: _ember.default.computed('tier1FilterText', '_tier1.[]', function () {
            var items = this.get('_tier1') || [];
            var filterText = this.get('tier1FilterText').toLowerCase();
            if (filterText) {
                return items.filter(function (item) {
                    return item.get('text').toLowerCase().includes(filterText);
                });
            }
            return items;
        }),

        tier2Filtered: _ember.default.computed('tier2FilterText', '_tier2.[]', function () {
            var items = this.get('_tier2') || [];
            var filterText = this.get('tier2FilterText').toLowerCase();
            if (filterText) {
                return items.filter(function (item) {
                    return item.get('text').toLowerCase().includes(filterText);
                });
            }
            return items;
        }),

        tier3Filtered: _ember.default.computed('tier3FilterText', '_tier3.[]', function () {
            var items = this.get('_tier3') || [];
            var filterText = this.get('tier3FilterText').toLowerCase();
            if (filterText) {
                return items.filter(function (item) {
                    return item.get('text').toLowerCase().includes(filterText);
                });
            }
            return items;
        }),

        // Pending subjects
        subjectsList: _ember.default.computed('subjects.@each', function () {
            return this.get('subjects') ? _ember.default.$.extend(true, [], this.get('subjects')) : _ember.default.A();
        }),

        // Flattened subject list
        disciplineReduced: _ember.default.computed('subjects', function () {
            return _ember.default.$.extend(true, [], this.get('subjects')).reduce(function (acc, val) {
                return acc.concat(val);
            }, []).uniqBy('id');
        }),

        disciplineChanged: _ember.default.computed('subjects.@each.subject', 'selected.@each.subject', 'disciplineModifiedToggle', function () {
            var changed = !disciplineArraysEqual(subjectIdMap(this.get('subjects')), subjectIdMap(this.get('selected')));
            this.set('isSectionSaved', !changed);
            return changed;
        }),

        init: function init() {
            this._super.apply(this, arguments);
            this.set('subjects', []);
            this.set('selected', this.get('subjectsList'));
            this.querySubjects();
        },


        actions: {
            deselect: function deselect(subject) {
                var index = void 0;
                if (subject.length === 1) {
                    index = 0;
                } else {
                    var parent = subject.slice(0, -1);
                    index = this.get('selected').findIndex(function (item) {
                        return item !== subject && arrayStartsWith(item, parent);
                    });
                }

                var wipe = 4; // Tiers to clear
                if (index === -1) {
                    if (this.get('selection' + subject.length) === subject[subject.length - 1]) wipe = subject.length + 1;
                    subject.removeAt(subject.length - 1);
                } else {
                    this.get('selected').removeAt(this.get('selected').indexOf(subject));
                    for (var i = 2; i < 4; i++) {
                        if (this.get('selection' + i) !== subject[i - 1]) continue;
                        wipe = i;
                        break;
                    }
                }

                for (var _i = wipe; _i < 4; _i++) {
                    this.set('_tier' + _i, null);
                    this.set('selection' + _i, null);
                }
                this.setSubjects(this.get('selected'));
            },
            select: function select(selected, tier) {
                var _this = this;

                tier = parseInt(tier, 10);
                if (this.get('selection' + tier) === selected) return;

                this.set('selection' + tier, selected);

                // Inserting the subject lol
                var index = -1;
                var selection = [].concat(_toConsumableArray(Array(tier).keys())).map(function (index) {
                    return _this.get('selection' + (index + 1));
                });

                // An existing tag has this prefix, and this is the lowest level of the taxonomy,
                // so no need to fetch child results
                if (!(tier !== 3 && this.get('selected').findIndex(function (item) {
                    return arrayStartsWith(item, selection);
                }) !== -1)) {
                    var _loop = function _loop(i) {
                        var sub = selection.slice(0, i + 1);
                        // "deep" equals
                        index = _this.get('selected').findIndex(function (item) {
                            return arrayEquals(item, sub);
                        }); // jshint ignore:line

                        if (index === -1) return 'continue';

                        _this.get('selected')[index].pushObjects(selection.slice(i + 1));
                        return 'break';
                    };

                    _loop2: for (var i = 0; i < selection.length; i++) {
                        var _ret = _loop(i);

                        switch (_ret) {
                            case 'continue':
                                continue;

                            case 'break':
                                break _loop2;}
                    }

                    if (index === -1) {
                        this.get('selected').pushObject(selection);
                    }
                }

                this.setSubjects(this.get('selected'));

                if (tier === 3) return;

                for (var _i2 = tier + 1; _i2 < 4; _i2++) {
                    this.set('_tier' + _i2, null);
                }

                // TODO: Fires a network request every time clicking here, instead of only when needed?
                this.querySubjects(selected.id, tier);
            },
            discardSubjects: function discardSubjects() {
                // Discards changes to subjects. (No requests sent, front-end only.)
                this.set('selected', _ember.default.$.extend(true, [], this.get('subjects')));
            },
            saveSubjects: function saveSubjects() {
                var _this2 = this;

                var subjectMap = _ember.default.$.extend(true, [], this.get('selected'));
                this.get('action')(this).then(function () {
                    _this2.attrs.saveParameter(_this2.attrs.widget.value.parameters.subjects, {
                        value: subjectMap,
                        state: ['defined']
                    });
                    // Update subjects with selected subjects
                    _this2.set('subjects', _ember.default.$.extend(true, [], subjectMap));
                    _this2.set('editMode', false);
                    // Prevent closing the section until it is valid
                    if (!_this2.get('disciplineChanged')) {
                        _this2.sendAction('closeSection', _this2.get('name'));
                    }
                });
            }
        },
        querySubjects: function querySubjects() {
            var _this3 = this;

            var parents = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'null';
            var tier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            this.get('theme.provider').then(function (provider) {
                return provider.query('taxonomies', {
                    filter: {
                        parents: parents
                    },
                    page: {
                        size: 100
                    }
                });
            }).then(function (results) {
                return _this3.set('_tier' + (tier + 1), results.toArray());
            });
        },
        setSubjects: function setSubjects(subjects) {
            // Sets selected with pending subjects. Does not save.
            var disciplineModifiedToggle = this.get('disciplineModifiedToggle');
            // Need to observe if discipline in nested array has changed.
            // Toggling this will force 'disciplineChanged' to be recalculated
            this.set('disciplineModifiedToggle', !disciplineModifiedToggle);
            this.set('selected', subjects);
        }
    });
});
define("collections/components/subject-picker/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "DtWXl+5M", "block": "{\"statements\":[[6,[\"if\"],[[33,[\"not\"],[[28,[\"isOpen\"]]],null]],null,{\"statements\":[[6,[\"if\"],[[28,[\"disciplineReduced\"]]],null,{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"col-xs-12\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"disciplineReduced\"]]],null,{\"statements\":[[0,\"                \"],[11,\"span\",[]],[15,\"class\",\"subject-preview\"],[13],[1,[28,[\"subject\",\"text\"]],false],[14],[0,\"\\n\"]],\"locals\":[\"subject\"]},null],[0,\"        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"preprint-form-body\"],null,null,{\"statements\":[[6,[\"if\"],[[28,[\"isOpen\"]]],null,{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"selected\"]]],null,{\"statements\":[[0,\"            \"],[11,\"span\",[]],[15,\"class\",\"subject\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"subject\"]]],null,{\"statements\":[[0,\"                    \"],[11,\"b\",[]],[13],[1,[28,[\"segment\",\"text\"]],false],[14],[0,\"\\n\"]],\"locals\":[\"segment\"]},null],[0,\"                \"],[1,[33,[\"fa-icon\"],[\"times\"],[[\"click\"],[[33,[\"action\"],[[28,[null]],\"deselect\",[28,[\"subject\"]]],null]]]],false],[0,\"\\n            \"],[14],[0,\"\\n\"]],\"locals\":[\"subject\"]},null],[0,\"    \"],[14],[0,\"\\n\\n    \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n\\n        \"],[11,\"div\",[]],[15,\"class\",\"col-md-4\"],[13],[0,\"\\n            \"],[11,\"ul\",[]],[15,\"style\",\"overflow: scroll\"],[13],[0,\"\\n                \"],[1,[33,[\"input\"],null,[[\"value\",\"class\",\"placeholder\"],[[28,[\"tier1FilterText\"]],\"form-control\",\"Search\"]]],false],[0,\"\\n\"],[6,[\"each\"],[[28,[\"tier1Sorted\"]]],null,{\"statements\":[[0,\"                    \"],[11,\"li\",[]],[16,\"class\",[33,[\"if\"],[[33,[\"eq\"],[[28,[\"subject\"]],[28,[\"selection1\"]]],null],\"selected\"],null],null],[5,[\"action\"],[[28,[null]],\"select\",[28,[\"subject\"]],\"1\"]],[13],[0,\"\\n                        \"],[1,[28,[\"subject\",\"text\"]],false],[0,\"\\n                    \"],[14],[0,\"\\n\"]],\"locals\":[\"subject\"]},null],[0,\"            \"],[14],[0,\"\\n        \"],[14],[0,\"\\n\\n        \"],[11,\"div\",[]],[15,\"class\",\"col-md-4\"],[13],[0,\"\\n            \"],[11,\"ul\",[]],[15,\"style\",\"overflow: scroll\"],[13],[0,\"\\n                \"],[1,[33,[\"input\"],null,[[\"value\",\"class\",\"placeholder\"],[[28,[\"tier2FilterText\"]],\"form-control\",\"Search\"]]],false],[0,\"\\n\"],[6,[\"each\"],[[28,[\"tier2Sorted\"]]],null,{\"statements\":[[0,\"                    \"],[11,\"li\",[]],[16,\"class\",[33,[\"if\"],[[33,[\"eq\"],[[28,[\"subject\"]],[28,[\"selection2\"]]],null],\"selected\"],null],null],[5,[\"action\"],[[28,[null]],\"select\",[28,[\"subject\"]],\"2\"]],[13],[0,\"\\n                        \"],[1,[28,[\"subject\",\"text\"]],false],[0,\"\\n                    \"],[14],[0,\"\\n\"]],\"locals\":[\"subject\"]},null],[0,\"            \"],[14],[0,\"\\n        \"],[14],[0,\"\\n\\n        \"],[11,\"div\",[]],[15,\"class\",\"col-md-4\"],[13],[0,\"\\n            \"],[11,\"ul\",[]],[15,\"style\",\"overflow: scroll\"],[13],[0,\"\\n                \"],[1,[33,[\"input\"],null,[[\"value\",\"class\",\"placeholder\"],[[28,[\"tier3FilterText\"]],\"form-control\",\"Search\"]]],false],[0,\"\\n\"],[6,[\"each\"],[[28,[\"tier3Sorted\"]]],null,{\"statements\":[[0,\"                    \"],[11,\"li\",[]],[16,\"class\",[33,[\"if\"],[[33,[\"eq\"],[[28,[\"subject\"]],[28,[\"selection3\"]]],null],\"selected\"],null],null],[5,[\"action\"],[[28,[null]],\"select\",[28,[\"subject\"]],\"3\"]],[13],[0,\"\\n                        \"],[1,[28,[\"subject\",\"text\"]],false],[0,\"\\n                    \"],[14],[0,\"\\n\"]],\"locals\":[\"subject\"]},null],[0,\"            \"],[14],[0,\"\\n        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"col-md-12\"],[13],[0,\"\\n          \"],[11,\"div\",[]],[15,\"class\",\"pull-right\"],[13],[0,\"\\n              \"],[11,\"button\",[]],[15,\"class\",\"btn btn-default\"],[16,\"disabled\",[33,[\"unless\"],[[28,[\"disciplineChanged\"]],true],null],null],[5,[\"action\"],[[28,[null]],\"discardSubjects\"]],[13],[0,\"Discard changes\"],[14],[0,\"\\n              \"],[11,\"button\",[]],[15,\"class\",\"btn btn-primary\"],[16,\"disabled\",[33,[\"unless\"],[[28,[\"disciplineValid\"]],true],null],null],[5,[\"action\"],[[28,[null]],\"saveSubjects\"]],[13],[0,\"Save and continue\"],[14],[0,\"\\n          \"],[14],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/subject-picker/template.hbs" } });
});
define('collections/components/tags-widget/component', ['exports', 'ember-osf/components/tags-widget/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/text-field/component', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Component.extend({

        editing: true,

        description: 'Enter a title for the preprint.',

        textFieldValueObserver: _ember.default.observer('textFieldValue', function () {
            this.set('widget.parameters.value.value', this.get('textFieldValue'));
        }),

        didReceiveAttrs: function didReceiveAttrs() {
            this.set('description', this.attrs.description);
        }
    });
});
define("collections/components/text-field/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4FOhZcf0", "block": "{\"statements\":[[11,\"style\",[]],[13],[0,\"\\n\\n    .submission-text-field {\\n        margin-top: 10px;\\n    }\\n\\n\\n\"],[14],[0,\"\\n\\n\"],[6,[\"if\"],[[33,[\"not\"],[[28,[\"editing\"]]],null]],null,{\"statements\":[[0,\"\\n    \"],[1,[26,[\"valueName\"]],false],[0,\": \"],[1,[28,[\"widget\",\"parameter\",\"value\",\"value\"]],false],[0,\"\\n\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[\"editing\"]]],null,{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"submission-text-field\"],[13],[0,\"\\n        \"],[11,\"label\",[]],[13],[1,[28,[\"widget\",\"description\"]],false],[14],[0,\"\\n        \"],[1,[33,[\"input\"],null,[[\"value\",\"class\"],[[28,[\"textFieldValue\"]],\"form-control\"]]],false],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[18,\"default\"],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/text-field/template.hbs" } });
});
define('collections/components/total-share-results/component', ['exports', 'ember-osf/components/total-share-results/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('collections/components/validated-input/component', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var isEmpty = _ember.default.isEmpty,
        computed = _ember.default.computed,
        defineProperty = _ember.default.defineProperty;
    exports.default = _ember.default.Component.extend({
        classNames: ['validated-input'],
        classNameBindings: ['showErrorClass:has-error', 'isValid:has-success'],
        model: null,
        value: null,
        type: 'text',
        valuePath: '',
        placeholder: '',
        validation: null,
        isTyping: false,

        notValidating: computed.not('validation.isValidating'),
        didValidate: computed.oneWay('targetObject.didValidate'),
        hasContent: computed.notEmpty('value'),
        isValid: computed.and('hasContent', 'validation.isValid', 'notValidating'),
        isInvalid: computed.oneWay('validation.isInvalid'),

        showErrorMessage: computed('validation.isDirty', 'isInvalid', 'didValidate', function () {
            return (this.get('validation.isDirty') || this.get('didValidate')) && this.get('isInvalid');
        }),

        showWarningMessage: computed('validation.{isDirty,warnings.[]}', 'isValid', 'didValidate', function () {
            return (this.get('validation.isDirty') || this.get('didValidate')) && this.get('isValid') && !isEmpty(this.get('validation.warnings'));
        }),

        init: function init() {
            this._super.apply(this, arguments);
            var valuePath = this.get('valuePath');
            defineProperty(this, 'validation', computed.oneWay('model.validations.attrs.' + valuePath));
            defineProperty(this, 'value', computed.alias('model.' + valuePath));
        },

        actions: {
            pressSubmit: function pressSubmit() {
                this.sendAction('pressSubmit');
            }
        },
        keyPress: function keyPress(e) {
            if (e.keyCode === 13 && !this.get('large')) {
                e.preventDefault();
                this.send('pressSubmit');
            }
        }
    });
});
define("collections/components/validated-input/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "8J/RM8rR", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n    \"],[18,\"default\"],[0,\"\\n\"],[6,[\"if\"],[[28,[\"large\"]]],null,{\"statements\":[[0,\"        \"],[1,[33,[\"textarea\"],null,[[\"type\",\"value\",\"placeholder\",\"class\",\"name\"],[[28,[\"type\"]],[28,[\"value\"]],[28,[\"placeholder\"]],\"form-control\",[28,[\"valuePath\"]]]]],false],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"        \"],[1,[33,[\"input\"],[[33,[\"-input-type\"],[[28,[\"type\"]]],null]],[[\"type\",\"value\",\"placeholder\",\"class\",\"name\"],[[28,[\"type\"]],[28,[\"value\"]],[28,[\"placeholder\"]],\"form-control\",[28,[\"valuePath\"]]]]],false],[0,\"\\n\"]],\"locals\":[]}],[0,\"\\n\"],[6,[\"if\"],[[28,[\"isValid\"]]],null,{\"statements\":[[0,\"        \"],[11,\"span\",[]],[15,\"class\",\"valid-input\"],[13],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"input-error\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"showErrorMessage\"]]],null,{\"statements\":[[0,\"            \"],[11,\"div\",[]],[15,\"class\",\"error\"],[13],[0,\"\\n                \"],[1,[33,[\"get\"],[[33,[\"get\"],[[28,[\"model\",\"validations\",\"attrs\"]],[28,[\"valuePath\"]]],null],\"message\"],null],false],[0,\"\\n            \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "collections/components/validated-input/template.hbs" } });
});
define('collections/controllers/application', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Controller.extend({
        session: _ember.default.inject.service(),
        actions: {
            login: function login() {
                this.get('session').authenticate('authenticator:osf-token');
            }
        }
    });
});
define('collections/controllers/collection', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Controller.extend({

        searchGuid: 'fkat6',
        loadingGuid: false,
        organizeMode: false,

        breadCrumb: _ember.default.computed('model.title', function () {
            return this.get('model.title');
        }),

        actions: {
            toggleOrganizeMode: function toggleOrganizeMode() {
                this.toggleProperty('organizeMode');
            }
        }

    });
});
define('collections/controllers/collection/add', ['exports', 'ember', 'collections/config/environment'], function (exports, _ember, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function createCookie(name, value, days) {
        var expires = void 0;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = '; expires=' + date.toGMTString();
        } else expires = '';
        document.cookie = name + '=' + value + expires + '; path=/';
    }

    function readCookie(name) {
        // eslint-disable-line no-unused-vars
        var nameEQ = name + '=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1, c.length);
            }if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function eraseCookie(name) {
        // eslint-disable-line no-unused-vars
        createCookie(name, '', -1);
    }

    function getToken() {
        var token = void 0;
        var session = window.localStorage['ember_simple_auth:session'];
        if (session) {
            token = JSON.parse(session).authenticated;
            if ('attributes' in token) {
                return token.attributes.accessToken;
            }
            return token;
        }
    }

    // Engine helper functions.
    // ////////////////////////////////////////////////////////////////////////////////////////////////


    function conditionDispatcher(condition) {
        var parameters = this.get('parameters');

        // Check if its a regular condition
        if (condition.parameter !== undefined) {
            // actualy check the condition is met;
            // the parameter has to have the given state.
            if (parameters[condition.parameter] === undefined) {
                parameters[condition.parameter] = {};
            }
            if (parameters[condition.parameter].state === undefined) {
                parameters[condition.parameter].state = [];
            }
            var parameterState = parameters[condition.parameter].state;
            // check that the state exists for this item
            return parameterState.some(function (stateItem) {
                return stateItem === condition.state;
            });
        }

        // Check if its an 'all' composite condition
        if (condition.all !== undefined && condition.all.constructor === Array) {
            // if any conditions fail, the whole check fails.
            return checkAll.call(this, condition.all); // eslint-disable-line no-use-before-define
        }

        // Check if its an 'any' composite condition
        if (condition.any !== undefined && condition.any.constructor === Array) {
            // if any conditions are met, the whole check passes.
            return checkAny.call(this, condition.any); // eslint-disable-line no-use-before-define
        }

        // Check if its a 'none' composite condition
        if (condition.none !== undefined && condition.none.constructor === Array) {
            // if any conditions are met, the whole check fails.
            return !checkAny.call(this, condition.none); // eslint-disable-line no-use-before-define
        }

        return false;
    }

    function checkAll(conditions) {
        var _this = this;

        if ((typeof conditions === 'undefined' ? 'undefined' : _typeof(conditions)) !== 'object') return false;
        if (conditions.constructor !== Array) return false;
        // if any conditions fail, the whole check fails.
        return !conditions.some(function (condition) {
            return !conditionDispatcher.call(_this, condition);
        });
    }

    function checkAny(conditions) {
        // If any conditions are met, the whole check passes.
        return conditions.some(conditionDispatcher.bind(this));
    }

    // Constructs an array containing the parameters or arguments that are used by an
    // action function. Based on the action function's signature, which is an array of
    // strings that describe how to map the parameters from their keys on the controller
    // to the position in the function's arguments. This function constructs the array
    // that the action function gets applied with
    //
    // Future improvements:
    //
    // - Pass in only the signature, args, and parameters objects to the function;
    //   the function does not require the whole action object.

    function constructArgArr(action) {
        var parameters = this.get('parameters');
        var args = action.signature.map(function (key) {
            // Default to undefined.
            var value = void 0;

            // First try to use the parameter.
            if (_typeof(action.parameters) === 'object' && _typeof(action.parameters[key]) === 'object') {
                var parameterKeys = Object.keys(parameters);

                // There was a bug here where the parameters weren't matching up right;
                // this check ensures parameters aren't duplicated and the like.
                parameterKeys.forEach(function (parameterKey) {
                    if (parameters[parameterKey] === action.parameters[key]) {
                        value = parameters[parameterKey];
                    }
                });
            }

            if (_typeof(action.parameters) === 'object' && typeof action.parameters[key] === 'string') {
                if (_typeof(parameters[action.parameters[key]]) !== 'object') {
                    parameters[action.parameters[key]] = {};
                }

                value = parameters[action.parameters[key]];
            }

            // If an arg is defined, it takes priority.
            if (_typeof(action.args) === 'object' && action.args[key] !== undefined) {
                value = action.args[key];
            }

            return value;
        });

        args.push(action.parameters);
        return args;
    }

    //

    exports.default = _ember.default.Controller.extend({

        panelActions: _ember.default.inject.service('panelActions'),

        editMode: false,
        methodSelected: false,
        addMethod: 'select', // 'select' or 'create'
        widgets: [],
        formActions: [],
        createWidgetSignature: ['widgetComponent', 'description', 'disabled', 'cssClasses', 'section', 'outputParameter', 'actionId'],

        _names: _ember.default.computed('sections', function () {
            var sections = this.get('sections');
            return sections.map(function (section) {
                return section.name;
            });
        }),
        type: _ember.default.computed('model.settings', function () {
            var collectionType = this.get('model.settings.collectionType') || 'project';
            return collectionType.toLowerCase();
        }),

        actions: {
            updateProperty: function updateProperty(oldValue, newValue) {
                this.set(oldValue, newValue);
                this.set('methodSelected', true); // Change view to show the methods
            },
            transition: function transition(name, id) {
                this.transitionToRoute(name, id);
            }
        },

        init: function init() {
            this._super();
            this.set('content', _ember.default.Object.create({
                info: null
            }));
            this.saveParameter = this.saveParameter.bind(this);
            this.closeSection = this.closeSection.bind(this);
            this.openSection = this.openSection.bind(this);
            this.createWidget = this.createWidget.bind(this);
            this.deleteWidget = this.deleteWidget.bind(this);
        },


        // Fire enabled actions.
        updateState: function updateState(actions) {
            var _this2 = this;

            var controller = this;
            actions.forEach(function (action) {
                // Action may fire if execution has reached this point.
                // Call the action and set its result and any
                // changes to its state on `controller.parameters`.
                //
                var fireActions = function () {
                    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(actionId) {
                        var actionObj, result;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                                switch (_context.prev = _context.next) {
                                    case 0:
                                        if (!(typeof actionId === 'string')) {
                                            _context.next = 10;
                                            break;
                                        }

                                        actionObj = actions.find(function (action) {
                                            return action.id === actionId;
                                        });

                                        if (!(typeof actionObj.action === 'function')) {
                                            _context.next = 10;
                                            break;
                                        }

                                        _context.next = 5;
                                        return actionObj.action.apply(this, actionObj.argArr);

                                    case 5:
                                        result = _context.sent;

                                        if (typeof actionObj.then === 'string') {
                                            fireActions.call(this, actionObj.then);
                                        }
                                        actionObj.outputParameter.value = result;
                                        actionObj.outputParameter.state = ['defined'];
                                        controller.notifyPropertyChange('parameters');

                                    case 10:
                                    case 'end':
                                        return _context.stop();
                                }
                            }
                        }, _callee, this);
                    }));

                    return function fireActions(_x) {
                        return _ref.apply(this, arguments);
                    };
                }();

                // Check if the action can fire.
                if (!checkAll.call(_this2, action.conditions)) return;

                fireActions.call(_this2, action.id);
            });
        },


        // Take the description of an action and set its properties to be the vaious literal
        // functions and parameters it depends on to operate.
        hydrateAction: function hydrateAction(action) {
            var parameters = this.get('parameters');
            if (_typeof(parameters[action.outputParameter]) !== 'object') {
                parameters[action.outputParameter] = {};
            }
            if (_typeof(action.parameters) !== 'object') {
                action.parameters = {};
            }
            var signature = this.get(action.type + 'Signature');
            // Create a new object as not to modify the object returned from the model
            var hydratedAction = {
                id: action.id,
                type: action.type,
                signature: signature,
                action: this.get(action.type),
                conditions: action.conditions,
                parameters: Object.keys(action.parameters).reduce(function (result, key) {
                    if (_typeof(parameters[action.parameters[key]]) !== 'object') {
                        parameters[action.parameters[key]] = {
                            state: ['undefined'],
                            value: undefined
                        };
                    }
                    result[key] = parameters[action.parameters[key]];
                    return result;
                }, {}),
                args: action.args,
                outputParameter: parameters[action.outputParameter],
                then: action.then
            };
            hydratedAction.argArr = constructArgArr.call(this, hydratedAction);
            return hydratedAction;
        },


        // `this` must be bound to the controller for `create_widget`, as
        // `create_widget` requires access to the controller, and does so through `this`.
        createWidget: function createWidget(widgetComponent, description, disabled, cssClasses, section, outputParameter, actionId, parameters) {
            var fireActions = function () {
                var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(actionId) {
                    var actionObj, result;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    if (!(typeof actionId === 'string')) {
                                        _context2.next = 10;
                                        break;
                                    }

                                    actionObj = actions.find(function (action) {
                                        return action.id === actionId;
                                    });

                                    if (!(typeof actionObj.action === 'function')) {
                                        _context2.next = 10;
                                        break;
                                    }

                                    _context2.next = 5;
                                    return actionObj.action.apply(this, actionObj.argArr);

                                case 5:
                                    result = _context2.sent;

                                    if (typeof actionObj.then === 'string') {
                                        fireActions.call(this, actionObj.then);
                                    }
                                    actionObj.outputParameter.value = result;
                                    controller.notifyPropertyChange('parameters');
                                    return _context2.abrupt('return', result);

                                case 10:
                                case 'end':
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this);
                }));

                return function fireActions(_x2) {
                    return _ref2.apply(this, arguments);
                };
            }();

            var controller = this;

            var actions = this.get('formActions');

            var action = function action(context) {
                return fireActions.call(context, actionId);
            };

            var widget = {
                widgetComponent: widgetComponent,
                parameters: parameters,
                description: description,
                disabled: disabled,
                cssClasses: cssClasses,
                section: section,
                outputParameter: outputParameter,
                action: action
            };
            this.get('widgets').pushObject(widget);
            return widget;
        },
        saveSection: function saveSection(section) {
            return function (widgets) {
                var _this3 = this;

                widgets.filter(function (widget) {
                    return widget.section === section;
                }).map(function (widget) {
                    return _this3[widget.output];
                });
            };
        },


        // Delete widget and resets state
        deleteWidgetSignature: ['widgetObject'], // eslint-disable-line ember/order-in-controllers
        deleteWidget: function deleteWidget(widgetObject) {
            this.get('widgets').removeObject(widgetObject.value);
            _ember.default.set(widgetObject, 'value', undefined);
            _ember.default.set(widgetObject, 'state', ['undefined']);
        },


        disableWidgetSignature: ['widgetObject'], // eslint-disable-line ember/order-in-controllers
        disableWidget: function disableWidget(widgetObject) {
            _ember.default.set(widgetObject, 'value.disabled', true);
        },


        enableWidgetSignature: ['widgetObject'], // eslint-disable-line ember/order-in-controllers
        enableWidget: function enableWidget(widgetObject) {
            _ember.default.set(widgetObject, 'value.disabled', false);
            _ember.default.run.next(this, function () {
                this.get('updateState').call(this, this.get('formActions'));
            });
        },


        toggleWidgetSignature: ['widgetObject'], // eslint-disable-line ember/order-in-controllers
        toggleWidget: function toggleWidget(widgetObject) {
            if (widgetObject.value.disabled === false) {
                _ember.default.set(widgetObject, 'value.disabled', true);
            } else {
                _ember.default.set(widgetObject, 'value.disabled', false);
            }
            _ember.default.run.next(this, function () {
                this.get('updateState').call(this, this.get('formActions'));
            });
        },


        uploadFileSignature: ['fileName', 'fileData', 'node'], // eslint-disable-line ember/order-in-controllers
        uploadFile: function () {
            var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(fileName, fileData, node) {
                var uri, xhr, deferred, value;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                if (!(typeof fileName.value === 'undefined')) {
                                    _context3.next = 2;
                                    break;
                                }

                                return _context3.abrupt('return');

                            case 2:
                                if (!(typeof fileData.value === 'undefined')) {
                                    _context3.next = 4;
                                    break;
                                }

                                return _context3.abrupt('return');

                            case 4:
                                if (typeof node.value === 'undefined') node.value = _environment.default.NODE_GUID;
                                uri = _environment.default.OSF.waterbutlerUrl + 'v1/resources/' + node.value + '/providers\n        /osfstorage/?kind=file&name=' + fileName.value;
                                xhr = new XMLHttpRequest();

                                xhr.open('PUT', uri, true);
                                xhr.withCredentials = false;
                                xhr.setRequestHeader('Authorization', 'Bearer ' + getToken());

                                deferred = _ember.default.RSVP.defer();

                                xhr.onreadystatechange = function () {
                                    if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
                                        deferred.resolve(JSON.parse(xhr.responseText).data.links.download);
                                    }
                                };
                                xhr.send(fileData.value);
                                _context3.next = 15;
                                return deferred.promise;

                            case 15:
                                value = _context3.sent;
                                return _context3.abrupt('return', value);

                            case 17:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function uploadFile(_x3, _x4, _x5) {
                return _ref3.apply(this, arguments);
            }

            return uploadFile;
        }(),


        saveParameterSignature: ['parameter', 'updatedParameter'], // eslint-disable-line ember/order-in-controllers
        saveParameter: function saveParameter(parameter, updatedParameter) {
            if (typeof updatedParameter.value !== 'undefined') {
                _ember.default.set(parameter, 'value', updatedParameter.value);
            }
            if (typeof updatedParameter.state !== 'undefined') {
                _ember.default.set(parameter, 'state', updatedParameter.state);
            }
            _ember.default.run.next(this, function () {
                this.get('updateState').call(this, this.get('formActions'));
            });
        },


        closeSectionSignature: ['sectionName'], // eslint-disable-line ember/order-in-controllers
        closeSection: function closeSection(sectionName) {
            this.get('panelActions').close(this.get('_names.' + this.get('_names').indexOf(sectionName)));
            this.get('parameters')[this.get('sections').find(function (section) {
                return section.name === sectionName;
            }).param].state = ['closed', 'saved'];
            this.get('updateState').call(this, this.get('formActions'));
        },


        openSectionSignature: ['sectionName'], // eslint-disable-line ember/order-in-controllers
        openSection: function openSection(sectionName) {
            this.get('panelActions').open(this.get('_names.' + this.get('_names').indexOf(sectionName)));
            this.get('parameters')[this.get('sections').find(function (section) {
                return section.name === sectionName;
            }).param].state = ['open', 'editing'];
        },


        browserAlertSignature: ['alertString'], // eslint-disable-line ember/order-in-controllers
        browserAlert: function browserAlert(alertString) {
            this.toast.success(alertString);
        }
    });
});
define('collections/controllers/collection/browse', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Controller.extend({
        actions: {
            changeRoute: function changeRoute(path, params) {
                this.get('changeRoute')(path, params);
            }
        }
    });
});
define('collections/controllers/collection/edit', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Controller.extend({

        session: _ember.default.inject.service(),

        editMode: false,
        collectionSettings: {},

        modelCache: _ember.default.computed('model', function () {
            return this.resetModelCache();
        }),
        formattedTags: _ember.default.computed('model.tags', function () {
            var tags = this.get('model.tags');
            if (tags) {
                return this.get('model.tags').split(',');
            }
            return [];
        }),
        settingsString: _ember.default.computed('model.settings', function () {
            return JSON.stringify(this.get('model.settings'));
        }),

        actions: {
            showEdit: function showEdit() {
                this.set('editMode', true);
            },
            cancelEdit: function cancelEdit() {
                this.set('editMode', false);
                this.set('modelCache', this.resetModelCache());
            },
            saveEdit: function saveEdit() {
                var model = this.get('model');
                var location = this.get('modelCache.location');
                var address = this.get('modelCache.address');
                var startDate = this.get('modelCache.startDate');
                var endDate = this.get('modelCache.endDate');

                model.set('settings', JSON.parse(this.get('modelCache.settings')));
                model.set('title', this.get('modelCache.title'));
                model.set('description', this.get('modelCache.description'));
                model.set('tags', this.get('modelCache.tags'));
                model.set('location', location);
                model.set('address', address);
                model.set('startDate', startDate);
                model.set('endDate', endDate);
                model.save();
                this.set('editMode', false);
            },
            updateCacheSettings: function updateCacheSettings(jsonSettings) {
                this.set('modelCache.settings', JSON.stringify(jsonSettings));
            },
            deleteCollection: function deleteCollection() {
                var _this = this;

                this.get('model').destroyRecord().then(function () {
                    return _this.transitionToRoute('/');
                });
            }
        },
        resetModelCache: function resetModelCache() {
            var model = this.get('model');
            return {
                title: model.get('title'),
                description: model.get('description'),
                tags: model.get('tags'),
                settings: JSON.stringify(model.get('settings')),
                location: model.get('location'),
                address: model.get('address'),
                startDate: model.get('startDate'),
                endDate: model.get('endDate')
            };
        }
    });
});
define('collections/controllers/collection/group', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Controller.extend({
        organizeMode: false,
        breadCrumb: _ember.default.computed('model.title', function () {
            return this.get('model.title');
        }),
        actions: {
            toggleOrganizeMode: function toggleOrganizeMode() {
                this.toggleProperty('organizeMode');
            }
        }
    });
});
define('collections/controllers/collection/group/index', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Controller.extend({
        organizeMode: false,
        cardView: true,
        showDeleteItemConfirmation: false, // Modal for deleting items
        selectedItems: _ember.default.A(),
        actions: {
            clearSelected: function clearSelected() {
                var selected = this.get('selectedItems');
                selected.clear();
            },
            clearModals: function clearModals() {
                this.set('showDeleteItemConfirmation', false);
            },
            deleteSelected: function deleteSelected() {
                var items = this.get('model.items');
                var selected = this.get('selectedItems');
                selected.forEach(function (item) {
                    return _ember.default.run.once(function () {
                        return item.destroyRecord();
                    });
                });
                items.removeObjects(selected);
                this.send('clearSelected');
                this.send('clearModals');
            },

            // Adds or removes item to the selectedItems list
            toggleSelectedList: function toggleSelectedList(selected, item) {
                var currentList = this.get('selectedItems');
                if (!selected) {
                    currentList.removeObject(item);
                } else {
                    currentList.addObject(item);
                }
            },
            changeRoute: function changeRoute(path, params) {
                this.transitionToRoute(path, params);
            },
            changeView: function changeView(cardView) {
                this.set('cardView', cardView);
            }
        }
    });
});
define('collections/controllers/collection/group/item', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Controller.extend({
        breadCrumb: _ember.default.computed('model.title', function () {
            return this.get('model.title');
        })
    });
});
define('collections/controllers/collection/index', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Controller.extend({
        session: _ember.default.inject.service(),
        actions: {
            changeRoute: function changeRoute(path, params) {
                this.transitionToRoute(path, params);
            }
        }
    });
});
define('collections/controllers/collection/item', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Controller.extend({});
});
define('collections/controllers/collection/search', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Controller.extend({
        searchText: '',
        results: _ember.default.A(),
        actions: {
            search: function search() {
                var _this = this;

                var text = this.get('searchText');
                this.get('store').query('item', {
                    filter: {
                        title: text
                    }
                }).then(function (results) {
                    _this.set('results', results);
                });
            }
        }
    });
});
define('collections/controllers/create-meeting', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Controller.extend({
        title: '',
        selectedType: 'Meeting',
        description: '',
        location: '',
        address: '',
        startDate: null,
        endDate: null,
        actions: {
            addCollection: function addCollection() {
                var _this = this;

                var selectedType = this.get('selectedType');
                var startDate = new Date(this.get('startDate'));
                var endDate = new Date(this.get('endDate'));

                var meeting = this.store.createRecord('meeting', {
                    title: this.get('title'),
                    tags: '',
                    settings: { collectionType: selectedType },
                    description: this.get('description'),
                    location: this.get('location'),
                    address: this.get('address'),
                    startDate: startDate,
                    endDate: endDate
                });
                meeting.save().then(function (record) {
                    _this.set('newCollectionTitle', '');
                    _this.transitionToRoute('collection', record);
                });
            }
        }
    });
});
define('collections/controllers/create', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Controller.extend({
        title: '',
        selectedType: 'Preprint',
        description: '',

        typeList: _ember.default.A(['Project', 'Registration', 'Preprint', 'Website']),

        actions: {
            addCollection: function addCollection() {
                var _this = this;

                var collection = this.store.createRecord('collection', {
                    title: this.get('title'),
                    tags: '',
                    settings: { collectionType: this.get('selectedType') },
                    description: this.get('description')
                });
                collection.save().then(function (record) {
                    _this.set('newCollectionTitle', '');
                    _this.transitionToRoute('collection', record);
                });
            },
            updateType: function updateType(value) {
                this.set('selectedType', value);
            }
        }
    });
});
define('collections/controllers/index', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Controller.extend({
        session: _ember.default.inject.service(),
        newCollectionTitle: '',
        modelCache: null,
        filterText: '',
        currentPage: 1,
        loadingMore: false,
        showLoadMore: _ember.default.computed('model.meta', function () {
            return this.get('model.meta.pagination.count') > this.get('model.length');
        }),
        actions: {
            filter: function filter() {
                var model = this.get('model');
                var text = this.get('filterText').toLowerCase();
                if (this.get('modelCache') === null) {
                    this.set('modelCache', model);
                }
                this.set('model', this.get('modelCache').filter(function (item) {
                    return item.get('title').toLowerCase().includes(text);
                }));
            },
            clearFilter: function clearFilter() {
                this.set('filterText', '');
            },
            loadMore: function loadMore() {
                var _this = this;

                this.set('loadingMore', true);
                this.store.query('collection', {
                    page: this.get('currentPage') + 1
                }).then(function (data) {
                    _this.incrementProperty('currentPage');
                    var currentModel = _this.get('model').toArray();
                    var arr = data.toArray();
                    currentModel.pushObjects(arr);
                    _this.set('model', currentModel);
                    _this.set('loadingMore', false);
                });
            }
        }
    });
});
define('collections/controllers/meetings', ['exports', 'collections/controllers/index'], function (exports, _index) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _index.default.extend({
        actions: {
            loadMore: function loadMore() {
                var _this = this;

                this.set('loadingMore', true);
                this.store.query('meeting', {
                    page: this.get('currentPage') + 1
                }).then(function (data) {
                    _this.incrementProperty('currentPage');
                    var currentModel = _this.get('model').toArray();
                    var arr = data.toArray();
                    currentModel.pushObjects(arr);
                    _this.set('model', currentModel);
                    _this.set('loadingMore', false);
                });
            }
        }
    });
});
define('collections/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_and.andHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_and.andHelper);
  }

  exports.default = forExport;
});
define('collections/helpers/await', ['exports', 'ember-promise-helpers/helpers/await'], function (exports, _await) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _await.default;
    }
  });
});
define('collections/helpers/build-secondary-nav-links', ['exports', 'ember-osf/helpers/build-secondary-nav-links'], function (exports, _buildSecondaryNavLinks) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _buildSecondaryNavLinks.default;
    }
  });
  Object.defineProperty(exports, 'buildSecondaryNavLinks', {
    enumerable: true,
    get: function () {
      return _buildSecondaryNavLinks.buildSecondaryNavLinks;
    }
  });
});
define('collections/helpers/conditions-for-contrib-removal', ['exports', 'ember', 'ember-osf/const/permissions'], function (exports, _ember, _permissions) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.conditionsForContribRemoval = conditionsForContribRemoval;

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);

                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }

            return _arr;
        }

        return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    /**
     * @module ember-preprints
     * @submodule helpers
     */

    /**
     * conditionsForContribRemoval helper - used to determine if removing a particular
     * contributor will still satisfy two conditions 1) @ least one registered admin 2) @ least one
     * bibliographic contributor
     *
     * @class conditionsForContribRemoval
     * @param {Object} contributorToRemove contributor you intend to remove
     * @param {Array} contributors list of all contributors on the preprint
     * @return {Boolean} Would removing contributor leave minimum number of registered
     * admins and bibliographic contributors?
     */

    function conditionsForContribRemoval(params /* , hash*/) {
        var _params = _slicedToArray(params, 2),
            contributorToRemove = _params[0],
            contributors = _params[1];

        var minRegisteredAdmins = false;
        var minBibliographic = false;
        contributors.forEach(function (contributor) {
            if (contributor.id !== contributorToRemove.id) {
                if (contributor.get('permission') === _permissions.default.ADMIN && contributor.get('unregisteredContributor') === null) {
                    minRegisteredAdmins = true;
                }
                if (contributor.get('bibliographic')) {
                    minBibliographic = true;
                }
            }
        });
        return minRegisteredAdmins && minBibliographic;
    }

    exports.default = _ember.default.Helper.helper(conditionsForContribRemoval);
});
define('collections/helpers/contains-substring', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.containsSubstring = containsSubstring;

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);

                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }

            return _arr;
        }

        return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    /**
     * containsSubstring helper
     *
     * @class containsSubstring
     * @param {String} string The string being searched through
     * @param {String} target The string being looked for
     * @return {Boolean} Does the target string exist inside the specified string?
     */
    function containsSubstring(params /* , hash*/) {
        var _params = _slicedToArray(params, 2),
            string = _params[0],
            target = _params[1];

        var stringLower = string.toLowerCase();
        var targetLower = target.toLowerCase();
        if (stringLower.length === 0) {
            return false;
        } else {
            return stringLower.indexOf(targetLower) !== -1;
        }
    }

    exports.default = _ember.default.Helper.helper(containsSubstring);
});
define('collections/helpers/contributor-is-current-user', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.contributorIsCurrentUser = contributorIsCurrentUser;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  /**
   * @module ember-preprints
   * @submodule helpers
   */

  /**
   * contributorIsCurrentUser helper. Checks to see if particular contributor listed is the current
   * logged in user
   *
   * @class contributorIsCurrentUser
   * @param {Object} contributor Contributor in question.
   * @param {Object} currentUser Current logged in user.
   * @return {Boolean} Is this contributor the current user?
   */
  function contributorIsCurrentUser(params /* , hash*/) {
    var _params = _slicedToArray(params, 2),
        contributor = _params[0],
        currentUser = _params[1];

    var currentUserId = currentUser.get('currentUserId') || currentUser.get('id');
    return contributor.get('userId') === currentUserId;
  }

  exports.default = _ember.default.Helper.helper(contributorIsCurrentUser);
});
define('collections/helpers/custom-taxonomy-filter', ['exports', 'ember-osf/helpers/custom-taxonomy-filter'], function (exports, _customTaxonomyFilter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _customTaxonomyFilter.default;
    }
  });
  Object.defineProperty(exports, 'customTaxonomyFilter', {
    enumerable: true,
    get: function () {
      return _customTaxonomyFilter.customTaxonomyFilter;
    }
  });
});
define('collections/helpers/elem-id', ['exports', 'ember-osf/helpers/elem-id'], function (exports, _elemId) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _elemId.default;
    }
  });
  Object.defineProperty(exports, 'elemId', {
    enumerable: true,
    get: function () {
      return _elemId.elemId;
    }
  });
});
define('collections/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_equal.equalHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_equal.equalHelper);
  }

  exports.default = forExport;
});
define('collections/helpers/extract-doi', ['exports', 'ember-osf/helpers/extract-doi'], function (exports, _extractDoi) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _extractDoi.default;
    }
  });
  Object.defineProperty(exports, 'extractDoi', {
    enumerable: true,
    get: function () {
      return _extractDoi.extractDoi;
    }
  });
});
define('collections/helpers/filter-replace', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.filterReplace = filterReplace;


  var filters = {
    'Open Science Framework': 'OSF',
    'Cognitive Sciences ePrint Archive': 'Cogprints',
    OSF: 'OSF Preprints',
    'Research Papers in Economics': 'RePEc'
  };

  /**
   * @module ember-preprints
   * @submodule helpers
   */

  /**
   * filterReplace helper. Replaces long provider names without messing with search filter logic
   *
   * @class filterReplace
   * @param {String} filter Filter
   * @return {String} Return shortened provider filter, if present in filters.
   * Otherwise, return original filter.
   */
  function filterReplace(params) {
    return filters[params[0]] ? filters[params[0]] : params[0];
  }

  exports.default = _ember.default.Helper.helper(filterReplace);
});
define('collections/helpers/fix-special-char', ['exports', 'ember-osf/helpers/fix-special-char'], function (exports, _fixSpecialChar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fixSpecialChar.default;
    }
  });
  Object.defineProperty(exports, 'fixSpecialCharHelper', {
    enumerable: true,
    get: function () {
      return _fixSpecialChar.fixSpecialCharHelper;
    }
  });
});
define('collections/helpers/fixed-grid-layout', ['exports', 'ember', 'ember-collection/layouts/grid'], function (exports, _ember, _grid) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Helper.helper(function (params, hash) {
    return new _grid.default(params[0], params[1]);
  });
});
define('collections/helpers/get-ancestor-descriptor', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.getAncestorDescriptor = getAncestorDescriptor;


    function fetchIdFromRelationshipLink(node, relationship) {
        // If id is not embedded in request, Private node ids can be
        // accessed under initializedRelationships.
        // May still return undefined if parent, for example, does not exist.
        if (node) {
            var initializedRelationship = node._internalModel._relationships.initializedRelationships[relationship];
            if (initializedRelationship && initializedRelationship.link) {
                return initializedRelationship.link.split('nodes')[1].replace(/\//g, '');
            }
        }
        return undefined;
    }

    function fetchTitle(node, relationship) {
        // Fetches parent or root title.  If null, marks 'Private'.
        var title = node.get(relationship + '.title');
        if (typeof title === 'undefined') {
            title = 'Private';
        }
        return title;
    }

    function getAncestorDescriptor(params /* , hash*/) {
        // Formats titles similar to the way they're displayed in the dashboard.
        // For example, Root Name / ... / Parent Name / Node Name.
        var node = params[0];
        var nodeId = node.get('id');
        var rootId = node.get('root.id');
        var parentId = node.get('parent.id');
        var parent = node.get('parent') instanceof _ember.default.ObjectProxy ? node.get('parent.content') : node.get('parent');
        var parentParentId = parent ? parent.get('parent.id') : undefined;

        if (typeof rootId === 'undefined') rootId = fetchIdFromRelationshipLink(node, 'root');
        if (typeof parentId === 'undefined') parentId = fetchIdFromRelationshipLink(node, 'parent');
        if (typeof parentParentId === 'undefined') parentParentId = fetchIdFromRelationshipLink(parent, 'parent');

        var parentTitle = fetchTitle(node, 'parent');
        var rootTitle = fetchTitle(node, 'root');

        var rootDescriptor = void 0;
        if (rootId === nodeId) {
            // One level
            rootDescriptor = '';
        } else if (rootId === parentId) {
            // Two levels
            rootDescriptor = parentTitle + ' / ';
        } else if (rootId === parentParentId) {
            // Three levels
            rootDescriptor = rootTitle + ' / ' + parentTitle + ' / ';
        } else if (parentParentId === undefined) {
            // Cannot deduce number of levels.
            rootDescriptor = '... / ';
        } else {
            // Four + levels
            rootDescriptor = rootTitle + ' / ... / ' + parentTitle + ' / ';
        }
        return rootDescriptor;
    }

    exports.default = _ember.default.Helper.helper(getAncestorDescriptor);
});
define('collections/helpers/get-display-name', ['exports', 'ember-osf/helpers/get-display-name'], function (exports, _getDisplayName) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _getDisplayName.default;
    }
  });
  Object.defineProperty(exports, 'getDisplayName', {
    enumerable: true,
    get: function () {
      return _getDisplayName.getDisplayName;
    }
  });
});
define('collections/helpers/get-section-id', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.getSectionId = getSectionId;


    /**
     * Formats a string into a more readable url-friendly anchor tag by replacing spaces
     * with underscores and removing punctuation.
     * @param params Section title
     * @returns {*} Title with spaces replaced by underscores, and all punctuation removed
     */

    function getSectionId(params /* , hash*/) {
        var sectionHeader = params[0];
        if (sectionHeader) {
            return sectionHeader.replace(/[.,/#!$%^&*;:{}=`~()]/g, '').replace(/\s/g, '_');
        }
    }

    exports.default = _ember.default.Helper.helper(getSectionId);
});
define('collections/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_gt.gtHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_gt.gtHelper);
  }

  exports.default = forExport;
});
define('collections/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_gte.gteHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_gte.gteHelper);
  }

  exports.default = forExport;
});
define('collections/helpers/if-filter', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ifFilter = ifFilter;

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);

                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }

            return _arr;
        }

        return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    /**
     * @module ember-preprints
     * @submodule helpers
     */

    /**
      * ifFilter helper. To be used within an {#if} block,
      * to only display an item if it matches a filter.
      *
      * @class ifFilter
      * @param {String} element
      * @param {Object} filter
      * @param {String} list intersection ??
      * @return {Boolean} Return if matches a filter.
      */
    function ifFilter(params) {
        var _params = _slicedToArray(params, 3),
            element = _params[0],
            filter = _params[1],
            intersection = _params[2];

        if (intersection) {
            var match = element.filter(function (each) {
                return filter.includes(each);
            });
            return match.length;
        }
        if ((typeof filter === 'undefined' ? 'undefined' : _typeof(filter)) === 'object') {
            return filter.includes(element);
        }
        if (typeof filter === 'undefined' || element.toLowerCase().includes(filter.toLowerCase())) {
            return true;
        }
        return false;
    }

    exports.default = _ember.default.Helper.helper(ifFilter);
});
define('collections/helpers/is-after', ['exports', 'ember', 'collections/config/environment', 'ember-moment/helpers/is-after'], function (exports, _ember, _environment, _isAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _isAfter.default.extend({
    globalAllowEmpty: !!_ember.default.get(_environment.default, 'moment.allowEmpty')
  });
});
define('collections/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_isArray.isArrayHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_isArray.isArrayHelper);
  }

  exports.default = forExport;
});
define('collections/helpers/is-before', ['exports', 'ember', 'collections/config/environment', 'ember-moment/helpers/is-before'], function (exports, _ember, _environment, _isBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _isBefore.default.extend({
    globalAllowEmpty: !!_ember.default.get(_environment.default, 'moment.allowEmpty')
  });
});
define('collections/helpers/is-between', ['exports', 'ember', 'collections/config/environment', 'ember-moment/helpers/is-between'], function (exports, _ember, _environment, _isBetween) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _isBetween.default.extend({
    globalAllowEmpty: !!_ember.default.get(_environment.default, 'moment.allowEmpty')
  });
});
define('collections/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('collections/helpers/is-fulfilled', ['exports', 'ember-promise-helpers/helpers/is-fulfilled'], function (exports, _isFulfilled) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isFulfilled.default;
    }
  });
  Object.defineProperty(exports, 'isFulfilled', {
    enumerable: true,
    get: function () {
      return _isFulfilled.isFulfilled;
    }
  });
});
define('collections/helpers/is-not', ['exports', 'ember-bootstrap/helpers/is-not'], function (exports, _isNot) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isNot.default;
    }
  });
  Object.defineProperty(exports, 'isNot', {
    enumerable: true,
    get: function () {
      return _isNot.isNot;
    }
  });
});
define('collections/helpers/is-pending', ['exports', 'ember-promise-helpers/helpers/is-pending'], function (exports, _isPending) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isPending.default;
    }
  });
  Object.defineProperty(exports, 'isPending', {
    enumerable: true,
    get: function () {
      return _isPending.isPending;
    }
  });
});
define('collections/helpers/is-rejected', ['exports', 'ember-promise-helpers/helpers/is-rejected'], function (exports, _isRejected) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isRejected.default;
    }
  });
  Object.defineProperty(exports, 'isRejected', {
    enumerable: true,
    get: function () {
      return _isRejected.isRejected;
    }
  });
});
define('collections/helpers/is-same-or-after', ['exports', 'ember', 'collections/config/environment', 'ember-moment/helpers/is-same-or-after'], function (exports, _ember, _environment, _isSameOrAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _isSameOrAfter.default.extend({
    globalAllowEmpty: !!_ember.default.get(_environment.default, 'moment.allowEmpty')
  });
});
define('collections/helpers/is-same-or-before', ['exports', 'ember', 'collections/config/environment', 'ember-moment/helpers/is-same-or-before'], function (exports, _ember, _environment, _isSameOrBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _isSameOrBefore.default.extend({
    globalAllowEmpty: !!_ember.default.get(_environment.default, 'moment.allowEmpty')
  });
});
define('collections/helpers/is-same', ['exports', 'ember', 'collections/config/environment', 'ember-moment/helpers/is-same'], function (exports, _ember, _environment, _isSame) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _isSame.default.extend({
    globalAllowEmpty: !!_ember.default.get(_environment.default, 'moment.allowEmpty')
  });
});
define('collections/helpers/is-section-editable', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.isSectionEditable = isSectionEditable;


  /**
   * @module ember-preprints
   * @submodule helpers
   */

  /**
   * isSectionEditable helper - determines if form section can be edited.
   *
   * @class isSectionEditable
   * @param {String} section form section name
   * @return {Boolean} Is this section editable?
   */
  function isSectionEditable(params /* , hash*/) {
    var section = params[0];
    var uneditableSections = ['Submit', 'location_of_preprint', 'Update'];
    return !uneditableSections.includes(section);
  }

  exports.default = _ember.default.Helper.helper(isSectionEditable);
});
define('collections/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_lt.ltHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_lt.ltHelper);
  }

  exports.default = forExport;
});
define('collections/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_lte.lteHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_lte.lteHelper);
  }

  exports.default = forExport;
});
define('collections/helpers/min-admins', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.minAdmins = minAdmins;

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);

                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }

            return _arr;
        }

        return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    /**
     * @module ember-preprints
     * @submodule helpers
     */

    /**
     * minAdmins helper - used to determine if the user should be able to update permissions
     * of a particular contributor.  False if user is trying to update the permissions
     * of the sole admin.  All projects need at least one administrator.
     *
     * @class minAdmins
     * @param {Object} contrib contributor for which you intend to modify permissions
     * @param {Array} contributors list of all contributors on the preprint
     * @return {Boolean} Does updating this contributor leave minimum number of admins?
     */
    function minAdmins(params /* , hash*/) {
        var _params = _slicedToArray(params, 2),
            contrib = _params[0],
            contributors = _params[1];

        var registeredAdmins = 0;
        contributors.forEach(function (contributor) {
            if (contributor.get('permission') === 'admin' && contributor.get('unregisteredContributor') === null) {
                registeredAdmins++;
            }
        });
        if (registeredAdmins === 1 && contrib.get('permission') === 'admin' && contrib.get('unregisteredContributor') === null) {
            return false;
        } else {
            return true;
        }
    }

    exports.default = _ember.default.Helper.helper(minAdmins);
});
define('collections/helpers/min-bibliographic', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.minBibliographic = minBibliographic;

    var _slicedToArray = function () {
        function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;

            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);

                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }

            return _arr;
        }

        return function (arr, i) {
            if (Array.isArray(arr)) {
                return arr;
            } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        };
    }();

    /**
     * @module ember-preprints
     * @submodule helpers
     */

    /**
     * minBibliographic helper - used to determine if the user should be able to update bibliographic
     * info of a particular contributor.  False if user is trying to toggle the bibliographic
     * attribute of the sole bibliographic contributor.
     *
     * @class minBibliographic
     * @param {Object} contrib contributor that you intend to modify bibliographic information
     * @param {Array} contributors list of all contributors on the preprint
     * @return {Boolean} Does updating this contributor leave minimum number of
     *     bibliographic contributors?
     */
    function minBibliographic(params /* , hash*/) {
        var _params = _slicedToArray(params, 2),
            contrib = _params[0],
            contributors = _params[1];

        var numBib = 0;
        contributors.forEach(function (contributor) {
            if (contributor.get('bibliographic')) {
                numBib++;
            }
        });
        if (numBib === 1 && contrib.get('bibliographic')) {
            return false;
        } else {
            return true;
        }
    }

    exports.default = _ember.default.Helper.helper(minBibliographic);
});
define('collections/helpers/mixed-grid-layout', ['exports', 'ember', 'ember-collection/layouts/mixed-grid'], function (exports, _ember, _mixedGrid) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Helper.helper(function (params, hash) {
    return new _mixedGrid.default(params[0]);
  });
});
define('collections/helpers/moment-add', ['exports', 'ember', 'collections/config/environment', 'ember-moment/helpers/moment-add'], function (exports, _ember, _environment, _momentAdd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentAdd.default.extend({
    globalAllowEmpty: !!_ember.default.get(_environment.default, 'moment.allowEmpty')
  });
});
define('collections/helpers/moment-calendar', ['exports', 'ember', 'collections/config/environment', 'ember-moment/helpers/moment-calendar'], function (exports, _ember, _environment, _momentCalendar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentCalendar.default.extend({
    globalAllowEmpty: !!_ember.default.get(_environment.default, 'moment.allowEmpty')
  });
});
define('collections/helpers/moment-diff', ['exports', 'ember', 'collections/config/environment', 'ember-moment/helpers/moment-diff'], function (exports, _ember, _environment, _momentDiff) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentDiff.default.extend({
    globalAllowEmpty: !!_ember.default.get(_environment.default, 'moment.allowEmpty')
  });
});
define('collections/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _momentDuration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentDuration.default;
    }
  });
});
define('collections/helpers/moment-format', ['exports', 'ember', 'collections/config/environment', 'ember-moment/helpers/moment-format'], function (exports, _ember, _environment, _momentFormat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentFormat.default.extend({
    globalAllowEmpty: !!_ember.default.get(_environment.default, 'moment.allowEmpty')
  });
});
define('collections/helpers/moment-from-now', ['exports', 'ember', 'collections/config/environment', 'ember-moment/helpers/moment-from-now'], function (exports, _ember, _environment, _momentFromNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentFromNow.default.extend({
    globalAllowEmpty: !!_ember.default.get(_environment.default, 'moment.allowEmpty')
  });
});
define('collections/helpers/moment-from', ['exports', 'ember', 'collections/config/environment', 'ember-moment/helpers/moment-from'], function (exports, _ember, _environment, _momentFrom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentFrom.default.extend({
    globalAllowEmpty: !!_ember.default.get(_environment.default, 'moment.allowEmpty')
  });
});
define('collections/helpers/moment-subtract', ['exports', 'ember', 'collections/config/environment', 'ember-moment/helpers/moment-subtract'], function (exports, _ember, _environment, _momentSubtract) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentSubtract.default.extend({
    globalAllowEmpty: !!_ember.default.get(_environment.default, 'moment.allowEmpty')
  });
});
define('collections/helpers/moment-to-date', ['exports', 'ember', 'collections/config/environment', 'ember-moment/helpers/moment-to-date'], function (exports, _ember, _environment, _momentToDate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentToDate.default.extend({
    globalAllowEmpty: !!_ember.default.get(_environment.default, 'moment.allowEmpty')
  });
});
define('collections/helpers/moment-to-now', ['exports', 'ember', 'collections/config/environment', 'ember-moment/helpers/moment-to-now'], function (exports, _ember, _environment, _momentToNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentToNow.default.extend({
    globalAllowEmpty: !!_ember.default.get(_environment.default, 'moment.allowEmpty')
  });
});
define('collections/helpers/moment-to', ['exports', 'ember', 'collections/config/environment', 'ember-moment/helpers/moment-to'], function (exports, _ember, _environment, _momentTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentTo.default.extend({
    globalAllowEmpty: !!_ember.default.get(_environment.default, 'moment.allowEmpty')
  });
});
define('collections/helpers/moment-unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
  Object.defineProperty(exports, 'unix', {
    enumerable: true,
    get: function () {
      return _unix.unix;
    }
  });
});
define('collections/helpers/moment', ['exports', 'ember-moment/helpers/moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _moment.default;
    }
  });
});
define('collections/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_notEqual.notEqualHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_notEqual.notEqualHelper);
  }

  exports.default = forExport;
});
define('collections/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_not.notHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_not.notHelper);
  }

  exports.default = forExport;
});
define('collections/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _now) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _now.default;
    }
  });
});
define('collections/helpers/number-format', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.numberFormat = numberFormat;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  /**
   * @module ember-preprints
   * @submodule helpers
   */

  /**
    * numberFormat helper. Transforms 3500 into 3,500 for example, if in US English locale.
    *
    * @class numberFormat.
    * @param {Integer} element
    * @return {String} Return formatted string.
    */
  function numberFormat(params /* , hash*/) {
    var _params = _slicedToArray(params, 1),
        number = _params[0];

    return number.toLocaleString();
  }

  exports.default = _ember.default.Helper.helper(numberFormat);
});
define('collections/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_or.orHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_or.orHelper);
  }

  exports.default = forExport;
});
define('collections/helpers/percentage-columns-layout', ['exports', 'ember', 'ember-collection/layouts/percentage-columns'], function (exports, _ember, _percentageColumns) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Helper.helper(function (params, hash) {
    return new _percentageColumns.default(params[0], params[1], params[2]);
  });
});
define('collections/helpers/permission-map', ['exports', 'ember', 'ember-osf/const/permissions'], function (exports, _ember, _permissions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.permissionMap = permissionMap;

  /**
   * @module ember-preprints
   * @submodule helpers
   */

  /**
   * permissionMap helper.  Maps short form of the contributor's permissions
   * passed in params to the long form.
   *
   * @class permissionMap
   * @param {String} permission Short form of permission
   * @return {String} permission Long form of permission
   */
  function permissionMap(params /* , hash*/) {
    var map = {};
    for (var i = 0; i < _permissions.permissionSelector.length; i++) {
      map[_permissions.permissionSelector[i].value] = _permissions.permissionSelector[i].text;
    }
    var permission = params[0];
    return map[permission];
  }

  exports.default = _ember.default.Helper.helper(permissionMap);
});
define('collections/helpers/permission-to-remove-contributor', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.permissionToRemoveContributor = permissionToRemoveContributor;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  /**
   * @module ember-preprints
   * @submodule helpers
   */

  /**
   * permissionToRemoveContributor helper.  Checks to see if user has proper permissions
   * to remove contributor.  The user must be an admin and cannot remove herself.
   * The project cannot be a registration.
   *
   * @class permissionToRemoveContributor
   * @param {Object} contributor Contributor you wish to remove.
   * @param {Object} currentUser Current logged in user.
   * @param {Boolean} isAdmin Whether current user is a preprint admin
   * @param {Object} node The preprint itself.
   * @return {Boolean} Does current user have permission to remove this particular contributor?
   */
  function permissionToRemoveContributor(params /* , hash*/) {
    var _params = _slicedToArray(params, 4),
        contributor = _params[0],
        currentUser = _params[1],
        isAdmin = _params[2],
        node = _params[3];

    var currentUserId = currentUser.get('currentUserId') || currentUser.get('id');
    var removeSelf = contributor.get('userId') === currentUserId;
    var isRegistration = null;
    if (node) {
      isRegistration = node.get('registration');
    }
    return !removeSelf && isAdmin && !isRegistration;
  }

  exports.default = _ember.default.Helper.helper(permissionToRemoveContributor);
});
define('collections/helpers/permission-to-remove-contributors', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.permissionToRemoveContributor = permissionToRemoveContributor;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  /**
   * @module ember-preprints
   * @submodule helpers
   */

  /**
   * permissionToRemoveContributor helper.  Checks to see if user has proper permissions
   * to remove contributor.  The user must be an admin and cannot remove herself.
   * The project cannot be a registration.
   *
   * @class permissionToRemoveContributor
   * @param {Object} contributor Contributor you wish to remove.
   * @param {Object} currentUser Current logged in user.
   * @param {Boolean} isAdmin Whether current user is a preprint admin
   * @param {Object} node The preprint itself.
   * @return {Boolean} Does current user have permission to remove this particular contributor?
   */
  function permissionToRemoveContributor(params /* , hash*/) {
    var _params = _slicedToArray(params, 4),
        contributor = _params[0],
        currentUser = _params[1],
        isAdmin = _params[2],
        node = _params[3];

    var currentUserId = currentUser.get('currentUserId') || currentUser.get('id');
    var removeSelf = contributor.get('userId') === currentUserId;
    var isRegistration = null;
    if (node) {
      isRegistration = node.get('registration');
    }
    return !removeSelf && isAdmin && !isRegistration;
  }

  exports.default = _ember.default.Helper.helper(permissionToRemoveContributor);
});
define('collections/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('collections/helpers/promise-all', ['exports', 'ember-promise-helpers/helpers/promise-all'], function (exports, _promiseAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _promiseAll.default;
    }
  });
  Object.defineProperty(exports, 'promiseAll', {
    enumerable: true,
    get: function () {
      return _promiseAll.promiseAll;
    }
  });
});
define('collections/helpers/promise-hash', ['exports', 'ember-promise-helpers/helpers/promise-hash'], function (exports, _promiseHash) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _promiseHash.default;
    }
  });
  Object.defineProperty(exports, 'promiseHash', {
    enumerable: true,
    get: function () {
      return _promiseHash.promiseHash;
    }
  });
});
define('collections/helpers/promise-rejected-reason', ['exports', 'ember-promise-helpers/helpers/promise-rejected-reason'], function (exports, _promiseRejectedReason) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _promiseRejectedReason.default;
    }
  });
});
define('collections/helpers/read-path', ['exports', 'ember-bootstrap/helpers/read-path'], function (exports, _readPath) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _readPath.default;
    }
  });
  Object.defineProperty(exports, 'readPath', {
    enumerable: true,
    get: function () {
      return _readPath.readPath;
    }
  });
});
define('collections/helpers/route-prefix', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Helper.extend({
        theme: _ember.default.inject.service(),

        onSubRouteChange: _ember.default.observer('theme.isSubRoute', function () {
            this.recompute();
        }),

        compute: function compute(params) {
            var route = params.join('');

            return this.get('theme.isSubRoute') ? 'provider.' + route : route;
        }
    });
});
define('collections/helpers/safe-markup', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.safeMarkup = safeMarkup;

  /**
   * @module ember-preprints
   * @submodule helpers
   */

  /**
    * DO NOT USE THIS HELPER ON USER-ENTERED TEXT!!!
    * safeMarkup helper. Returns a string that will not be HTML escaped by Handlebars.
    *
    * @class safe-markup
    * @param {string} string
    * @return {Object} Returns Handlebars.SafeString
    */
  function safeMarkup(params /* , hash*/) {
    return _ember.default.String.htmlSafe(params.join(''));
  }

  exports.default = _ember.default.Helper.helper(safeMarkup);
});
define('collections/helpers/share-detail-url', ['exports', 'ember-osf/helpers/share-detail-url'], function (exports, _shareDetailUrl) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _shareDetailUrl.default;
    }
  });
  Object.defineProperty(exports, 'shareDetailURL', {
    enumerable: true,
    get: function () {
      return _shareDetailUrl.shareDetailURL;
    }
  });
});
define('collections/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('collections/helpers/slice-array', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.sliceArray = sliceArray;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  /**
   * @module ember-preprints
   * @submodule helpers
   */

  /**
   * sliceArray - returns shallow copy of portion of array
   *
   * @class sliceArray
   * @param {Array} array
   * @param {Integer} startIndex
   * @param {Integer} stopIndex
   * @return {Array} sliced array
   */
  function sliceArray(params /* , hash*/) {
    var _params = _slicedToArray(params, 3),
        array = _params[0],
        start = _params[1],
        finish = _params[2];

    return array.slice(start, finish);
  }

  exports.default = _ember.default.Helper.helper(sliceArray);
});
define('collections/helpers/sort-option-display', ['exports', 'ember-osf/helpers/sort-option-display'], function (exports, _sortOptionDisplay) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sortOptionDisplay.default;
    }
  });
  Object.defineProperty(exports, 'sortOptionDisplay', {
    enumerable: true,
    get: function () {
      return _sortOptionDisplay.sortOptionDisplay;
    }
  });
});
define('collections/helpers/t', ['exports', 'ember-i18n/helper'], function (exports, _helper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helper.default;
    }
  });
});
define('collections/helpers/unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
  Object.defineProperty(exports, 'unix', {
    enumerable: true,
    get: function () {
      return _unix.unix;
    }
  });
});
define('collections/helpers/user-is-contributor', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.userIsContributor = userIsContributor;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  /**
   * @module ember-preprints
   * @submodule helpers
   */

  /**
   * userIsContributor - takes in a user and the list of all preprint contributors.
   * Returns true if the user is in the list of preprint contributors.
   *
   * @class userIsContributor
   * @param {Object} user User returned in search results.
   * @param {Array} contributors List of all contributors on the preprint.
   * @return {Boolean} Is the user a current contributor on the preprint?
   */
  function userIsContributor(params /* , hash*/) {
    var _params = _slicedToArray(params, 2),
        user = _params[0],
        contributors = _params[1];

    var userIds = contributors.map(function (contrib) {
      return contrib.get('userId');
    });
    return userIds.indexOf(user.id) > -1;
  }

  exports.default = _ember.default.Helper.helper(userIsContributor);
});
define('collections/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (_ember.default.Helper) {
    forExport = _ember.default.Helper.helper(_xor.xorHelper);
  } else if (_ember.default.HTMLBars.makeBoundHelper) {
    forExport = _ember.default.HTMLBars.makeBoundHelper(_xor.xorHelper);
  }

  exports.default = forExport;
});
define('collections/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'collections/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(_environment.default.APP.name, _environment.default.APP.version)
  };
});
define("collections/initializers/bread-crumbs", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-breadcrumbs",
    initialize: function initialize() {
      var application = arguments[1] || arguments[0];
      application.inject("component:bread-crumbs", "router", "router:main");
      application.inject("component:bread-crumbs", "applicationController", "controller:application");
    }
  };
});
define('collections/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('collections/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('collections/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('collections/initializers/ember-faker', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    // application.inject('route', 'foo', 'service:foo');
  };

  exports.default = {
    name: 'ember-faker',
    initialize: initialize
  };
});
define('collections/initializers/ember-i18n', ['exports', 'ember-i18n/initializers/ember-i18n'], function (exports, _emberI18n) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberI18n.default;
});
define('collections/initializers/ember-simple-auth', ['exports', 'collections/config/environment', 'ember-simple-auth/configuration', 'ember-simple-auth/initializers/setup-session', 'ember-simple-auth/initializers/setup-session-service'], function (exports, _environment, _configuration, _setupSession, _setupSessionService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-simple-auth',

    initialize: function initialize(registry) {
      var config = _environment.default['ember-simple-auth'] || {};
      config.baseURL = _environment.default.rootURL || _environment.default.baseURL;
      _configuration.default.load(config);

      (0, _setupSession.default)(registry);
      (0, _setupSessionService.default)(registry);
    }
  };
});
define('collections/initializers/export-application-global', ['exports', 'ember', 'collections/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('collections/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('collections/initializers/load-bootstrap-config', ['exports', 'collections/config/environment', 'ember-bootstrap/config'], function (exports, _environment, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  exports.default = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define('collections/initializers/modals-container', ['exports', 'ember-bootstrap/initializers/modals-container'], function (exports, _modalsContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _modalsContainer.default;
});
define('collections/initializers/promise', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.initialize = initialize;
    function initialize() {
        window.Promise = _ember.default.RSVP.Promise;
    }

    exports.default = {
        name: 'promise',
        initialize: initialize
    };
});
define('collections/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('collections/initializers/toastr', ['exports', 'ember-toastr/initializers/toastr', 'collections/config/environment'], function (exports, _toastr, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var toastrOptions = {
    closeButton: true,
    debug: false,
    newestOnTop: true,
    progressBar: true,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
    onclick: null,
    showDuration: '300',
    hideDuration: '1000',
    timeOut: '4000',
    extendedTimeOut: '1000',
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut'
  };
  var config = _environment.default['ember-toastr'] || {
    injectAs: 'toast',
    toastrOptions: toastrOptions
  };

  exports.default = {
    name: 'ember-toastr',
    initialize: function initialize() {
      // support 1.x and 2.x
      var application = arguments[1] || arguments[0];

      if (!config.toastrOptions) {
        config.toastrOptions = toastrOptions;
      }

      if (!config.injectAs) {
        config.injectAs = 'toast';
      }

      (0, _toastr.initialize)(application, config);
    }
  };
});
define('collections/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('collections/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _registerHelper, _and, _or, _equal, _not, _isArray, _notEqual, _gt, _gte, _lt, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember.default.Helper) {
      return;
    }

    (0, _registerHelper.registerHelper)('and', _and.andHelper);
    (0, _registerHelper.registerHelper)('or', _or.orHelper);
    (0, _registerHelper.registerHelper)('eq', _equal.equalHelper);
    (0, _registerHelper.registerHelper)('not', _not.notHelper);
    (0, _registerHelper.registerHelper)('is-array', _isArray.isArrayHelper);
    (0, _registerHelper.registerHelper)('not-eq', _notEqual.notEqualHelper);
    (0, _registerHelper.registerHelper)('gt', _gt.gtHelper);
    (0, _registerHelper.registerHelper)('gte', _gte.gteHelper);
    (0, _registerHelper.registerHelper)('lt', _lt.ltHelper);
    (0, _registerHelper.registerHelper)('lte', _lte.lteHelper);
  }

  exports.default = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define("collections/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('collections/instance-initializers/ember-i18n', ['exports', 'ember-i18n/instance-initializers/ember-i18n'], function (exports, _emberI18n) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberI18n.default;
});
define('collections/instance-initializers/ember-osf', ['exports', 'ember-osf/instance-initializers/ember-osf'], function (exports, _emberOsf) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberOsf.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _emberOsf.initialize;
    }
  });
});
define('collections/instance-initializers/ember-simple-auth', ['exports', 'ember-simple-auth/instance-initializers/setup-session-restoration'], function (exports, _setupSessionRestoration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-simple-auth',

    initialize: function initialize(instance) {
      (0, _setupSessionRestoration.default)(instance);
    }
  };
});
define("collections/locales/en/config", ["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        rtl: false
        //
        // pluralForm: function(count) {
        //   if (count === 0) { return 'zero'; }
        //   if (count === 1) { return 'one'; }
        //   if (count === 2) { return 'two'; }
        //   if (count < 5) { return 'few'; }
        //   if (count >= 5) { return 'many'; }
        //   return 'other';
        // }
    };
});
define('collections/locales/en/translations', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var preprints = 'Preprints';
    var brand = 'OSF ' + preprints;
    var arxiv_trademark_license = 'arXiv is a trademark of Cornell University, used under license.'; // eslint-disable-line camelcase

    exports.default = {
        global: {
            share: 'Share',
            complete: 'Complete',
            cancel: 'Cancel',
            discard: 'Discard changes',
            back: 'Back',
            prev: 'Prev',
            next: 'Next',
            none: 'None',
            abstract: 'Abstract',
            doi: 'DOI',
            tags: 'Tags',
            search: 'Search',
            preprints: preprints,
            brand: brand,
            brand_name: 'OSF',
            provider_brand: '{{name}} ' + preprints,
            add_preprint: 'Add a preprint',
            title: 'Title',
            search_preprints: 'Search preprints...',
            added_on: 'Added on',
            add: 'Add',
            restart: 'Restart',
            no_results_found: 'No results found.',
            authors: 'Authors',
            convert_project: 'The preprint will be organized in the current project',
            convert_component: 'The preprint will be organized in the current component',
            copy_inside_project: 'The preprint will be organized in a new component',
            open_science_framework: 'Open Science Framework',
            license: 'License'
        },
        application: {
            separator: ' | '
        },
        content: {
            header: {
                last_edited: 'Last edited'
            },
            share: {
                download: 'Download',
                downloads: 'Downloads',
                download_file: 'Download file',
                download_preprint: 'Download preprint'
            },
            see_more: 'See more',
            see_less: 'See less',
            version: 'Version',
            article_doi: 'Article DOI',
            citations: 'Citations',
            disciplines: 'Disciplines',
            project_button: {
                paragraph: 'The project for this paper is available on the OSF.',
                button: 'Visit project',
                edit_preprint: 'Edit preprint'
            },
            orphan_preprint: 'The user has removed this file.',
            private_preprint_warning: 'This Preprint is private. Make it discoverable by making',
            public: 'public'
        },
        discover: {
            search: {
                heading: 'Preprint Archive Search',
                paragraph: 'powered by',
                partner: 'Partner Repositories',
                placeholder: 'Search preprints...'
            },
            sort_by: 'Sort by',
            sort_newest_oldest: 'Modified Date (newest to oldest)',
            sort_oldest_newest: 'Modified Date (oldest to newest)',
            modified_on: 'Modified on',
            relevance: 'Relevance',
            main: {
                active_filters: {
                    heading: 'Active Filters',
                    button: 'Clear filters'
                },
                refine: 'Refine your search by',
                providers: 'Providers',
                subject: 'Subject',
                box: {
                    paragraph: 'Do you want to add your own research as a preprint?',
                    button: 'Add your preprint'
                },
                results: {
                    of: 'of',
                    no_results: 'Try broadening your search terms'
                },
                otherRepositories: 'Other preprint repositories'
            }
        },
        index: {
            header: {
                title: {
                    paragraph: 'The <span class="f-w-lg">open</span> preprint repository network'
                },
                powered_by: 'Powered by ' + brand,
                search: '{{count}} searchable preprints',
                or: 'or',
                as_of: 'as of',
                example: 'See an example'
            },
            subjects: {
                heading: 'Browse <small>by subject</small>'
            },
            services: {
                top: {
                    heading: 'Preprint Services',
                    paragraph: 'Leading preprint service providers use this open source infrastructure to support their communities.'
                },
                bottom: {
                    p1: 'Create your own branded preprint servers backed by the OSF.',
                    div: {
                        line1: 'Check out the',
                        linkText1: 'open source code',
                        line2: 'and the',
                        linkText2: 'requirements and road map',
                        line3: '. Input welcome!'
                    },
                    contact: 'Contact us'
                }
            },
            advisory: {
                heading: 'Advisory Group',
                paragraph: 'Our advisory group includes leaders in preprints and scholarly communication'
            }
        },
        // Error pages
        'page-not-found': { // 404
            heading: 'Page not found',
            message: 'The page you were looking for is not found on the {{brand}} service.'
        },
        'page-forbidden': { // 403
            heading: 'Forbidden',
            message: 'User has restricted access to this page.'
        },
        'resource-deleted': { // 410
            heading: 'Resource deleted',
            message: 'User has deleted this content.'
        },
        submit: {
            add_heading: 'Add Preprint',
            edit_heading: 'Edit Preprint',
            body: {
                p_add: 'Follow these five easy steps to add your preprint to the {{name}} preprint repository.',
                p_edit: 'Edit your preprint sections below.',
                upload: 'Upload new preprint',
                connect: 'Connect preprint to existing OSF project',
                file: 'Preprint file',
                title: 'Preprint title',
                subjects_description: 'Select a discipline and subdiscipline, if relevant. Add more by clicking on a new discipline or subdiscipline.',
                remove_subject_aria: 'Remove subject',
                basics: {
                    doi: {
                        label: 'If published, DOI of associated journal article (optional)'
                    },
                    keywords: {
                        label: 'Keywords',
                        paragraph: 'Add keywords to increase discoverability of your preprint'
                    },
                    abstract: {
                        placeholder: 'Add a brief summary of your preprint'
                    },
                    license: {
                        apply_license_title: 'Apply this license to my OSF Project.',
                        apply_license_text: 'Selecting a license for your preprint does not automatically apply the license to your OSF project.'
                    }
                },
                authors: {
                    paragraph: 'Add preprint authors and order them appropriately. All changes to authors are saved immediately. Search looks for authors that have OSF accounts already. Unregistered users can be added and invited to join the preprint.'
                },
                submit: {
                    paragraph: {
                        line1: 'When you share this preprint, it will become publicly accessible via {{name}} Preprints. You will be unable to delete the preprint file, but you can update or modify it. This also creates an OSF project in case you would like to attach other content to your preprint such as supplementary materials, appendices, data, or protocols. If posting this preprint is your first exposure to the OSF, you will receive an email introducing OSF to you.',
                        line2: 'By clicking Share, you confirm that all Contributors agree with sharing this preprint, and that you have the right to share it.'
                    },
                    invalid: {
                        description: 'The following section(s) must be completed before sharing this preprint.',
                        discipline: 'Discipline',
                        basics: 'Basics',
                        upload: 'Upload'
                    }
                },
                update: {
                    paragraph: 'Edits to this preprint will update both the preprint and the OSF project and will become publicly accessible via {{name}} Preprints.'
                },
                save_continue: 'Save and continue'
            },
            could_not_update_title: 'Error updating title. Please try again.',
            error_copying_file: 'Error copying file; please try again.',
            error_accessing_parent_files: 'Error accessing parent files. Please try again.',
            could_not_create_component: 'Could not create component. Please try again.',
            abandoned_preprint_error: 'Error with abandoned preprint.',
            preprint_file_uploaded: 'Preprint file uploaded!',
            preprint_author_added: 'Preprint author added!',
            preprint_author_removed: 'Preprint author removed!',
            preprint_unregistered_author_added: 'Preprint unregistered author added!',
            error_adding_author: 'Could not add author. Please try again.',
            error_adding_unregistered_author: 'Could not add unregistered author. Please try again.',
            error_initiating_preprint: 'Could not initiate preprint. Please try again.',
            doi_error: 'Error saving DOI',
            basics_error: 'Error saving basics fields.',
            disciplines_error: 'Error saving discipline(s).',
            search_contributors_error: 'Could not perform search query.',
            error_completing_preprint: 'Error completing preprint.',
            error_saving_preprint: 'Could not save preprint; please try again later'
        },
        components: {
            'confirm-restart-submit-preprint': {
                title: 'Restart Preprint',
                body: 'Are you sure you want to restart this preprint? Your uploaded file and supplemental information will be deleted.'
            },
            'confirm-share-preprint': {
                title: 'Share Preprint',
                body: 'Once this preprint is made public, you should assume that it will always be public. Even if you delete it, search engines or others may access the files before you do so.'
            },
            'convert-or-copy': {
                organize_language_project: 'You can organize your preprint by storing the file in this project or in its own new component.  If you select \u2018Make a new component\u2019,\n            the preprint file will be stored in a new component inside this project.  If you select \u2018Use the current project\u2019, the preprint file will be stored in this project.\n            If you are unsure, select \u2018Make a new component\u2019.',
                organize_language_component: 'You can organize your preprint by storing the file in this component or in its own new component.  If you select \u2018Make a new component\u2019,\n            the preprint file will be stored in a new component inside this component.  If you select \u2018Use the current component\u2019, the preprint file will be stored in this component.\n            If you are unsure, select \u2018Make a new component\u2019.',
                copy: 'Make a new component',
                convert_project: 'Use the current project',
                convert_component: 'Use the current component',
                create_a_new_component: 'Create a new component',
                continue_with_this_project: 'Continue with this project',
                continue_with_this_component: 'Continue with this component',
                header_convert_confirmation_project: 'Your project details will be saved as you continue to work on this form.',
                header_convert_confirmation_component: 'Your component details will be saved as you continue to work on this form.',
                convert_confirmation_details_project: 'Changes you make on this page are saved immediately.  Create a new component under this project to avoid overwriting its details.',
                convert_confirmation_details_component: 'Changes you make on this page are saved immediately.  Create a new component under this component to avoid overwriting its details.'
            },
            'error-page': {
                email_message: 'If this should not have occurred and the issue persists, please report it to',
                go_to: 'Go to {{brand}}'
            },
            'file-uploader': {
                dropzone_message: 'Drop preprint file here to upload',
                title_placeholder: 'Enter preprint title',
                update_version: 'Update preprint file version.  File must have the same name as the original.',
                could_not_create_project: 'Could not create project. Please try again.',
                could_not_create_component: 'Could not create component. Please try again.',
                could_not_update_title: 'Could not update title. Please try again.',
                version_error: 'This is not a version of the current preprint file.',
                preprint_file_updated: 'Preprint file updated!',
                preprint_file_error: 'Could not set preprint file. Please try again.',
                file_exists_error: 'A file with that name already exists',
                upload_error: 'Upload Failed',
                dropzone_text_override: 'Click or drag another preprint file to replace'
            },
            'preprint-footer-branded': {
                twitter: 'Twitter',
                facebook: 'Facebook',
                instagram: 'Instagram',
                support: 'Support',
                contact: 'Contact'
            },
            'permission-language': {
                arxiv_trademark_license: arxiv_trademark_license,
                arxiv_non_endorsement: arxiv_trademark_license + ' This license should not be understood to indicate endorsement of content on {{provider}} by Cornell University or arXiv.', // eslint-disable-line camelcase
                no_trademark: ''
            },
            'preprint-form-authors': {
                search: {
                    placeholder: 'Search by name'
                },
                unregistered_users: {
                    paragraph: 'Can\'t find the user you\'re looking for?',
                    button: 'Add author by email address'
                },
                results: 'Results',
                yourself: 'Yourself',
                already_added: 'Already added',
                add_email: 'Add author by email',
                authors: {
                    title: 'Author Information',
                    order_instructions: 'Drag and drop authors to change authorship order.',
                    name: 'Name',
                    permissions: 'Permissions',
                    permission_info: 'Permission Information',
                    citation: 'Citation',
                    in_citation: 'In citation',
                    citation_info: 'Citation Information',
                    parent_contributors: 'Add contributors from parent project',
                    remove_author: 'Remove author from authors list'
                },
                remove: 'Remove'
            },
            'preprint-form-body': {
                // Nothing to translate
            },
            'preprint-form-header': {
                changes_saved: 'Changes Saved!',
                file: 'Preprint file',
                title: 'Preprint title',
                location: 'Preprint location',
                click_edit: 'Click to Edit',
                name: {
                    Upload: 'Upload',
                    Discipline: 'Discipline',
                    Basics: 'Basics',
                    Authors: 'Authors',
                    Submit: 'Submit',
                    Update: 'Update',
                    choose_project: 'Choose Project',
                    choose_file: 'Choose File',
                    organize: 'Organize',
                    finalize_upload: 'Finalize Upload',
                    location_of_preprint: 'Preprint Location',
                    title_of_preprint: 'Preprint Title',
                    preprint_file: 'Preprint File'
                }
            },
            'preprint-form-project-select': {
                existing_project_selector: 'The list of projects appearing in the selector are projects and components for which you have admin access.  Registrations are not included here.',
                no_valid_existing_nodes: 'You have no available projects that can be converted into a preprint.  Go back to upload a new preprint.',
                upload_preprint: 'Upload preprint',
                select_existing_file: 'Select existing file as preprint',
                edit_preprint_title_project: 'Edit preprint title (will also become the name of the project)',
                edit_preprint_title_component: 'Edit preprint title (will also become the name of the component)',
                initiate_preprint_process: 'You have selected and organized your preprint file. Clicking "Save and continue" will immediately make changes to your OSF project. You will not be able to delete your Preprint file, but you will be able to update or modify it.',
                edit_organize_section: 'Edits to this preprint will update both the preprint and the OSF project.',
                admin_only: 'You must be the admin of this component to share it.  Please ask the admin of this project to make you an admin so you may share this component.'
            },
            'preprint-form-section': {
                // Nothing to translate
            },
            'preprint-navbar': {
                toggle: 'Toggle navigation'
            },
            'preprint-navbar-branded': {
                my_projects: 'My OSF Projects',
                headline: 'On the OSF'
            },
            'project-chooser': {
                file_upload_create: 'Upload a file and create an OSF project',
                provide_title: 'Please provide a title for your project',
                continue: 'Continue',
                choose_project_component: 'Choose an existing project or component',
                file_upload_existing: 'Upload a file to an existing OSF project',
                choose_project: 'Choose project',
                file_choose_existing: 'Choose a file from an existing OSF project',
                choose_file: 'Choose file'
            },
            'search-preprints': {
                // Nothing to translate
            },
            'search-result': {
                // Nothing to translate
            },
            'share-popup': {
                tweet: 'Tweet',
                post_facebook: 'Post to Facebook',
                share_linkedin: 'Share on LinkedIn',
                send_email: 'Send in email'
            },
            'supplementary-file-browser': {
                primary: 'Primary'
            },
            'taxonomy-top-list': {
                // Nothing to translate
            },
            'taxonomy-tree': {
                // Nothing to translate
            },
            'unregistered-contributor-form': {
                full_name: 'Full Name',
                email: 'Email',
                paragraph: 'We will notify the user that they have been added to your preprint.'

            },
            'validated-input': {
                // Nothing to translate
            }
        }
    };
});
define('collections/locales/es/config', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        rtl: false,

        pluralForm: function pluralForm(count) {
            if (count === 0) {
                return 'cero';
            }
            if (count === 1) {
                return 'uno/a';
            }
            if (count === 2) {
                return 'dos';
            }
            if (count < 5) {
                return 'algunos/as';
            }
            if (count >= 5) {
                return 'muchos/as';
            }
            return 'otros/as';
        }
    };
});
define('collections/locales/es/translations', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var preprints = 'Preprints';
    var brand = 'OSF ' + preprints;
    var arxiv_trademark_license = 'arXiv is a trademark of Cornell University, used under license.'; // eslint-disable-line camelcase


    exports.default = {
        global: {
            share: 'Compartir',
            complete: 'Completar',
            cancel: 'Cancelar',
            discard: 'Descartar cambios',
            back: 'Volver',
            prev: 'Anterior',
            next: 'Siguiente',
            none: 'Ninguno/a',
            abstract: 'Resúmen',
            doi: 'DOI',
            tags: 'Tags',
            search: 'Buscar',
            preprints: preprints,
            brand: brand,
            brand_name: 'OSF',
            provider_brand: '{{name}} ' + preprints,
            add_preprint: 'Agregar un preprint',
            title: 'Título',
            search_preprints: 'Buscar preprints...',
            added_on: 'Agregado en',
            add: 'Agregar',
            restart: 'Reiniciar',
            no_results_found: 'No se encontraron resultados.',
            authors: 'Autores',
            convert_project: 'Los preprints seran reorganizados en el proyecto actual',
            convert_component: 'Los preprints seran reorganizados en el componente actual',
            copy_inside_project: 'Los preprints serán reorganizados en un nuevo componente',
            open_science_framework: 'Open Science Framework',
            license: 'Licencia'
        },
        application: {
            separator: ' | '
        },
        content: {
            header: {
                last_edited: 'Ultima edición'
            },
            share: {
                download: 'Descargar',
                downloads: 'Descargas',
                download_file: 'Descargar archivo',
                download_preprint: 'Descargar preprint'
            },
            see_more: 'ver más',
            see_less: 'ver menos',
            version: 'Versión',
            article_doi: 'DOI del artículo',
            citations: 'Citas',
            disciplines: 'Disciplinas',
            project_button: {
                paragraph: 'El proyecto para este artículo está disponible en el OSF.',
                button: 'Visitar el proyecto',
                edit_preprint: 'Editar el preprint'
            },
            orphan_preprint: 'El usuario ha removido este archivo.',
            private_preprint_warning: 'Este preprint es privado. Hága que pueda ser descubierto haciéndolo',
            public: 'público'
        },
        discover: {
            search: {
                heading: 'Búsqueda en el Archivo de Preprints',
                paragraph: 'utilizando',
                partner: 'Repositorios Asociados',
                placeholder: 'Buscar preprints...'
            },
            sort_by: 'Ordenar por',
            sort_newest_oldest: 'Fecha modificada (reciente al más antiguo)',
            sort_oldest_newest: 'Fecha modificada (antiguo al más reciente)',
            modified_on: 'Modificada por',
            relevance: 'Pertinencia',
            main: {
                active_filters: {
                    heading: 'Activar Filtros',
                    button: 'Limpiar filtros'
                },
                refine: 'Clarificar la búsqueda',
                providers: 'Proveedores',
                subject: 'Asunto',
                box: {
                    paragraph: 'Quiere agregar su propio trabajo de investigación como un preprint?',
                    button: 'Agregar su preprint'
                },
                results: {
                    of: 'de',
                    no_results: 'Trate de ampliar sus términos de búsqueda'
                },
                otherRepositories: 'Otros repositorios de preprint'
            }
        },
        index: {
            header: {
                title: {
                    paragraph: 'La red <span class="f-w-lg">abierta</span> de repositorios de preprints'
                },
                powered_by: 'Utilizando ' + brand,
                search: '{{count}} preprints que pueden ser buscados',
                as_of: 'al día de',
                example: 'Ver un ejemplo',
                or: 'o'
            },
            subjects: {
                heading: 'Ver un catálogo <small>por tema</small>'
            },
            services: {
                top: {
                    heading: 'Servicios de Preprint',
                    paragraph: 'Los servicios proveedores de preprints usan esta infrastructura open source para darle soporte a sus comunidades.'
                },
                bottom: {
                    p1: 'Crée su propio servidor de preprints bajo su propia marca utilizando OSF.',
                    div: {
                        line1: 'Chequee el',
                        linkText1: 'código open source',
                        line2: 'y los',
                        linkText2: 'requerimientos y planes de trabajo',
                        line3: '. Feedback bienvenido!'
                    },
                    contact: 'Contáctenos'
                }
            },
            advisory: {
                heading: 'Grupo Consejero',
                paragraph: 'Nuestro grupo consejero incluye líderes en preprints y comunicación académica'
            }
        },
        'page-not-found': {
            heading: 'Página no encontrada',
            message: 'La página que Ud. está buscando no se encuentra en el servicio de {{brand}}.',
            go_to: 'Ir a {{brand}}'
        },
        'page-forbidden': {
            heading: 'No permitido',
            message: 'El/La usuario/a ha restringido el acceso a esta página.',
            go_to: 'Ir a {{brand}}'
        },
        'resource-deleted': {
            heading: 'Recurso borrado',
            message: 'El/La usuario/a ha borrado este contenido.',
            go_to: 'Ir a {{brand}}'
        },
        submit: {
            add_heading: 'Agregar un Preprint',
            edit_heading: 'Editar un Preprint',
            body: {
                p_add: 'Siga estos simples cinco pasos para agregar su preprint al repositorio de preprints de {{name}}.',
                p_edit: 'Edite las secciones de su preprint más abajo.',
                upload: 'Suba su nuevo preprint',
                connect: 'Conecte el preprint a un proyecto ya existente de la OSF',
                file: 'Archivo preprint',
                title: 'Título del preprint',
                subjects_description: 'Seleccionar una disciplina y una subdisciplina, si fuera relevante. Agregar otras haciendo click en nueva disciplina o subdisciplina.',
                remove_subject_aria: 'Elimine disciplina',
                basics: {
                    doi: {
                        label: 'Si ha sido publicado, DOI del artículo asociado (opcional)'
                    },
                    keywords: {
                        label: 'Palabras clave',
                        paragraph: 'Agregar palabras claves para mejorar las chances de que su preprint sea descubierto'
                    },
                    abstract: {
                        placeholder: 'Agregar un pequeño resúmen a su preprint'
                    },
                    license: {
                        apply_license_title: 'Utilizar esta licencia a mi Proyecto OSF.',
                        apply_license_text: 'Selectionar una licencia para su preprint no aplica de manera automática la licencia a su proyecto OSF.'
                    }
                },
                authors: {
                    paragraph: 'Agregar autores del preprint y ordenarlos de manera apropiada. Todos los cambios a los autores son grabados de manera inmediata. Buscar encuentra autores que ya tienen cuentas de OSF accounts already. Usuarios sin registro puede ser agregados e invitados a unirse al preprint.'
                },
                submit: {
                    paragraph: {
                        line1: 'Cuando Ud. comparta este preprint, estará disponible de manera inmediata vía {{name}} Preprints. No podrá borrar el archivo del preprint, pero puede actualizar o modificarlo. También create un proyecto OSF en caso de que quiera agregar contenido a su preprint como material suplementari, apendices, datos, o protocols. Si postear este preprint es su primera vez en el OSF, Ud. recibirá un email presentandole la OSF.',
                        line2: 'Haciendo clic en Compartir, Ud. confirma que todos colaboradores están de acuerdo en compartir esta preprint, y que tiene el derecho a compartirla. '
                    },
                    invalid: {
                        description: 'Las siguientes seccion(es) deben ser completadas antes de compartir su preprint.',
                        discipline: 'Disciplina',
                        basics: 'Campos básicos',
                        upload: 'Subir'
                    }
                },
                update: {
                    paragraph: 'Ediciones a este preprint serán actualizadas al preprint y al proyecto OSF de manera automática y estarán disponibles públicamente vía {{name}} Preprints.'
                },
                save_continue: 'Grabar y continuar'
            },
            could_not_update_title: 'Error al actualizar el título. Por favor, trate de nuevo.',
            error_copying_file: 'Error al copiar el archivo; por favor, trate de nuevo.',
            error_accessing_parent_files: 'Error al acceder archivos del padre. Por favor, trate de nuevo.',
            could_not_create_component: 'No pudo crearse un componente. Por favor, trate de nuevo.',
            abandoned_preprint_error: 'Error al abandonar el preprint.',
            preprint_file_uploaded: 'Archivo preprint cargado!',
            preprint_author_added: 'Autor de preprint añadido/a!',
            preprint_author_removed: 'Autor de preprint eliminado/a!',
            preprint_unregistered_author_added: 'Autor de preprint no registrado/a añadido/a!',
            error_adding_author: 'No puedo añadir autor. Por favor, trate de nuevo.',
            error_adding_unregistered_author: 'No puedo añadir autor no registrado/a. Por favor, trate de nuevo.',
            error_initiating_preprint: 'No puedo inicializar el preprint. Por favor, trate de nuevo.',
            doi_error: 'Error al grabar el DOI',
            basics_error: 'Error al grabar campos básicos.',
            disciplines_error: 'Error al grabar disciplina(s).',
            search_contributors_error: 'No se pudo realizar la búsqueda.',
            error_completing_preprint: 'Error completando el preprint.',
            error_saving_preprint: 'No se pudo grabar el preprint; por favor, trate de nuevo'
        },
        components: {
            'confirm-restart-submit-preprint': {
                title: 'Volver a empezar el Preprint',
                body: 'Está seguro que desea volver a comenzar este preprint? Su archivo cargado e información suplementaria serán borrados.'
            },
            'confirm-share-preprint': {
                title: 'Compartir el Preprint',
                body: 'Una vez este preprint sea hecho públic, Ud. debe asumir que será siempre público. Aún si Ud. intenta borrarlo, los buscadores y otras personas pueden haber accedido a los archivos antes de que Ud. lo haga.'
            },
            'convert-or-copy': {
                organize_language_project: 'Ud. puede organizar su preprint preprint almacenando el archivo en este proyecto o en su propio componente nuevo.  Si selecciona \u2018Crear un componente nuevo\u2019,\n            el archivo del preprint ser\xE1 guardado en un componente nuevo dentro de este proyecto.  Si selecciona \u2018Usar el proyecto actual\u2019, el archivo del preprint ser\xE1 guardado en este proyecto.\n            Si no est\xE1 seguro, seleccione \u2018Crear un componente nuevo\u2019.',
                organize_language_component: 'Ud. puede organizar su preprint guard\xE1ndo el archivo en este componente o en su propio componente nuevo.  Si selecciona \u2018Crear un nuevo componente\u2019,\n            el archivo del preprint ser\xE1 guardado en un nuevo componente dentro de este proyecto.  Si selecciona \u2018Usar el componente actual\u2019, el archivo del preprint ser\xE1 guardado en este componente.\n            Si no est\xE1 seguro, seleccione \u2018Crear un componente nuevo\u2019.',
                copy: 'Crear un componente nuevo',
                convert_project: 'Usar el proyecto actual',
                convert_component: 'Usar el componente actual',
                create_a_new_component: 'Crear un componente nuevo',
                continue_with_this_project: 'Continuar con este proyecto',
                continue_with_this_component: 'Continuar con este componente',
                header_convert_confirmation_project: 'Los detalles de su proyecto serán grabados mientras que continua trabajando en este formulario.',
                header_convert_confirmation_component: 'Los detalles de su componente serán grabados mientras que continua trabajando en este formulario.',
                convert_confirmation_details_project: 'Los cambios que Ud. haga en esta página serán grabados inmediatamente.  Cree un componente nuevo bajo este proyecto para evitar reescribir sus detalles.',
                convert_confirmation_details_component: 'Los cambios que Ud. haga en esta página serán grabados inmediatamente.  Cree un componente nuevo bajo este componente para evitar reescribir sus detalles.'
            },
            'file-uploader': {
                dropzone_message: 'Haga drag&drop un archivo del preprint que quiera cargar',
                title_placeholder: 'Entre el preprint del título',
                update_version: 'Actualizar la versión del archivo del preprint.  El archivo debe tener el mismo nombre que el original.',
                could_not_create_project: 'No se pudo crear el proyecto. Por favor, trate de nuevo.',
                could_not_create_component: 'No se pudo crear el componente. Por favor, trate de nuevo.',
                could_not_update_title: 'Could not update title. Por favor, trate de nuevo.',
                version_error: 'Esta no es una versión del archivo actual del preprint.',
                preprint_file_updated: 'Archivo del preprint actualizado!',
                preprint_file_error: 'No puedo actualizar el archivo del preprint. Por favor, trate de nuevo.',
                file_exists_error: 'Un archivo con ese nombre ya existe',
                upload_error: 'La carga falló',
                dropzone_text_override: 'Haga click o drag&drop con otro archivo del preprint para ser reemplazado'
            },
            'preprint-footer-branded': {
                twitter: 'Twitter',
                facebook: 'Facebook',
                instagram: 'Instagram',
                support: 'Soporte',
                contact: 'Contacto'
            },
            'preprint-form-authors': {
                search: {
                    placeholder: 'Búsqueda por nombre'
                },
                unregistered_users: {
                    paragraph: '¿No puede encontrar al usuario/a que está buscando?',
                    button: 'Agregar un/a autor/a por dirección de email'
                },
                results: 'Resultados',
                yourself: 'Ud. mismo',
                already_added: 'Ya ha sido agregado',
                add_email: 'Agregue al autor/a por email',
                authors: {
                    title: 'Información sobre el Autor',
                    order_instructions: 'Drag&drop los autores para cambiar el orden de autoría.',
                    name: 'Nombre',
                    permissions: 'Permisos',
                    permission_info: 'Información de Permisos',
                    citation: 'Citas',
                    in_citation: 'En citas',
                    citation_info: 'Información de Citas',
                    parent_contributors: 'Agregar colaboradores del proyecto padre',
                    remove_author: 'Elimina al autor/a'
                },
                remove: 'Eliminar'
            },
            'preprint-form-body': {
                // Nothing to translate
            },
            'preprint-form-header': {
                changes_saved: 'Cambios Guardados!',
                file: 'Archivo preprint',
                title: 'Título del preprint',
                location: 'Ubicación preprint',
                click_edit: 'Cliquear para Editar',
                name: {
                    Upload: 'Cargar',
                    Discipline: 'Disciplinas',
                    Basics: 'Campos Básicos',
                    Authors: 'Autores',
                    Submit: 'Enviar',
                    Update: 'Actualizar',
                    choose_project: 'Elegir un Proyecto',
                    choose_file: 'Elegir un Archivo',
                    organize: 'Organizar',
                    finalize_upload: 'Finalizar la Carga',
                    location_of_preprint: 'Ubicación del Preprint',
                    title_of_preprint: 'Título del Preprint',
                    preprint_file: 'Archivo del Preprint'
                }
            },
            'preprint-form-project-select': {
                existing_project_selector: 'La lista de proyectos que aparecen en el seleccionador de proyectos y componentes para los cuales tiene acceso como administrador.  Registros no están incluídos.',
                no_valid_existing_nodes: 'No tiene proyectos disponibles que puedan ser convertidos en preprints.  Vuelva atrás para cargar un nuevo preprint.',
                upload_preprint: 'Cargar un preprint',
                select_existing_file: 'Seleccionar un archivo existente como un preprint',
                edit_preprint_title_project: 'Editar el título de un preprint (se transformará también en el nombre del proyecto)',
                edit_preprint_title_component: 'Editar el titulo del preprint (se transformará también en el nombre del componente)',
                initiate_preprint_process: 'Ud. ha seleccionado y organizado un archivo del preprint. Cliquear "Grabar y continuar" para cambiar su proyecto OSF de manera inmediata. No podrá borrar el archivo de preprint, pero Ud. podrá actualizarlo y modificarlo.',
                edit_organize_section: 'Cambios a este preprint actualizaran tanto el preprint como el proyecto OSF.',
                admin_only: 'Ud. debe ser el administrador de este componente para compartirlo.  Por favor, pídale al administrador de este proyecto que lo haga también administrador para que pueda compartir este componente.'
            },
            'preprint-form-section': {
                // Nothing to translate
            },
            'preprint-navbar': {
                toggle: 'Cambiar la navegación'
            },
            'preprint-navbar-branded': {
                my_projects: 'Mis Proyectos OSF',
                headline: 'En la OSF'
            },
            'project-chooser': {
                file_upload_create: 'Cargar un archivo y crear un proyecto OSF',
                provide_title: 'Por favor, provea el título para su proyecto',
                continue: 'Continuar',
                choose_project_component: 'Elija un proyecto o componente existente',
                file_upload_existing: 'Cargar un archivo a un proyect OSF existente',
                choose_project: 'Elegir proyecto',
                file_choose_existing: 'Elegir un archivo desde un proyecto OSF existente',
                choose_file: 'Elegir archivo'
            },
            'search-preprints': {
                // Nothing to translate
            },
            'search-result': {
                // Nothing to translate
            },
            'error-page': {
                email_message: 'Si ésto no debería haber ocurrido y el problema persiste, por favor reportarlo a',
                go_to: 'Ir a {{brand}}'
            },
            'share-popup': {
                tweet: 'Tuitear',
                post_facebook: 'Publicar en Facebook',
                share_linkedin: 'Compartir en LinkedIn',
                send_email: 'Enviar por email'
            },
            'supplementary-file-browser': {
                primary: 'Primario'
            },
            'permission-language': {
                arxiv_trademark_license: arxiv_trademark_license,
                arxiv_non_endorsement: arxiv_trademark_license + ' This license should not be understood to indicate endorsement of content on {{provider}} by Cornell University or arXiv.', // eslint-disable-line camelcase
                no_trademark: ''
            },
            'taxonomy-top-list': {
                // Nothing to translate
            },
            'taxonomy-tree': {
                // Nothing to translate
            },
            'unregistered-contributor-form': {
                full_name: 'Nombre Completo',
                email: 'Email',
                paragraph: 'Le notificaremos al usuario que han sido agregados al preprint.'

            },
            'validated-input': {
                // Nothing to translate
            }
        }
    };
});
define('collections/metrics-adapters/keen', ['exports', 'ember-osf/metrics-adapters/keen'], function (exports, _keen) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _keen.default;
    }
  });
});
define('collections/mixins/adapter-fetch', ['exports', 'ember-fetch/mixins/adapter-fetch'], function (exports, _adapterFetch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _adapterFetch.default;
    }
  });
});
define('collections/mixins/commentable', ['exports', 'ember-osf/mixins/commentable'], function (exports, _commentable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _commentable.default;
    }
  });
});
define('collections/mixins/host-app-name', ['exports', 'ember-osf/mixins/host-app-name'], function (exports, _hostAppName) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hostAppName.default;
    }
  });
});
define('collections/mixins/keen-tracker', ['exports', 'ember-osf/mixins/keen-tracker', 'npm:js-md5', 'ember-get-config', 'npm:lodash/get', 'npm:js-cookie', 'npm:keen-tracking'], function (exports, _keenTracker, _npmJsMd, _emberGetConfig, _get2, _npmJsCookie, _npmKeenTracking) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _keenTracker.default;
    }
  });
});
define('collections/mixins/osf-token-login-controller', ['exports', 'ember-osf/mixins/osf-token-login-controller'], function (exports, _osfTokenLoginController) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _osfTokenLoginController.default;
    }
  });
});
define('collections/mixins/osf-token-login-route', ['exports', 'ember-osf/mixins/osf-token-login-route'], function (exports, _osfTokenLoginRoute) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _osfTokenLoginRoute.default;
    }
  });
});
define('collections/models/action', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Model = _emberData.default.Model,
        attr = _emberData.default.attr,
        hasMany = _emberData.default.hasMany,
        belongsTo = _emberData.default.belongsTo;
    exports.default = Model.extend({
        type: attr('string'),
        conditions: hasMany('condition'),
        inputParameters: hasMany('parameter'),
        outputParameters: belongsTo('parameter')
    });
});
define('collections/models/application', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Model = _emberData.default.Model;
    exports.default = Model.extend({});
});
define('collections/models/citation', ['exports', 'ember-osf/models/citation'], function (exports, _citation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _citation.default;
    }
  });
});
define('collections/models/collection-base', ['exports', 'ember-data', 'ember'], function (exports, _emberData, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Model = _emberData.default.Model,
        attr = _emberData.default.attr,
        hasMany = _emberData.default.hasMany,
        belongsTo = _emberData.default.belongsTo;
    exports.default = Model.extend({
        title: attr('string'),
        description: attr('string'),
        tags: attr('string'),
        dateCreated: attr('date'),
        dateUpdated: attr('date'),
        settings: attr(),
        createdBy: belongsTo('user'),
        groups: hasMany('group'),
        items: hasMany('item'),
        list: _ember.default.computed.union('groupsComputed', 'items'),
        groupsComputed: _ember.default.computed('groups', function () {
            var groups = this.get('groups');
            groups.forEach(function (group) {
                group.set('type', 'group');
            });
            return groups;
        })
    });
});
define('collections/models/collection', ['exports', 'collections/models/collection-base'], function (exports, _collectionBase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _collectionBase.default.extend({});
});
define('collections/models/comment-report', ['exports', 'ember-osf/models/comment-report'], function (exports, _commentReport) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _commentReport.default;
    }
  });
});
define('collections/models/comment', ['exports', 'ember-osf/models/comment'], function (exports, _comment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _comment.default;
    }
  });
});
define('collections/models/condition', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Model = _emberData.default.Model,
        attr = _emberData.default.attr,
        hasMany = _emberData.default.hasMany,
        belongsTo = _emberData.default.belongsTo;
    exports.default = Model.extend({
        all: hasMany('condition', { inverse: null }),
        any: hasMany('condition', { inverse: null }),
        none: hasMany('condition', { inverse: null }),
        parameter: belongsTo('parameter'),
        value: attr('string'),
        properties: attr()
    });
});
define('collections/models/contributor', ['exports', 'ember-osf/models/contributor'], function (exports, _contributor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contributor.default;
    }
  });
});
define('collections/models/draft-registration', ['exports', 'ember-osf/models/draft-registration'], function (exports, _draftRegistration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _draftRegistration.default;
    }
  });
});
define('collections/models/file-provider', ['exports', 'ember-osf/models/file-provider'], function (exports, _fileProvider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fileProvider.default;
    }
  });
});
define('collections/models/file-version', ['exports', 'ember-osf/models/file-version'], function (exports, _fileVersion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fileVersion.default;
    }
  });
});
define('collections/models/file', ['exports', 'ember-osf/models/file'], function (exports, _file) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _file.default;
    }
  });
});
define('collections/models/group', ['exports', 'ember-data', 'ember'], function (exports, _emberData, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Model = _emberData.default.Model,
        attr = _emberData.default.attr,
        hasMany = _emberData.default.hasMany,
        belongsTo = _emberData.default.belongsTo;
    exports.default = Model.extend({
        title: attr('string'),
        description: attr('string'),
        tags: attr('string'),
        dateCreated: attr('date'),
        dateUpdated: attr('date'),
        collection: belongsTo('collection-base'),
        createdBy: belongsTo('user'),
        items: hasMany('item'),
        list: _ember.default.computed.alias('items')
    });
});
define('collections/models/institution', ['exports', 'ember-osf/models/institution'], function (exports, _institution) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _institution.default;
    }
  });
});
define('collections/models/item', ['exports', 'ember-data', 'ember', 'moment'], function (exports, _emberData, _ember, _moment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Model = _emberData.default.Model,
        attr = _emberData.default.attr,
        belongsTo = _emberData.default.belongsTo;
    exports.default = Model.extend({
        source_id: attr('string'),
        title: attr('string'),
        description: attr('string'),
        type: attr('string'),
        status: attr('string'),
        url: attr('string'),
        metadata: attr('string'),
        dateAdded: attr('date'),
        dateUpdated: attr('date'),
        location: attr('string'),
        startTime: attr('date'),
        endTime: attr('date'),
        collection: belongsTo('collection-base'),
        group: belongsTo('group'),
        createdBy: belongsTo('user'),
        fileLink: attr('string'),
        startTimeFormatted: _ember.default.computed('startTime', function () {
            var st = (0, _moment.default)(this.get('startTime'));
            return st.format('h:mmA');
        }),
        endTimeFormatted: _ember.default.computed('startTime', function () {
            var st = (0, _moment.default)(this.get('endTime'));
            return st.format('h:mmA');
        }),
        scheduleFilterText: _ember.default.computed('title', 'location', 'startTimeFormatted', function () {
            return this.get('title') + this.get('location') + this.get('startTimeFormatted') + this.get('userName');
        })
    });
});
define('collections/models/license', ['exports', 'ember-osf/models/license'], function (exports, _license) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _license.default;
    }
  });
});
define('collections/models/log', ['exports', 'ember-osf/models/log'], function (exports, _log) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _log.default;
    }
  });
});
define('collections/models/meeting', ['exports', 'ember-data', 'collections/models/collection-base'], function (exports, _emberData, _collectionBase) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _collectionBase.default.extend({
        location: _emberData.default.attr('string'),
        address: _emberData.default.attr('string'),
        startDate: _emberData.default.attr('date'),
        endDate: _emberData.default.attr('date'),
        category: _emberData.default.attr('string')
    });
});
define('collections/models/metaschema', ['exports', 'ember-osf/models/metaschema'], function (exports, _metaschema) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _metaschema.default;
    }
  });
});
define('collections/models/node-link', ['exports', 'ember-osf/models/node-link'], function (exports, _nodeLink) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nodeLink.default;
    }
  });
});
define('collections/models/node', ['exports', 'ember-osf/models/node'], function (exports, _node) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _node.default;
    }
  });
});
define('collections/models/osf-model', ['exports', 'ember-osf/models/osf-model'], function (exports, _osfModel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _osfModel.default;
    }
  });
});
define('collections/models/parameter-mapping', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Model = _emberData.default.Model,
        attr = _emberData.default.attr,
        belongsTo = _emberData.default.belongsTo;
    exports.default = Model.extend({
        mappingKey: attr('string'),
        widget: belongsTo('widget', {
            inverse: 'parameterMapping'
        }),
        parameter: belongsTo('parameter', {
            inverse: null
        })
    });
});
define('collections/models/parameter', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Model = _emberData.default.Model,
        attr = _emberData.default.attr;
    exports.default = Model.extend({
        name: attr('string'),
        value: attr(),
        properties: attr() // Property hash to store additional information about a parameter.
    });
});
define('collections/models/preprint-provider', ['exports', 'ember-osf/models/preprint-provider'], function (exports, _preprintProvider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _preprintProvider.default;
    }
  });
});
define('collections/models/preprint', ['exports', 'ember-osf/models/preprint'], function (exports, _preprint) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _preprint.default;
    }
  });
});
define('collections/models/registration', ['exports', 'ember-osf/models/registration'], function (exports, _registration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _registration.default;
    }
  });
});
define('collections/models/section', ['exports', 'ember', 'ember-data'], function (exports, _ember, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var computed = _ember.default.computed;
    var Model = _emberData.default.Model,
        attr = _emberData.default.attr,
        hasMany = _emberData.default.hasMany;
    exports.default = Model.extend({
        label: attr('string'),
        description: attr('string'),
        widgets: hasMany('widget'),
        divId: computed('label', function () {
            return this.get('label').dasherize();
        })
    });
});
define('collections/models/taxonomy', ['exports', 'ember-osf/models/taxonomy'], function (exports, _taxonomy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _taxonomy.default;
    }
  });
});
define('collections/models/user', ['exports', 'ember-data', 'ember'], function (exports, _emberData, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Model = _emberData.default.Model,
        attr = _emberData.default.attr;
    exports.default = Model.extend({
        username: attr('string'),
        firstName: attr('string'),
        lastName: attr('string'),
        fullName: attr('string'),
        gravatar: attr('string'),
        computedFullName: _ember.default.computed('firstName', 'lastName', function () {
            return this.get('firstName') + ' ' + this.get('lastName');
        })
    });
});
define('collections/models/widget', ['exports', 'ember', 'ember-data'], function (exports, _ember, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var computed = _ember.default.computed;
    var Model = _emberData.default.Model,
        attr = _emberData.default.attr,
        belongsTo = _emberData.default.belongsTo,
        hasMany = _emberData.default.hasMany;
    exports.default = Model.extend({

        label: attr('string'),
        description: attr('string'),
        widgetType: attr('string'),
        defaultValue: attr('string'),

        parameterMapping: hasMany('parameter-mapping', {
            inverse: 'widget'
        }),

        parameters: _ember.default.computed('parameterMapping.@each', function () {
            return this.get('parameterMapping').reduce(function (parameters, mapping) {
                parameters[mapping.get('mappingKey')] = mapping.get('parameter');
                return parameters;
            }, {});
        })

    });
});
define('collections/models/wiki', ['exports', 'ember-osf/models/wiki'], function (exports, _wiki) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _wiki.default;
    }
  });
});
define('collections/models/workflow', ['exports', 'ember', 'ember-data'], function (exports, _ember, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Model = _emberData.default.Model,
        attr = _emberData.default.attr,
        hasMany = _emberData.default.hasMany;
    exports.default = Model.extend({
        title: attr('string'),
        description: attr('string'),
        sections: hasMany('section', {
            async: false,
            inverse: null
        }),
        actions: hasMany('action', {
            async: false,
            inverse: null
        }),
        initialParameters: hasMany('parameter', {
            async: false,
            inverse: null
        })
    });
});
define('collections/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('collections/router', ['exports', 'ember', 'collections/config/environment'], function (exports, _ember, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    var Router = _ember.default.Router.extend({
        location: _environment.default.locationType,
        rootURL: _environment.default.rootURL
    });

    // eslint-disable-next-line array-callback-return
    Router.map(function () {
        this.route('index', { path: '/' });
        this.route('meetings'); // home page
        this.route('collection', { path: 'collection/:collection_id' }, function () {
            this.route('item', { path: 'item/:item_id' });
            this.route('group', { path: 'group/:group_id' }, function () {
                this.route('item', { path: 'item/:group_item_id' });
            });
            this.route('add');
            this.route('search');
            this.route('browse');
            this.route('edit');
        });
        this.route('create');
        this.route('not-found', { path: '/*path' });
        this.route('create_meeting');
    });

    exports.default = Router;
});
define('collections/routes/application', ['exports', 'ember', 'ember-simple-auth/mixins/application-route-mixin'], function (exports, _ember, _applicationRouteMixin) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Route.extend(_applicationRouteMixin.default, {
        session: _ember.default.inject.service(),

        beforeModel: function beforeModel() {
            var session = this.get('session');
            if (!session.get('isAuthenticated')) {
                session.authenticate('authenticator:osf-token', false).catch(function () {});
            }
        }
    });
});
define('collections/routes/collection', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Route.extend({
        model: function model(params) {
            var _this = this;

            return this.store.findRecord('collection', params.collection_id).then(function (data) {
                return data;
            }).catch(function () {
                return _this.store.findRecord('meeting', params.collection_id).then(function (data) {
                    return data;
                }).catch(function () {
                    _this.transitionTo('/not-found');
                });
            });
        }
    });
});
define('collections/routes/collection/add', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Route.extend({
        panelActions: _ember.default.inject.service('panelActions'),
        model: function model() {
            var collectionSettings = this.modelFor('collection').get('settings');
            var collectionType = collectionSettings.collection_type;
            return _ember.default.RSVP.hash({
                workflow: this.store.findRecord('workflow', collectionType),
                collection: this.modelFor('collection')
            });
        },
        setupController: function setupController(controller, model) {
            controller.set('workflow', model.workflow);
            controller.set('collection', model.collection);
        }
    });
});
define('collections/routes/collection/browse', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({});
});
define('collections/routes/collection/edit', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({});
});
define('collections/routes/collection/group', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Route.extend({
        model: function model(params) {
            return this.get('store').findRecord('group', params.group_id).then(function (group) {
                return group;
            });
        }
    });
});
define('collections/routes/collection/group/index', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({});
});
define('collections/routes/collection/group/item', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Route.extend({
        model: function model(params) {
            return this.store.findRecord('item', params.group_item_id);
        }
    });
});
define('collections/routes/collection/index', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({});
});
define('collections/routes/collection/item', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Route.extend({
        model: function model(params) {
            return this.store.findRecord('item', params.item_id);
        }
    });
});
define('collections/routes/collection/search', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({});
});
define('collections/routes/create-meeting', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({});
});
define('collections/routes/create', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({});
});
define('collections/routes/index', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Route.extend({
        model: function model() {
            return this.store.query('collection', {
                page: 1
            }).then(function (data) {
                return data;
            });
        }
    });
});
define('collections/routes/meetings', ['exports', 'ember'], function (exports, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _ember.default.Route.extend({
        session: _ember.default.inject.service(),
        model: function model() {
            return this.store.query('meeting', {
                page: 1
            }).then(function (data) {
                return data;
            });
        }
    });
});
define('collections/routes/not-found', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({});
});
define('collections/serializers/action', ['exports', 'ember', 'ember-data', 'collections/models/workflow'], function (exports, _ember, _emberData, _workflow) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var JSONSerializer = _emberData.default.JSONSerializer;
    exports.default = JSONSerializer.extend(_emberData.default.EmbeddedRecordsMixin, {

        attrs: {
            sections: {
                embedded: 'always'
            }
        }

    });
});
define('collections/serializers/application', ['exports', 'ember', 'ember-data'], function (exports, _ember, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var JSONAPISerializer = _emberData.default.JSONAPISerializer;
    exports.default = JSONAPISerializer.extend({
        keyForAttribute: function keyForAttribute(key) {
            return _ember.default.String.underscore(key);
        },
        keyForRelationship: function keyForRelationship(key) {
            return _ember.default.String.underscore(key);
        }
    });
});
define('collections/serializers/citation', ['exports', 'ember-osf/serializers/citation'], function (exports, _citation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _citation.default;
    }
  });
});
define('collections/serializers/collection', ['exports', 'collections/serializers/application'], function (exports, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend({});
});
define('collections/serializers/comment-report', ['exports', 'ember-osf/serializers/comment-report'], function (exports, _commentReport) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _commentReport.default;
    }
  });
});
define('collections/serializers/comment', ['exports', 'ember-osf/serializers/comment'], function (exports, _comment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _comment.default;
    }
  });
});
define('collections/serializers/condition', ['exports', 'ember', 'ember-data', 'collections/models/workflow'], function (exports, _ember, _emberData, _workflow) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var JSONSerializer = _emberData.default.JSONSerializer;
    exports.default = JSONSerializer.extend(_emberData.default.EmbeddedRecordsMixin, {

        attrs: {
            sections: {
                embedded: 'always'
            }
        }

    });
});
define('collections/serializers/contributor', ['exports', 'ember-osf/serializers/contributor'], function (exports, _contributor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contributor.default;
    }
  });
});
define('collections/serializers/draft-registration', ['exports', 'ember-osf/serializers/draft-registration'], function (exports, _draftRegistration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _draftRegistration.default;
    }
  });
});
define('collections/serializers/file-contents', ['exports', 'ember-osf/serializers/file-contents'], function (exports, _fileContents) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fileContents.default;
    }
  });
});
define('collections/serializers/file-provider', ['exports', 'ember-osf/serializers/file-provider'], function (exports, _fileProvider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fileProvider.default;
    }
  });
});
define('collections/serializers/file-version', ['exports', 'ember-osf/serializers/file-version'], function (exports, _fileVersion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fileVersion.default;
    }
  });
});
define('collections/serializers/file', ['exports', 'ember-osf/serializers/file'], function (exports, _file) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _file.default;
    }
  });
});
define('collections/serializers/institution', ['exports', 'ember-osf/serializers/institution'], function (exports, _institution) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _institution.default;
    }
  });
});
define('collections/serializers/item', ['exports', 'collections/serializers/application'], function (exports, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend({});
});
define('collections/serializers/license', ['exports', 'ember-osf/serializers/license'], function (exports, _license) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _license.default;
    }
  });
});
define('collections/serializers/linked-node', ['exports', 'ember-osf/serializers/linked-node'], function (exports, _linkedNode) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkedNode.default;
    }
  });
});
define('collections/serializers/metaschema', ['exports', 'ember-osf/serializers/metaschema'], function (exports, _metaschema) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _metaschema.default;
    }
  });
});
define('collections/serializers/node-link', ['exports', 'ember-osf/serializers/node-link'], function (exports, _nodeLink) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nodeLink.default;
    }
  });
});
define('collections/serializers/node', ['exports', 'ember-osf/serializers/node'], function (exports, _node) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _node.default;
    }
  });
});
define('collections/serializers/osf-serializer', ['exports', 'ember-osf/serializers/osf-serializer'], function (exports, _osfSerializer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _osfSerializer.default;
    }
  });
});
define('collections/serializers/parameter-mapping', ['exports', 'ember', 'ember-data', 'collections/models/workflow'], function (exports, _ember, _emberData, _workflow) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var JSONSerializer = _emberData.default.JSONSerializer;
    exports.default = JSONSerializer.extend(_emberData.default.EmbeddedRecordsMixin, {

        attrs: {
            parameter: {
                embedded: 'always'
            }
        }

    });
});
define('collections/serializers/parameter', ['exports', 'ember', 'ember-data', 'collections/models/workflow'], function (exports, _ember, _emberData, _workflow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var JSONSerializer = _emberData.default.JSONSerializer;
  exports.default = JSONSerializer.extend(_emberData.default.EmbeddedRecordsMixin, {});
});
define('collections/serializers/preprint-provider', ['exports', 'ember-osf/serializers/preprint-provider'], function (exports, _preprintProvider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _preprintProvider.default;
    }
  });
});
define('collections/serializers/preprint', ['exports', 'ember-osf/serializers/preprint'], function (exports, _preprint) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _preprint.default;
    }
  });
});
define('collections/serializers/registration', ['exports', 'ember-osf/serializers/registration'], function (exports, _registration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _registration.default;
    }
  });
});
define('collections/serializers/section', ['exports', 'ember', 'ember-data', 'collections/models/workflow'], function (exports, _ember, _emberData, _workflow) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var JSONSerializer = _emberData.default.JSONSerializer;
    exports.default = JSONSerializer.extend(_emberData.default.EmbeddedRecordsMixin, {

        attrs: {
            widgets: {
                embedded: 'always'
            }
        }

    });
});
define('collections/serializers/taxonomy', ['exports', 'ember-osf/serializers/taxonomy'], function (exports, _taxonomy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _taxonomy.default;
    }
  });
});
define('collections/serializers/user', ['exports', 'collections/serializers/application'], function (exports, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend({});
});
define('collections/serializers/widget', ['exports', 'ember', 'ember-data', 'collections/models/workflow'], function (exports, _ember, _emberData, _workflow) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var JSONSerializer = _emberData.default.JSONSerializer;


    function uuid() {
        var uuid = "",
            i,
            random;
        for (i = 0; i < 32; i++) {
            random = Math.random() * 16 | 0;

            if (i == 8 || i == 12 || i == 16 || i == 20) {
                uuid += "-";
            }
            uuid += (i == 12 ? 4 : i == 16 ? random & 3 | 8 : random).toString(16);
        }
        return uuid;
    }

    exports.default = JSONSerializer.extend(_emberData.default.EmbeddedRecordsMixin, {

        normalize: function normalize(modelClass, resourceHash, prop) {
            console.log(modelClass);
            console.log(resourceHash);
            if (resourceHash.parameters) {
                resourceHash.parameterMapping = Object.keys(resourceHash.parameters).map(function (key) {
                    return {
                        id: uuid(),
                        mappingKey: key,
                        widget: resourceHash.id,
                        parameter: resourceHash.parameters[key]
                    };
                });
            }
            return this._super(modelClass, resourceHash, prop);
        },

        attrs: {
            parameterMapping: {
                embedded: 'always'
            }
        }

    });
});
define('collections/serializers/wiki', ['exports', 'ember-osf/serializers/wiki'], function (exports, _wiki) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _wiki.default;
    }
  });
});
define('collections/serializers/workflow', ['exports', 'ember', 'ember-data', 'collections/models/workflow'], function (exports, _ember, _emberData, _workflow) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var JSONSerializer = _emberData.default.JSONSerializer;
    exports.default = JSONSerializer.extend(_emberData.default.EmbeddedRecordsMixin, {

        attrs: {
            sections: {
                embedded: 'always'
            }
        },

        isSuccess: function isSuccess(status) {
            if (status >= 200 && status < 300) return true;
            if (status === 304) return true;
            return false;
        }
    });
});
define('collections/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('collections/services/cookies', ['exports', 'ember-cookies/services/cookies'], function (exports, _cookies) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _cookies.default;
});
define('collections/services/current-user', ['exports', 'ember-osf/services/current-user'], function (exports, _currentUser) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _currentUser.default;
    }
  });
});
define('collections/services/dependency-checker', ['exports', 'ember', 'collections/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Service.extend({

    hasLiquidFire: _ember.default.computed('', function () {
      return _environment.default['ember-collapsible-panel'].hasLiquidFire;
    })

  });
});
define('collections/services/file-manager', ['exports', 'ember-osf/services/file-manager'], function (exports, _fileManager) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fileManager.default;
    }
  });
});
define('collections/services/i18n', ['exports', 'ember-i18n/services/i18n'], function (exports, _i18n) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _i18n.default;
    }
  });
});
define('collections/services/moment', ['exports', 'ember', 'collections/config/environment', 'ember-moment/services/moment'], function (exports, _ember, _environment, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _moment.default.extend({
    defaultFormat: _ember.default.get(_environment.default, 'moment.outputFormat')
  });
});
define('collections/services/panel-actions', ['exports', 'ember-collapsible-panel/services/panel-actions'], function (exports, _panelActions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _panelActions.default;
    }
  });
});
define('collections/services/session', ['exports', 'ember-simple-auth/services/session'], function (exports, _session) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _session.default;
});
define('collections/services/theme', ['exports', 'ember', 'ember-get-config'], function (exports, _ember, _emberGetConfig) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Service = _ember.default.Service,
        inject = _ember.default.inject,
        computed = _ember.default.computed;
    exports.default = Service.extend({
        store: inject.service(),
        session: inject.service(),

        // If we're using a provider domain
        isDomain: false,

        // The id of the current provider
        id: _emberGetConfig.default.PREPRINTS.defaultProvider,

        currentLocation: null,

        // The provider object
        provider: computed('id', function () {
            var id = this.get('id');

            if (!id) {
                return;
            }

            return this.get('store').findRecord('preprint-provider', id);
        }),

        // If we're using a branded provider
        isProvider: computed('id', function () {
            return this.get('id') !== 'osf';
        }),

        // If we're using a branded provider and not
        // under a branded domain (e.g. /preprints/<provider>)
        isSubRoute: computed('isProvider', 'isDomain', function () {
            return this.get('isProvider') && !this.get('isDomain');
        }),

        pathPrefix: computed('isProvider', 'isDomain', 'id', function () {
            var pathPrefix = '/';

            if (!this.get('isDomain')) {
                pathPrefix += 'preprints/';

                if (this.get('isProvider')) {
                    pathPrefix += this.get('id') + '/';
                }
            }

            return pathPrefix;
        }),

        // Needed for the content route
        guidPathPrefix: computed('isSubRoute', 'id', function () {
            var pathPrefix = '/';

            if (this.get('isSubRoute')) {
                pathPrefix += 'preprints/' + this.get('id') + '/';
            }

            return pathPrefix;
        }),

        // The URL for the branded stylesheet
        stylesheet: computed('id', function () {
            var id = this.get('id');

            if (!id) {
                return;
            }

            var prefix = this.get('isDomain') ? '' : '/preprints';
            var suffix = _emberGetConfig.default.ASSET_SUFFIX ? '-' + _emberGetConfig.default.ASSET_SUFFIX : '';
            return prefix + '/assets/css/' + id + suffix + '.css';
        }),

        // The logo object for social sharing
        logoSharing: computed('id', function () {
            var id = this.get('id');

            var logo = _emberGetConfig.default.PREPRINTS.providers.find(function (provider) {
                return provider.id === id;
            }).logoSharing;

            logo.path = '/preprints' + logo.path;

            return logo;
        }),

        // The url to redirect users to sign up to
        signupUrl: computed('id', function () {
            var query = _ember.default.$.param({
                campaign: this.get('id') + '-preprints',
                next: window.location.href
            });

            return _emberGetConfig.default.OSF.url + 'register?' + query;
        }),

        redirectUrl: computed('currentLocation', function () {
            return this.get('currentLocation');
        }),

        // The translation key for the provider's permission language
        permissionLanguage: computed('id', function () {
            var id = this.get('id');

            return _emberGetConfig.default.PREPRINTS.providers.find(function (provider) {
                return provider.id === id;
            }).permissionLanguage;
        })
    });
});
define('collections/services/toast', ['exports', 'ember-toastr/services/toast'], function (exports, _toast) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toast.default;
    }
  });
});
define('collections/session-stores/application', ['exports', 'ember-simple-auth/session-stores/adaptive'], function (exports, _adaptive) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _adaptive.default.extend();
});
define("collections/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "2bAAVPIE", "block": "{\"statements\":[[1,[33,[\"osf-navbar\"],null,[[\"loginAction\",\"hideSearch\"],[[33,[\"action\"],[[28,[null]],\"login\"],null],true]]],false],[0,\"\\n\"],[6,[\"unless\"],[[28,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"coll-alert\"],[13],[0,\" Collections demo requires signing in to an osf account. Sign in or sign up above. \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/application.hbs" } });
});
define("collections/templates/collection", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Z6jItPDq", "block": "{\"statements\":[[1,[33,[\"collection-nav\"],null,[[\"model\"],[[28,[\"model\"]]]]],false],[0,\"\\n\"],[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/collection.hbs" } });
});
define("collections/templates/collection/add", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "UuZ5gRcW", "block": "{\"statements\":[[11,\"h1\",[]],[15,\"class\",\"form-banner\"],[13],[0,\"Add \"],[1,[28,[\"workflow\",\"title\"]],false],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n\\n\"],[6,[\"if\"],[[33,[\"eq\"],[[28,[\"workflow\",\"submissionFormType\"]],\"Website\"],null]],null,{\"statements\":[[0,\"\\n        \"],[1,[33,[\"add-website\"],null,[[\"model\",\"transition\"],[[28,[\"model\"]],[33,[\"action\"],[[28,[null]],\"transition\"],null]]]],false],[0,\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[0,\"\\n\"],[6,[\"each\"],[[28,[\"workflow\",\"sections\"]]],null,{\"statements\":[[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"section\"],[13],[0,\"\\n                \"],[11,\"div\",[]],[15,\"class\",\"label\"],[13],[0,\"\\n                    \"],[1,[28,[\"section\",\"label\"]],false],[0,\"\\n                \"],[14],[0,\"\\n                \"],[11,\"div\",[]],[15,\"class\",\"content\"],[13],[0,\"\\n\\n\"],[6,[\"each\"],[[28,[\"section\",\"widgets\"]]],null,{\"statements\":[[0,\"                        \"],[1,[33,[\"component\"],[[28,[\"widget\",\"widgetType\"]]],[[\"widget\",\"collection\"],[[28,[\"widget\"]],[28,[\"collection\"]]]]],false],[0,\"\\n\"]],\"locals\":[\"widget\"]},null],[0,\"                \"],[14],[0,\"\\n            \"],[14],[0,\"\\n\\n\"]],\"locals\":[\"section\"]},null],[0,\"\\n\"]],\"locals\":[]}],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/collection/add.hbs" } });
});
define("collections/templates/collection/browse", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Xi37LvRG", "block": "{\"statements\":[[1,[33,[\"browse-list\"],null,[[\"model\"],[[28,[\"model\"]]]]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/collection/browse.hbs" } });
});
define("collections/templates/collection/edit", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "HCvqPXlR", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"coll-add-layer p-xl\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"editMode\"]]],null,{\"statements\":[[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"form\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n            \"],[11,\"label\",[]],[15,\"for\",\"collectionTitle\"],[13],[0,\"Title\"],[14],[0,\"\\n            \"],[1,[33,[\"input\"],null,[[\"class\",\"value\",\"placeholder\",\"id\"],[\"form-control\",[28,[\"modelCache\",\"title\"]],\"Enter title\",\"collectionTitle\"]]],false],[0,\"\\n        \"],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n            \"],[11,\"label\",[]],[15,\"for\",\"collectionDescription\"],[13],[0,\"Description\"],[14],[0,\"\\n            \"],[1,[33,[\"textarea\"],null,[[\"class\",\"value\",\"id\"],[\"form-control\",[28,[\"modelCache\",\"description\"]],\"collectionDescription\"]]],false],[0,\"\\n        \"],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n            \"],[11,\"label\",[]],[15,\"for\",\"collectionTags\"],[13],[0,\"Tags\"],[14],[0,\"\\n            \"],[1,[33,[\"input\"],null,[[\"class\",\"value\",\"placeholder\",\"id\"],[\"form-control\",[28,[\"modelCache\",\"tags\"]],\"Enter comma separated tags\",\"collectionTags\"]]],false],[0,\"\\n        \"],[14],[0,\"\\n\"],[6,[\"if\"],[[33,[\"eq\"],[[28,[\"model\",\"settings\",\"collection_type\"]],\"Meeting\"],null]],null,{\"statements\":[[0,\"            \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n                \"],[11,\"label\",[]],[15,\"for\",\"location\"],[13],[0,\"Location\"],[14],[0,\"\\n                \"],[1,[33,[\"input\"],null,[[\"class\",\"value\",\"placeholder\",\"id\"],[\"form-control\",[28,[\"modelCache\",\"location\"]],\"Enter location\",\"location\"]]],false],[0,\"\\n            \"],[14],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n                \"],[11,\"label\",[]],[15,\"for\",\"address\"],[13],[0,\"Address\"],[14],[0,\"\\n                \"],[1,[33,[\"input\"],null,[[\"class\",\"value\",\"placeholder\",\"id\"],[\"form-control\",[28,[\"modelCache\",\"address\"]],\"Enter address\",\"address\"]]],false],[0,\"\\n            \"],[14],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n                \"],[11,\"label\",[]],[15,\"for\",\"startDate\"],[13],[0,\"Start Date\"],[14],[0,\"\\n                \"],[1,[33,[\"input\"],null,[[\"class\",\"value\",\"placeholder\",\"id\"],[\"form-control\",[28,[\"modelCache\",\"startDate\"]],\"Enter start date\",\"startDate\"]]],false],[0,\"\\n            \"],[14],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n                \"],[11,\"label\",[]],[15,\"for\",\"endDate\"],[13],[0,\"End Date\"],[14],[0,\"\\n                \"],[1,[33,[\"input\"],null,[[\"class\",\"value\",\"placeholder\",\"id\"],[\"form-control\",[28,[\"modelCache\",\"endDate\"]],\"Enter end date\",\"endDate\"]]],false],[0,\"\\n            \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"        \"],[11,\"div\",[]],[15,\"class\",\"form-group\"],[13],[0,\"\\n            \"],[11,\"label\",[]],[15,\"for\",\"collectionSettings\"],[13],[0,\"Settings\"],[14],[0,\"\\n            \"],[1,[33,[\"json-editor\"],null,[[\"json\",\"onChange\"],[[28,[\"modelCache\",\"settings\"]],[33,[\"action\"],[[28,[null]],\"updateCacheSettings\"],null]]]],false],[0,\"\\n        \"],[14],[0,\"\\n\\n        \"],[11,\"div\",[]],[15,\"class\",\"text-right\"],[13],[0,\"\\n            \"],[11,\"button\",[]],[15,\"class\",\"btn btn-default\"],[5,[\"action\"],[[28,[null]],\"cancelEdit\"]],[13],[0,\"Cancel\"],[14],[0,\"\\n            \"],[11,\"button\",[]],[15,\"class\",\"btn btn-success\"],[5,[\"action\"],[[28,[null]],\"saveEdit\"]],[13],[0,\"Save\"],[14],[0,\"\\n        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[0,\"        \"],[11,\"h2\",[]],[13],[1,[28,[\"model\",\"title\"]],false],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"m-b-md\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"model\",\"description\"]]],null,{\"statements\":[[0,\"                \"],[1,[28,[\"model\",\"description\"]],false],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"                \"],[11,\"span\",[]],[15,\"class\",\"text-muted\"],[5,[\"action\"],[[28,[null]],\"showEdit\"]],[13],[0,\"Add description \"],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"        \"],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"m-b-md\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"formattedTags\"]]],null,{\"statements\":[[0,\"                \"],[11,\"span\",[]],[15,\"class\",\"coll-item-tag\"],[13],[1,[28,[\"tag\"]],false],[14],[0,\"\\n\"]],\"locals\":[\"tag\"]},null],[0,\"        \"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"Type: \"],[1,[28,[\"model\",\"settings\",\"collection_type\"]],false],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"Created by: \"],[1,[28,[\"model\",\"createdBy\",\"firstName\"]],false],[0,\" \"],[1,[28,[\"model\",\"createdBy\",\"lastName\"]],false],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"Date created: \"],[1,[28,[\"model\",\"dateCreated\"]],false],[0,\" \"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"Date updated : \"],[1,[28,[\"model\",\"dateUpdated\"]],false],[14],[0,\"\\n\"],[6,[\"if\"],[[33,[\"eq\"],[[28,[\"model\",\"settings\",\"collection_type\"]],\"Meeting\"],null]],null,{\"statements\":[[0,\"            \"],[11,\"p\",[]],[13],[0,\"Location: \"],[1,[28,[\"model\",\"location\"]],false],[14],[0,\"\\n            \"],[11,\"p\",[]],[13],[0,\"Address: \"],[1,[28,[\"model\",\"address\"]],false],[14],[0,\"\\n            \"],[11,\"p\",[]],[13],[0,\"Start Date: \"],[1,[28,[\"model\",\"startDate\"]],false],[14],[0,\"\\n            \"],[11,\"p\",[]],[13],[0,\"End Date: \"],[1,[28,[\"model\",\"endDate\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"        \"],[11,\"p\",[]],[13],[0,\"Settings: \"],[1,[26,[\"settingsString\"]],false],[14],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"        \"],[11,\"div\",[]],[15,\"class\",\"pull-right\"],[13],[0,\"\\n            \"],[11,\"button\",[]],[15,\"class\",\"btn btn-danger btn-collection\"],[5,[\"action\"],[[28,[null]],[28,[\"toggleProperty\"]],\"showDeleteConfirmation\"]],[13],[0,\" \"],[11,\"i\",[]],[15,\"class\",\"fa fa-times\"],[13],[14],[0,\" Delete \"],[14],[0,\"\\n\\n            \"],[11,\"button\",[]],[15,\"class\",\"btn btn-info btn-collection\"],[5,[\"action\"],[[28,[null]],\"showEdit\"]],[13],[0,\" \"],[11,\"i\",[]],[15,\"class\",\"fa fa-pencil\"],[13],[14],[0,\" Edit\"],[14],[0,\"\\n        \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]}],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"showDeleteConfirmation\"]]],null,{\"statements\":[[11,\"div\",[]],[15,\"class\",\"modal fade in\"],[15,\"tabindex\",\"-1\"],[15,\"role\",\"dialog\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"modal-dialog\"],[15,\"role\",\"document\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"modal-content\"],[13],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"modal-header\"],[13],[0,\"\\n        \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"close\"],[15,\"aria-label\",\"Close\"],[5,[\"action\"],[[28,[null]],[28,[\"toggleProperty\"]],\"showDeleteConfirmation\"]],[13],[11,\"span\",[]],[15,\"aria-hidden\",\"true\"],[13],[0,\"×\"],[14],[14],[0,\"\\n        \"],[11,\"h4\",[]],[15,\"class\",\"modal-title\"],[13],[0,\"Delete collection \\\"\"],[1,[28,[\"model\",\"title\"]],false],[0,\"\\\"?\"],[14],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"modal-body\"],[13],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"This will remove all groups and items inside collections. Original projects are not deleted.\"],[14],[0,\"\\n      \"],[14],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"modal-footer\"],[13],[0,\"\\n        \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"btn btn-default\"],[5,[\"action\"],[[28,[null]],[28,[\"toggleProperty\"]],\"showDeleteConfirmation\"]],[13],[0,\"Close\"],[14],[0,\"\\n        \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"btn btn-danger\"],[5,[\"action\"],[[28,[null]],\"deleteCollection\"]],[13],[0,\"Delete\"],[14],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[4,\" /.modal-content \"],[0,\"\\n  \"],[14],[4,\" /.modal-dialog \"],[0,\"\\n\"],[14],[4,\" /.modal \"],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"modal-backdrop fade in\"],[13],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/collection/edit.hbs" } });
});
define("collections/templates/collection/group", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "YR96dBci", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/collection/group.hbs" } });
});
define("collections/templates/collection/group/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "9TxIZWcS", "block": "{\"statements\":[[1,[33,[\"group-detail\"],null,[[\"model\",\"changeRoute\"],[[28,[\"model\"]],[33,[\"action\"],[[28,[null]],\"changeRoute\"],null]]]],false],[0,\"\\n\"],[1,[33,[\"browse-list\"],null,[[\"model\",\"groupView\"],[[28,[\"model\"]],true]]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/collection/group/index.hbs" } });
});
define("collections/templates/collection/group/item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Nlmy4Wy8", "block": "{\"statements\":[[1,[33,[\"item-detail-page\"],null,[[\"item\"],[[28,[\"model\"]]]]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/collection/group/item.hbs" } });
});
define("collections/templates/collection/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "r9UP37sm", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"model\",\"settings\",\"layout\"]]],null,{\"statements\":[[6,[\"each\"],[[28,[\"model\",\"settings\",\"layout\"]]],null,{\"statements\":[[0,\"        \"],[1,[33,[\"component\"],[[28,[\"view\",\"type\"]]],[[\"model\",\"layout\",\"branding\",\"changeRoute\"],[[28,[\"model\"]],[28,[\"view\"]],[28,[\"model\",\"settings\",\"branding\"]],[33,[\"action\"],[[28,[null]],\"changeRoute\"],null]]]],false],[0,\"\\n\"]],\"locals\":[\"view\"]},null]],\"locals\":[]},{\"statements\":[[0,\"    \"],[1,[33,[\"landing-default\"],null,[[\"model\"],[[28,[\"model\"]]]]],false],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/collection/index.hbs" } });
});
define("collections/templates/collection/item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "p/ai4Oio", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"coll-item-page\"],[13],[0,\"\\n    \"],[1,[33,[\"item-detail-page\"],null,[[\"item\"],[[28,[\"model\"]]]]],false],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/collection/item.hbs" } });
});
define("collections/templates/collection/search", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "40x9ootT", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"coll-add-choice text-center\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n        \"],[11,\"h2\",[]],[13],[0,\" Search content \"],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"search-panel m-t-lg p-md\"],[13],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n                \"],[11,\"div\",[]],[15,\"class\",\"col-sm-6 col-sm-offset-3\"],[13],[0,\"\\n                    \"],[1,[33,[\"input\"],null,[[\"class\",\"value\",\"enter\"],[\"form-control\",[28,[\"searchText\"]],\"search\"]]],false],[0,\"\\n                \"],[14],[0,\"\\n                \"],[11,\"div\",[]],[15,\"class\",\"col-sm-2 text-left\"],[13],[0,\"\\n                    \"],[11,\"button\",[]],[15,\"class\",\"btn btn-success \"],[5,[\"action\"],[[28,[null]],\"search\"]],[13],[0,\"Search\"],[14],[0,\"\\n                \"],[14],[0,\"\\n            \"],[14],[0,\"\\n        \"],[14],[0,\"\\n        \"],[11,\"p\",[]],[15,\"class\",\"text-muted\"],[13],[0,\" Search is for demo purpose only. Results will show all items. \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"search-results-panel\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n        \"],[11,\"h4\",[]],[15,\"class\",\"m-t-md\"],[13],[0,\" Results \"],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"search-results-wrapper m-t-md\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"results\"]]],null,{\"statements\":[[0,\"                \"],[11,\"div\",[]],[15,\"class\",\"search-result p-sm m-sm\"],[13],[0,\" \"],[1,[28,[\"item\",\"title\"]],false],[14],[0,\"\\n\"]],\"locals\":[\"item\"]},null],[0,\"        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/collection/search.hbs" } });
});
define("collections/templates/components/bread-crumbs", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "gFT6JWx/", "block": "{\"statements\":[[11,\"ul\",[]],[15,\"class\",\"breadcrumbs\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"breadCrumbs\"]]],null,{\"statements\":[[0,\"    \"],[11,\"li\",[]],[16,\"class\",[33,[\"if\"],[[28,[\"crumb\",\"isCurrent\"]],\"current\"],null],null],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"crumb\",\"linkable\"]]],null,{\"statements\":[[0,\"        \"],[6,[\"if\"],[[28,[\"crumb\",\"model\"]]],null,{\"statements\":[[0,\"\\n\"],[6,[\"link-to\"],[[28,[\"crumb\",\"path\"]],[28,[\"crumb\",\"model\"]]],null,{\"statements\":[[0,\"            \"],[1,[28,[\"crumb\",\"label\"]],false],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},{\"statements\":[[6,[\"link-to\"],[[28,[\"crumb\",\"path\"]]],null,{\"statements\":[[0,\"            \"],[1,[28,[\"crumb\",\"label\"]],false],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]}]],\"locals\":[]},{\"statements\":[[0,\"        \"],[1,[28,[\"crumb\",\"label\"]],false],[0,\"\\n\"]],\"locals\":[]}],[0,\"    \"],[14],[0,\"\\n\"]],\"locals\":[\"crumb\"]},null],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/components/bread-crumbs.hbs" } });
});
define("collections/templates/components/bs-accordion-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "zpdUtFh8", "block": "{\"statements\":[[11,\"div\",[]],[15,\"role\",\"tab\"],[16,\"class\",[34,[\"panel-heading \",[33,[\"if\"],[[28,[\"collapsed\"]],\"collapsed\"],null]]]],[5,[\"action\"],[[28,[null]],\"toggleActive\"]],[13],[0,\"\\n    \"],[11,\"h4\",[]],[15,\"class\",\"panel-title\"],[13],[0,\"\\n        \"],[11,\"a\",[]],[15,\"href\",\"#\"],[13],[0,\"\\n            \"],[1,[26,[\"title\"]],false],[0,\"\\n        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[6,[\"bs-collapse\"],null,[[\"collapsed\",\"class\"],[[28,[\"collapsed\"]],\"panel-collapse\"]],{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"panel-body\"],[13],[0,\"\\n        \"],[18,\"default\"],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/components/bs-accordion-item.hbs" } });
});
define("collections/templates/components/bs-alert", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "v0XFwb1H", "block": "{\"statements\":[[6,[\"unless\"],[[28,[\"hidden\"]]],null,{\"statements\":[[6,[\"if\"],[[28,[\"dismissible\"]]],null,{\"statements\":[[0,\"    \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"close\"],[15,\"aria-label\",\"Close\"],[5,[\"action\"],[[28,[null]],\"dismiss\"]],[13],[11,\"span\",[]],[15,\"aria-hidden\",\"true\"],[13],[0,\"×\"],[14],[14],[0,\"\\n\"]],\"locals\":[]},null],[18,\"default\"],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/components/bs-alert.hbs" } });
});
define("collections/templates/components/bs-button", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "zHxoks49", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"icon\"]]],null,{\"statements\":[[11,\"i\",[]],[16,\"class\",[34,[[26,[\"icon\"]]]]],[13],[14],[0,\" \"]],\"locals\":[]},null],[1,[26,[\"text\"]],false],[18,\"default\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/components/bs-button.hbs" } });
});
define("collections/templates/components/bs-form-element", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "DlCIWM0F", "block": "{\"statements\":[[19,[28,[\"formElementTemplate\"]]]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":true}", "meta": { "moduleName": "collections/templates/components/bs-form-element.hbs" } });
});
define("collections/templates/components/bs-form-group", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "axGlUc8k", "block": "{\"statements\":[[18,\"default\"],[0,\"\\n\"],[6,[\"if\"],[[28,[\"hasFeedback\"]]],null,{\"statements\":[[0,\"    \"],[11,\"span\",[]],[16,\"class\",[34,[\"form-control-feedback \",[26,[\"iconName\"]]]]],[15,\"aria-hidden\",\"true\"],[13],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/components/bs-form-group.hbs" } });
});
define("collections/templates/components/bs-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "eO7QNeLn", "block": "{\"statements\":[[18,\"default\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/components/bs-form.hbs" } });
});
define("collections/templates/components/bs-modal-dialog", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "d6VfysjU", "block": "{\"statements\":[[11,\"div\",[]],[16,\"class\",[34,[\"modal-dialog \",[26,[\"sizeClass\"]]]]],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"modal-content\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"header\"]]],null,{\"statements\":[[0,\"            \"],[1,[33,[\"bs-modal-header\"],null,[[\"title\",\"closeButton\"],[[28,[\"title\"]],[28,[\"closeButton\"]]]]],false],[0,\"\\n\"]],\"locals\":[]},null],[6,[\"if\"],[[28,[\"body\"]]],null,{\"statements\":[[6,[\"bs-modal-body\"],null,null,{\"statements\":[[0,\"                \"],[18,\"default\"],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},{\"statements\":[[0,\"            \"],[18,\"default\"],[0,\"\\n\"]],\"locals\":[]}],[0,\"\\n\"],[6,[\"if\"],[[28,[\"footer\"]]],null,{\"statements\":[[0,\"            \"],[1,[26,[\"bs-modal-footer\"]],false],[0,\"\\n\"]],\"locals\":[]},null],[0,\"    \"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/components/bs-modal-dialog.hbs" } });
});
define("collections/templates/components/bs-modal-footer", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mvpbZ1Dz", "block": "{\"statements\":[[6,[\"if\"],[[29,\"default\"]],null,{\"statements\":[[0,\"    \"],[18,\"default\",[[28,[null]]]],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[6,[\"if\"],[[28,[\"hasSubmitButton\"]]],null,{\"statements\":[[0,\"        \"],[6,[\"bs-button\"],null,[[\"type\",\"action\"],[\"default\",\"close\"]],{\"statements\":[[1,[26,[\"closeTitle\"]],false]],\"locals\":[]},null],[0,\"\\n        \"],[6,[\"bs-button\"],null,[[\"type\",\"buttonType\",\"disabled\"],[\"primary\",\"submit\",[28,[\"submitDisabled\"]]]],{\"statements\":[[1,[26,[\"submitTitle\"]],false]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"        \"],[6,[\"bs-button\"],null,[[\"type\",\"action\"],[\"primary\",\"close\"]],{\"statements\":[[1,[26,[\"closeTitle\"]],false]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[]}]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/components/bs-modal-footer.hbs" } });
});
define("collections/templates/components/bs-modal-header", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "CxqAEUX0", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"closeButton\"]]],null,{\"statements\":[[0,\"    \"],[11,\"button\",[]],[15,\"type\",\"button\"],[15,\"class\",\"close\"],[15,\"aria-label\",\"Close\"],[5,[\"action\"],[[28,[null]],\"close\"]],[13],[11,\"span\",[]],[15,\"aria-hidden\",\"true\"],[13],[0,\"×\"],[14],[14],[0,\"\\n\"]],\"locals\":[]},null],[6,[\"if\"],[[29,\"default\"]],null,{\"statements\":[[0,\"    \"],[18,\"default\",[[28,[null]]]],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"    \"],[11,\"h4\",[]],[15,\"class\",\"modal-title\"],[13],[1,[26,[\"title\"]],false],[14],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/components/bs-modal-header.hbs" } });
});
define("collections/templates/components/bs-modal", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "8Kr2Ol+p", "block": "{\"statements\":[[6,[\"ember-wormhole\"],null,[[\"to\",\"renderInPlace\"],[\"ember-bootstrap-modal-container\",[28,[\"renderInPlace\"]]]],{\"statements\":[[0,\"\\n\"],[6,[\"bs-modal-dialog\"],null,[[\"close\",\"fade\",\"in\",\"id\",\"title\",\"closeButton\",\"keyboard\",\"header\",\"body\",\"footer\",\"size\",\"backdropClose\"],[[33,[\"action\"],[[28,[null]],\"close\"],null],[28,[\"fade\"]],[28,[\"in\"]],[28,[\"modalId\"]],[28,[\"title\"]],[28,[\"closeButton\"]],[28,[\"keyboard\"]],[28,[\"header\"]],[28,[\"body\"]],[28,[\"footer\"]],[28,[\"size\"]],[28,[\"backdropClose\"]]]],{\"statements\":[[0,\"  \"],[18,\"default\",[[28,[null]]]],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"if\"],[[28,[\"showBackdrop\"]]],null,{\"statements\":[[0,\"  \"],[11,\"div\",[]],[16,\"class\",[34,[\"modal-backdrop \",[33,[\"if\"],[[28,[\"fade\"]],\"fade\"],null],\" \",[33,[\"if\"],[[28,[\"in\"]],\"in\"],null]]]],[16,\"id\",[34,[[26,[\"backdropId\"]]]]],[13],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/components/bs-modal.hbs" } });
});
define("collections/templates/components/bs-progress-bar", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "RVt02YAM", "block": "{\"statements\":[[0,\"\\n\"],[6,[\"if\"],[[28,[\"showLabel\"]]],null,{\"statements\":[[6,[\"if\"],[[29,\"default\"]],null,{\"statements\":[[0,\"        \"],[18,\"default\",[[28,[\"percentRounded\"]]]],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"        \"],[1,[26,[\"percentRounded\"]],false],[0,\"%\\n\"]],\"locals\":[]}]],\"locals\":[]},{\"statements\":[[6,[\"if\"],[[29,\"default\"]],null,{\"statements\":[[0,\"        \"],[11,\"span\",[]],[15,\"class\",\"sr-only\"],[13],[18,\"default\",[[28,[\"percentRounded\"]]]],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"        \"],[11,\"span\",[]],[15,\"class\",\"sr-only\"],[13],[1,[26,[\"percentRounded\"]],false],[0,\"%\"],[14],[0,\"\\n\"]],\"locals\":[]}],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/components/bs-progress-bar.hbs" } });
});
define("collections/templates/components/bs-progress", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "me1THiNh", "block": "{\"statements\":[[18,\"default\"],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/components/bs-progress.hbs" } });
});
define("collections/templates/components/bs-select", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "p2XgO3/1", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"prompt\"]]],null,{\"statements\":[[0,\"    \"],[11,\"option\",[]],[15,\"disabled\",\"\"],[16,\"selected\",[33,[\"is-not\"],[[28,[\"value\"]]],null],null],[13],[0,\"\\n        \"],[1,[26,[\"prompt\"]],false],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"each\"],[[28,[\"content\"]]],[[\"key\"],[\"@identity\"]],{\"statements\":[[0,\"    \"],[11,\"option\",[]],[16,\"value\",[34,[[33,[\"read-path\"],[[28,[\"item\"]],[28,[\"optionValuePath\"]]],null]]]],[16,\"selected\",[33,[\"is-equal\"],[[28,[\"item\"]],[28,[\"value\"]]],null],null],[13],[0,\"\\n        \"],[1,[33,[\"read-path\"],[[28,[\"item\"]],[28,[\"optionLabelPath\"]]],null],false],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[\"item\"]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/components/bs-select.hbs" } });
});
define("collections/templates/components/cp-panel-body", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "bz3HUq+T", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"shouldAnimate\"]]],null,{\"statements\":[[0,\"\\n\"],[6,[\"liquid-if\"],[[28,[\"isOpen\"]]],[[\"use\"],[\"crossFade\"]],{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"cp-Panel-body-inner\"],[13],[0,\"\\n      \"],[18,\"default\"],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"\\n\"],[6,[\"if\"],[[28,[\"isOpen\"]]],null,{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"cp-Panel-body-inner\"],[13],[0,\"\\n      \"],[18,\"default\"],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/components/cp-panel-body.hbs" } });
});
define("collections/templates/components/form-element/errors", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "JlGoJjkb", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"showErrors\"]]],null,{\"statements\":[[0,\"    \"],[11,\"span\",[]],[15,\"class\",\"help-block\"],[13],[1,[28,[\"errors\",\"firstObject\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/components/form-element/errors.hbs" } });
});
define("collections/templates/components/form-element/feedback-icon", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Eavzvprq", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"hasFeedback\"]]],null,{\"statements\":[[0,\"    \"],[11,\"span\",[]],[16,\"class\",[34,[\"form-control-feedback \",[26,[\"iconName\"]]]]],[15,\"aria-hidden\",\"true\"],[13],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/components/form-element/feedback-icon.hbs" } });
});
define("collections/templates/components/form-element/horizontal/checkbox", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5qxPb8om", "block": "{\"statements\":[[11,\"div\",[]],[16,\"class\",[34,[[26,[\"horizontalInputGridClass\"]],\" \",[26,[\"horizontalInputOffsetGridClass\"]]]]],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"checkbox\"],[13],[0,\"\\n        \"],[11,\"label\",[]],[13],[0,\"\\n            \"],[1,[33,[\"input\"],null,[[\"name\",\"type\",\"checked\",\"disabled\",\"required\"],[[28,[\"name\"]],\"checkbox\",[28,[\"value\"]],[28,[\"disabled\"]],[28,[\"required\"]]]]],false],[0,\" \"],[1,[26,[\"label\"]],false],[0,\"\\n        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[19,\"components/form-element/errors\"],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":true}", "meta": { "moduleName": "collections/templates/components/form-element/horizontal/checkbox.hbs" } });
});
define("collections/templates/components/form-element/horizontal/default", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "zEwozAgT", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"hasLabel\"]]],null,{\"statements\":[[0,\"    \"],[11,\"label\",[]],[16,\"class\",[34,[\"control-label \",[26,[\"horizontalLabelGridClass\"]]]]],[16,\"for\",[34,[[26,[\"formElementId\"]]]]],[13],[1,[26,[\"label\"]],false],[14],[0,\"\\n    \"],[11,\"div\",[]],[16,\"class\",[34,[[26,[\"horizontalInputGridClass\"]]]]],[13],[0,\"\\n\"],[6,[\"if\"],[[29,\"default\"]],null,{\"statements\":[[0,\"            \"],[18,\"default\",[[28,[\"value\"]],[28,[\"formElementId\"]]]],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"            \"],[1,[33,[\"bs-input\"],null,[[\"id\",\"name\",\"type\",\"value\",\"placeholder\",\"autofocus\",\"disabled\",\"required\"],[[28,[\"formElementId\"]],[28,[\"name\"]],[28,[\"controlType\"]],[28,[\"value\"]],[28,[\"placeholder\"]],[28,[\"autofocus\"]],[28,[\"disabled\"]],[28,[\"required\"]]]]],false],[0,\"\\n\"]],\"locals\":[]}],[0,\"        \"],[19,\"components/form-element/feedback-icon\"],[0,\"\\n        \"],[19,\"components/form-element/errors\"],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"    \"],[11,\"div\",[]],[16,\"class\",[34,[[26,[\"horizontalInputGridClass\"]],\" \",[26,[\"horizontalInputOffsetGridClass\"]]]]],[13],[0,\"\\n\"],[6,[\"if\"],[[29,\"default\"]],null,{\"statements\":[[0,\"            \"],[18,\"default\",[[28,[\"value\"]]]],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"            \"],[1,[33,[\"bs-input\"],null,[[\"name\",\"type\",\"value\",\"placeholder\",\"autofocus\",\"disabled\",\"required\"],[[28,[\"name\"]],[28,[\"controlType\"]],[28,[\"value\"]],[28,[\"placeholder\"]],[28,[\"autofocus\"]],[28,[\"disabled\"]],[28,[\"required\"]]]]],false],[0,\"\\n\"]],\"locals\":[]}],[0,\"        \"],[19,\"components/form-element/feedback-icon\"],[0,\"\\n        \"],[19,\"components/form-element/errors\"],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":true}", "meta": { "moduleName": "collections/templates/components/form-element/horizontal/default.hbs" } });
});
define("collections/templates/components/form-element/horizontal/select", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "pY2rksaA", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"hasLabel\"]]],null,{\"statements\":[[0,\"    \"],[11,\"label\",[]],[16,\"class\",[34,[\"control-label \",[26,[\"horizontalLabelGridClass\"]]]]],[16,\"for\",[34,[[26,[\"formElementId\"]]]]],[13],[1,[26,[\"label\"]],false],[14],[0,\"\\n    \"],[11,\"div\",[]],[16,\"class\",[34,[[26,[\"horizontalInputGridClass\"]]]]],[13],[0,\"\\n        \"],[1,[33,[\"bs-select\"],null,[[\"id\",\"name\",\"content\",\"optionValuePath\",\"optionLabelPath\",\"value\",\"disabled\",\"required\"],[[28,[\"formElementId\"]],[28,[\"name\"]],[28,[\"choices\"]],[28,[\"choiceValueProperty\"]],[28,[\"choiceLabelProperty\"]],[28,[\"value\"]],[28,[\"disabled\"]],[28,[\"required\"]]]]],false],[0,\"\\n        \"],[19,\"components/form-element/feedback-icon\"],[0,\"\\n        \"],[19,\"components/form-element/errors\"],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"    \"],[11,\"div\",[]],[16,\"class\",[34,[[26,[\"horizontalInputGridClass\"]],\" \",[26,[\"horizontalInputOffsetGridClass\"]]]]],[13],[0,\"\\n        \"],[1,[33,[\"bs-select\"],null,[[\"name\",\"content\",\"optionValuePath\",\"optionLabelPath\",\"value\"],[[28,[\"name\"]],[28,[\"choices\"]],[28,[\"choiceValueProperty\"]],[28,[\"choiceLabelProperty\"]],[28,[\"value\"]]]]],false],[0,\"\\n        \"],[19,\"components/form-element/feedback-icon\"],[0,\"\\n        \"],[19,\"components/form-element/errors\"],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":true}", "meta": { "moduleName": "collections/templates/components/form-element/horizontal/select.hbs" } });
});
define("collections/templates/components/form-element/horizontal/textarea", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "nMDfaHSH", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"hasLabel\"]]],null,{\"statements\":[[0,\"    \"],[11,\"label\",[]],[16,\"class\",[34,[\"control-label \",[26,[\"horizontalLabelGridClass\"]]]]],[16,\"for\",[34,[[26,[\"formElementId\"]]]]],[13],[1,[26,[\"label\"]],false],[14],[0,\"\\n    \"],[11,\"div\",[]],[16,\"class\",[34,[[26,[\"horizontalInputGridClass\"]]]]],[13],[0,\"\\n        \"],[1,[33,[\"bs-textarea\"],null,[[\"id\",\"name\",\"value\",\"placeholder\",\"autofocus\",\"cols\",\"rows\",\"disabled\",\"required\"],[[28,[\"formElementId\"]],[28,[\"name\"]],[28,[\"value\"]],[28,[\"placeholder\"]],[28,[\"autofocus\"]],[28,[\"cols\"]],[28,[\"rows\"]],[28,[\"disabled\"]],[28,[\"required\"]]]]],false],[0,\"\\n        \"],[19,\"components/form-element/feedback-icon\"],[0,\"\\n        \"],[19,\"components/form-element/errors\"],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"    \"],[11,\"div\",[]],[16,\"class\",[34,[[26,[\"horizontalInputGridClass\"]],\" \",[26,[\"horizontalInputOffsetGridClass\"]]]]],[13],[0,\"\\n        \"],[1,[33,[\"bs-textarea\"],null,[[\"name\",\"value\",\"placeholder\",\"autofocus\",\"cols\",\"rows\",\"disabled\",\"required\"],[[28,[\"name\"]],[28,[\"value\"]],[28,[\"placeholder\"]],[28,[\"autofocus\"]],[28,[\"cols\"]],[28,[\"rows\"]],[28,[\"disabled\"]],[28,[\"required\"]]]]],false],[0,\"\\n        \"],[19,\"components/form-element/feedback-icon\"],[0,\"\\n        \"],[19,\"components/form-element/errors\"],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":true}", "meta": { "moduleName": "collections/templates/components/form-element/horizontal/textarea.hbs" } });
});
define("collections/templates/components/form-element/inline/checkbox", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6rg1RcR/", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"checkbox\"],[13],[0,\"\\n    \"],[11,\"label\",[]],[13],[0,\"\\n        \"],[1,[33,[\"input\"],null,[[\"name\",\"type\",\"checked\",\"disabled\",\"required\"],[[28,[\"name\"]],\"checkbox\",[28,[\"value\"]],[28,[\"disabled\"]],[28,[\"required\"]]]]],false],[0,\" \"],[1,[26,[\"label\"]],false],[0,\"\\n    \"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/components/form-element/inline/checkbox.hbs" } });
});
define("collections/templates/components/form-element/inline/default", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "DM4YBeq/", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"hasLabel\"]]],null,{\"statements\":[[0,\"    \"],[11,\"label\",[]],[15,\"class\",\"control-label\"],[16,\"for\",[34,[[26,[\"formElementId\"]]]]],[13],[1,[26,[\"label\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},null],[6,[\"if\"],[[29,\"default\"]],null,{\"statements\":[[0,\"    \"],[18,\"default\",[[28,[\"value\"]],[28,[\"formElementId\"]]]],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"    \"],[1,[33,[\"bs-input\"],null,[[\"id\",\"name\",\"type\",\"value\",\"placeholder\",\"autofocus\",\"disabled\",\"required\"],[[28,[\"formElementId\"]],[28,[\"name\"]],[28,[\"controlType\"]],[28,[\"value\"]],[28,[\"placeholder\"]],[28,[\"autofocus\"]],[28,[\"disabled\"]],[28,[\"required\"]]]]],false],[0,\"\\n\"]],\"locals\":[]}],[19,\"components/form-element/feedback-icon\"],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":true}", "meta": { "moduleName": "collections/templates/components/form-element/inline/default.hbs" } });
});
define("collections/templates/components/form-element/inline/select", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "VDhmTQA1", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"hasLabel\"]]],null,{\"statements\":[[0,\"    \"],[11,\"label\",[]],[15,\"class\",\"control-label\"],[16,\"for\",[34,[[26,[\"formElementId\"]]]]],[13],[1,[26,[\"label\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},null],[1,[33,[\"bs-select\"],null,[[\"id\",\"name\",\"content\",\"optionValuePath\",\"optionLabelPath\",\"value\",\"disabled\",\"required\"],[[28,[\"formElementId\"]],[28,[\"name\"]],[28,[\"choices\"]],[28,[\"choiceValueProperty\"]],[28,[\"choiceLabelProperty\"]],[28,[\"value\"]],[28,[\"disabled\"]],[28,[\"required\"]]]]],false],[0,\"\\n\"],[19,\"components/form-element/feedback-icon\"],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":true}", "meta": { "moduleName": "collections/templates/components/form-element/inline/select.hbs" } });
});
define("collections/templates/components/form-element/inline/textarea", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qJTzC9PI", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"hasLabel\"]]],null,{\"statements\":[[0,\"    \"],[11,\"label\",[]],[15,\"class\",\"control-label\"],[16,\"for\",[34,[[26,[\"formElementId\"]]]]],[13],[1,[26,[\"label\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},null],[1,[33,[\"bs-textarea\"],null,[[\"id\",\"name\",\"value\",\"placeholder\",\"autofocus\",\"cols\",\"rows\",\"disabled\",\"required\"],[[28,[\"formElementId\"]],[28,[\"name\"]],[28,[\"value\"]],[28,[\"placeholder\"]],[28,[\"autofocus\"]],[28,[\"cols\"]],[28,[\"rows\"]],[28,[\"disabled\"]],[28,[\"required\"]]]]],false],[0,\"\\n\"],[19,\"components/form-element/feedback-icon\"],[0,\"\\n\"],[19,\"components/form-element/errors\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":true}", "meta": { "moduleName": "collections/templates/components/form-element/inline/textarea.hbs" } });
});
define("collections/templates/components/form-element/vertical/checkbox", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "zT68ebDf", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"checkbox\"],[13],[0,\"\\n    \"],[11,\"label\",[]],[13],[0,\"\\n        \"],[1,[33,[\"input\"],null,[[\"name\",\"type\",\"checked\",\"disabled\",\"required\"],[[28,[\"name\"]],\"checkbox\",[28,[\"value\"]],[28,[\"disabled\"]],[28,[\"required\"]]]]],false],[0,\" \"],[1,[26,[\"label\"]],false],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[19,\"components/form-element/errors\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":true}", "meta": { "moduleName": "collections/templates/components/form-element/vertical/checkbox.hbs" } });
});
define("collections/templates/components/form-element/vertical/default", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "J8zUcRvT", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"hasLabel\"]]],null,{\"statements\":[[0,\"    \"],[11,\"label\",[]],[15,\"class\",\"control-label\"],[16,\"for\",[34,[[26,[\"formElementId\"]]]]],[13],[1,[26,[\"label\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},null],[6,[\"if\"],[[29,\"default\"]],null,{\"statements\":[[0,\"    \"],[18,\"default\",[[28,[\"value\"]],[28,[\"formElementId\"]]]],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"    \"],[1,[33,[\"bs-input\"],null,[[\"id\",\"name\",\"type\",\"value\",\"placeholder\",\"autofocus\",\"disabled\",\"required\"],[[28,[\"formElementId\"]],[28,[\"name\"]],[28,[\"controlType\"]],[28,[\"value\"]],[28,[\"placeholder\"]],[28,[\"autofocus\"]],[28,[\"disabled\"]],[28,[\"required\"]]]]],false],[0,\"\\n\"]],\"locals\":[]}],[19,\"components/form-element/feedback-icon\"],[0,\"\\n\"],[19,\"components/form-element/errors\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":true}", "meta": { "moduleName": "collections/templates/components/form-element/vertical/default.hbs" } });
});
define("collections/templates/components/form-element/vertical/select", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "uV/c8Gu4", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"hasLabel\"]]],null,{\"statements\":[[0,\"    \"],[11,\"label\",[]],[15,\"class\",\"control-label\"],[16,\"for\",[34,[[26,[\"formElementId\"]]]]],[13],[1,[26,[\"label\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},null],[1,[33,[\"bs-select\"],null,[[\"id\",\"name\",\"content\",\"optionValuePath\",\"optionLabelPath\",\"value\",\"disabled\",\"required\"],[[28,[\"formElementId\"]],[28,[\"name\"]],[28,[\"choices\"]],[28,[\"choiceValueProperty\"]],[28,[\"choiceLabelProperty\"]],[28,[\"value\"]],[28,[\"disabled\"]],[28,[\"required\"]]]]],false],[0,\"\\n\"],[19,\"components/form-element/feedback-icon\"],[0,\"\\n\"],[19,\"components/form-element/errors\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":true}", "meta": { "moduleName": "collections/templates/components/form-element/vertical/select.hbs" } });
});
define("collections/templates/components/form-element/vertical/textarea", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "SsGVe8Tn", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"hasLabel\"]]],null,{\"statements\":[[0,\"    \"],[11,\"label\",[]],[15,\"class\",\"control-label\"],[16,\"for\",[34,[[26,[\"formElementId\"]]]]],[13],[1,[26,[\"label\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},null],[1,[33,[\"bs-textarea\"],null,[[\"id\",\"value\",\"name\",\"placeholder\",\"autofocus\",\"disabled\",\"required\",\"cols\",\"rows\"],[[28,[\"formElementId\"]],[28,[\"value\"]],[28,[\"name\"]],[28,[\"placeholder\"]],[28,[\"autofocus\"]],[28,[\"disabled\"]],[28,[\"required\"]],[28,[\"cols\"]],[28,[\"rows\"]]]]],false],[0,\"\\n\"],[19,\"components/form-element/feedback-icon\"],[0,\"\\n\"],[19,\"components/form-element/errors\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":true}", "meta": { "moduleName": "collections/templates/components/form-element/vertical/textarea.hbs" } });
});
define("collections/templates/components/page-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "9rh35oBY", "block": "{\"statements\":[[6,[\"if\"],[[28,[\"isDots\"]]],null,{\"statements\":[[0,\"  \"],[11,\"a\",[]],[13],[1,[26,[\"page\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"  \"],[11,\"a\",[]],[16,\"href\",[34,[[26,[\"url\"]]]]],[5,[\"action\"],[[28,[null]],\"select\"]],[13],[1,[26,[\"page\"]],false],[14],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/components/page-item.hbs" } });
});
define("collections/templates/components/pagination-pager", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "lsQvqc73", "block": "{\"statements\":[[6,[\"unless\"],[[28,[\"pager\"]]],null,{\"statements\":[[0,\"  \"],[11,\"li\",[]],[16,\"class\",[34,[\"previous \",[33,[\"if\"],[[28,[\"isFirstDisabled\"]],\"disabled\"],null]]]],[13],[0,\"\\n    \"],[11,\"a\",[]],[16,\"href\",[34,[[26,[\"previousUrl\"]]]]],[5,[\"action\"],[[28,[null]],\"previous\"]],[13],[1,[26,[\"paginationPrevious\"]],true],[14],[0,\"\\n  \"],[14],[0,\"\\n\\n\"],[6,[\"each\"],[[28,[\"pages\"]]],[[\"key\"],[\"@index\"]],{\"statements\":[[0,\"    \"],[1,[33,[\"page-item\"],null,[[\"disabled\",\"page\",\"selected\",\"seperator\",\"urlTemplate\",\"pageSet\"],[[28,[\"disabled\"]],[28,[\"page\"]],[28,[null,\"current\"]],[28,[\"seperator\"]],[28,[\"urlTemplate\"]],\"pageChanged\"]]],false],[0,\"\\n\"]],\"locals\":[\"page\"]},null],[0,\"\\n  \"],[11,\"li\",[]],[16,\"class\",[34,[\"next \",[33,[\"if\"],[[28,[\"isLastDisabled\"]],\"disabled\"],null]]]],[13],[0,\"\\n    \"],[11,\"a\",[]],[16,\"href\",[34,[[26,[\"nextUrl\"]]]]],[5,[\"action\"],[[28,[null]],\"next\"]],[13],[1,[26,[\"paginationNext\"]],true],[14],[0,\"\\n  \"],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[6,[\"if\"],[[28,[\"pagerFirst\"]]],null,{\"statements\":[[0,\"    \"],[11,\"li\",[]],[16,\"class\",[34,[[33,[\"if\"],[[28,[\"isFirstDisabled\"]],\"disabled\"],null]]]],[13],[0,\"\\n      \"],[11,\"a\",[]],[16,\"href\",[34,[[26,[\"firstUrl\"]]]]],[5,[\"action\"],[[28,[null]],\"first\"]],[13],[1,[26,[\"pagerFirst\"]],true],[14],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n  \"],[11,\"li\",[]],[16,\"class\",[34,[[33,[\"if\"],[[28,[\"pagerSpread\"]],\"previous\"],null],\" \",[33,[\"if\"],[[28,[\"isFirstDisabled\"]],\"disabled\"],null]]]],[13],[0,\"\\n    \"],[11,\"a\",[]],[16,\"href\",[34,[[26,[\"previousUrl\"]]]]],[5,[\"action\"],[[28,[null]],\"previous\"]],[13],[1,[26,[\"pagerPrevious\"]],true],[14],[0,\"\\n  \"],[14],[0,\"\\n\\n\"],[6,[\"if\"],[[29,\"default\"]],null,{\"statements\":[[0,\"    \"],[11,\"li\",[]],[15,\"class\",\"pager-inner\"],[13],[18,\"default\"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n  \"],[11,\"li\",[]],[16,\"class\",[34,[[33,[\"if\"],[[28,[\"pagerSpread\"]],\"next\"],null],\" \",[33,[\"if\"],[[28,[\"isLastDisabled\"]],\"disabled\"],null]]]],[13],[0,\"\\n    \"],[11,\"a\",[]],[16,\"href\",[34,[[26,[\"nextUrl\"]]]]],[5,[\"action\"],[[28,[null]],\"next\"]],[13],[1,[26,[\"pagerNext\"]],true],[14],[0,\"\\n  \"],[14],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"pagerLast\"]]],null,{\"statements\":[[0,\"    \"],[11,\"li\",[]],[16,\"class\",[34,[\"last \",[33,[\"if\"],[[28,[\"isLastDisabled\"]],\"disabled\"],null]]]],[13],[0,\"\\n      \"],[11,\"a\",[]],[16,\"href\",[34,[[26,[\"lastUrl\"]]]]],[5,[\"action\"],[[28,[null]],\"last\"]],[13],[1,[26,[\"pagerLast\"]],true],[14],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]}]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/components/pagination-pager.hbs" } });
});
define("collections/templates/create-meeting", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "w5tMoJck", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"coll-create-header p-xl\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"text-center\"],[13],[0,\"\\n        \"],[11,\"h2\",[]],[13],[0,\" Create a Meeting \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"coll-create\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"col-sm-10 col-sm-offset-1 m-t-lg\"],[13],[0,\"\\n                \"],[11,\"h4\",[]],[13],[0,\"1. Add title  \"],[14],[0,\"\\n                \"],[1,[33,[\"input\"],null,[[\"class\",\"value\",\"placeholder\"],[\"form-control\",[28,[\"title\"]],\"Enter collection name\"]]],false],[0,\"\\n            \"],[14],[0,\"\\n        \"],[14],[0,\"\\n        \"],[11,\"hr\",[]],[15,\"class\",\"soften\"],[13],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"col-sm-10 col-sm-offset-1\"],[13],[0,\"\\n                \"],[11,\"h4\",[]],[13],[0,\" 2. Add description \"],[11,\"span\",[]],[15,\"class\",\"text-muted\"],[13],[0,\"Optional \"],[14],[14],[0,\"\\n                \"],[1,[33,[\"textarea\"],null,[[\"class\",\"value\",\"rows\"],[\"form-control\",[28,[\"description\"]],\"6\"]]],false],[0,\"\\n            \"],[14],[0,\"\\n        \"],[14],[0,\"\\n        \"],[11,\"hr\",[]],[15,\"class\",\"soften\"],[13],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"col-sm-10 col-sm-offset-1\"],[13],[0,\"\\n                \"],[11,\"h4\",[]],[13],[0,\" 3. Add Location \"],[14],[0,\"\\n                \"],[1,[33,[\"input\"],null,[[\"class\",\"value\",\"placeholder\"],[\"form-control\",[28,[\"location\"]],\"Enter meeting location\"]]],false],[0,\"\\n            \"],[14],[0,\"\\n        \"],[14],[0,\"\\n        \"],[11,\"hr\",[]],[15,\"class\",\"soften\"],[13],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"col-sm-10 col-sm-offset-1\"],[13],[0,\"\\n                \"],[11,\"h4\",[]],[13],[0,\" 4. Add Address \"],[14],[0,\"\\n                \"],[1,[33,[\"input\"],null,[[\"class\",\"value\",\"placeholder\"],[\"form-control\",[28,[\"address\"]],\"Enter meeting address\"]]],false],[0,\"\\n            \"],[14],[0,\"\\n        \"],[14],[0,\"\\n        \"],[11,\"hr\",[]],[15,\"class\",\"soften\"],[13],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"col-sm-3 col-sm-offset-1\"],[13],[0,\"\\n                \"],[11,\"h4\",[]],[13],[0,\" 5. Add Meeting Dates \"],[14],[0,\"\\n                Start Date:\\n                \"],[1,[33,[\"bs-datetimepicker\"],null,[[\"date\"],[[28,[\"startDate\"]]]]],false],[0,\"\\n                End Date:\\n                \"],[1,[33,[\"bs-datetimepicker\"],null,[[\"date\"],[[28,[\"endDate\"]]]]],false],[0,\"\\n            \"],[14],[0,\"\\n        \"],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"col-sm-6 col-sm-offset-3 m-t-lg m-b-lg text-center\"],[13],[0,\"\\n                \"],[6,[\"link-to\"],[\"index\"],[[\"class\"],[\"btn btn-default\"]],{\"statements\":[[0,\"Cancel \"]],\"locals\":[]},null],[0,\" \"],[11,\"button\",[]],[16,\"class\",[34,[\"btn btn-primary \",[33,[\"unless\"],[[28,[\"title\"]],\"disabled\"],null]]]],[5,[\"action\"],[[28,[null]],\"addCollection\"]],[13],[0,\"Continue\"],[14],[0,\"\\n            \"],[14],[0,\"\\n        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/create-meeting.hbs" } });
});
define("collections/templates/create", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "S4TcIkYx", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"coll-create-header p-xl\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"text-center\"],[13],[0,\"\\n        \"],[11,\"h2\",[]],[13],[0,\" Create a collection \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"coll-create\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"col-sm-10 col-sm-offset-1 m-t-lg\"],[13],[0,\"\\n                \"],[11,\"h4\",[]],[13],[0,\"1. Add title  \"],[14],[0,\"\\n                \"],[1,[33,[\"input\"],null,[[\"class\",\"value\",\"placeholder\"],[\"form-control\",[28,[\"title\"]],\"Enter collection name\"]]],false],[0,\"\\n            \"],[14],[0,\"\\n        \"],[14],[0,\"\\n        \"],[11,\"hr\",[]],[15,\"class\",\"soften\"],[13],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"col-sm-10 col-sm-offset-1\"],[13],[0,\"\\n                \"],[11,\"h4\",[]],[13],[0,\"2. Select collection type\"],[14],[0,\"\\n                \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"typeList\"]]],null,{\"statements\":[[0,\"                        \"],[11,\"div\",[]],[15,\"class\",\"col-md-3 col-xs-6 text-center\"],[13],[0,\"\\n                            \"],[11,\"div\",[]],[16,\"class\",[34,[\"pointer m-b-md p-md box-round osf-box \",[33,[\"if\"],[[33,[\"eq\"],[[28,[\"selectedType\"]],[28,[\"type\"]]],null],\"osf-box-lt coll-active\",\"osf-box\"],null],\" \"]]],[5,[\"action\"],[[28,[null]],\"updateType\",[28,[\"type\"]]]],[13],[0,\"\\n                                \"],[11,\"div\",[]],[15,\"class\",\"coll-radio\"],[13],[14],[0,\"\\n                                \"],[1,[28,[\"type\"]],false],[0,\"\\n                            \"],[14],[0,\"\\n                        \"],[14],[0,\"\\n\"]],\"locals\":[\"type\"]},null],[0,\"                \"],[14],[0,\"\\n\\n            \"],[14],[0,\"\\n        \"],[14],[0,\"\\n        \"],[11,\"hr\",[]],[15,\"class\",\"soften\"],[13],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"col-sm-10 col-sm-offset-1\"],[13],[0,\"\\n                \"],[11,\"h4\",[]],[13],[0,\" 3. Add description \"],[11,\"span\",[]],[15,\"class\",\"text-muted\"],[13],[0,\"Optional \"],[14],[14],[0,\"\\n                \"],[1,[33,[\"textarea\"],null,[[\"class\",\"value\",\"rows\"],[\"form-control\",[28,[\"description\"]],\"6\"]]],false],[0,\"\\n            \"],[14],[0,\"\\n        \"],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"row\"],[13],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"col-sm-6 col-sm-offset-3 m-t-lg text-center\"],[13],[0,\"\\n                \"],[6,[\"link-to\"],[\"index\"],[[\"class\"],[\"btn btn-default\"]],{\"statements\":[[0,\"Cancel \"]],\"locals\":[]},null],[0,\" \"],[11,\"button\",[]],[16,\"class\",[34,[\"btn btn-primary \",[33,[\"unless\"],[[28,[\"title\"]],\"disabled\"],null]]]],[5,[\"action\"],[[28,[null]],\"addCollection\"]],[13],[0,\"Continue\"],[14],[0,\"\\n            \"],[14],[0,\"\\n        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/create.hbs" } });
});
define("collections/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Dp3BHdNu", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"coll-banner text-center\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n        \"],[11,\"h1\",[]],[15,\"class\",\"f-w-lg\"],[13],[0,\" OSF Collections \"],[14],[0,\"\\n        \"],[11,\"p\",[]],[15,\"class\",\"lead f-w-md\"],[13],[0,\"Integrate your research interests into groups\"],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"            \"],[6,[\"link-to\"],[\"create\"],[[\"class\"],[\"btn btn-success btn-lg m-t-lg\"]],{\"statements\":[[0,\"Start a collection \"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[]},null],[0,\"    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"coll-toolbar row\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"col-xs-6\"],[13],[11,\"h2\",[]],[13],[0,\" All collections\"],[14],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"col-xs-6\"],[13],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"pull-right\"],[13],[1,[33,[\"input\"],null,[[\"class\",\"value\",\"key-up\",\"placeholder\"],[\"form-control\",[28,[\"filterText\"]],\"filter\",\"Filter\"]]],false],[0,\"  \"],[1,[28,[\"model\",\"length\"]],false],[0,\" shown \"],[14],[0,\"\\n        \"],[14],[0,\"\\n        \"],[4,\" <input type=text placeholder=\\\"Filter collections\\\" onkeyup={{action 'filter'}}> \"],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"coll-group\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"model\"]]],null,{\"statements\":[[0,\"            \"],[11,\"div\",[]],[15,\"class\",\"coll-single\"],[13],[0,\"\\n                \"],[6,[\"link-to\"],[\"collection\",[28,[\"item\",\"id\"]]],[[\"class\"],[\"btn btn-info pull-right\"]],{\"statements\":[[11,\"span\",[]],[5,[\"action\"],[[28,[null]],\"clearFilter\"]],[13],[0,\"View\"],[14]],\"locals\":[]},null],[0,\"\\n                \"],[11,\"h3\",[]],[13],[6,[\"link-to\"],[\"collection\",[28,[\"item\",\"id\"]]],null,{\"statements\":[[11,\"span\",[]],[5,[\"action\"],[[28,[null]],\"clearFilter\"]],[13],[1,[28,[\"item\",\"title\"]],false],[14]],\"locals\":[]},null],[14],[0,\"\\n                \"],[11,\"p\",[]],[13],[1,[28,[\"item\",\"description\"]],false],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"item\",\"tags\"]]],null,{\"statements\":[[0,\"                    \"],[11,\"div\",[]],[13],[0,\"Tags: \"],[1,[28,[\"item\",\"tags\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"                \"],[11,\"div\",[]],[15,\"class\",\"text-muted\"],[13],[0,\"Created on \"],[1,[33,[\"moment-format\"],[[28,[\"item\",\"dateCreated\"]],\"MMMM DD, YYYY\"],null],false],[0,\" \"],[14],[0,\"\\n            \"],[14],[0,\"\\n\"]],\"locals\":[\"item\"]},null],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"text-center\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"showLoadMore\"]]],null,{\"statements\":[[6,[\"if\"],[[28,[\"loadingMore\"]]],null,{\"statements\":[[0,\"                    \"],[11,\"i\",[]],[15,\"class\",\"fa fa-circle-o-notch fa-spin fa-3x fa-fw text-muted m-t-md\"],[13],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"                    \"],[11,\"button\",[]],[15,\"class\",\"btn btn-default\"],[5,[\"action\"],[[28,[null]],\"loadMore\"]],[13],[0,\" Load more \"],[14],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[]},null],[0,\"        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/index.hbs" } });
});
define("collections/templates/meetings", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "kpUMz92L", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"coll-banner text-center\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n        \"],[11,\"h1\",[]],[15,\"class\",\"f-w-lg\"],[13],[0,\" OSF for Meetings \"],[14],[0,\"\\n        \"],[11,\"p\",[]],[15,\"class\",\"lead f-w-md\"],[13],[0,\"A free poster and presentation sharing service for academic meetings and conferences\"],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"            \"],[6,[\"link-to\"],[\"create_meeting\"],[[\"class\"],[\"btn btn-success btn-lg m-t-lg\"]],{\"statements\":[[0,\"Start a meeting\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[]},null],[0,\"    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"coll-toolbar row\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"col-xs-6\"],[13],[11,\"h2\",[]],[13],[0,\" All meetings\"],[14],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"col-xs-6\"],[13],[0,\"\\n            \"],[11,\"div\",[]],[15,\"class\",\"pull-right\"],[13],[1,[33,[\"input\"],null,[[\"class\",\"value\",\"key-up\",\"placeholder\"],[\"form-control\",[28,[\"filterText\"]],\"filter\",\"Filter\"]]],false],[0,\"  \"],[1,[28,[\"model\",\"length\"]],false],[0,\" shown \"],[14],[0,\"\\n        \"],[14],[0,\"\\n        \"],[4,\" <input type=text placeholder=\\\"Filter collections\\\" onkeyup={{action 'filter'}}> \"],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"coll-group\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"model\"]]],null,{\"statements\":[[0,\"            \"],[11,\"div\",[]],[15,\"class\",\"coll-single\"],[13],[0,\"\\n                \"],[6,[\"link-to\"],[\"collection\",[28,[\"item\",\"id\"]]],[[\"class\"],[\"btn btn-info pull-right\"]],{\"statements\":[[11,\"span\",[]],[5,[\"action\"],[[28,[null]],\"clearFilter\"]],[13],[0,\"View\"],[14]],\"locals\":[]},null],[0,\"\\n                \"],[11,\"h3\",[]],[13],[6,[\"link-to\"],[\"collection\",[28,[\"item\",\"id\"]]],null,{\"statements\":[[11,\"span\",[]],[5,[\"action\"],[[28,[null]],\"clearFilter\"]],[13],[1,[28,[\"item\",\"title\"]],false],[14]],\"locals\":[]},null],[14],[0,\"\\n                \"],[11,\"p\",[]],[13],[1,[28,[\"item\",\"description\"]],false],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"item\",\"tags\"]]],null,{\"statements\":[[0,\"                    \"],[11,\"div\",[]],[13],[0,\"Tags: \"],[1,[28,[\"item\",\"tags\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"                \"],[11,\"div\",[]],[15,\"class\",\"text-muted\"],[13],[0,\"Created on \"],[1,[33,[\"moment-format\"],[[28,[\"item\",\"dateCreated\"]],\"MMMM DD, YYYY\"],null],false],[0,\" \"],[14],[0,\"\\n            \"],[14],[0,\"\\n\"]],\"locals\":[\"item\"]},null],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"text-center\"],[13],[0,\"\\n\"],[6,[\"if\"],[[28,[\"showLoadMore\"]]],null,{\"statements\":[[6,[\"if\"],[[28,[\"loadingMore\"]]],null,{\"statements\":[[0,\"                    \"],[11,\"i\",[]],[15,\"class\",\"fa fa-circle-o-notch fa-spin fa-3x fa-fw text-muted m-t-md\"],[13],[14],[0,\"\\n\"]],\"locals\":[]},{\"statements\":[[0,\"                    \"],[11,\"button\",[]],[15,\"class\",\"btn btn-default\"],[5,[\"action\"],[[28,[null]],\"loadMore\"]],[13],[0,\" Load more \"],[14],[0,\"\\n\"]],\"locals\":[]}]],\"locals\":[]},null],[0,\"        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/meetings.hbs" } });
});
define("collections/templates/not-found", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Unn5Cf24", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"text-center m-t-lg\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"p-xl\"],[13],[0,\"\\n            \"],[11,\"div\",[]],[13],[11,\"i\",[]],[15,\"class\",\"fa fa-exclamation-triangle fa-5x\"],[13],[14],[14],[0,\"\\n            \"],[11,\"h1\",[]],[13],[0,\" Not Found \"],[14],[0,\"\\n            \"],[11,\"p\",[]],[15,\"class\",\"lead\"],[13],[0,\" Sorry, the page you are looking for is not here anymore. \"],[6,[\"link-to\"],[\"index\"],null,{\"statements\":[[0,\"Go home \"]],\"locals\":[]},null],[0,\" instead\"],[14],[0,\"\\n        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "collections/templates/not-found.hbs" } });
});
define('collections/transforms/embed', ['exports', 'ember-osf/transforms/embed'], function (exports, _embed) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _embed.default;
    }
  });
});
define('collections/transforms/fixstring', ['exports', 'ember-osf/transforms/fixstring'], function (exports, _fixstring) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fixstring.default;
    }
  });
});
define('collections/transforms/links', ['exports', 'ember-osf/transforms/links'], function (exports, _links) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _links.default;
    }
  });
});
define('collections/transforms/object', ['exports', 'ember-data', 'ember'], function (exports, _emberData, _ember) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Transform.extend({
        deserialize: function deserialize(serialized) {
            return _ember.default.isBlank(serialized) ? {} : serialized;
        },
        serialize: function serialize(deserialized) {
            return _ember.default.isBlank(deserialized) ? {} : deserialized;
        }
    });
});
define('collections/utils/ajax-helpers', ['exports', 'ember-osf/utils/ajax-helper'], function (exports, _ajaxHelper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajaxHelper.default;
    }
  });
  Object.defineProperty(exports, 'authenticatedAJAX', {
    enumerable: true,
    get: function () {
      return _ajaxHelper.authenticatedAJAX;
    }
  });
});
define('collections/utils/auth', ['exports', 'ember-osf/utils/auth'], function (exports, _auth) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _auth.default;
    }
  });
});
define('collections/utils/extract-doi-from-string', ['exports', 'ember-osf/utils/extract-doi-from-string'], function (exports, _extractDoiFromString) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _extractDoiFromString.default;
    }
  });
});
define('collections/utils/fix-special-char', ['exports', 'ember-osf/utils/fix-special-char'], function (exports, _fixSpecialChar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fixSpecialChar.default;
    }
  });
});
define('collections/utils/i18n/compile-template', ['exports', 'ember-i18n/utils/i18n/compile-template'], function (exports, _compileTemplate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _compileTemplate.default;
    }
  });
});
define('collections/utils/i18n/missing-message', ['exports', 'ember-i18n/utils/i18n/missing-message'], function (exports, _missingMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _missingMessage.default;
    }
  });
});
define('collections/utils/itemClasses', ['exports', 'ember', 'ember-get-config', 'ember-osf/utils/load-relationship'], function (exports, _ember, _emberGetConfig, _loadRelationship) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    /*
     *  Construct the individual data pieces shown to user and their states
     */
    var ViewData = _ember.default.Object.extend({
        value: null,
        loaded: false,
        visible: true,
        setValue: function setValue(newValue) {
            if (_ember.default.isNone(newValue)) {
                return;
            }
            this.set('value', newValue);
            this.set('loaded', true);
        },
        show: function show() {
            this.set('visible', true);
        },
        hide: function hide() {
            this.set('visible', false);
        },
        reset: function reset() {
            this.set('value', null);
            this.set('loaded', false);
        }
    });

    /*
      *  Base item variavles and helpers, sets content common to all or most
      */
    /*
     *  Classes for the Item detail view
     */

    var Item = _ember.default.Object.extend({
        viewContent: null,
        setAuthors: function setAuthors() {
            var _this = this;

            var contributors = _ember.default.A();
            var node = this.get('node');
            (0, _loadRelationship.default)(node, 'contributors', contributors).then(function () {
                _this.get('viewContent.authors').setValue(contributors);
            });
        },
        setCommonNodeContent: function setCommonNodeContent(node) {
            this.set('node', node);
            this.get('viewContent.description').setValue(node.get('description'));
            var tags = node.get('tags');
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
        resetContent: function resetContent() {
            this.set('viewContent', _ember.default.Object.create({
                title: ViewData.create(),
                description: ViewData.create(),
                tags: ViewData.create(),
                authors: ViewData.create(),
                sourceLink: ViewData.create(),
                wiki: ViewData.create({ visible: false }),
                file: ViewData.create({ visible: false })
            }));
        },
        init: function init() {
            this.resetContent();
            this.get('viewContent.title').setValue(this.get('item.title'));
        }
    });

    /*
      *  Builds data points for website type item
      */
    var Website = Item.extend({
        init: function init() {
            this._super();
            this.get('viewContent.description').setValue(this.get('item.metadata'));
            this.get('viewContent.sourceLink').setValue(this.get('item.url'));
            this.get('viewContent.tags').hide();
            this.get('viewContent.authors').hide();
        }
    });

    /*
      *  Builds data points for project ('node') type item
      */
    var Project = Item.extend({
        setWiki: function setWiki() {
            var _this2 = this;

            var node = this.get('node');
            var wikis = node.get('wikis');
            this.get('viewContent.wiki').show();
            if (wikis) {
                wikis.then(function (result) {
                    if (result.objectAt(0)) {
                        var url = result.objectAt(0).get('links.download');
                        var headers = {};
                        var authType = _emberGetConfig.default['ember-simple-auth'].authorizer;
                        _this2.get('session').authorize(authType, function (headerName, content) {
                            headers[headerName] = content;
                        });
                        _ember.default.$.ajax({
                            method: 'GET',
                            headers: headers,
                            url: url
                        }).done(function (data) {
                            _this2.get('viewContent.wiki').setValue(data); // eslint-disable-line ember/jquery-ember-run
                        });
                    } else {
                        _this2.get('viewContent.wiki').setValue('This project does not have wikis.');
                    }
                });
            } else {
                this.get('viewContent.wiki').setValue('Could not find wiki for this project.');
            }
        },
        init: function init() {
            var _this3 = this;

            this._super();
            this.get('store').findRecord('node', this.get('item.source_id')).then(function (node) {
                _this3.setCommonNodeContent(node);
                _this3.setWiki();
            });
        }
    });

    /*
      *  Builds data points for preprint type item
      */
    var Preprint = Item.extend({
        setPreprint: function setPreprint() {
            var _this4 = this;

            var node = this.get('node');
            this.get('viewContent.file').show();
            node.get('preprints').then(function (result) {
                if (result.objectAt(0)) {
                    result.objectAt(0).get('primaryFile').then(function (pf) {
                        _this4.get('viewContent.file').setValue(pf.get('links').download);
                    });
                }
            });
        },
        init: function init() {
            var _this5 = this;

            this._super();
            this.get('store').findRecord('node', this.get('item.source_id')).then(function (node) {
                _this5.setCommonNodeContent(node);
                _this5.setPreprint();
            });
        }
    });

    /*
      *  Builds data points for registration type item
      */
    var Registration = Item.extend({
        init: function init() {
            var _this6 = this;

            this._super();
            this.get('store').findRecord('registration', this.get('item.source_id')).then(function (node) {
                _this6.setCommonNodeContent(node);
            });
        }
    });

    exports.default = {
        viewData: ViewData,
        item: Item,
        website: Website,
        project: Project,
        preprint: Preprint,
        registration: Registration,
        presentation: Project, // TODO: Look at different detail pages for event and presentation items, but for now use project detail page
        event: Project
    };
});
define('collections/utils/load-relationship', ['exports', 'ember-osf/utils/load-relationship'], function (exports, _loadRelationship) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _loadRelationship.default;
    }
  });
});
define('collections/utils/sampleLandingSettings', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        branding: {
            colors: {
                primary: '#215264',
                secondary: '#eeeeee',
                background: '#e14b5a',
                backgroundText: '#ffffff'
            },
            logo: {
                label: 'socarxiv',
                url: 'https://osf.io/preprints/assets/img/provider_logos/socarxiv-small-ee6338993da17d8c871e23ae39d0b29e3c171abf.png',
                height: '140px'
            }
        },
        layout: [{
            type: 'landing-hero',
            title: 'You can override collection title here',
            tagline: 'Open archive of the social sciences',
            data: null,
            settings: {
                useLogo: true
            }
        }, {
            type: 'landing-list',
            title: 'Subjects',
            data: 'subjects',
            settings: null
        }, {
            type: 'landing-board',
            title: 'Steering Committee',
            data: 'people',
            settings: null
        }, {
            type: 'landing-copyright',
            title: null,
            data: 'links',
            settings: null
        }],
        data: {
            subjects: [{
                name: 'Arts and Humanities',
                label: 'Fine Arts, History, Music, Philosophy, Religion',
                link: '/preprints/socarxiv/discover?subject=Arts%20and%20Humanities'
            }, {
                name: 'Arts and Humanities',
                label: 'Fine Arts, History, Music, Philosophy, Religion',
                link: '/preprints/socarxiv/discover?subject=Arts%20and%20Humanities'
            }, {
                name: 'Arts and Humanities',
                label: 'Fine Arts, History, Music, Philosophy, Religion',
                link: '/preprints/socarxiv/discover?subject=Arts%20and%20Humanities'
            }, {
                name: 'Arts and Humanities',
                label: 'Fine Arts, History, Music, Philosophy, Religion',
                link: '/preprints/socarxiv/discover?subject=Arts%20and%20Humanities'
            }],
            people: [{
                firstName: 'Donna',
                lastName: 'Brown',
                institution: 'Massachusetts Institute of Technology'
            }, {
                firstName: 'Maria',
                lastName: 'Gonzales',
                institution: 'University of North Carolina at Chapel Hill'
            }, {
                firstName: 'George',
                lastName: 'Wu',
                institution: 'Massachusetts Institute of Technology'
            }, {
                firstName: 'Donna',
                lastName: 'Brown',
                institution: 'University of Maryland, College Park'
            }, {
                firstName: 'Maria',
                lastName: 'Gonzales',
                institution: 'University of North Carolina at Chapel Hill'
            }, {
                firstName: 'George',
                lastName: 'Wu',
                institution: 'University of Maryland, College Park'
            }, {
                firstName: 'Maria',
                lastName: 'Gonzales',
                institution: 'University of North Carolina at Chapel Hill'
            }, {
                firstName: 'Maria',
                lastName: 'Gonzales',
                institution: 'University of North Carolina at Chapel Hill'
            }, {
                firstName: 'George',
                lastName: 'Wu',
                institution: 'University of Maryland, College Park'
            }, {
                firstName: 'Maria',
                lastName: 'Gonzales',
                institution: 'University of North Carolina at Chapel Hill'
            }, {
                firstName: 'Maria',
                lastName: 'Gonzales',
                institution: 'University of North Carolina at Chapel Hill'
            }, {
                firstName: 'George',
                lastName: 'Wu',
                institution: 'University of Maryland, College Park'
            }, {
                firstName: 'Maria',
                lastName: 'Gonzales',
                institution: 'University of North Carolina at Chapel Hill'
            }],
            links: [{
                label: 'Support',
                url: '/support'
            }, {
                label: 'Contact',
                url: '/contact'
            }, {
                label: 'Twitter',
                url: '/twitter/somearchive',
                icon: 'fa-twitter'
            }]
        }
    };
});
define('collections/validators/alias', ['exports', 'ember-cp-validations/validators/alias'], function (exports, _alias) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _alias.default;
    }
  });
});
define('collections/validators/belongs-to', ['exports', 'ember-cp-validations/validators/belongs-to'], function (exports, _belongsTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _belongsTo.default;
    }
  });
});
define('collections/validators/collection', ['exports', 'ember-cp-validations/validators/collection'], function (exports, _collection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _collection.default;
    }
  });
});
define('collections/validators/confirmation', ['exports', 'ember-cp-validations/validators/confirmation'], function (exports, _confirmation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _confirmation.default;
    }
  });
});
define('collections/validators/date', ['exports', 'ember-cp-validations/validators/date'], function (exports, _date) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _date.default;
    }
  });
});
define('collections/validators/dependent', ['exports', 'ember-cp-validations/validators/dependent'], function (exports, _dependent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dependent.default;
    }
  });
});
define('collections/validators/ds-error', ['exports', 'ember-cp-validations/validators/ds-error'], function (exports, _dsError) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dsError.default;
    }
  });
});
define('collections/validators/exclusion', ['exports', 'ember-cp-validations/validators/exclusion'], function (exports, _exclusion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _exclusion.default;
    }
  });
});
define('collections/validators/format', ['exports', 'ember-cp-validations/validators/format'], function (exports, _format) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _format.default;
    }
  });
});
define('collections/validators/has-many', ['exports', 'ember-cp-validations/validators/has-many'], function (exports, _hasMany) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hasMany.default;
    }
  });
});
define('collections/validators/inclusion', ['exports', 'ember-cp-validations/validators/inclusion'], function (exports, _inclusion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inclusion.default;
    }
  });
});
define('collections/validators/length', ['exports', 'ember-cp-validations/validators/length'], function (exports, _length) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _length.default;
    }
  });
});
define('collections/validators/messages', ['exports', 'ember-cp-validations/validators/messages'], function (exports, _messages) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _messages.default;
    }
  });
});
define('collections/validators/number', ['exports', 'ember-cp-validations/validators/number'], function (exports, _number) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _number.default;
    }
  });
});
define('collections/validators/presence', ['exports', 'ember-cp-validations/validators/presence'], function (exports, _presence) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _presence.default;
    }
  });
});


define('collections/config/environment', ['ember'], function(Ember) {
  var prefix = 'collections';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("collections/app")["default"].create({"usingCors":true,"corsWithCreds":true,"apiURL":"https://dev-labs-2.cos.io/api","name":"collections","version":"0.0.0+57bd08a9"});
}
