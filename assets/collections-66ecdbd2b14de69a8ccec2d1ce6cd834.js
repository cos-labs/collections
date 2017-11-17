"use strict";



define('collections/adapters/action', ['exports', 'ember-osf/adapters/action'], function (exports, _action) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _action.default;
    }
  });
});
define('collections/adapters/application', ['exports', 'ember-data', 'collections/config/environment'], function (exports, _emberData, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var JSONAPIAdapter = _emberData.default.JSONAPIAdapter;
    exports.default = JSONAPIAdapter.extend({
        session: Ember.inject.service(),
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
            return '' + base;
        }
    });
});
define('collections/adapters/case', ['exports', 'ember-data', 'collections/config/environment'], function (exports, _emberData, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var JSONAPIAdapter = _emberData.default.JSONAPIAdapter;
    exports.default = JSONAPIAdapter.extend({

        session: Ember.inject.service(),

        // Polyfill queryRecord
        queryRecord: function queryRecord(store, type, query) {
            var url = this.buildURL(type.modelName, null, null, 'queryRecord', query) + '/';

            if (this.sortQueryParams) {
                query = this.sortQueryParams(query);
            }

            return this.ajax(url, 'GET', { data: query }).then(function (result) {
                result = result.data;
                // hack to fix https://github.com/emberjs/data/issues/3790
                // and https://github.com/emberjs/data/pull/3866
                try {
                    store.push({ data: null });
                    return { data: result || null };
                } catch (e) {
                    return { data: result || [] };
                }
            }, function (result) {
                return {
                    data: null
                };
            });
        },
        ajax: function ajax(url, method, hash) {
            hash = hash || {};
            hash.crossOrigin = true;
            hash.xhrFields = { withCredentials: true };
            hash.headers = hash.headers || {};
            hash.headers['X-CSRFTOKEN'] = this.get('session.data.authenticated.csrfToken');
            return this._super(url, method, hash);
        },
        buildURL: function buildURL(type, id) {
            var base = this._super.apply(this, arguments);
            var url = '' + _environment.default.APP.apiURL + base;
            console.log(url);
            return url;
        }
    });
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
define('collections/adapters/collection', ['exports', 'collections/adapters/application'], function (exports, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend({});
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
define('collections/adapters/group', ['exports', 'collections/adapters/application'], function (exports, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend({});
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
define('collections/adapters/item', ['exports', 'collections/adapters/application'], function (exports, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend({});
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
define('collections/adapters/osf-user', ['exports', 'ember-osf/adapters/user'], function (exports, _user) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _user.default.extend({
        pathForType: function pathForType() {
            return 'users';
        }
    });
});
define('collections/adapters/parameter-alias', ['exports', 'ember-data', 'collections/config/environment'], function (exports, _emberData, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var JSONAPIAdapter = _emberData.default.JSONAPIAdapter;
    exports.default = JSONAPIAdapter.extend({

        session: Ember.inject.service(),

        ajax: function ajax(url, method, hash) {
            hash = hash || {};
            hash.crossOrigin = true;
            hash.xhrFields = { withCredentials: true };
            hash.headers = hash.headers || {};
            hash.headers['X-CSRFTOKEN'] = this.get('session.data.authenticated.csrfToken');
            return this._super(url, method, hash);
        },
        buildURL: function buildURL(type, id, snapshot, requestType, query) {
            var base = this._super.apply(this, arguments);
            var url = [];
            url.push(_environment.default.APP.apiURL);
            url.push(base);
            var builtUrl = url.join('');
            return builtUrl;
        }
    });
});
define('collections/adapters/parameter-stub', ['exports', 'ember-data', 'collections/config/environment'], function (exports, _emberData, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var JSONAPIAdapter = _emberData.default.JSONAPIAdapter;
    exports.default = JSONAPIAdapter.extend({

        session: Ember.inject.service(),

        ajax: function ajax(url, method, hash) {
            hash = hash || {};
            hash.headers = hash.headers || {};
            hash.crossOrigin = true;
            hash.xhrFields = { withCredentials: true };
            hash.headers['X-CSRFTOKEN'] = this.get('session.data.authenticated.csrfToken');
            return this._super(url, method, hash);
        },
        buildURL: function buildURL(type, id, snapshot, requestType, query) {
            var base = this._super.apply(this, arguments);
            var url = [];
            url.push(_environment.default.APP.apiURL);
            url.push(base);
            var builtUrl = url.join('');
            return builtUrl;
        }
    });
});
define('collections/adapters/parameter', ['exports', 'ember-data', 'collections/config/environment'], function (exports, _emberData, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var JSONAPIAdapter = _emberData.default.JSONAPIAdapter;
    exports.default = JSONAPIAdapter.extend({

        session: Ember.inject.service(),

        ajax: function ajax(url, method, hash) {
            hash = hash || {};
            hash.crossOrigin = true;
            hash.xhrFields = { withCredentials: true };
            hash.headers = hash.headers || {};
            hash.headers['X-CSRFTOKEN'] = this.get('session.data.authenticated.csrfToken');
            return this._super(url, method, hash);
        },


        // Polyfill queryRecord
        queryRecord: function queryRecord(store, type, query) {
            var url = this.buildURL(type.modelName, null, null, 'queryRecord', query) + '/';

            console.log(url);

            if (this.sortQueryParams) {
                query = this.sortQueryParams(query);
            }

            return this.ajax(url, 'GET', { data: query }).then(function (result) {
                result = result.data;
                // hack to fix https://github.com/emberjs/data/issues/3790
                // and https://github.com/emberjs/data/pull/3866
                try {
                    store.push({ data: null });
                    return { data: result || null };
                } catch (e) {
                    return { data: result || [] };
                }
            }, function (result) {
                return {
                    data: null
                };
            });
        },
        buildURL: function buildURL(type, id, snapshot, requestType, query) {
            var base = this._super.apply(this, arguments);
            var url = [];
            url.push(_environment.default.APP.apiURL);
            url.push(base);
            var builtUrl = url.join('');
            return builtUrl;
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
define('collections/adapters/section', ['exports', 'ember-data', 'collections/config/environment'], function (exports, _emberData, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var JSONAPIAdapter = _emberData.default.JSONAPIAdapter;
    exports.default = JSONAPIAdapter.extend({

        session: Ember.inject.service(),

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
            return '' + _environment.default.APP.apiURL + base;
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
define('collections/adapters/user', ['exports', 'collections/adapters/application'], function (exports, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend({});
});
define('collections/adapters/widget', ['exports', 'ember-data', 'collections/config/environment'], function (exports, _emberData, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var JSONAPIAdapter = _emberData.default.JSONAPIAdapter;
    exports.default = JSONAPIAdapter.extend({
        session: Ember.inject.service(),
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
            return '' + _environment.default.APP.apiURL + base;
        }
    });
});
define('collections/adapters/workflow', ['exports', 'ember-data', 'collections/config/environment'], function (exports, _emberData, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var JSONAPIAdapter = _emberData.default.JSONAPIAdapter;
    exports.default = JSONAPIAdapter.extend({

        session: Ember.inject.service(),

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
            return '' + _environment.default.APP.apiURL + base;
        }
    });
});
define('collections/app', ['exports', 'ember-load-initializers', 'collections/resolver', 'collections/config/environment'], function (exports, _emberLoadInitializers, _resolver, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    Ember.Route.reopen({

        nav: Ember.inject.service(),

        beforeModel: function beforeModel() {
            if (!this.get('crumb')) return;
            this.set('crumb.label', this.title);
            this.set('crumb.route', this.routeName);
        },
        activate: function activate() {
            window.scrollTo(0, 0);
            var crumb = this.get('crumb');
            if (crumb) this.get('nav.crumbs').pushObject(crumb);
            console.log(this.get('nav.crumbs'));
        },
        deactivate: function deactivate() {
            console.log('deactivate');
            var crumb = this.get('crumb');
            if (crumb) this.get('nav.crumbs').removeObject(crumb);
        }
    });

    Ember.MODEL_FACTORY_INJECTIONS = true;

    var App = Ember.Application.extend({
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
define('collections/authenticators/osf-token', ['exports', 'ember-simple-auth/authenticators/base', 'collections/config/environment'], function (exports, _base, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _base.default.extend({
        session: Ember.inject.service(),

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

            return new Ember.RSVP.Promise(function (resolve, reject) {
                _this.getUserInfo().then(function (response) {
                    response = response.data.attributes;
                    if (!response || !response.token) {
                        if (redirectToLogin) {
                            window.location = _environment.default.apiBaseUrl + '/accounts/osf/login/?' + Ember.$.param({ next: _environment.default.apiBaseUrl });
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
            return Ember.$.ajax({
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
            var that = this;
            return Ember.$.ajax({
                url: _environment.default.APP.apiURL + '/users/me',
                crossDomain: true,
                xhrFields: { withCredentials: true }
            }).then(function (results) {
                that.get('session').set('fullName', results.data.attributes['full-name']);
                return results;
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
define("collections/components/bread-crumbs", ["exports", "ember-breadcrumbs/components/bread-crumbs"], function (exports, _breadCrumbs) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _breadCrumbs.default;
});
define('collections/components/browse-list/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        session: Ember.inject.service(),
        store: Ember.inject.service(),
        organizeMode: false,
        groupView: false,
        cardView: true,
        showDeleteConfirmation: false, // Modal for deleting items
        showGroupConfirmation: false, // Modal for grouping
        addingGroup: false,
        groupTitle: '',
        selectedItems: Ember.A(), // List of items selected for actions like delete
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
                    return Ember.run.once(function () {
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
  exports.default = Ember.HTMLBars.template({ "id": "YIgyEBqV", "block": "{\"symbols\":[\"item\",\"item\",\"item\"],\"statements\":[[6,\"div\"],[9,\"class\",\"coll-items\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"row m-b-lg\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"model\",\"list\"]]],null,{\"statements\":[[0,\"                \"],[6,\"div\"],[9,\"class\",\"col-xs-6\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"organizeMode\"]]],null,{\"statements\":[[4,\"if\",[[25,\"not\",[[20,[\"groupView\"]]],null]],null,{\"statements\":[[0,\"                            \"],[6,\"button\"],[9,\"class\",\"btn btn-default\"],[10,\"disabled\",[25,\"if\",[[20,[\"selectedItems\",\"length\"]],\"\",\"disabled\"],null],null],[3,\"action\",[[19,0,[]],\"toggleGroupConfirmation\"]],[7],[0,\"Group Selected\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                        \"],[6,\"button\"],[9,\"class\",\"btn btn-danger\"],[10,\"disabled\",[25,\"if\",[[20,[\"selectedItems\",\"length\"]],\"\",\"disabled\"],null],null],[3,\"action\",[[19,0,[]],\"toggleDeleteConfirmation\"]],[7],[0,\"Delete selected \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                \"],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"                    \"],[6,\"div\"],[9,\"class\",\"col-xs-6 text-right\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"organizeMode\"]]],null,{\"statements\":[[0,\"                          \"],[6,\"button\"],[9,\"class\",\"btn btn-default\"],[3,\"action\",[[19,0,[]],\"toggleOrganizeMode\"]],[7],[0,\"Cancel organizing \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                          \"],[6,\"button\"],[9,\"class\",\"btn btn-info\"],[3,\"action\",[[19,0,[]],\"toggleOrganizeMode\"]],[7],[0,\"Organize Items \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"                      \"],[6,\"div\"],[9,\"class\",\"btn-group\"],[7],[0,\"\\n                          \"],[6,\"button\"],[10,\"class\",[26,[\"btn \",[25,\"if\",[[20,[\"cardView\"]],\"btn-info\",\"btn-default\"],null]]]],[3,\"action\",[[19,0,[]],\"changeView\",true]],[7],[0,\"\\n                              \"],[6,\"i\"],[9,\"class\",\"fa fa-th\"],[7],[8],[0,\"\\n                          \"],[8],[0,\"\\n                          \"],[6,\"button\"],[10,\"class\",[26,[\"btn \",[25,\"unless\",[[20,[\"cardView\"]],\"btn-info\",\"btn-default\"],null]]]],[3,\"action\",[[19,0,[]],\"changeView\",false]],[7],[0,\"\\n                              \"],[6,\"i\"],[9,\"class\",\"fa fa-list\"],[7],[8],[0,\"\\n                          \"],[8],[0,\"\\n                      \"],[8],[0,\"\\n                  \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"model\",\"list\"]]],null,{\"statements\":[[4,\"if\",[[20,[\"cardView\"]]],null,{\"statements\":[[4,\"each\",[[20,[\"model\",\"list\"]]],null,{\"statements\":[[0,\"                        \"],[1,[25,\"collection-item\",null,[[\"item\",\"cardView\",\"toggleSelectedList\",\"organizeMode\",\"class\"],[[19,3,[]],[20,[\"cardView\"]],[25,\"action\",[[19,0,[]],\"toggleSelectedList\"],null],[20,[\"organizeMode\"]],\"col-sm-6 col-lg-4\"]]],false],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[]},{\"statements\":[[0,\"                   \"],[1,[25,\"item-table\",null,[[\"model\",\"cardView\",\"toggleSelectedList\",\"organizeMode\"],[[20,[\"model\"]],[20,[\"cardView\"]],[25,\"action\",[[19,0,[]],\"toggleSelectedList\"],null],[20,[\"organizeMode\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[0,\"                \"],[6,\"p\"],[9,\"class\",\"text-center text-muted p-xl\"],[7],[0,\" You don't have any items yet. Go to \\\"Add content\\\" to add items\"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[4,\"if\",[[20,[\"showDeleteConfirmation\"]]],null,{\"statements\":[[6,\"div\"],[9,\"class\",\"modal fade in\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog\"],[9,\"role\",\"document\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"aria-label\",\"Close\"],[3,\"action\",[[19,0,[]],\"toggleDeleteConfirmation\"]],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h4\"],[9,\"class\",\"modal-title\"],[7],[0,\"Delete items?\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"p\"],[7],[0,\"The following items will be removed:\"],[8],[0,\"\\n        \"],[6,\"ul\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"selectedItems\"]]],null,{\"statements\":[[0,\"                \"],[6,\"li\"],[7],[1,[19,2,[\"title\"]],false],[8],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default\"],[3,\"action\",[[19,0,[]],\"toggleDeleteConfirmation\"]],[7],[0,\"Close\"],[8],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-danger\"],[3,\"action\",[[19,0,[]],\"deleteSelected\"]],[7],[0,\"Delete\"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[2,\" /.modal-content \"],[0,\"\\n  \"],[8],[2,\" /.modal-dialog \"],[0,\"\\n\"],[8],[2,\" /.modal \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal-backdrop fade in\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[20,[\"showGroupConfirmation\"]]],null,{\"statements\":[[6,\"div\"],[9,\"class\",\"modal fade in\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog\"],[9,\"role\",\"document\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"aria-label\",\"Close\"],[3,\"action\",[[19,0,[]],\"toggleGroupConfirmation\"]],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h4\"],[9,\"class\",\"modal-title\"],[7],[0,\"Group selected items?\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[6,\"p\"],[7],[0,\" Enter title for Group \"],[8],[0,\"\\n        \"],[1,[25,\"input\",null,[[\"class\",\"value\",\"placeholder\",\"enter\"],[\"form-control\",[20,[\"groupTitle\"]],\"e.g. Microbiology studies\",\"groupSelected\"]]],false],[0,\"\\n        \"],[6,\"p\"],[9,\"class\",\"m-t-md\"],[7],[0,\"The following items will be added to the group:\"],[8],[0,\"\\n        \"],[6,\"ul\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"selectedItems\"]]],null,{\"statements\":[[0,\"                \"],[6,\"li\"],[7],[1,[19,1,[\"title\"]],false],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default\"],[3,\"action\",[[19,0,[]],\"toggleGroupConfirmation\"]],[7],[0,\"Close\"],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"addingGroup\"]]],null,{\"statements\":[[0,\"            \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-success disabled\"],[7],[0,\"Grouping \"],[6,\"i\"],[9,\"class\",\"fa fa-spinner fa-pulse\"],[7],[8],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-success\"],[10,\"disabled\",[25,\"unless\",[[20,[\"groupTitle\"]],\"disabled\"],null],null],[3,\"action\",[[19,0,[]],\"groupSelected\"]],[7],[0,\"Group\"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[8],[0,\"\\n    \"],[8],[2,\" /.modal-content \"],[0,\"\\n  \"],[8],[2,\" /.modal-dialog \"],[0,\"\\n\"],[8],[2,\" /.modal \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal-backdrop fade in\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/browse-list/template.hbs" } });
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
define('collections/components/case-list-item/component', ['exports', 'npm:ember-source/dist/ember-template-compiler'], function (exports, _emberTemplateCompiler) {
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

    exports.default = Ember.Component.extend({

        classNames: ['case-details'],
        parameters: {},
        store: Ember.inject.service(),
        router: Ember.inject.service('-routing'),
        loading: true,
        caseDescriptionTemplate: Ember.computed(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var refreshParameters, wf, templateName;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            refreshParameters = function refreshParameters() {
                                _this.get('store').findRecord('case', _this.get('case.id'), { reload: true }).then(function (caxe) {
                                    _this.set('parameters', _this.get('case.parameters').reduce(function (parameters, parameter) {
                                        parameters[parameter.get('name').replace(/-([a-z])/g, function (g) {
                                            return g[1].toUpperCase();
                                        })] = parameter.get('value');
                                        return parameters;
                                    }, {}));
                                });
                            };

                            refreshParameters();
                            this.set('refreshParameters', setInterval(refreshParameters, 10000));
                            _context.next = 5;
                            return this.get('store').findRecord('workflow', this.get('case.workflow.id'), { reload: true });

                        case 5:
                            wf = _context.sent;
                            templateName = 'case-description-' + this.get('case.id');

                            Ember.TEMPLATES[templateName] = _emberTemplateCompiler.default.compile(wf.get('caseDescription'));
                            this.set('loading', false);
                            return _context.abrupt('return', templateName);

                        case 10:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }))),

        willDestroyElement: function willDestroyElement() {
            clearInterval(this.get('refreshParameters'));
        },


        actions: {
            continueCase: function continueCase(caxe, collection) {
                this.get('router').transitionTo('collections.collection.add', this.get('collection').id, this.get('case').id);
            }
        }

    });
});
define("collections/components/case-list-item/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "I7ITx18O", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"form-type\"],[7],[12,[25,\"await\",[[20,[\"caseDescriptionTemplate\"]]],null],[]],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[4,\"if\",[[20,[\"loading\"]]],null,{\"statements\":[[0,\"\\t\"],[1,[25,\"loading-spinner\",null,[[\"fullPage\",\"style\"],[false,\"fa-lg\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[6,\"div\"],[9,\"class\",\"continue-button\"],[7],[0,\"\\n    \"],[6,\"a\"],[9,\"class\",\"btn btn-success pull-right\"],[3,\"action\",[[19,0,[]],\"continueCase\",[20,[\"case\"]],[20,[\"collection\"]]]],[7],[0,\"Continue\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":true}", "meta": { "moduleName": "collections/components/case-list-item/template.hbs" } });
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
define('collections/components/collection-detail/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        classNames: ['card', 'coll-single'],

        tags: Ember.computed(function () {
            return this.get('collection.tags').split(',').filter(function (tag) {
                return tag !== '';
            });
        })

    });
});
define("collections/components/collection-detail/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "HZ9N3YwB", "block": "{\"symbols\":[\"tag\"],\"statements\":[[6,\"div\"],[9,\"class\",\"card-content\"],[7],[0,\"\\n    \"],[6,\"h3\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"collections.collection\",[20,[\"collection\",\"id\"]]],null,{\"statements\":[[0,\"            \"],[6,\"span\"],[7],[0,\"\\n                \"],[1,[20,[\"collection\",\"title\"]],false],[0,\"\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[1,[25,\"truncate-text\",[[20,[\"collection\",\"description\"]]],[[\"limit\",\"omission\"],[250,\"...\"]]],false],[8],[0,\"\\n\\n\"],[4,\"each\",[[20,[\"tags\"]]],null,{\"statements\":[[0,\"        \"],[6,\"a\"],[9,\"class\",\"tag\"],[7],[1,[19,1,[]],false],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[8],[0,\"\\n\"],[6,\"footer\"],[7],[0,\"\\n    \"],[6,\"h6\"],[9,\"class\",\"text-muted\"],[7],[0,\"\\n        \"],[1,[20,[\"collection\",\"titleCaseCollectionType\"]],false],[0,\" | Updated on \"],[1,[25,\"moment-format\",[[20,[\"collection\",\"dateUpdated\"]],\"MMMM DD, YYYY\"],null],false],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/collection-detail/template.hbs" } });
});
define('collections/components/collection-item/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        tagName: null,
        classNameBindings: ['rowSelected:item-row-selected'],
        cardView: true,
        item: null,
        selected: false,
        rowSelected: Ember.computed('organizeMode', 'item.selected', function () {
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
  exports.default = Ember.HTMLBars.template({ "id": "xs/EdE3t", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[20,[\"cardView\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"coll-item-wrapper\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"organizeMode\"]]],null,{\"statements\":[[4,\"unless\",[[25,\"eq\",[[20,[\"item\",\"type\"]],\"group\"],null]],null,{\"statements\":[[0,\"                \"],[6,\"div\"],[10,\"class\",[26,[\"coll-item-organize pointer \",[25,\"if\",[[20,[\"item\",\"selected\"]],\"item-selected\"],null]]]],[3,\"action\",[[19,0,[]],\"markSelected\",[20,[\"item\"]]]],[7],[0,\"\\n                    \"],[6,\"i\"],[9,\"class\",\"fa fa-check\"],[7],[8],[0,\"\\n                    \"],[6,\"p\"],[7],[1,[25,\"if\",[[20,[\"item\",\"selected\"]],\"Click to unselect\",\"Click to select\"],null],false],[8],[0,\"\\n                \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"        \"],[6,\"div\"],[10,\"class\",[26,[\"coll-item coll-item-type-\",[20,[\"item\",\"type\"]],\" \",[25,\"if\",[[25,\"eq\",[[20,[\"item\",\"type\"]],\"group\"],null],\"coll-item-isgroup\"],null]]]],[7],[0,\"\\n            \"],[6,\"p\"],[7],[0,\" Author: \"],[1,[20,[\"item\",\"createdBy\",\"computedFullName\"]],false],[0,\" \"],[8],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[6,\"td\"],[7],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"td\"],[7],[1,[20,[\"item\",\"createdBy\",\"computedFullName\"]],false],[8],[0,\"\\n    \"],[6,\"td\"],[7],[1,[20,[\"item\",\"type\"]],false],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"organizeMode\"]]],null,{\"statements\":[[0,\"        \"],[6,\"td\"],[7],[0,\"\\n\\n\"],[4,\"unless\",[[25,\"eq\",[[20,[\"item\",\"type\"]],\"group\"],null]],null,{\"statements\":[[0,\"                \"],[1,[25,\"input\",null,[[\"checked\",\"type\",\"click\"],[[20,[\"item\",\"selected\"]],\"checkbox\",[25,\"action\",[[19,0,[]],\"markSelected\",[20,[\"item\"]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/collection-item/template.hbs" } });
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
define('collections/components/donate-banner/component', ['exports', 'ember-osf/components/donate-banner/component'], function (exports, _component) {
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
define('collections/components/element-radio-button/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({

        tagName: 'input',
        type: 'radio',

        attributeBindings: ['id', 'type', 'htmlChecked:checked', 'value', 'name', 'disabled'],

        htmlChecked: Ember.computed('value', 'checked', function () {
            return this.get('value') === this.get('checked');
        }),

        change: function change() {
            this.set('checked', this.get('value'));
        },
        _setCheckedProp: function _setCheckedProp() {
            if (!this.$()) {
                return;
            }
            this.$().prop('checked', this.get('htmlChecked'));
        },


        _updateElementValue: Ember.observer('htmlChecked', function () {
            Ember.run.once(this, '_setCheckedProp');
        }),

        /* Used temporally till we make all radio buttons work */
        didRender: function didRender() {
            if (this.get('value') == 'appendix' || this.get('value') == 'preprints' || this.get('value') == 'registrations' || this.get('value') == 'bookmarks' || this.get('value') == 'proposals') {
                this.set('disabled', true);
            }
        }
    });
});
define("collections/components/element-radio-button/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ZmIVloif", "block": "{\"symbols\":[],\"statements\":[],\"hasEval\":false}", "meta": { "moduleName": "collections/components/element-radio-button/template.hbs" } });
});
define('collections/components/ember-ace-completion-tooltip', ['exports', 'ember-ace/components/ember-ace-completion-tooltip'], function (exports, _emberAceCompletionTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberAceCompletionTooltip.default;
    }
  });
});
define('collections/components/ember-ace', ['exports', 'ember-ace/components/ember-ace'], function (exports, _emberAce) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberAce.default;
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
define('collections/components/file-editor/component', ['exports', 'ember-osf/components/file-editor/component'], function (exports, _component) {
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
define('collections/components/loading-spinner/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Component = Ember.Component;
    exports.default = Component.extend({
        classNames: ['loading'],
        classNameBindings: ['fullPage'],
        fullPage: false

    });
});
define("collections/components/loading-spinner/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "krsHYcX6", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1],[0,\"\\n\"],[6,\"i\"],[10,\"class\",[26,[\"fa fa-spinner fa-spin \",[18,\"style\"]]]],[9,\"aria-hidden\",\"true\"],[7],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/loading-spinner/template.hbs" } });
});
define('collections/components/maintenance-banner/component', ['exports', 'ember-osf/components/maintenance-banner/component'], function (exports, _component) {
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
define('collections/components/nav-bar/component', ['exports'], function (exports) {
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

    exports.default = Ember.Component.extend({

        session: Ember.inject.service(),
        nav: Ember.inject.service(),
        router: Ember.inject.service('-routing'),

        elementId: 'collections-nav',
        tagName: 'nav',
        attributeBindings: ['style'],

        style: Ember.computed('model.settings.branding.colors.primary', function () {
            var pColor = this.get('model.settings.branding.colors.primary');
            if (!pColor) pColor = '#3c515b';
            return 'background-color:' + pColor;
        }),
        actions: {
            transition: function transition(link) {
                var _get;

                var models = link.models || [];
                (_get = this.get('router')).transitionTo.apply(_get, [link.route].concat(_toConsumableArray(models)));
            }
        }

    });
});
define("collections/components/nav-bar/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qwiNBRVg", "block": "{\"symbols\":[\"link\",\"crumb\"],\"statements\":[[6,\"div\"],[9,\"class\",\"nav-item-group breadcrumbs\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"nav\",\"crumbs\"]]],null,{\"statements\":[[0,\"        \"],[6,\"a\"],[9,\"class\",\"nav-item crumb\"],[3,\"action\",[[19,0,[]],\"transition\",[19,2,[]]]],[7],[1,[19,2,[\"label\"]],false],[8],[0,\"\\n\"]],\"parameters\":[2]},null],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"nav-item-group secondary-nav\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"nav\",\"links\"]]],null,{\"statements\":[[0,\"        \"],[6,\"a\"],[9,\"class\",\"nav-item\"],[3,\"action\",[[19,0,[]],\"transition\",[19,1,[]]]],[7],[1,[19,1,[\"label\"]],false],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/nav-bar/template.hbs" } });
});
define('collections/components/navbar-auth-dropdown/component', ['exports', 'ember-osf/components/navbar-auth-dropdown/component'], function (exports, _component) {
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
define('collections/components/new-navbar-auth-dropdown/component', ['exports', 'ember-osf/mixins/analytics', 'ember-get-config'], function (exports, _analytics, _emberGetConfig) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend(_analytics.default, {
        session: Ember.inject.service(),
        currentUser: Ember.inject.service(),
        i18n: Ember.inject.service(),
        tagName: 'div',
        classNames: ['dropdown-submenu'],
        redirectUrl: null,
        subMenuOpenState: false,
        notAuthenticated: Ember.computed.not('session.isAuthenticated'),
        fullName: Ember.computed('session', function () {
            return this.get('session.session.content.authenticated.user.first-name') + ' ' + this.get('session.session.content.authenticated.user.last-name');
        }),

        /**
         * The URL to use for signup. May be overridden, eg for special campaign pages
         *
         * @property signupUrl
         * @type {String}
         */
        signupUrl: _emberGetConfig.default.OSF.url + 'register',

        gravatarUrl: Ember.computed('user', function () {
            var imgLink = this.get('user.links.profile_image');

            return imgLink ? imgLink + '&s=25' : '';
        }),
        host: _emberGetConfig.default.OSF.url,
        user: null,
        _loadCurrentUser: function _loadCurrentUser() {
            var _this = this;

            this.get('currentUser').load().then(function (user) {
                return _this.set('user', user);
            });
        },
        init: function init() {
            this._super.apply(this, arguments);
            // TODO: React to changes in service/ event?
            if (this.get('session.isAuthenticated')) {
                this._loadCurrentUser();
            }
        },

        // TODO: These parameters are defined in osf settings.py; make sure ember config matches.
        allowLogin: true,
        enableInstitutions: true,
        actions: {
            toggleSubMenu: function toggleSubMenu(e) {
                this.toggleProperty('subMenuOpenState');
                e.stopPropagation();
                e.preventDefault();
            },
            logout: function logout() {
                var redirectUrl = this.get('redirectUrl');
                var query = redirectUrl ? '?' + Ember.$.param({ next_url: redirectUrl }) : '';
                // TODO: May not work well if logging out from page that requires login- check?
                this.get('session').invalidate().then(function () {
                    return window.location.href = _emberGetConfig.default.OSF.url + 'logout/' + query;
                });
            }
        }
    });
});
define("collections/components/new-navbar-auth-dropdown/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "yOfZDITl", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[20,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"\\n\"],[0,\"\\n    \"],[6,\"button\"],[9,\"id\",\"auth-dropdown\"],[9,\"role\",\"button\"],[9,\"ria-expanded\",\"false\"],[10,\"aria-label\",[25,\"t\",[\"eosf.authDropdown.toggleAuthDropdown\"],null],null],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"toggleSubMenu\"],null],null],[7],[0,\"\\n            \"],[6,\"img\"],[9,\"class\",\"user-gravatar\"],[10,\"src\",[26,[[20,[\"session\",\"session\",\"content\",\"authenticated\",\"user\",\"gravatar\"]],\"?s=25\"]]],[9,\"alt\",\"User gravatar\"],[7],[8],[0,\"\\n            \"],[1,[18,\"fullName\"],false],[0,\"\\n            \"],[6,\"span\"],[9,\"class\",\"caret\"],[7],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"dropdown-menu osf-dropdown-content\"],[10,\"data-open\",[26,[[18,\"subMenuOpenState\"]]]],[7],[0,\"\\n\\n\"],[4,\"if\",[[20,[\"headline\"]]],null,{\"statements\":[[0,\"            \"],[6,\"li\"],[9,\"style\",\"margin-left:10%;\"],[7],[1,[18,\"headline\"],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[6,\"a\"],[10,\"href\",[26,[[20,[\"serviceLinks\",\"profile\"]]]]],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"click\",\"link\",\"Navbar - MyProfile\"],null],null],[7],[0,\"\\n                \"],[6,\"i\"],[9,\"class\",\"fa fa-user fa-lg p-r-xs\"],[7],[8],[0,\"\\n                \"],[1,[25,\"t\",[\"eosf.authDropdown.myProfile\"],null],false],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"a\"],[10,\"href\",[26,[[20,[\"serviceLinks\",\"osfSupport\"]]]]],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"click\",\"link\",\"Navbar - Support\"],null],null],[7],[0,\"\\n                \"],[6,\"i\"],[9,\"class\",\"fa fa-life-ring fa-lg p-r-xs\"],[7],[8],[0,\"\\n                \"],[1,[25,\"t\",[\"eosf.authDropdown.osfSupport\"],null],false],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"a\"],[10,\"href\",[26,[[20,[\"serviceLinks\",\"settings\"]]]]],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"click\",\"link\",\"Navbar - Settings\"],null],null],[7],[0,\"\\n                \"],[6,\"i\"],[9,\"class\",\"fa fa-cog fa-lg p-r-xs\"],[7],[8],[0,\"\\n                \"],[1,[25,\"t\",[\"eosf.authDropdown.settings\"],null],false],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"a\"],[9,\"class\",\"logoutLink\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"click\",\"link\",\"Navbar - Logout\"],null],null],[9,\"role\",\"button\"],[3,\"action\",[[19,0,[]],\"logout\"]],[7],[0,\"\\n                \"],[6,\"i\"],[9,\"class\",\"fa fa-sign-out fa-lg p-r-xs\"],[7],[8],[0,\"\\n                \"],[1,[25,\"t\",[\"eosf.authDropdown.logOut\"],null],false],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[20,[\"allowLogin\"]]],null,{\"statements\":[[0,\"\\n\"],[4,\"if\",[[20,[\"institution\"]]],null,{\"statements\":[[0,\"\\n\"],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"btn-group\"],[7],[0,\"\\n            \"],[6,\"a\"],[9,\"href\",\"${domain}login/?campaign=institution&redirect_url=${redirect_url}\"],[9,\"class\",\"btn btn-info btn-top-login\"],[7],[0,\"\\n                    \"],[1,[25,\"t\",[\"eosf.authDropdown.signIn\"],null],false],[0,\"\\n                    \"],[6,\"span\"],[9,\"class\",\"hidden-xs\"],[7],[6,\"i\"],[9,\"class\",\"fa fa-arrow-right\"],[7],[8],[8],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"\\n            \"],[6,\"a\"],[10,\"href\",[26,[[18,\"signupUrl\"]]]],[9,\"class\",\"btn btn-success btn-top-signup m-l-sm m-r-xs\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"click\",\"link\",\"Navbar - SignUp\"],null],null],[7],[0,\"\\n                    Sign up\\n            \"],[8],[0,\"\\n            \"],[6,\"a\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"click\",\"link\",\"Navbar - SignIn\"],null],null],[9,\"class\",\"btn btn-info btn-top-login m-r-xs\"],[9,\"role\",\"button\"],[3,\"action\",[[19,0,[]],[20,[\"loginAction\"]]]],[7],[0,\"\\n                    Sign in\\n            \"],[8],[0,\"\\n\\n\"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/new-navbar-auth-dropdown/template.hbs" } });
});
define('collections/components/new-osf-navbar/component', ['exports', 'ember-get-config', 'ember-osf/mixins/analytics'], function (exports, _emberGetConfig, _analytics) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend(_analytics.default, {

        elementId: 'osf-nav',
        tagName: 'nav',
        classNames: [],

        navLinks: [{
            name: 'Explore',
            type: 'link-to',
            route: 'explore'
        }, {
            name: 'My Collection',
            type: 'link-to',
            route: 'collections.my-collection'
        }, {
            name: 'My Tasks',
            type: 'link-to',
            route: 'tasks'
        }, {
            name: 'Support',
            type: 'link',
            href: 'https://osf.io/support/'
        }],

        session: Ember.inject.service(),
        showSearch: false,
        osfServices: {},
        currentService: Ember.computed(function () {
            // Pulls current service name from consuming service's config file
            var appName = 'Collections';
            if (appName === 'Dummy App') {
                appName = 'Home';
            }
            return appName.toUpperCase();
        }),
        currentServiceLink: Ember.computed('currentService', function () {
            var serviceMapping = {
                HOME: 'osfHome',
                PREPRINTS: 'preprintsHome',
                REGISTRIES: 'registriesHome',
                MEETINGS: 'meetingsHome',
                COLLECTIONS: 'collectionsHome'
            };
            var service = this.get('currentService');
            return '/';
        }),
        actions: {
            // Toggles whether search bar is displayed (for searching OSF)
            toggleSearch: function toggleSearch() {
                this.toggleProperty('showSearch');
                this.send('closeSecondaryNavigation');
            },
            closeSecondaryNavigation: function closeSecondaryNavigation() {
                this.$('.navbar-collapse').collapse('hide');
            },
            closeSearch: function closeSearch() {
                this.set('showSearch', false);
            },
            closeSecondaryAndSearch: function closeSecondaryAndSearch() {
                this.send('closeSecondaryNavigation');
                this.send('closeSearch');
            }
        },
        host: _emberGetConfig.default.OSF.url

    });
});
define("collections/components/new-osf-navbar/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ioPa91ww", "block": "{\"symbols\":[\"navLink\"],\"statements\":[[6,\"div\"],[9,\"class\",\"nav-item-group global-nav\"],[7],[0,\"\\n\\n\"],[4,\"link-to\",[\"index\"],null,{\"statements\":[[0,\"        \"],[6,\"span\"],[9,\"class\",\"navbar-logo\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"link-to\",[\"index\"],[[\"class\"],[\"service-link\"]],{\"statements\":[[0,\"        \"],[6,\"span\"],[9,\"class\",\"osf\"],[7],[0,\"OSF\"],[8],[6,\"span\"],[9,\"class\",\"service-name\"],[7],[0,\"COLLECTIONS\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[0,\"    \"],[6,\"div\"],[9,\"class\",\"dropdown dropdown-osf-service\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"class\",\"dropdown-toggle\"],[9,\"data-toggle\",\"dropdown\"],[9,\"role\",\"button\"],[9,\"aria-expanded\",\"false\"],[10,\"aria-label\",[25,\"t\",[\"eosf.navbar.togglePrimary\"],null],null],[3,\"action\",[[19,0,[]],\"closeSecondaryAndSearch\"]],[3,\"action\",[[19,0,[]],\"click\",\"button\",\"Navbar - Dropdown Arrow\"]],[7],[0,\"\\n                \"],[6,\"span\"],[9,\"class\",\"caret\"],[7],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"dropdown-content\"],[9,\"role\",\"menu\"],[7],[0,\"\\n            \"],[6,\"a\"],[9,\"href\",\"https://staging.osf.io\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"click\",\"link\",[25,\"concat\",[\"Navbar - HOME\"],null]],null],null],[7],[0,\"\\n                    OSF\"],[6,\"b\"],[7],[0,\"HOME\"],[8],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"a\"],[9,\"href\",\"https://staging.osf.io\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"click\",\"link\",[25,\"concat\",[\"Navbar - PREPRINTS\"],null]],null],null],[7],[0,\"\\n                    OSF\"],[6,\"b\"],[7],[0,\"PREPRINTS\"],[8],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"a\"],[9,\"href\",\"https://staging.osf.io\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"click\",\"link\",[25,\"concat\",[\"Navbar - REGISTRIES\"],null]],null],null],[7],[0,\"\\n                    OSF\"],[6,\"b\"],[7],[0,\"REGISTRIES\"],[8],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"a\"],[9,\"href\",\"https://staging.osf.io\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"click\",\"link\",[25,\"concat\",[\"Navbar - MEETINGS\"],null]],null],null],[7],[0,\"\\n                    OSF\"],[6,\"b\"],[7],[0,\"MEETINGS\"],[8],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n\"],[8],[0,\"\\n\\n\"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"nav-item-group local-nav dropdown dropdown-nav\"],[9,\"id\",\"dropdown-hamburger\"],[7],[0,\"\\n\"],[0,\"    \"],[6,\"a\"],[9,\"type\",\"button\"],[9,\"role\",\"button\"],[9,\"class\",\"hamburger dropdown-button\"],[9,\"data-toggle\",\"dropdown\"],[9,\"data-target\",\"#secondary-navigation\"],[10,\"aria-label\",[25,\"t\",[\"eosf.navbar.toggleSecondary\"],null],null],[7],[0,\"\\n            \"],[6,\"span\"],[9,\"class\",\"hamburger-bar\"],[7],[8],[0,\"\\n            \"],[6,\"span\"],[9,\"class\",\"hamburger-bar\"],[7],[8],[0,\"\\n            \"],[6,\"span\"],[9,\"class\",\"hamburger-bar\"],[7],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"dropdown-content\"],[7],[0,\"\\n\\n\"],[4,\"each\",[[20,[\"navLinks\"]]],null,{\"statements\":[[4,\"if\",[[25,\"and\",[[25,\"eq\",[[20,[\"currentService\"]],\"HOME\"],null],[25,\"eq\",[[19,1,[\"type\"]],\"search\"],null]],null]],null,{\"statements\":[[0,\"\\n\"],[0,\"                \"],[6,\"a\"],[9,\"role\",\"button\"],[9,\"class\",\"btn-link search-toggle\"],[3,\"action\",[[19,0,[]],\"toggleSearch\"]],[3,\"action\",[[19,0,[]],\"click\",\"button\",[25,\"concat\",[\"Navbar - \",[20,[\"currentService\"]],[19,1,[\"name\"]]],null]]],[7],[0,\"\\n                        \"],[1,[19,1,[\"name\"]],false],[0,\"\\n                \"],[8],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"\\n\"],[4,\"if\",[[25,\"eq\",[[19,1,[\"type\"]],\"donateToCOS\"],null]],null,{\"statements\":[[0,\"                    \"],[6,\"a\"],[10,\"href\",[26,[[19,1,[\"href\"]]]]],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"click\",\"link\",[25,\"concat\",[\"Navbar - \",[19,1,[\"name\"]]],null]],null],null],[7],[0,\"\\n                            \"],[1,[19,1,[\"name\"]],false],[0,\"\\n                    \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[25,\"eq\",[[19,1,[\"type\"]],\"link-to\"],null]],null,{\"statements\":[[4,\"link-to\",[[19,1,[\"route\"]]],null,{\"statements\":[[0,\"                        \"],[1,[19,1,[\"name\"]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"                    \"],[6,\"a\"],[10,\"href\",[26,[[19,1,[\"href\"]]]]],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"click\",\"link\",[25,\"concat\",[\"Navbar - \",[20,[\"navlink\",\"name\"]]],null]],null],null],[7],[0,\"\\n\"],[4,\"if\",[[25,\"eq\",[[19,1,[\"type\"]],\"addAPreprint\"],null]],null,{\"statements\":[[0,\"                                \"],[6,\"span\"],[9,\"class\",\"hidden-xs hidden-sm\"],[7],[1,[25,\"t\",[[19,1,[\"name\"]]],null],false],[8],[0,\"\\n                                \"],[6,\"span\"],[9,\"class\",\"hidden-md hidden-lg hidden-xl\"],[7],[1,[25,\"t\",[\"eosf.navbar.add\"],null],false],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                                \"],[1,[19,1,[\"name\"]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"                    \"],[8],[0,\"\\n                \"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[1]},null],[0,\"\\n\"],[0,\"        \"],[1,[25,\"new-navbar-auth-dropdown\",null,[[\"signupUrl\",\"loginAction\",\"closeOtherNavigation\"],[[20,[\"signupUrl\"]],[20,[\"loginAction\"]],[25,\"action\",[[19,0,[]],\"closeSearch\"],null]]]],false],[0,\"\\n\\n    \"],[8],[0,\"\\n\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/new-osf-navbar/template.hbs" } });
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
define('collections/components/old-file-browser-item/component', ['exports', 'ember-osf/components/old-file-browser-item/component'], function (exports, _component) {
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
define('collections/components/old-file-browser/component', ['exports', 'ember-osf/components/old-file-browser/component'], function (exports, _component) {
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
define('collections/components/osf-footer/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define("collections/components/osf-footer/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "lKb6B1gg", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[6,\"footer\"],[9,\"id\",\"application-footer\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"text-center\"],[7],[0,\"\\n        \"],[6,\"div\"],[7],[6,\"p\"],[7],[6,\"small\"],[7],[0,\"Powered by the \"],[6,\"a\"],[9,\"href\",\"https://osf.io\"],[7],[0,\"Open Science Framework\"],[8],[8],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/osf-footer/template.hbs" } });
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
define('collections/components/page-item', ['exports', 'pagination-pager/components/page-item'], function (exports, _pageItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pageItem.default;
});
define('collections/components/page-numbers', ['exports', 'ember-cli-pagination/components/page-numbers'], function (exports, _pageNumbers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pageNumbers.default;
    }
  });
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
define('collections/components/pagination-pager', ['exports', 'pagination-pager/components/pagination-pager'], function (exports, _paginationPager) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paginationPager.default;
});
define('collections/components/preprint-basics/component', ['exports', 'ember-osf/utils/fix-special-char', 'ember-cp-validations', 'collections/config/environment'], function (exports, _fixSpecialChar, _emberCpValidations, _environment) {
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
    exports.default = Ember.Component.extend(BASICS_VALIDATIONS, {
        store: Ember.inject.service(),
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
        uploadValid: Ember.computed.alias('nodeLocked'),

        abstractValid: Ember.computed.alias('validations.attrs.basicsAbstract.isValid'),
        doiValid: Ember.computed.alias('validations.attrs.basicsDOI.isValid'),

        // Basics fields that are being validated are abstract, license and doi
        // (title validated in upload section).
        // If validation added for other fields, expand basicsValid definition.
        basicsValid: Ember.computed.and('abstractValid', 'doiValid', 'licenseValid'),

        /* Initial values */
        basicsAbstract: Ember.computed('node.description', function () {
            var node = this.get('node');
            return node ? node.get('description') : null;
        }),
        basicsTags: Ember.computed('node', function () {
            var node = this.get('node');
            return node ? node.get('tags').map(_fixSpecialChar.default) : Ember.A();
        }),

        basicsChanged: Ember.observer('savedValues', 'basicsDOI', 'basicsLicense', 'basicsTags.@each', 'basicsAbstract', 'applyLicense', function () {
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
  exports.default = Ember.HTMLBars.template({ "id": "HhXKRzN6", "block": "{\"symbols\":[\"tag\"],\"statements\":[[4,\"preprint-form-body\",null,null,{\"statements\":[[4,\"if\",[[20,[\"isOpen\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[9,\"class\",\"row m-b-md\"],[7],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"col-xs-12\"],[7],[0,\"\\n                  \"],[1,[25,\"license-picker\",null,[[\"currentValues\",\"showCategories\",\"editLicense\",\"allowDismiss\",\"autosave\",\"showBorder\",\"pressSubmit\"],[[20,[\"basicsLicense\"]],false,[25,\"action\",[[19,0,[]],\"editLicense\"],null],false,true,false,[25,\"action\",[[19,0,[]],\"saveBasics\"],null]]]],false],[0,\"\\n                  \"],[6,\"br\"],[7],[8],[0,\"\\n                  \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n                      \"],[6,\"div\"],[9,\"class\",\"col-xs-12\"],[7],[0,\"\\n                          \"],[6,\"label\"],[7],[0,\" \"],[1,[25,\"t\",[\"submit.body.basics.license.apply_license_title\"],null],false],[0,\" \"],[8],[0,\"\\n\"],[4,\"if\",[[25,\"or\",[[25,\"not\",[[20,[\"newNode\"]]],null],[20,[\"editMode\"]]],null]],null,{\"statements\":[[0,\"                              \"],[6,\"p\"],[7],[1,[25,\"t\",[\"submit.body.basics.license.apply_license_text\"],null],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                          \"],[6,\"span\"],[9,\"style\",\"margin: 5px\"],[7],[0,\"\\n                              \"],[6,\"input\"],[10,\"onchange\",[25,\"action\",[[19,0,[]],\"applyLicenseToggle\",true],null],null],[9,\"type\",\"radio\"],[10,\"checked\",[18,\"applyLicense\"],null],[7],[8],[0,\" Yes\\n                              \"],[6,\"input\"],[10,\"onchange\",[25,\"action\",[[19,0,[]],\"applyLicenseToggle\",false],null],null],[9,\"type\",\"radio\"],[10,\"checked\",[25,\"not\",[[20,[\"applyLicense\"]]],null],null],[7],[8],[0,\" No\\n                          \"],[8],[0,\"\\n                      \"],[8],[0,\"\\n                  \"],[8],[0,\"\\n              \"],[8],[0,\"\\n          \"],[8],[0,\"\\n\\n            \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"col-md-6\"],[7],[0,\"\\n                  \"],[6,\"div\"],[7],[0,\"\\n                      \"],[6,\"label\"],[7],[1,[25,\"t\",[\"submit.body.basics.doi.label\"],null],false],[0,\":\"],[8],[0,\"\\n                      \"],[6,\"form\"],[10,\"onchange\",[25,\"action\",[[19,0,[]],\"stripDOI\"],null],null],[10,\"onsubmit\",[25,\"action\",[[19,0,[]],\"preventDefault\"],null],null],[7],[0,\"\\n                          \"],[1,[25,\"validated-input\",null,[[\"model\",\"valuePath\",\"placeholder\",\"value\",\"pressSubmit\"],[[19,0,[]],\"basicsDOI\",[25,\"t\",[\"global.doi\"],null],[20,[\"basicsDOI\"]],[25,\"action\",[[19,0,[]],\"saveBasics\"],null]]]],false],[0,\"\\n                      \"],[8],[0,\"\\n                  \"],[8],[0,\"\\n                  \"],[6,\"div\"],[9,\"class\",\"clearfix\"],[7],[0,\"\\n                      \"],[6,\"label\"],[7],[1,[25,\"t\",[\"submit.body.basics.keywords.label\"],null],false],[0,\":\"],[8],[0,\"\\n                      \"],[6,\"p\"],[9,\"class\",\"text-smaller\"],[7],[1,[25,\"t\",[\"submit.body.basics.keywords.paragraph\"],null],false],[8],[0,\"\\n                      \"],[1,[25,\"tags-widget\",null,[[\"addATag\",\"removeATag\",\"tags\"],[[25,\"action\",[[19,0,[]],\"addTag\"],null],[25,\"action\",[[19,0,[]],\"removeTag\"],null],[20,[\"basicsTags\"]]]]],false],[0,\"\\n                  \"],[8],[0,\"\\n              \"],[8],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"col-md-6\"],[7],[0,\"\\n                  \"],[6,\"label\"],[7],[0,\"\\n                      \"],[6,\"span\"],[9,\"class\",\"required\"],[7],[1,[25,\"t\",[\"global.abstract\"],null],false],[0,\":\"],[8],[0,\"\\n                  \"],[8],[0,\"\\n                  \"],[6,\"form\"],[7],[0,\"\\n                      \"],[1,[25,\"validated-input\",null,[[\"model\",\"valuePath\",\"placeholder\",\"value\",\"large\"],[[19,0,[]],\"basicsAbstract\",[25,\"t\",[\"submit.body.basics.abstract.placeholder\"],null],[20,[\"basicsAbstract\"]],true]]],false],[0,\"\\n                  \"],[8],[0,\"\\n              \"],[8],[0,\"\\n          \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"col-md-12\"],[7],[0,\"\\n                  \"],[6,\"div\"],[9,\"class\",\"pull-right\"],[7],[0,\"\\n                      \"],[6,\"button\"],[9,\"class\",\"btn btn-default\"],[10,\"disabled\",[25,\"unless\",[[20,[\"basicsChanged\"]],true],null],null],[3,\"action\",[[19,0,[]],\"discardBasics\"]],[7],[1,[25,\"t\",[\"global.discard\"],null],false],[8],[0,\"\\n                      \"],[6,\"button\"],[9,\"class\",\"btn btn-primary\"],[10,\"disabled\",[25,\"unless\",[[20,[\"basicsValid\"]],true],null],null],[3,\"action\",[[19,0,[]],\"saveBasics\"]],[7],[1,[25,\"t\",[\"submit.body.save_continue\"],null],false],[8],[0,\"\\n                  \"],[8],[0,\"\\n              \"],[8],[0,\"\\n          \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[25,\"not\",[[20,[\"isOpen\"]]],null]],null,{\"statements\":[[4,\"if\",[[20,[\"basicsAbstract\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"row m-b-md\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col-xs-12\"],[7],[0,\"\\n            \"],[6,\"b\"],[7],[0,\"Abstract:\"],[8],[0,\"\\n            \"],[6,\"p\"],[7],[1,[18,\"basicsAbstract\"],false],[8],[0,\"\\n            \"],[6,\"b\"],[7],[0,\"License:\"],[8],[0,\"\\n            \"],[6,\"p\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"basicsLicense\"]]],null,{\"statements\":[[0,\"                    \"],[6,\"span\"],[7],[1,[20,[\"basicsLicense\",\"licenseType\",\"name\"]],false],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                    \"],[6,\"i\"],[7],[0,\"Not provided\"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"            \"],[8],[0,\"\\n            \"],[6,\"b\"],[7],[0,\"DOI:\"],[8],[0,\"\\n            \"],[6,\"p\"],[7],[4,\"if\",[[20,[\"basicsDOI\"]]],null,{\"statements\":[[1,[18,\"basicsDOI\"],false]],\"parameters\":[]},{\"statements\":[[6,\"i\"],[7],[0,\"Not provided\"],[8]],\"parameters\":[]}],[8],[0,\"\\n            \"],[6,\"b\"],[7],[0,\"Tags:\"],[8],[0,\"\\n            \"],[6,\"p\"],[7],[4,\"if\",[[20,[\"basicsTags\"]]],null,{\"statements\":[[0,\"\\n                    \"],[4,\"each\",[[20,[\"basicsTags\"]]],null,{\"statements\":[[0,\" \"],[6,\"span\"],[9,\"class\",\"subject-preview\"],[7],[1,[19,1,[]],false],[8]],\"parameters\":[1]},null],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                    \"],[6,\"i\"],[7],[0,\"Not provided\"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/preprint-basics/template.hbs" } });
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
  exports.default = Ember.HTMLBars.template({ "id": "Epe7c01u", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/preprint-form-body/template.hbs" } });
});
define('collections/components/preprint-form-header/component', ['exports', 'ember-collapsible-panel/components/cp-panel-toggle'], function (exports, _cpPanelToggle) {
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
        displayName: Ember.computed('name', function () {
            return this.get('name').capitalize();
        }),
        invalid: Ember.computed('valid', 'isValidationActive', function () {
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
  exports.default = Ember.HTMLBars.template({ "id": "lfMChioN", "block": "{\"symbols\":[],\"statements\":[[2,\" template-lint block-indentation=false \"],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"section-header\"],[7],[0,\"\\n    \"],[1,[18,\"displayName\"],false],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"preprint-section-status pull-right\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"showValidationIndicator\"]]],null,{\"statements\":[[0,\"        \"],[1,[25,\"fa-icon\",[\"fa-floppy-o\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[8],[0,\"\\n\\n\"],[4,\"if\",[[25,\"not\",[[20,[\"isOpen\"]]],null]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"m-t-md preprint-header-preview\"],[7],[0,\"\\n\"],[4,\"if\",[[25,\"and\",[[25,\"is-section-editable\",[[20,[\"name\"]]],null],[25,\"or\",[[20,[\"editMode\"]],[25,\"or\",[[25,\"not\",[[20,[\"showValidationIndicator\"]]],null],[20,[\"isValidationActive\"]]],null]],null]],null]],null,{\"statements\":[[0,\"            \"],[6,\"i\"],[9,\"class\",\"text-smaller m-t-md\"],[7],[1,[25,\"t\",[\"components.preprint-form-header.click_edit\"],null],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/preprint-form-header/template.hbs" } });
});
define('collections/components/preprint-form-section/component', ['exports', 'ember-collapsible-panel/components/cp-panel'], function (exports, _cpPanel) {
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
        _setup: Ember.on('init', Ember.observer('open', function () {
            this.set('panelState.boundOpenState', this.get('open'));
        })),

        trackOpenState: Ember.observer('isOpen', function () {
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
        slideAnimation: Ember.observer('isOpen', function () {
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
  exports.default = Ember.HTMLBars.template({ "id": "lxRZ0Zam", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1,[[20,[\"hasOpened\"]],[20,[\"isOpen\"]]]],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/preprint-form-section/template.hbs" } });
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
define('collections/components/search-collections/component', ['exports', 'collections/config/environment'], function (exports, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        session: Ember.inject.service(),
        searchText: '',
        results: null,
        actions: {
            search: function search() {
                var _this = this;

                // make a call to the collections endpoint
                var input = this.get('searchText');
                return Ember.$.get(_environment.default.apiBaseUrl + '/api/collections/search/?text__contains=' + input, function (data) {
                    _this.set('results', data);
                });
            }
        }
    });
});
define("collections/components/search-collections/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "KvQX3cNB", "block": "{\"symbols\":[\"r\"],\"statements\":[[6,\"style\"],[7],[0,\"\\n    .search-wrapper {\\n        background-color: white;\\n        padding: 30px;\\n    }\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"search-wrapper\"],[7],[0,\"\\n    \"],[6,\"form\"],[9,\"class\",\"form-inline text-center\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"input-group\"],[7],[0,\"\\n                \"],[1,[25,\"input\",null,[[\"class\",\"placeholder\",\"value\"],[\"form-control\",\"Ex: \\\"Lorem\\\"\",[20,[\"searchText\"]]]]],false],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"btn btn-primary\"],[3,\"action\",[[19,0,[]],\"search\"]],[7],[0,\"Search Collections\"],[8],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"id\",\"search-results\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"results\"]]],null,{\"statements\":[[0,\"            \"],[6,\"table\"],[9,\"class\",\"table table-striped\"],[7],[0,\"\\n                \"],[6,\"thead\"],[7],[0,\"\\n                \"],[6,\"tr\"],[7],[0,\"\\n                    \"],[6,\"th\"],[7],[0,\"Title\"],[8],[0,\"\\n                    \"],[6,\"th\"],[7],[0,\"Description\"],[8],[0,\"\\n                \"],[8],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"tbody\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"results\",\"data\"]]],null,{\"statements\":[[0,\"                    \"],[6,\"tr\"],[7],[0,\"\\n                        \"],[6,\"td\"],[7],[4,\"link-to\",[\"collections.collection.index\",[19,1,[\"id\"]]],null,{\"statements\":[[1,[19,1,[\"attributes\",\"title\"]],false]],\"parameters\":[]},null],[8],[0,\"\\n                        \"],[6,\"td\"],[7],[1,[19,1,[\"attributes\",\"description\"]],false],[8],[0,\"\\n                    \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"                \"],[8],[0,\"\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/search-collections/template.hbs" } });
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
define('collections/components/section-contributors/component', ['exports', 'lodash', 'collections/config/environment'], function (exports, _lodash, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        store: Ember.inject.service(),
        session: Ember.inject.service(),
        data: Ember.computed('layout', function () {
            var dataSource = this.get('layout.data');
            return this.get('model.settings').data[dataSource];
        }),
        id: Ember.computed('layout.title', function () {
            return 'section-' + this.get('index');
        }),
        tagName: 'section',
        attributeBindings: ['style', 'id'],
        classNames: ['users', 'narrow'],
        style: Ember.computed('layout', function () {
            return Ember.String.htmlSafe('background-color: ' + this.get('layout.background_color') + '; color: ' + this.get('layout.text_color') + ';');
        }),
        users: Ember.computed('model.items', function () {
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
define("collections/components/section-contributors/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5L1ri6uI", "block": "{\"symbols\":[\"contributor\",\"speaker\"],\"statements\":[[4,\"if\",[[20,[\"layout\",\"title\"]]],null,{\"statements\":[[0,\"    \"],[6,\"h2\"],[7],[1,[20,[\"layout\",\"title\"]],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[20,[\"data\"]]],null,{\"statements\":[[0,\"\\n\"],[4,\"each\",[[20,[\"data\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[9,\"class\",\"contributor-detail\"],[7],[0,\"\\n            \"],[6,\"a\"],[9,\"class\",\"gravatar\"],[10,\"src\",[26,[[20,[\"contributor\",\"img_url\"]]]]],[7],[8],[0,\"\\n            \"],[6,\"a\"],[10,\"href\",[26,[\"https://staging.osf.io/\",[20,[\"contributor\",\"username\"]]]]],[7],[1,[20,[\"contributor\",\"first_name\"]],false],[0,\" \"],[1,[20,[\"contributor\",\"last_name\"]],false],[8],[0,\"\\n            \"],[6,\"a\"],[9,\"class\",\"affiliation\"],[7],[1,[20,[\"contributor\",\"affiliation\"]],false],[8],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[20,[\"users\"]]],null,{\"statements\":[[0,\"\\n\"],[4,\"each\",[[20,[\"users\"]]],null,{\"statements\":[[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"contributor-detail\"],[7],[0,\"\\n\"],[4,\"if\",[[19,1,[\"gravatar\"]]],null,{\"statements\":[[0,\"                \"],[6,\"a\"],[10,\"href\",[26,[\"https://osf.io/\",[19,1,[\"username\"]]]]],[9,\"class\",\"gravatar\"],[10,\"style\",[26,[\"background-image: url('\",[19,1,[\"gravatar\"]],\"');\"]]],[7],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                \"],[6,\"a\"],[10,\"href\",[26,[\"https://osf.io/\",[19,1,[\"username\"]]]]],[7],[0,\"\\n                    \"],[6,\"img\"],[9,\"class\",\"contributor-pic-thumbnail\"],[9,\"alt\",\"User gravatar\"],[9,\"src\",\"https://udayton.edu/0/img/generic-profile.png\"],[7],[8],[0,\"\\n                \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"            \"],[6,\"p\"],[9,\"class\",\"contributor-name p-t-xs text-center\"],[7],[0,\"\\n                \"],[6,\"a\"],[10,\"href\",[26,[\"https://osf.io/\",[19,1,[\"username\"]]]]],[7],[0,\"\\n                    \"],[1,[19,1,[\"computedFullName\"]],false],[0,\"\\n                \"],[8],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/section-contributors/template.hbs" } });
});
define('collections/components/section-copyright/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        tagName: 'section',
        attributeBindings: ['id'],
        id: Ember.computed('layout.title', function () {
            return 'section-' + this.get('index');
        }),
        data: Ember.computed('layout', function () {
            var dataSource = this.get('layout.data');
            return this.get('model.settings').data[dataSource];
        })
    });
});
define("collections/components/section-copyright/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "+1V7UD/h", "block": "{\"symbols\":[\"link\"],\"statements\":[[6,\"div\"],[9,\"class\",\"landing-copyright-wrapper p-xl text-center\"],[7],[0,\"\\n    \"],[6,\"span\"],[9,\"class\",\"m-r-sm\"],[7],[1,[20,[\"model\",\"title\"]],false],[8],[0,\"\\n\"],[4,\"each\",[[20,[\"data\"]]],null,{\"statements\":[[0,\"        \"],[6,\"a\"],[10,\"href\",[26,[[19,1,[\"url\"]]]]],[9,\"class\",\"m-r-sm\"],[7],[0,\"\\n\"],[4,\"if\",[[19,1,[\"icon\"]]],null,{\"statements\":[[0,\"                \"],[6,\"i\"],[10,\"class\",[26,[\"fa \",[19,1,[\"icon\"]]]]],[7],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                \"],[1,[19,1,[\"label\"]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/section-copyright/template.hbs" } });
});
define('collections/components/section-file-grid/component', ['exports', 'collections/config/environment'], function (exports, _environment) {
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

    exports.default = Ember.Component.extend({

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

        pageItems: Ember.computed('page', 'totalPages', function () {
            var page = this.get('page');
            var totalPages = this.get('totalPages');
            var prevPages = Array.from(new Array(Math.min(3, page - 1)), function (x, i) {
                return i + Math.max(page - 3, 1);
            });
            var nextPages = Array.from(new Array(Math.min(3, Math.max(0, totalPages - page - 1))), function (x, i) {
                return i + page + 1;
            });
            var pageItems = Array.prototype.concat(prevPages, page, nextPages);
            return pageItems.map(function (num) {
                return { pageNumber: num };
            });
        }),
        totalPages: Ember.computed('items', function () {
            var pages = this.get('items.meta.pagination.pages');
            if (pages > 1) {
                return pages;
            } else {
                return 1;
            }
        }),
        id: Ember.computed('layout.title', function () {
            return 'section-' + this.get('index');
        }),
        canStepForward: Ember.computed('page', function () {
            return this.get('page') < this.get('totalPages');
        }),
        canStepBackward: Ember.computed('page', function () {
            return this.get('page') > 1;
        }),
        showAsList: Ember.computed('showAsCards', function () {
            return !this.get('showAsCards');
        }),
        pageObserver: Ember.observer('q', function () {
            this.set('page', 1);
        }),

        itemsObserver: Ember.observer('q', 'page', 'collection', function () {
            var _this = this;

            Ember.run(function () {
                var page = _this.get('page');
                var q = _this.get('q');
                var page_size = _this.get('page_size'); // eslint-disable-line camelcase
                var collection = _this.get('collection').id;
                _this.set('loading', true);
                _this.set('items', _this.get('store').query('item', {
                    q: q,
                    page: page,
                    page_size: page_size,
                    filter: {
                        collection: collection
                    }
                }).then(function (items) {
                    _this.set('loading', false);
                    _this.set('items', items);
                }));
            });
        }),

        init: function init() {
            var _this2 = this;

            Ember.run(function () {
                var page = 1;
                var q = _this2.get('q');
                var page_size = _this2.get('page_size'); // eslint-disable-line camelcase
                var collection = _this2.get('collection').id;
                _this2.set('loading', true);
                _this2.get('store').query('item', {
                    q: q,
                    page: page,
                    page_size: page_size,
                    filter: {
                        collection: collection
                    }
                }).then(function (items) {
                    _this2.set('loading', false);
                    _this2.set('items', items);
                });
            });

            return this._super();
        },


        actions: {
            transition: function transition(route) {
                var _get;

                for (var _len = arguments.length, models = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    models[_key - 1] = arguments[_key];
                }

                (_get = this.get('router')).transitionTo.apply(_get, [route].concat(_toConsumableArray(models)));
            },
            jumpToPage: function jumpToPage(pageNum) {
                var totalPages = this.get('totalPages');
                if (pageNum < 1) this.set('page', 1);else if (pageNum > totalPages) this.set('page', totalPages);else this.set('page', pageNum);
            },
            nextPage: function nextPage() {
                var pageNum = this.get('page') + 1;
                this.actions.jumpToPage.call(this, pageNum);
            },
            prevPage: function prevPage() {
                var pageNum = this.get('page') - 1;
                this.actions.jumpToPage.call(this, pageNum);
            }
        }

    });
});
define("collections/components/section-file-grid/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "l9SU2mCr", "block": "{\"symbols\":[\"item\",\"item\",\"item\"],\"statements\":[[2,\" section-file-grid \"],[0,\"\\n\\n\\n        \"],[6,\"div\"],[9,\"class\",\"row\"],[9,\"style\",\"margin:0; width: 100%;\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-sm-10\"],[7],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"input-group\"],[7],[0,\"\\n                    \"],[1,[25,\"input\",null,[[\"class\",\"id\",\"value\",\"placeholder\"],[\"form-control\",\"item-search-bar\",[20,[\"q\"]],[20,[\"layout\",\"placeholder\"]]]]],false],[0,\"\\n                    \"],[6,\"span\"],[9,\"class\",\"input-group-btn\"],[7],[0,\"\\n                        \"],[6,\"button\"],[9,\"class\",\"btn btn-primary\"],[9,\"type\",\"button\"],[7],[0,\"\\n                            \"],[6,\"i\"],[9,\"class\",\" fa fa-search\"],[9,\"aria-hidden\",\"true\"],[7],[8],[0,\"\\n                        \"],[8],[0,\"\\n                    \"],[8],[0,\"\\n                \"],[8],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-sm-2\"],[9,\"style\",\"margin:0;\"],[7],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"input-group pull-right\"],[7],[0,\"\\n                    \"],[6,\"button\"],[9,\"class\",\"btn btn-default\"],[9,\"type\",\"button\"],[10,\"disabled\",[25,\"if\",[[20,[\"showAsList\"]],\"disabled\"],null],null],[3,\"action\",[[19,0,[]],[25,\"mut\",[[20,[\"showAsCards\"]]],null],false]],[7],[0,\"\\n                        \"],[6,\"i\"],[9,\"class\",\" fa fa-list\"],[9,\"aria-hidden\",\"true\"],[7],[8],[0,\"\\n                    \"],[8],[0,\"\\n                    \"],[6,\"button\"],[9,\"class\",\"btn btn-default\"],[9,\"type\",\"button\"],[10,\"disabled\",[25,\"if\",[[20,[\"showAsCards\"]],\"disabled\"],null],null],[3,\"action\",[[19,0,[]],[25,\"mut\",[[20,[\"showAsCards\"]]],null],true]],[7],[0,\"\\n                        \"],[6,\"i\"],[9,\"class\",\" fa fa-window-maximize\"],[9,\"aria-hidden\",\"true\"],[7],[8],[0,\"\\n                    \"],[8],[0,\"\\n                \"],[8],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"loading\"]]],null,{\"statements\":[[0,\"    \"],[1,[25,\"loading-spinner\",null,[[\"style\"],[\"fa-4x\"]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[20,[\"showAsCards\"]]],null,{\"statements\":[[4,\"each\",[[20,[\"items\"]]],null,{\"statements\":[[0,\"                \"],[6,\"div\"],[9,\"class\",\"item-detail\"],[7],[0,\"\\n                    \"],[6,\"a\"],[9,\"class\",\"item-thumbnail\"],[9,\"style\",\"background-image: url('/img/placeholder-e09fdd8121723e04dede0b6d3a14dbef.png');\"],[3,\"action\",[[19,0,[]],\"transition\",\"collections.collection.item\",[20,[\"model\",\"id\"]],[19,3,[\"id\"]]]],[7],[0,\"\\n                        \"],[1,[19,3,[\"fileFormat\"]],false],[0,\"\\n                    \"],[8],[0,\"\\n                    \"],[6,\"div\"],[9,\"class\",\"panel-body\"],[7],[0,\"\\n                        \"],[6,\"span\"],[9,\"class\",\"line-clamp line-clamp-2\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"collections.collection.item\",[20,[\"model\",\"id\"]],[19,3,[\"id\"]]],[[\"class\"],[\"clamp\"]],{\"statements\":[[0,\"                                \"],[1,[19,3,[\"title\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                        \"],[8],[0,\"\\n                        \"],[6,\"a\"],[10,\"href\",[26,[\"https://osf.io/\",[25,\"await\",[[19,3,[\"createdBy\",\"username\"]]],null]]]],[7],[0,\"\\n                            \"],[6,\"p\"],[9,\"class\",\"text-muted line-clamp line-clamp-1\"],[7],[0,\"\\n                                \"],[6,\"small\"],[7],[0,\"\\n                                    \"],[1,[25,\"await\",[[19,3,[\"createdBy\",\"firstName\"]]],null],false],[0,\"\\n                                    \"],[1,[25,\"await\",[[19,3,[\"createdBy\",\"lastName\"]]],null],false],[0,\"\\n                                \"],[8],[0,\"\\n                            \"],[8],[0,\"\\n                        \"],[8],[0,\"\\n                    \"],[8],[0,\"\\n                \"],[8],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[6,\"table\"],[9,\"class\",\"table table-striped\"],[7],[0,\"\\n                \"],[6,\"thead\"],[7],[0,\"\\n                    \"],[6,\"tr\"],[7],[0,\"\\n                        \"],[6,\"th\"],[7],[0,\"Title\"],[8],[0,\"\\n                        \"],[6,\"th\"],[7],[0,\"Author\"],[8],[0,\"\\n                        \"],[6,\"th\"],[7],[0,\"Date Uploaded\"],[8],[0,\"\\n                        \"],[6,\"th\"],[7],[0,\"Download\"],[8],[0,\"\\n                    \"],[8],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"tbody\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"items\"]]],null,{\"statements\":[[0,\"                        \"],[6,\"tr\"],[7],[0,\"\\n                            \"],[6,\"td\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"collections.collection.item\",[20,[\"model\",\"id\"]],[19,2,[\"id\"]]],[[\"class\"],[\"plain-link\"]],{\"statements\":[[0,\"                                    \"],[1,[25,\"truncate-text\",[[19,2,[\"title\"]]],[[\"limit\",\"ommission\"],[75,\"...\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                            \"],[8],[0,\"\\n                            \"],[6,\"td\"],[7],[0,\"\\n                                \"],[6,\"a\"],[9,\"class\",\"plain-link\"],[10,\"href\",[26,[\"https://osf.io/\",[25,\"await\",[[19,2,[\"createdBy\",\"username\"]]],null]]]],[7],[0,\"\\n                                    \"],[1,[25,\"await\",[[19,2,[\"createdBy\",\"firstName\"]]],null],false],[0,\"\\n                                    \"],[1,[25,\"await\",[[19,2,[\"createdBy\",\"lastName\"]]],null],false],[0,\"\\n                                \"],[8],[0,\"\\n                            \"],[8],[0,\"\\n                            \"],[6,\"td\"],[7],[1,[25,\"moment-format\",[[20,[\"collection\",\"dateAdded\"]],\"MMMM DD, YYYY\"],null],false],[8],[0,\"\\n                            \"],[6,\"td\"],[7],[0,\"\\n                                \"],[6,\"a\"],[10,\"href\",[19,2,[\"fileLink\"]],null],[7],[0,\"\\n                                    \"],[6,\"i\"],[9,\"class\",\"fa fa-download\"],[9,\"aria-hidden\",\"true\"],[9,\"style\",\"color:gray\"],[7],[8],[0,\"\\n                                \"],[8],[0,\"\\n                                158\\n                            \"],[8],[0,\"\\n                        \"],[8],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"                \"],[8],[0,\"\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}],[4,\"if\",[[25,\"not-eq\",[[20,[\"totalPages\"]],1],null]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[9,\"class\",\"pagination-centered\"],[9,\"style\",\"width: 100%; text-align: center;\"],[7],[0,\"\\n              \"],[6,\"ul\"],[9,\"class\",\"pagination\"],[9,\"i\",\"\"],[9,\"style\",\"margin: 0 auto; position: relative;\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"canStepBackward\"]]],null,{\"statements\":[[0,\"                  \"],[6,\"li\"],[9,\"class\",\"arrow prev enabled-arrow\"],[7],[0,\"\\n                    \"],[6,\"a\"],[9,\"href\",\"#\"],[3,\"action\",[[19,0,[]],\"prevPage\"]],[7],[0,\"«\"],[8],[0,\"\\n                  \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                  \"],[6,\"li\"],[9,\"class\",\"arrow prev disabled\"],[7],[0,\"\\n                    \"],[6,\"a\"],[9,\"href\",\"#\"],[3,\"action\",[[19,0,[]],\"prevPage\"]],[7],[0,\"«\"],[8],[0,\"\\n                  \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[4,\"each\",[[20,[\"pageItems\"]]],null,{\"statements\":[[4,\"if\",[[19,1,[\"dots\"]]],null,{\"statements\":[[0,\"                    \"],[6,\"li\"],[9,\"class\",\"dots disabled\"],[7],[0,\"\\n                      \"],[6,\"span\"],[7],[0,\"...\"],[8],[0,\"\\n                    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[25,\"eq\",[[19,1,[\"pageNumber\"]],[20,[\"page\"]]],null]],null,{\"statements\":[[0,\"                    \"],[6,\"li\"],[9,\"class\",\"active page-number\"],[7],[0,\"\\n                      \"],[6,\"a\"],[7],[1,[19,1,[\"pageNumber\"]],false],[8],[0,\"\\n                    \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                    \"],[6,\"li\"],[9,\"class\",\"page-number\"],[7],[0,\"\\n                      \"],[6,\"a\"],[9,\"href\",\"#\"],[3,\"action\",[[19,0,[]],\"jumpToPage\",[19,1,[\"pageNumber\"]]]],[7],[1,[19,1,[\"pageNumber\"]],false],[8],[0,\"\\n                    \"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[1]},null],[0,\"\\n\"],[4,\"if\",[[20,[\"canStepForward\"]]],null,{\"statements\":[[0,\"                  \"],[6,\"li\"],[9,\"class\",\"arrow next enabled-arrow\"],[7],[0,\"\\n                    \"],[6,\"a\"],[9,\"href\",\"#\"],[3,\"action\",[[19,0,[]],\"nextPage\"]],[7],[0,\"»\"],[8],[0,\"\\n                  \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                  \"],[6,\"li\"],[9,\"class\",\"arrow next disabled\"],[7],[0,\"\\n                    \"],[6,\"a\"],[9,\"href\",\"#\"],[3,\"action\",[[19,0,[]],\"nextPage\"]],[7],[0,\"»\"],[8],[0,\"\\n                  \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/section-file-grid/template.hbs" } });
});
define('collections/components/section-hero/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        session: Ember.inject.service(),
        tagName: 'section',
        attributeBindings: ['style', 'id'],
        searchQuery: '',
        id: Ember.computed('layout.title', function () {
            return 'section-' + this.get('index');
        }),
        data: Ember.computed('layout', function () {
            var dataSource = this.get('layout.data');
            return this.get('model.settings').data[dataSource];
        }),
        style: Ember.computed('branding.colors', function () {
            return Ember.String.htmlSafe('background-color: ' + this.get('branding.colors.background') + '; color: ' + this.get('branding.colors.backgroundText'));
        }),
        logoStyle: Ember.computed('branding.logo', function () {
            return Ember.String.htmlSafe('background-image: url(' + this.get('branding.logo.url') + '); height: ' + this.get('branding.logo.height'));
        }),
        actions: {
            search: function search() {
                this.get('changeRoute')('collection.search', this.get('model.id'));
            }
        }
    });
});
define("collections/components/section-hero/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Fhvh4CZc", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"landing-hero-container p-xl\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n       \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n           \"],[6,\"div\"],[9,\"class\",\"text-center m-t-lg col-xs-12\"],[7],[0,\"\\n               \"],[6,\"div\"],[9,\"class\",\"preprint-brand\"],[7],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"layout\",\"settings\",\"useLogo\"]]],null,{\"statements\":[[0,\"                    \"],[6,\"div\"],[9,\"class\",\"coll-hero-logo\"],[10,\"style\",[18,\"logoStyle\"],null],[9,\"aria-role\",\"img\"],[10,\"aria-label\",[26,[[20,[\"branding\",\"logo\",\"label\"]]]]],[7],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                    \"],[6,\"h2\"],[7],[1,[20,[\"layout\",\"title\"]],false],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"               \"],[6,\"p\"],[9,\"class\",\"lead\"],[7],[1,[20,[\"layout\",\"tagline\"]],false],[8],[0,\"\\n\\n               \"],[6,\"div\"],[9,\"class\",\"input-group input-group-lg m-b-md\"],[7],[0,\"\\n                   \"],[1,[25,\"input\",null,[[\"value\",\"placeholder\",\"class\"],[[20,[\"searchQuery\"]],\"Search preprints...\",\"form-control\"]]],false],[0,\"\\n                   \"],[6,\"span\"],[9,\"class\",\"input-group-btn\"],[7],[0,\"\\n                       \"],[6,\"button\"],[9,\"class\",\"btn btn-default\"],[9,\"type\",\"button\"],[3,\"action\",[[19,0,[]],\"search\"]],[7],[0,\"Search\"],[8],[0,\"\\n                   \"],[8],[0,\"\\n               \"],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"                \"],[4,\"link-to\",[\"collections.collection.add\",[20,[\"collection\"]]],[[\"class\"],[\"btn btn-success btn-lg\"]],{\"statements\":[[0,\"Add to Collection \"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"           \"],[8],[0,\"\\n       \"],[8],[0,\"\\n   \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/section-hero/template.hbs" } });
});
define('collections/components/section-item-table/component', ['exports', 'lodash', 'collections/config/environment'], function (exports, _lodash, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        eventFilter: '',
        noResultsFound: false,
        loadingResults: true,
        searchResults: null,
        classNames: ['layer-items'],
        pageNumber: 1,
        totalPages: 1,
        searchInput: '',
        attributeBindings: ['id'],
        id: Ember.computed('layout.title', function () {
            return 'section-' + this.get('index');
        }),
        pageNumberButtons: '',
        tagName: 'section',
        theadStyle: Ember.computed('layout', function () {
            var headerColor = this.get('layout.background_color') ? this.get('layout.background_color') : this.get('branding.colors.primary');
            var textColor = this.get('layout.text_color') ? this.get('layout.text_color') : this.get('branding.colors.text');
            return Ember.String.htmlSafe('background-color: ' + headerColor + '; color: ' + textColor + ';');
        }),
        eventTypes: Ember.computed('model', function () {
            return this.get('model.items').then(function (results) {
                var eventsList = [];
                results.forEach(function (i) {
                    eventsList.push(i.get('type'));
                });
                return _lodash.default.uniq(eventsList).sort();
            });
        }),
        nextPageAvailable: Ember.computed('pageNumber', 'totalPages', function () {
            return this.get('pageNumber') < this.get('totalPages');
        }),
        previousPageAvailable: Ember.computed('pageNumber', function () {
            return this.get('pageNumber') > 1;
        }),
        didReceiveAttrs: function didReceiveAttrs() {
            var _this = this;

            var modelId = this.get('model.id');
            var pageNumber = this.get('pageNumber');
            Ember.$.get(_environment.default.apiBaseUrl + '/api/items/search/?collection=' + modelId + '&page=' + pageNumber, function (data) {
                _this.set('searchResults', data);

                _this.set('totalPages', data.meta.pagination.pages);

                var totalPages = _this.get('totalPages');
                var buttonHTML = [];
                for (var i = 1; i <= totalPages; i++) {
                    buttonHTML.push(i);
                }
                _this.set('pageNumberButtons', buttonHTML);
            });
        },
        didRender: function didRender() {
            if (this.get('pageNumber') === 1) {
                $("li[data-id='1']").addClass('active');
            }

            if (this.get('pageNumber') < this.get('totalPages')) {
                $('.nextPage').removeClass('disabled');
            } else {
                $('.nextPage').addClass('disabled');
            }

            if (this.get('pageNumber') === 1) {
                $('.prevPage').addClass('disabled');
            } else {
                $('.prevPage').removeClass('disabled');
            }
        },

        actions: {
            search: function search() {
                var _this2 = this;

                // make a call to the collections endpoint
                var input = this.get('searchInput');
                var modelId = this.get('model.id');
                var pageNumber = 1;
                this.set('pageNumber', 1);
                var query = _environment.default.apiBaseUrl + '/api/items/search/?collection=' + modelId + '&page=' + pageNumber;
                if (input !== '') {
                    query += '&text__contains=' + input;
                }
                return Ember.$.get(query, function (data) {
                    _this2.set('searchResults', data);
                    _this2.set('totalPages', data.meta.pagination.pages);

                    if (_this2.get('searchResults.data')[0] === undefined) {
                        _this2.set('noResultsFound', true);
                    } else {
                        _this2.set('noResultsFound', false);
                    }
                    var totalPages = _this2.get('totalPages');
                    var buttonHTML = [];
                    for (var i = 1; i <= totalPages; i++) {
                        buttonHTML.push(i);
                    }
                    _this2.set('pageNumberButtons', buttonHTML);
                    $("li[data-id='1']").addClass('active');
                });
            },
            loadPage: function loadPage(pageNo) {
                var _this3 = this;

                $('.pagination li').removeClass('active');
                $('li[data-id=\'' + pageNo + '\']').addClass('active');

                var modelId = this.get('model.id');
                var input = this.get('searchInput');

                Ember.$.get(_environment.default.apiBaseUrl + '/api/items/search/?collection=' + modelId + '&page=' + pageNo + '&text__contains=' + input, function (data) {
                    _this3.set('searchResults', data);
                    _this3.set('totalPages', data.meta.pagination.pages);
                    _this3.set('pageNumber', pageNo);
                });
            },
            nextPage: function nextPage() {
                if (this.get('nextPageAvailable')) {
                    this.send('loadPage', this.get('pageNumber') + 1);
                } else {
                    console.log('you are already on the last page');
                }
            },
            prevPage: function prevPage() {
                if (this.get('previousPageAvailable')) {
                    this.send('loadPage', this.get('pageNumber') - 1);
                } else {
                    console.log('you are already on the first page');
                }
            }
        }
    });
});
define("collections/components/section-item-table/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "QWE9qp9c", "block": "{\"symbols\":[\"item\",\"r\"],\"statements\":[[0,\"\\n\"],[4,\"if\",[[20,[\"searchResults\",\"data\"]]],null,{\"statements\":[[0,\"    \\n\"],[6,\"form\"],[9,\"onsubmit\",\"return false\"],[7],[0,\"\\n    \"],[1,[25,\"input\",null,[[\"class\",\"id\",\"value\",\"placeholder\"],[\"form-control search-bar\",\"item-search-bar\",[20,[\"searchInput\"]],\"Ex: \\\"Lorem\\\"\"]]],false],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"btn btn-primary fa fa-search\"],[9,\"aria-hidden\",\"true\"],[3,\"action\",[[19,0,[]],\"search\"]],[7],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"item-list\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"table-heading\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"title\"],[7],[0,\"Title\"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"author\"],[7],[0,\"Author\"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"type\"],[7],[0,\"Type\"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[4,\"each\",[[20,[\"searchResults\",\"data\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[9,\"class\",\"item-row\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"title\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"collections.collection.item\",[20,[\"model\",\"id\"]],[19,2,[\"id\"]]],null,{\"statements\":[[0,\"                    \"],[1,[19,2,[\"attributes\",\"title\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"author\"],[7],[1,[19,2,[\"attributes\",\"created-by\"]],false],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"type\"],[7],[1,[19,2,[\"attributes\",\"category\"]],false],[8],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[2]},null],[8],[0,\"\\n\\n\"],[4,\"if\",[[25,\"not-eq\",[[20,[\"totalPages\"]],1],null]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"pagination-wrapper text-center m-b-md\"],[7],[0,\"\\n        \"],[6,\"ul\"],[9,\"class\",\"pagination\"],[7],[0,\"\\n            \"],[6,\"li\"],[9,\"class\",\"arrow prev prevPage\"],[7],[0,\"\\n                \"],[6,\"a\"],[9,\"class\",\"btn btn-default \"],[3,\"action\",[[19,0,[]],\"prevPage\"]],[7],[0,\"«\"],[8],[0,\"\\n            \"],[8],[0,\"\\n\"],[4,\"each\",[[20,[\"pageNumberButtons\"]]],null,{\"statements\":[[0,\"                \"],[6,\"li\"],[9,\"class\",\"page-number\"],[10,\"data-id\",[26,[[19,1,[]]]]],[3,\"action\",[[19,0,[]],\"loadPage\",[19,1,[]]]],[7],[6,\"a\"],[7],[1,[19,1,[]],false],[8],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"            \"],[6,\"li\"],[9,\"class\",\"arrow next nextPage\"],[7],[0,\"\\n                \"],[6,\"a\"],[9,\"class\",\"btn btn-default \"],[3,\"action\",[[19,0,[]],\"nextPage\"]],[7],[0,\"»\"],[8],[0,\"\\n            \"],[8],[0,\"\\n\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[20,[\"noResultsFound\"]]],null,{\"statements\":[[0,\"        \"],[6,\"form\"],[9,\"onsubmit\",\"return false\"],[7],[0,\"\\n            \"],[1,[25,\"input\",null,[[\"class\",\"id\",\"value\",\"placeholder\"],[\"form-control search-bar\",\"item-search-bar\",[20,[\"searchInput\"]],\"Ex: \\\"Lorem\\\"\"]]],false],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"btn btn-primary fa fa-search\"],[9,\"aria-hidden\",\"true\"],[3,\"action\",[[19,0,[]],\"search\"]],[7],[8],[0,\"\\n        \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"text-center\"],[7],[0,\"\\n                No Results Found\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[20,[\"loadingResults\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[9,\"class\",\"text-center\"],[7],[0,\"\\n                Loading...\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[6,\"p\"],[9,\"class\",\"text-center\"],[7],[6,\"em\"],[7],[0,\"The table cannot be displayed. To display the schedule, add items to this collection and make sure they're indexed.\"],[8],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/section-item-table/template.hbs" } });
});
define('collections/components/section-landing-board/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        tagName: 'section',
        id: Ember.computed('layout.title', function () {
            return 'section-' + this.get('index');
        }),
        attributeBindings: ['style', 'id'],
        listColumns: Ember.computed('layout', function () {
            var dataSource = this.get('layout.data');
            var list = this.get('model.settings').data[dataSource];
            var column = {};
            var splitIndex = Math.round(list.length / 2);
            column.left = list.splice(0, splitIndex);
            column.right = list;
            return column;
        }),
        style: Ember.computed('branding.colors', function () {
            return Ember.String.htmlSafe('background-color: ' + this.get('branding.colors.background') + '; color: ' + this.get('branding.colors.backgroundText'));
        })
    });
});
define("collections/components/section-landing-board/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7k1juoSv", "block": "{\"symbols\":[\"person\",\"person\"],\"statements\":[[6,\"div\"],[9,\"class\",\"landing-board-wrapper p-xl\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n        \"],[6,\"h2\"],[7],[0,\" \"],[1,[20,[\"layout\",\"title\"]],false],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-xs-6\"],[7],[0,\"\\n                \"],[6,\"ul\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"listColumns\",\"left\"]]],null,{\"statements\":[[0,\"                        \"],[6,\"li\"],[7],[6,\"b\"],[7],[1,[19,2,[\"firstName\"]],false],[0,\" \"],[1,[19,2,[\"lastName\"]],false],[8],[0,\", \"],[1,[19,2,[\"institution\"]],false],[8],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"                \"],[8],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-xs-6\"],[7],[0,\"\\n                \"],[6,\"ul\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"listColumns\",\"right\"]]],null,{\"statements\":[[0,\"                        \"],[6,\"li\"],[7],[6,\"b\"],[7],[1,[19,1,[\"firstName\"]],false],[0,\" \"],[1,[19,1,[\"lastName\"]],false],[8],[0,\", \"],[1,[19,1,[\"institution\"]],false],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"                \"],[8],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/section-landing-board/template.hbs" } });
});
define('collections/components/section-landing-default/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        session: Ember.inject.service(),
        attributeBindings: ['id'],
        id: Ember.computed('layout.title', function () {
            return 'section-' + this.get('index');
        }),
        tagName: 'section'
    });
});
define("collections/components/section-landing-default/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "wxilI4C+", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"landing-default-container p-xl\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n       \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n           \"],[6,\"div\"],[9,\"class\",\"text-center m-t-lg col-xs-12\"],[7],[0,\"\\n                \"],[6,\"h2\"],[7],[1,[20,[\"model\",\"title\"]],false],[8],[0,\"\\n                \"],[6,\"p\"],[9,\"class\",\"p-v-md\"],[7],[1,[20,[\"model\",\"description\"]],false],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"                   \"],[4,\"link-to\",[\"collections.collection.add\",[20,[\"model\"]]],[[\"class\"],[\"btn btn-success btn-lg\"]],{\"statements\":[[0,\"Add to Collection \"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"           \"],[8],[0,\"\\n       \"],[8],[0,\"\\n   \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[9,\"class\",\"landing-default-footer p-xl text-center\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n          \"],[6,\"h4\"],[7],[0,\" Customize your landing page\"],[8],[0,\"\\n          \"],[6,\"p\"],[7],[0,\" You can add details to your landing page by changing settings to add layout layers. Visit Edit page to make changes. \"],[8],[0,\"\\n      \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/section-landing-default/template.hbs" } });
});
define('collections/components/section-landing-info/component', ['exports', 'moment'], function (exports, _moment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        tagName: 'section',
        attributeBindings: ['id'],
        id: Ember.computed('layout.title', function () {
            return 'section-' + this.get('index');
        }),
        meetingDates: Ember.computed('model.startDate', function () {
            var startDate = this.get('model.startDate');
            var endDate = this.get('model.endDate');
            if ((0, _moment.default)(startDate).format('MM D YY') === (0, _moment.default)(endDate).format('MM D YY')) {
                return (0, _moment.default)(startDate).format('MMMM D');
            }
            return (0, _moment.default)(startDate).format('MMMM D') + ' - ' + (0, _moment.default)(endDate).format('MMMM D');
        })
    });
});
define("collections/components/section-landing-info/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "uwy5mwe4", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[9,\"class\",\"text-center\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"m-t-sm\"],[7],[0,\"\\n        \"],[6,\"h2\"],[7],[1,[18,\"meetingDates\"],false],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"m-t-sm m-b-lg\"],[7],[0,\"\\n        \"],[6,\"h3\"],[7],[1,[20,[\"model\",\"location\"]],false],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"m-t-sm m-b-lg\"],[7],[0,\"\\n        \"],[6,\"h4\"],[7],[1,[20,[\"model\",\"address\"]],false],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/section-landing-info/template.hbs" } });
});
define('collections/components/section-landing-list/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        tagName: 'section',
        attributeBindings: ['id'],
        id: Ember.computed('layout.title', function () {
            return 'section-' + this.get('index');
        }),
        data: Ember.computed('layout', function () {
            var dataSource = this.get('layout.data');
            return this.get('model.settings').data[dataSource];
        }),
        buttonStyle: Ember.computed('branding.colors', function () {
            return Ember.String.htmlSafe('background-color: ' + this.get('branding.colors.primary'));
        })
    });
});
define("collections/components/section-landing-list/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "QBVvdsgx", "block": "{\"symbols\":[\"subject\"],\"statements\":[[6,\"div\"],[9,\"class\",\"landing-list-container p-xl\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n        \"],[6,\"h2\"],[7],[0,\" \"],[1,[20,[\"layout\",\"title\"]],false],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"subject row m-b-sm\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"data\"]]],null,{\"statements\":[[0,\"                \"],[6,\"div\"],[9,\"class\",\"col-xs-12 col-sm-6 subject-item hint--bottom hint--large\"],[10,\"aria-label\",[26,[[19,1,[\"label\"]]]]],[7],[0,\"\\n                    \"],[6,\"a\"],[10,\"href\",[26,[[19,1,[\"link\"]]]]],[9,\"class\",\"btn btn-primary p-sm ember-view\"],[10,\"style\",[18,\"buttonStyle\"],null],[7],[1,[19,1,[\"name\"]],false],[8],[0,\"\\n                \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/section-landing-list/template.hbs" } });
});
define('collections/components/section-menu/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    var pi = 3.14159265359;

    function cosPow6Intg(x) {
        return x - 15 * Math.sin(2 * pi * x) / (44 * pi) - 3 * Math.sin(4 * pi * x) / (44 * pi) - Math.sin(6 * pi * x) / (132 * pi);
    }

    // Make our transition nice'n'smooth
    function animate(propertySetter, start, end, speed, units, animationCompletedCallback) {
        units = units || 0;
        propertySetter(start + units);

        // Should be in all modern browsers now.
        // We could run a check and if need be use `Date.now()`.
        var start_time = performance.now();
        var change = end - start;
        var duration = Math.abs(change * speed) + 1000;

        (function step() {
            var time_now = performance.now();
            var elapsed_time = time_now - start_time;
            requestAnimationFrame(function (ts) {
                // requestAnimationFrame() === Butter.
                propertySetter(start + change * cosPow6Intg(elapsed_time / duration) + units);
                if (elapsed_time >= duration) {
                    propertySetter(end + units);
                    animationCompletedCallback();
                    return;
                }
                step();
            });
        })();
    }

    exports.default = Ember.Component.extend({

        id: Ember.computed('layout.title', function () {
            return 'section-' + this.get('index');
        }),
        tagName: 'section',
        classNames: ['page-menu'],
        attributeBindings: ['id'],
        menuItems: Ember.computed(function () {
            return this.get('collection.settings.layers').map(function (section, index) {
                return {
                    section: section,
                    label: section['section-header'],
                    id: 'section-' + index
                };
            }).filter(function (menuItem) {
                return !menuItem.section.settings['hide-from-nav'];
            });
        }),

        actions: {
            scrollTo: function scrollTo(id) {
                var rect = document.getElementById(id).getBoundingClientRect();
                var anchorOffset = window.pageYOffset + rect.top - 70;
                animate(function (y) {
                    return window.scrollTo(0, y);
                }, window.scrollY, anchorOffset, 0.2, null, function () {
                    return history.pushState({}, document.title, location.pathname + href);
                });
            }
        }

    });
});
define("collections/components/section-menu/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "xRPGmDRl", "block": "{\"symbols\":[\"menuItem\",\"&default\"],\"statements\":[[4,\"each\",[[20,[\"menuItems\"]]],null,{\"statements\":[[0,\"    \"],[6,\"a\"],[3,\"action\",[[19,0,[]],\"scrollTo\",[19,1,[\"id\"]]]],[7],[1,[19,1,[\"label\"]],false],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n\"],[11,2],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/section-menu/template.hbs" } });
});
define('collections/components/section-paragraph/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        session: Ember.inject.service(),
        tagName: 'section',
        attributeBindings: ['style', 'id'],
        classNames: ['landing-paragraph-container'],
        id: Ember.computed('layout.title', function () {
            return 'section-' + this.get('index');
        }),
        style: Ember.computed('layout', function () {
            return Ember.String.htmlSafe('background-color: ' + this.get('layout.background-color') + '; color: ' + this.get('layout.text-color'));
        }),
        logoStyle: Ember.computed('branding.logo', function () {
            return Ember.String.htmlSafe('background-image: url(' + this.get('branding.logo.url') + '); height: ' + this.get('branding.logo.height'));
        })
    });
});
define("collections/components/section-paragraph/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "MJoQivGx", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[20,[\"layout\",\"title\"]]],null,{\"statements\":[[6,\"h2\"],[7],[1,[20,[\"layout\",\"title\"]],false],[8]],\"parameters\":[]},null],[0,\"\\n\"],[6,\"p\"],[9,\"class\",\"text-left\"],[7],[1,[20,[\"layout\",\"body\"]],false],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/section-paragraph/template.hbs" } });
});
define('collections/components/section-schedule/component', ['exports', 'lodash', 'moment'], function (exports, _lodash, _moment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        session: Ember.inject.service(),
        store: Ember.inject.service(),
        tagName: 'section',
        attributeBindings: ['style', 'id'],
        filterString: '',
        trackFilter: '',
        roomFilter: '',
        filters: [],
        selectedItemId: 0,
        selectedUUID: null,
        noResultsFound: false,
        loadingResults: true,
        id: Ember.computed('layout.title', function () {
            return 'section-' + this.get('index');
        }),
        classNames: ['schedule-explorer'],
        data: Ember.computed('layout', function () {
            var dataSource = this.get('layout.data');
            return this.get('model.settings').data[dataSource];
        }),
        style: Ember.computed('layout', function () {
            var bg = this.get('layout.background_color') ? 'background-color:' + this.get('layout.background_color') + ';' : '';
            var txt = this.get('layout.text_color') ? 'color: ' + this.get('layout.text_color') + ';' : '';
            return Ember.String.htmlSafe(bg + txt);
        }),
        items: Ember.computed('model', function () {
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
                    if (i.get('startTime') !== null) {
                        if (retList.length === 0) {
                            retList.push([i]);
                        } else if (retList[retList.length - 1][0].get('startTime') === i.get('startTime')) {
                            retList[retList.length - 1].push(i);
                        } else {
                            retList.push([i]);
                        }
                    }
                });
                if (retList.length > 0) {
                    _this.set('selectedItemId', retList[0][0].id);
                }
                return retList;
            });
        }),
        rooms: Ember.computed('model', function () {
            return this.get('model.items').then(function (results) {
                var roomsList = [];
                results.forEach(function (i) {
                    roomsList.push(i.get('location'));
                });
                return _lodash.default.uniq(roomsList).sort();
            });
        }),
        tracks: Ember.computed('model', function () {
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
        selectedItem: Ember.computed('selectedItemId', 'model', function () {
            var _this2 = this;

            $('.event').removeClass('selected-schedule');
            var id = parseInt(this.get('selectedItemId'), 10);
            $('#' + id).addClass('selected-schedule');
            if (id >= 0) {
                return this.get('store').findRecord('item', id).then(function (i) {
                    _this2.set('selectedUUID', i.get('data').sourceId);
                    return i;
                });
            }
        }),
        actions: {
            toggleFilterOptions: function toggleFilterOptions() {
                $('.edit-filter-modal').toggleClass('hidden');
            },
            applyFilter: function applyFilter() {
                $('.edit-filter-modal').toggleClass('hidden');
                $('.filter, .filter-remove, .fa-plus, .fa-filter').removeClass('filter-hidden');
            },
            addFilter: function addFilter() {
                var filter = this.get('filters');
                filter.pushObject({ id: filter.length, name: $('#' + event.target.id + ' :selected').text() });
                this.set('filters', filter);
            },
            removeFilter: function removeFilter() {
                $(event.target).parent().remove();
            },
            getInput: function getInput(e) {
                var filter = this.get('filters');
                if (filter.some(function (o) {
                    return o.name === e;
                }) || e.replace(/ /g, '') === '') {
                    return false;
                }
                filter.pushObject({ id: filter.length, name: e });
                this.set('filters', filter);
            }
        }
    });
});
define("collections/components/section-schedule/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6k/p3ZwP", "block": "{\"symbols\":[\"itemlist\",\"item\",\"room\",\"track\",\"filter\"],\"statements\":[[4,\"if\",[[25,\"await\",[[20,[\"items\"]]],null]],null,{\"statements\":[[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"filters\"],[7],[0,\"\\n    \"],[6,\"a\"],[9,\"class\",\"filter-dropdown\"],[3,\"action\",[[19,0,[]],\"toggleFilterOptions\"]],[7],[0,\"\\n        \"],[6,\"i\"],[9,\"class\",\"fa fa-filter\"],[9,\"aria-hidden\",\"true\"],[7],[8],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"filter-dropdown-text\"],[7],[0,\"Filter Schedule\"],[8],[0,\" \\n    \"],[8],[0,\"\\n\"],[4,\"each\",[[20,[\"filters\"]]],null,{\"statements\":[[0,\"        \"],[6,\"span\"],[9,\"style\",\"white-space: nowrap;\"],[10,\"data-id\",[19,5,[\"id\"]],null],[7],[0,\"\\n            \"],[6,\"a\"],[9,\"class\",\"filter-plaque  filter \"],[7],[0,\" \"],[1,[19,5,[\"name\"]],false],[0,\" \"],[8],[0,\"\\n            \"],[6,\"a\"],[9,\"class\",\"filter-plaque  filter-remove\"],[3,\"action\",[[19,0,[]],\"removeFilter\"]],[7],[0,\"×\"],[8],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[5]},null],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"edit-filter-modal hidden\"],[7],[0,\"\\n\\n    \"],[6,\"select\"],[10,\"onchange\",[25,\"action\",[[19,0,[]],\"addFilter\"],null],null],[9,\"class\",\"form-control\"],[9,\"id\",\"trackSelect\"],[7],[0,\"\\n        \"],[6,\"option\"],[9,\"value\",\"cvvvv\"],[7],[0,\"All Tracks\"],[8],[0,\"\\n\"],[4,\"each\",[[25,\"await\",[[20,[\"tracks\"]]],null]],null,{\"statements\":[[0,\"            \"],[6,\"option\"],[10,\"value\",[19,4,[]],null],[7],[1,[19,4,[]],false],[8],[0,\"\\n\"]],\"parameters\":[4]},null],[0,\"    \"],[8],[0,\"\\n\\n    \"],[6,\"select\"],[10,\"onchange\",[25,\"action\",[[19,0,[]],\"addFilter\"],null],null],[9,\"class\",\"form-control\"],[9,\"id\",\"roomSelect\"],[7],[0,\"\\n        \"],[6,\"option\"],[9,\"value\",\"\"],[7],[0,\"All Rooms\"],[8],[0,\"\\n\"],[4,\"each\",[[25,\"await\",[[20,[\"rooms\"]]],null]],null,{\"statements\":[[0,\"            \"],[6,\"option\"],[10,\"value\",[19,3,[]],null],[7],[1,[19,3,[]],false],[8],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"    \"],[8],[0,\"\\n\\n    \"],[6,\"input\"],[10,\"onblur\",[25,\"action\",[[19,0,[]],\"getInput\"],[[\"value\"],[\"target.value\"]]],null],[9,\"placeholder\",\"Filter schedule\"],[9,\"style\",\"color:black;\"],[9,\"class\",\"form-control\"],[7],[8],[0,\"\\n\\n    \"],[6,\"button\"],[9,\"class\",\"apply-button button-filter\"],[3,\"action\",[[19,0,[]],\"applyFilter\"]],[7],[0,\"Apply\"],[8],[6,\"button\"],[9,\"class\",\"text-button button-filter\"],[3,\"action\",[[19,0,[]],\"toggleFilterOptions\"]],[7],[0,\"Cancel\"],[8],[0,\"\\n\\n\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"schedule\"],[7],[0,\"\\n\"],[4,\"each\",[[25,\"await\",[[20,[\"items\"]]],null]],null,{\"statements\":[[0,\"\\n        \"],[6,\"h3\"],[9,\"class\",\"time-slot-header\"],[7],[1,[19,1,[\"0\",\"startDateTimeFormatted\"]],false],[8],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"time-slot\"],[7],[0,\"\\n\\n\"],[4,\"each\",[[19,1,[]]],null,{\"statements\":[[0,\"                \\n\"],[4,\"if\",[[25,\"eq\",[[19,2,[]],[19,1,[\"firstObject\"]]],null]],null,{\"statements\":[[0,\"                     \"],[6,\"div\"],[9,\"class\",\"event selected-schedule\"],[10,\"id\",[19,2,[\"id\"]],null],[10,\"onclick\",[25,\"action\",[[19,0,[]],[25,\"mut\",[[20,[\"selectedItemId\"]]],null],[19,2,[\"id\"]]],null],null],[7],[0,\"  \\n                        \"],[6,\"div\"],[9,\"class\",\"title\"],[7],[0,\"\\n                            \"],[6,\"strong\"],[7],[1,[19,2,[\"title\"]],false],[8],[0,\"\\n                        \"],[8],[0,\"\\n                        \"],[6,\"div\"],[9,\"class\",\"presenters\"],[7],[0,\"\\n                            \"],[1,[25,\"await\",[[19,2,[\"createdBy\",\"computedFullName\"]]],null],false],[0,\"\\n                        \"],[8],[0,\"\\n                        \"],[6,\"div\"],[9,\"class\",\"location\"],[7],[0,\"\\n                            \"],[1,[19,2,[\"location\"]],false],[0,\"\\n                        \"],[8],[0,\"\\n                        \"],[6,\"div\"],[9,\"class\",\"end-time\"],[7],[0,\"\\n                            \"],[1,[19,2,[\"startTimeFormatted\"]],false],[0,\" till \"],[1,[19,2,[\"endTimeFormatted\"]],false],[0,\"\\n                        \"],[8],[0,\"\\n                    \"],[8],[0,\"          \\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                    \"],[6,\"div\"],[9,\"class\",\"event\"],[10,\"id\",[19,2,[\"id\"]],null],[10,\"onclick\",[25,\"action\",[[19,0,[]],[25,\"mut\",[[20,[\"selectedItemId\"]]],null],[19,2,[\"id\"]]],null],null],[7],[0,\"  \\n                        \"],[6,\"div\"],[9,\"class\",\"title\"],[7],[0,\"\\n                            \"],[6,\"strong\"],[7],[1,[19,2,[\"title\"]],false],[8],[0,\"\\n                        \"],[8],[0,\"\\n                        \"],[6,\"div\"],[9,\"class\",\"presenters\"],[7],[0,\"\\n                            \"],[1,[25,\"await\",[[19,2,[\"createdBy\",\"computedFullName\"]]],null],false],[0,\"\\n                        \"],[8],[0,\"\\n                        \"],[6,\"div\"],[9,\"class\",\"location\"],[7],[0,\"\\n                            \"],[1,[19,2,[\"location\"]],false],[0,\"\\n                        \"],[8],[0,\"\\n                        \"],[6,\"div\"],[9,\"class\",\"end-time\"],[7],[0,\"\\n                            \"],[1,[19,2,[\"startTimeFormatted\"]],false],[0,\" till \"],[1,[19,2,[\"endTimeFormatted\"]],false],[0,\"\\n                        \"],[8],[0,\"\\n                    \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\n        \"],[8],[0,\"\\n\\n\"]],\"parameters\":[1]},null],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"item-detail\"],[7],[0,\"\\n    \"],[6,\"h3\"],[7],[1,[25,\"get\",[[25,\"await\",[[20,[\"selectedItem\"]]],null],\"title\"],null],false],[6,\"br\"],[7],[8],[0,\"\\n        \"],[6,\"small\"],[7],[1,[25,\"get\",[[25,\"await\",[[20,[\"selectedItem\"]]],null],\"createdBy.computedFullName\"],null],false],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[1,[25,\"get\",[[25,\"await\",[[20,[\"selectedItem\"]]],null],\"description\"],null],false],[8],[0,\"\\n    \"],[6,\"p\"],[7],[6,\"a\"],[10,\"href\",[26,[\"https://osf.io/\",[18,\"selectedUUID\"]]]],[7],[0,\"Link to author\"],[8],[0,\" | \"],[4,\"link-to\",[\"collections.collection.item\",[20,[\"model\",\"id\"]],[20,[\"selectedItemId\"]]],null,{\"statements\":[[0,\"Link to presentation\"]],\"parameters\":[]},null],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"\\n\"],[4,\"if\",[[20,[\"noResultsFound\"]]],null,{\"statements\":[[0,\"            \"],[6,\"p\"],[9,\"class\",\"text-center white error-message\"],[7],[0,\"\\n                No Results Found\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[20,[\"loadingResults\"]]],null,{\"statements\":[[0,\"            \"],[6,\"p\"],[9,\"class\",\"text-center white error-message\"],[7],[0,\"\\n                \"],[1,[25,\"loading-spinner\",null,[[\"style\",\"fullpage\"],[\"fa-4x\",\"false\"]]],false],[0,\"\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[6,\"p\"],[9,\"class\",\"error-message white\"],[7],[0,\"\\n            The schedule cannot be displayed. To display the schedule, add times to some of the items.\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/section-schedule/template.hbs" } });
});
define('collections/components/section-splash-image/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        session: Ember.inject.service(),
        tagName: 'section',
        attributeBindings: ['style', 'id'],
        id: Ember.computed('layout.title', function () {
            return 'section-' + this.get('index');
        }),
        style: Ember.computed('layout', function () {
            var url = this.get('layout.img-url') ? 'url(' + this.get('layout.img-url') + ')' : 'url(\'/img/splash-default-f3de214dacadd81632e3369b542d7fc9.jpg\')';
            var height = this.get('layout.height') ? this.get('layout.height') : '300px';
            return 'background: ' + url + ' no-repeat left center; ' + 'background-size: cover; ' + ('height: ' + height + ';') + ('background-position: ' + this.get('layout.position') + ';');
        })
    });
});
define("collections/components/section-splash-image/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "HSK+4vI8", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"splash-container p-xl\"],[7],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/section-splash-image/template.hbs" } });
});
define('collections/components/section-sponsors/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        tagName: 'section',
        attributeBindings: ['style', 'id'],
        classNames: ['sponsors'],
        id: Ember.computed('layout.title', function () {
            return 'section-' + this.get('index');
        }),
        style: Ember.computed('layout', function () {
            var bg = this.get('layout.background-color') ? this.get('layout.background-color') : this.get('branding.colors.background');
            var txt = this.get('layout.text-color') ? this.get('layout.text-color') : this.get('branding.colors.text');
            return Ember.String.htmlSafe('background-color: ' + bg + '; color: ' + txt);
        }),
        data: Ember.computed('layout', function () {
            var dataSource = this.get('layout.data');
            return this.get('model.settings').data[dataSource];
        })
    });
});
define("collections/components/section-sponsors/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "edsBCPzH", "block": "{\"symbols\":[\"categorySponsors\",\"sponsor\"],\"statements\":[[6,\"h2\"],[9,\"class\",\"p-b-lg\"],[7],[0,\"\\n    \"],[1,[20,[\"layout\",\"title\"]],false],[0,\"\\n\"],[8],[0,\"\\n\"],[4,\"each\",[[20,[\"data\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"category\"],[7],[0,\"\\n\"],[4,\"if\",[[19,1,[\"category\"]]],null,{\"statements\":[[0,\"            \"],[6,\"h3\"],[9,\"class\",\"text-center\"],[7],[1,[19,1,[\"category\"]],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"each\",[[19,1,[\"sponsors\"]]],null,{\"statements\":[[0,\"            \"],[6,\"a\"],[10,\"href\",[26,[[19,2,[\"website-url\"]]]]],[10,\"style\",[26,[\"background-image: url('\",[19,2,[\"img-url\"]],\"');\"]]],[9,\"class\",\"sponsor-logo\"],[7],[8],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"    \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/section-sponsors/template.hbs" } });
});
define('collections/components/section-title/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        session: Ember.inject.service(),
        tagName: 'section',
        attributeBindings: ['style', 'id'],
        id: Ember.computed('layout.title', function () {
            return 'section-' + this.get('index');
        }),
        classNames: ['landing-title'],
        style: Ember.computed('layout', 'branding', function () {
            // if image is specified for background, use that
            // otherwise, check if a background color has been specified.
            // if so, use that. if not, use the branding background color
            // if text color is specified, use that. otherwise, use branding text color
            var bgColor = this.get('layout.background_color') ? this.get('layout.background_color') : this.get('branding.colors.background');
            var bgImage = this.get('layout.img_url');
            var bg = bgImage ? 'background:url(' + bgImage + ') no-repeat left center; background-size: cover;' : 'background-color:' + bgColor + ';';
            var textColor = this.get('layout.text_color') ? this.get('layout.text_color') : this.get('branding.colors.text');
            textColor = 'color:' + textColor + ';';
            return Ember.String.htmlSafe(bg + textColor);
        }),
        titleColor: Ember.computed('layout', function () {
            return Ember.String.htmlSafe(this.get('layout.title_color') ? 'color: ' + this.get('layout.title_color') + ';' : '');
        }),
        taglineColor: Ember.computed('layout', function () {
            return Ember.String.htmlSafe(this.get('layout.tagline_color') ? 'color: ' + this.get('layout.tagline_color') + ';' : '');
        }),
        logoStyle: Ember.computed('branding.logo', function () {
            return Ember.String.htmlSafe('background-image: url(' + this.get('branding.logo.url') + '); height: ' + this.get('branding.logo.height'));
        })
    });
});
define("collections/components/section-title/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "nKDgXEFX", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"primary-title\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"layout\",\"logo\"]]],null,{\"statements\":[[0,\"        \"],[6,\"img\"],[9,\"class\",\"title-logo\"],[10,\"src\",[26,[[20,[\"layout\",\"logo\"]]]]],[9,\"alt\",\"logo\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[6,\"h1\"],[9,\"class\",\"title-header\"],[10,\"style\",[18,\"titleColor\"],null],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"layout\",\"title\"]]],null,{\"statements\":[[0,\"            \"],[1,[20,[\"layout\",\"title\"]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[1,[20,[\"model\",\"title\"]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"p\"],[9,\"class\",\"lead\"],[10,\"style\",[18,\"taglineColor\"],null],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"layout\",\"tagline\"]]],null,{\"statements\":[[0,\"        \"],[1,[20,[\"layout\",\"tagline\"]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[1,[20,[\"model\",\"description\"]],false],[0,\"\\n\"]],\"parameters\":[]}],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/section-title/template.hbs" } });
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
define('collections/components/validated-input/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var isEmpty = Ember.isEmpty,
        computed = Ember.computed,
        defineProperty = Ember.defineProperty;
    exports.default = Ember.Component.extend({
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
  exports.default = Ember.HTMLBars.template({ "id": "8nJpy5lP", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n    \"],[11,1],[0,\"\\n\"],[4,\"if\",[[20,[\"large\"]]],null,{\"statements\":[[0,\"        \"],[1,[25,\"textarea\",null,[[\"type\",\"value\",\"placeholder\",\"class\",\"name\"],[[20,[\"type\"]],[20,[\"value\"]],[20,[\"placeholder\"]],\"form-control\",[20,[\"valuePath\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[1,[25,\"input\",[[25,\"-input-type\",[[20,[\"type\"]]],null]],[[\"type\",\"value\",\"placeholder\",\"class\",\"name\"],[[20,[\"type\"]],[20,[\"value\"]],[20,[\"placeholder\"]],\"form-control\",[20,[\"valuePath\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[4,\"if\",[[20,[\"isValid\"]]],null,{\"statements\":[[0,\"        \"],[6,\"span\"],[9,\"class\",\"valid-input\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"input-error\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"showErrorMessage\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[9,\"class\",\"error\"],[7],[0,\"\\n                \"],[1,[25,\"get\",[[25,\"get\",[[20,[\"model\",\"validations\",\"attrs\"]],[20,[\"valuePath\"]]],null],\"message\"],null],false],[0,\"\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/validated-input/template.hbs" } });
});
define('collections/components/widget-add-node/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Component = Ember.Component,
        inject = Ember.inject,
        computed = Ember.computed;
    exports.default = Component.extend({

        store: inject.service(),

        showResults: false,
        searchGuid: '',
        searchFilter: '',
        loadingItem: false,
        showAddItemDetails: false,
        findItemError: null,
        results: null,

        newItemNode: Ember.Object.create(),

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
                    sourceId: nodeObject.get('sourceId'),
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
                sourceId: item.get('id'),
                link: item.get('links.html')
            });
        }
    });
});
define("collections/components/widget-add-node/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "XpAbfEFd", "block": "{\"symbols\":[\"error\",\"result\"],\"statements\":[[6,\"div\"],[9,\"class\",\"coll-add-item break-word\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"container-fluid\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-sm-8\"],[7],[1,[25,\"input\",null,[[\"class\",\"value\",\"placeholder\",\"enter\"],[\"form-control\",[20,[\"searchFilter\"]],\"Search\",\"enterPressSearch\"]]],false],[6,\"button\"],[10,\"class\",[26,[\"btn btn-success m-t-sm \",[25,\"unless\",[[20,[\"searchFilter\"]],\"disabled\"],null]]]],[3,\"action\",[[19,0,[]],\"searchNode\"]],[7],[0,\"Search \"],[1,[18,\"displayItemType\"],false],[8],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-sm-4\"],[7],[1,[25,\"input\",null,[[\"class\",\"value\",\"placeholder\",\"enter\"],[\"form-control\",[20,[\"searchGuid\"]],\"Enter guid\",\"enterPressGuid\"]]],false],[0,\" \"],[6,\"button\"],[10,\"class\",[26,[\"btn btn-success m-t-sm \",[25,\"unless\",[[20,[\"searchGuid\"]],\"disabled\"],null]]]],[3,\"action\",[[19,0,[]],\"findNode\"]],[7],[0,\"Preview\"],[8],[8],[0,\"\\n        \"],[8],[0,\"\\n\\n\"],[4,\"if\",[[20,[\"loadingItem\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[9,\"class\",\"p-lg text-center\"],[7],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"loader\"],[7],[0,\"\\n                    \"],[6,\"div\"],[9,\"class\",\"loader-inner ball-pulse ball-pulse-dark\"],[7],[0,\"\\n                      \"],[6,\"div\"],[7],[8],[0,\"\\n                      \"],[6,\"div\"],[7],[8],[0,\"\\n                      \"],[6,\"div\"],[7],[8],[0,\"\\n                    \"],[8],[0,\"\\n                \"],[8],[0,\"\\n             \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[20,[\"showResults\"]]],null,{\"statements\":[[4,\"if\",[[25,\"gt\",[[20,[\"results\",\"length\"]],0],null]],null,{\"statements\":[[0,\"                \"],[6,\"p\"],[9,\"class\",\"text-muted m-t-sm\"],[7],[0,\" Showing at most 10 items. Narrow search for better results. \"],[8],[0,\"\\n\"],[4,\"each\",[[20,[\"results\"]]],null,{\"statements\":[[0,\"                    \"],[6,\"div\"],[9,\"class\",\"p-xs coll-search-result\"],[7],[1,[19,2,[\"title\"]],false],[0,\" \"],[6,\"button\"],[9,\"class\",\"btn btn-link\"],[3,\"action\",[[19,0,[]],\"addItem\",[19,2,[]]]],[7],[6,\"i\"],[9,\"class\",\"fa fa-plus\"],[7],[8],[0,\" Add Item \"],[8],[8],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[]},{\"statements\":[[0,\"                \"],[6,\"p\"],[9,\"class\",\"text-muted m-t-sm\"],[7],[0,\" We couldn't find any \"],[1,[18,\"displayItemType\"],false],[0,\" with this search. Please try another search. \"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[20,[\"findItemError\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[9,\"class\",\"p-lg text-center text-danger\"],[7],[0,\"\\n                \"],[6,\"p\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"findItemError\"]]],null,{\"statements\":[[0,\"                        \"],[1,[19,1,[\"detail\"]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"                \"],[8],[0,\"\\n                \"],[6,\"p\"],[7],[0,\" Please try again or try another \"],[1,[18,\"displayItemType\"],false],[0,\" ID \"],[8],[0,\"\\n             \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[20,[\"showAddItemDetails\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[9,\"class\",\"coll-find-details p-md\"],[7],[0,\"\\n            \"],[6,\"h4\"],[7],[0,\"Title \"],[8],[0,\"\\n            \"],[6,\"p\"],[9,\"class\",\"m-t-sm\"],[7],[1,[20,[\"newItemNode\",\"title\"]],false],[8],[0,\"\\n\\n            \"],[6,\"h4\"],[7],[0,\"Description \"],[8],[0,\"\\n            \"],[6,\"p\"],[9,\"class\",\"m-t-sm\"],[7],[1,[20,[\"newItemNode\",\"description\"]],false],[8],[0,\"\\n\\n            \"],[6,\"h4\"],[7],[0,\"Type \"],[8],[0,\"\\n            \"],[6,\"p\"],[9,\"class\",\"m-t-sm\"],[7],[1,[20,[\"newItemNode\",\"type\"]],false],[8],[0,\"\\n\\n            \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"col-xs-12 text-right\"],[7],[0,\"\\n                    \"],[6,\"button\"],[9,\"class\",\"btn btn-success\"],[3,\"action\",[[19,0,[]],\"addItem\"]],[7],[0,\"Add Item \"],[8],[0,\"\\n                \"],[8],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/widget-add-node/template.hbs" } });
});
define('collections/components/widget-add-website/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        store: Ember.inject.service(),
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
                    sourceId: this.get('urlAddress'),
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
define("collections/components/widget-add-website/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "cJC4bFQC", "block": "{\"symbols\":[\"error\"],\"statements\":[[6,\"div\"],[9,\"class\",\"add-url m-t-lg\"],[7],[0,\"\\n    \"],[6,\"h4\"],[7],[0,\" Add a Website \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"row m-t-md\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col-sm-6\"],[7],[0,\"\\n            \"],[1,[25,\"input\",null,[[\"class\",\"value\",\"placeholder\"],[\"form-control\",[20,[\"urlTitle\"]],\"Enter Title\"]]],false],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col-sm-6\"],[7],[0,\"\\n            \"],[1,[25,\"input\",null,[[\"class\",\"value\",\"placeholder\"],[\"form-control\",[20,[\"urlAddress\"]],\"Enter Address\"]]],false],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"row m-t-md\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col-sm-9\"],[7],[0,\"\\n            \"],[1,[25,\"textarea\",null,[[\"class\",\"value\",\"placeholder\"],[\"form-control\",[20,[\"urlDescription\"]],\"Enter Notes\"]]],false],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col-sm-3\"],[7],[6,\"button\"],[9,\"class\",\"btn btn-success\"],[3,\"action\",[[19,0,[]],\"addWebsite\"]],[7],[0,\"Add\"],[8],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"text-center\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"urlSaveErrors\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[9,\"class\",\"text-danger\"],[7],[1,[19,1,[\"detail\"]],false],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/widget-add-website/template.hbs" } });
});
define('collections/components/widget-appendix-submit/component', ['exports', 'collections/config/environment'], function (exports, _environment) {
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
        var session = window.localStorage['ember_simple_auth-session'];
        if (session) {
            token = JSON.parse(session).authenticated;
            if ('attributes' in token) {
                return token.attributes.accessToken;
            }
            return token;
        }
    }

    exports.default = Ember.Component.extend({

        store: Ember.inject.service(),

        buttonString: 'Save',
        disabled: false,
        description: 'Submit',

        parameters: {},

        typeObserver: Ember.observer('widget.parameters', 'widget.parameters.type.value', function () {
            this.set('parameters.type', {
                value: 'meeting' });
        }),
        titleObserver: Ember.observer('widget.parameters', 'widget.parameters.title.value', function () {
            this.set('parameters.title', this.get('widget.parameters.title'));
        }),
        statusObserver: Ember.observer('widget.parameters', 'widget.parameters.status.value', function () {
            this.set('parameters.status', this.get('widget.parameters.status'));
        }),
        collectionObserver: Ember.observer('widget.parameters', 'widget.parameters.collection.value', function () {
            this.set('parameters.collection', {
                value: this.get('collection')
            });
        }),
        categoryObserver: Ember.observer('widget.parameters', 'widget.parameters.category.value', function () {
            this.set('parameters.category', this.get('widget.parameters.category'));
        }),
        locationObserver: Ember.observer('widget.parameters', 'widget.parameters.location.value', function () {
            this.set('parameters.location', this.get('widget.parameters.location'));
        }),
        startTimeObserver: Ember.observer('widget.parameters', 'widget.parameters.startTime.value', function () {
            this.set('parameters.startTime', this.get('widget.parameters.startTime'));
        }),
        endTimeObserver: Ember.observer('widget.parameters', 'widget.parameters.endTime.value', function () {
            this.set('parameters.endTime', this.get('widget.parameters.endTime'));
        }),
        descriptionObserver: Ember.observer('widget.parameters', 'widget.parameters.description.value', function () {
            this.set('parameters.description', this.get('widget.parameters.description'));
        }),
        metadataObserver: Ember.observer('widget.parameters', 'widget.parameters.metadata.value', function () {
            this.set('parameters.metadata', this.get('widget.parameters.metadata'));
        }),
        nodeObserver: Ember.observer('widget.parameters', 'widget.parameters.node.value', function () {
            this.set('parameters.node', this.get('widget.parameters.node'));
        }),

        init: function init() {
            this.set('parameters.type', {
                value: 'meeting' });
            this.set('parameters.title', this.get('widget.parameters.title'));
            this.set('parameters.status', this.get('widget.parameters.status'));
            this.set('parameters.collection', {
                value: this.get('collection')
            });
            this.set('parameters.category', this.get('widget.parameters.category'));
            this.set('parameters.location', this.get('widget.parameters.location'));
            this.set('parameters.startTime', this.get('widget.parameters.startTime'));
            this.set('parameters.endTime', this.get('widget.parameters.endTime'));
            this.set('parameters.description', this.get('widget.parameters.description'));
            this.set('parameters.metadata', this.get('widget.parameters.metadata'));
            this.set('parameters.node', this.get('widget.parameters.node'));
            return this._super.apply(this, arguments);
        },


        actions: {
            pressButton: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var item, node, uri, xhr, deferred;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    item = this.get('store').createRecord('item');

                                    item.set('type', 'meeting');
                                    item.set('title', this.get('parameters.eventTitle.value'));
                                    //             item.set('type', 'event');
                                    item.set('status', 'none');
                                    item.set('collection', this.get('collection'));
                                    item.set('category', this.get('parameters.category.value'));
                                    item.set('location', this.get('parameters.location.value'));
                                    item.set('startTime', this.get('parameters.startTime.value'));
                                    item.set('endTime', this.get('parameters.endTime.value'));
                                    item.set('description', this.get('parameters.description.value'));

                                    // TODO: REPLACE THESE WITH REAL WIDGETS
                                    item.set('metadata', '{}');
                                    item.set('sourceId', '3hgm5');
                                    item.set('url', 'http://example.com');

                                    node = this.get('widget.parameters.node.value');
                                    // const node = this.get('store').createRecord('node');
                                    // node.set('title', this.get('widget.parameters.title.value'));
                                    // node.set('category', 'communication');

                                    _context.next = 16;
                                    return node.save();

                                case 16:
                                    uri = _environment.default.OSF.waterbutlerUrl + 'v1/resources/' + node.get('id') + '/providers/osfstorage/?kind=file&name=' + item.get('title') + '&direct=true';
                                    xhr = new XMLHttpRequest();

                                    xhr.open('PUT', uri, true);
                                    xhr.withCredentials = false;
                                    xhr.setRequestHeader('Authorization', 'Bearer ' + getToken());

                                    deferred = Ember.RSVP.defer();

                                    xhr.onreadystatechange = function () {
                                        if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
                                            item.set('fileLink', JSON.parse(xhr.responseText).data.links.download);
                                            item.save();
                                        }
                                    };

                                    xhr.send(this.get('widget.parameters.fileData.value'));

                                case 24:
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
define("collections/components/widget-appendix-submit/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "54dkZg9R", "block": "{\"symbols\":[],\"statements\":[[6,\"button\"],[9,\"class\",\"btn btn-primary submit_button\"],[10,\"disabled\",[25,\"if\",[[20,[\"disabled\"]],\"disabled\",null],null],null],[3,\"action\",[[19,0,[]],\"pressButton\"]],[7],[0,\"\\n    \"],[1,[18,\"description\"],false],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/widget-appendix-submit/template.hbs" } });
});
define('collections/components/widget-approval-submit/component', ['exports', 'collections/config/environment'], function (exports, _environment) {
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
        var session = window.localStorage['ember_simple_auth-session'];
        if (session) {
            token = JSON.parse(session).authenticated;
            if ('attributes' in token) {
                return token.attributes.accessToken;
            }
            return token;
        }
    }

    exports.default = Ember.Component.extend({

        store: Ember.inject.service(),

        buttonString: 'Save',
        disabled: false,
        description: 'Submit',

        parameters: {},

        init: function init() {
            this.set('parameters.type', {
                value: 'meeting' });
            return this._super.apply(this, arguments);
        },


        actions: {
            pressButton: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var item;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return this.get('store').findRecord('item', this.get('parameters.item.value'));

                                case 2:
                                    item = _context.sent;

                                    item.set('location', this.get('parameters.eventRoom.value'));
                                    item.set('startTime', this.get('parameters.startDate.value'));
                                    item.set('endTime', this.get('parameters.endDate.value'));
                                    if (this.get('parameters.approve.value')) item.set('status', 'approved');
                                    if (this.get('parameters.deny.value')) item.set('status', 'denied');
                                    _context.next = 10;
                                    return item.save();

                                case 10:
                                    this.get('router').transitionTo('collections.collection.item', this.get('collection').id, item.id);

                                case 11:
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
define("collections/components/widget-approval-submit/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "0l0iJOMK", "block": "{\"symbols\":[],\"statements\":[[6,\"button\"],[9,\"class\",\"btn btn-primary submit_button\"],[10,\"disabled\",[25,\"if\",[[20,[\"disabled\"]],\"disabled\",null],null],null],[3,\"action\",[[19,0,[]],\"pressButton\"]],[7],[0,\"\\n    \"],[1,[18,\"description\"],false],[0,\"\\n\"],[8],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/widget-approval-submit/template.hbs" } });
});
define('collections/components/widget-button/component', ['exports'], function (exports) {
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

    exports.default = Ember.Component.extend({

        buttonString: 'Save',

        widgetClasses: ['section-submit-button'], // eslint-disable-line ember/avoid-leaking-state-in-components
        widgetClassString: Ember.computed('widgetClasses', function () {
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
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
define("collections/components/widget-button/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5RseMyzL", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[6,\"button\"],[10,\"class\",[26,[\"btn btn-primary \",[18,\"widgetClassString\"]]]],[10,\"disabled\",[25,\"if\",[[20,[\"disabled\"]],\"disabled\",null],null],null],[3,\"action\",[[19,0,[]],\"pressButton\"]],[7],[1,[18,\"description\"],false],[8],[0,\" \"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/widget-button/template.hbs" } });
});
define('collections/components/widget-choice-picker/component', ['exports'], function (exports) {
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

    exports.default = Ember.Component.extend({

        caxe: Ember.inject.service(),
        store: Ember.inject.service(),

        choiceObserver: Ember.observer('chosen', function () {
            var _this = this;

            Ember.run(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var chosen, caxe, chosenParameter;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                chosen = _this.get('chosen');
                                _context2.next = 3;
                                return _this.get('store').findRecord('case', _this.get('caxe.activeCase.id'));

                            case 3:
                                caxe = _context2.sent;
                                _context2.next = 6;
                                return _this.get('store').queryRecord('parameter', {
                                    name: chosen,
                                    case: caxe.id
                                });

                            case 6:
                                chosenParameter = _context2.sent;


                                _this.get('parameters.choices.value').map(function () {
                                    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(choiceName) {
                                        var choice, choiceCases, wf;
                                        return regeneratorRuntime.wrap(function _callee$(_context) {
                                            while (1) {
                                                switch (_context.prev = _context.next) {
                                                    case 0:
                                                        _context.next = 2;
                                                        return _this.get('store').queryRecord('parameter', {
                                                            name: choiceName.parameter,
                                                            case: caxe.id
                                                        });

                                                    case 2:
                                                        choice = _context.sent;

                                                        if (choice) {
                                                            _context.next = 15;
                                                            break;
                                                        }

                                                        choice = _this.get('store').createRecord('parameter');
                                                        _context.next = 7;
                                                        return choice.get('cases');

                                                    case 7:
                                                        choiceCases = _context.sent;

                                                        choiceCases.addObject(caxe);
                                                        _context.next = 11;
                                                        return caxe.get('workflow');

                                                    case 11:
                                                        wf = _context.sent;

                                                        choice.disableAutosave = true;
                                                        choice.set('workflow', wf);
                                                        choice.set('name', choiceName.parameter);

                                                    case 15:

                                                        choice.set('value', choiceName.parameter === chosen);

                                                    case 16:
                                                    case 'end':
                                                        return _context.stop();
                                                }
                                            }
                                        }, _callee, _this);
                                    }));

                                    return function (_x) {
                                        return _ref2.apply(this, arguments);
                                    };
                                }());

                            case 8:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this);
            })));
        })

    });
});
define("collections/components/widget-choice-picker/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "YQLXqZqL", "block": "{\"symbols\":[\"choice\"],\"statements\":[[1,[20,[\"widget\",\"description\"]],false],[0,\"\\n\\n\"],[4,\"each\",[[20,[\"parameters\",\"choices\",\"value\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"radio\"],[7],[0,\"\\n        \"],[1,[25,\"radio-button\",null,[[\"id\",\"value\",\"name\",\"checked\"],[[19,1,[\"parameter\"]],[19,1,[\"parameter\"]],[19,1,[\"parameter\"]],[20,[\"chosen\"]]]]],false],[0,\"\\n        \"],[6,\"label\"],[10,\"for\",[26,[[19,1,[\"parameter\"]]]]],[7],[1,[19,1,[\"label\"]],false],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/widget-choice-picker/template.hbs" } });
});
define('collections/components/widget-datetime-field/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({

        editing: true,

        description: 'Enter a start time for this presentation.',

        didReceiveAttrs: function didReceiveAttrs() {
            this.set('description', this.attrs.description);
        }
    });
});
define("collections/components/widget-datetime-field/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "bAPbRlHv", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"style\"],[7],[0,\"\\n\\n    .submission-text-field {\\n        margin-top: 10px;\\n    }\\n\\n\\n\"],[8],[0,\"\\n\\n\"],[4,\"if\",[[25,\"not\",[[20,[\"editing\"]]],null]],null,{\"statements\":[[0,\"\\n    \"],[1,[18,\"valueName\"],false],[0,\": \"],[1,[20,[\"widget\",\"parameters\",\"date\",\"value\"]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[20,[\"editing\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"submission-text-field\"],[7],[0,\"\\n        \"],[6,\"label\"],[7],[1,[20,[\"widget\",\"description\"]],false],[8],[0,\"\\n        \"],[1,[25,\"bs-datetimepicker\",null,[[\"date\"],[[20,[\"parameters\",\"date\",\"value\"]]]]],false],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/widget-datetime-field/template.hbs" } });
});
define('collections/components/widget-datetime-picker/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({

        pickerValue: null
    });
});
define("collections/components/widget-datetime-picker/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Ci/Jkvgi", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n    hello\\n    \"],[6,\"div\"],[9,\"class\",\"input-group date datetimepicker\"],[7],[0,\"\\n        \"],[1,[25,\"input\",null,[[\"class\",\"value\"],[\"form-control\",[20,[\"editing\"]]]]],false],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"input-group-addon\"],[7],[0,\"\\n            \"],[6,\"span\"],[9,\"class\",\"glyphicon glyphicon-calendar\"],[7],[8],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/widget-datetime-picker/template.hbs" } });
});
define('collections/components/widget-file-uploader/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({

        fileChosen: false,

        parameters: {},

        actions: {
            uploadFile: function uploadFile(ev) {
                var _this = this;

                var reader = new FileReader();
                var fileHandle = ev.target.files[0];
                var filenameParts = ev.currentTarget.value.split('\\');
                var filename = filenameParts[filenameParts.length - 1];

                reader.onloadend = function (ev) {
                    _this.set('parameters.fileName.value', filename);
                    _this.set('fileChosen', true);
                    var result = ev.target.result;
                    _this.set('parameters.fileData.value', result);
                };
                reader.readAsDataURL(fileHandle);
            }
        }

    });
});
define("collections/components/widget-file-uploader/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Wl4z9duU", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[9,\"class\",\"submission-upload\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"directions\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"fileChosen\"]]],null,{\"statements\":[[0,\"      \"],[1,[20,[\"widget\",\"parameters\",\"fileName\",\"value\"]],false],[0,\" selected for upload.\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      Select a preprint file to upload\\n\"]],\"parameters\":[]}],[0,\"  \"],[8],[0,\"\\n  \"],[6,\"input\"],[9,\"class\",\"upload\"],[9,\"type\",\"file\"],[10,\"onchange\",[25,\"action\",[[19,0,[]],\"uploadFile\"],[[\"value\"],[[20,[\"target\"]]]]],null],[7],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/widget-file-uploader/template.hbs" } });
});
define('collections/components/widget-item-display/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({

        store: Ember.inject.service(),

        editing: true,
        description: 'Enter a title for the preprint.',

        classNames: ['item-display'],

        item: undefined,

        didReceiveAttrs: function didReceiveAttrs() {
            var _this = this;

            this.set('description', this.attrs.description);
            this.get('store').findRecord('item', this.get('parameters.value.value')).then(function (item) {
                _this.set('item', item);
            });
        }
    });
});
define("collections/components/widget-item-display/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "80vAdNtf", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[9,\"class\",\"property\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"name\"],[7],[0,\"Title\"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"value\"],[7],[1,[20,[\"item\",\"title\"]],false],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"property\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"name\"],[7],[0,\"Kind\"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"value\"],[7],[1,[20,[\"item\",\"kind\"]],false],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"property\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"name\"],[7],[0,\"Description\"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"value\"],[7],[1,[20,[\"item\",\"description\"]],false],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"h3\"],[7],[0,\"Materials\"],[8],[0,\"\\n\"],[1,[25,\"file-renderer\",null,[[\"download\",\"width\",\"allowfullscreen\"],[[20,[\"item\",\"fileLink\"]],\"100%\",true]]],false],[0,\"\\n\"],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/widget-item-display/template.hbs" } });
});
define('collections/components/widget-meeting-submit/component', ['exports', 'collections/config/environment'], function (exports, _environment) {
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
        var session = window.localStorage['ember_simple_auth-session'];
        if (session) {
            token = JSON.parse(session).authenticated;
            if ('attributes' in token) {
                return token.attributes.accessToken;
            }
            return token;
        }
    }

    exports.default = Ember.Component.extend({

        store: Ember.inject.service(),

        buttonString: 'Save',
        disabled: false,
        description: 'Submit',

        parameters: {},

        init: function init() {
            this.set('parameters.type', {
                value: 'meeting'
            });
            return this._super.apply(this, arguments);
        },


        actions: {
            pressButton: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var _this = this;

                    var item, node, uri, xhr, deferred, b64Data, contentType, binaryData, byteNumbers, i, byteArray, blob;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    this.attrs.toggleLoading();
                                    this.set('disabled', true);
                                    item = this.get('store').createRecord('item');


                                    item.set('kind', this.get('parameters.kind.value'));
                                    item.set('title', this.get('parameters.title.value'));
                                    item.set('status', this.get('parameters.submissionSuccessStatus'));
                                    item.set('collection', this.get('collection'));
                                    item.set('category', this.get('parameters.category.value'));
                                    item.set('location', this.get('parameters.location.value'));
                                    item.set('startTime', this.get('parameters.startTime.value'));
                                    item.set('endTime', this.get('parameters.endTime.value'));
                                    item.set('description', this.get('parameters.description.value'));
                                    item.set('fileName', this.get('parameters.fileName.value'));

                                    // TODO: REPLACE THESE WITH REAL WIDGETS
                                    item.set('metadata', '{}');

                                    node = this.get('parameters.node.value');

                                    if (!(node == undefined || node === undefined)) {
                                        _context.next = 20;
                                        break;
                                    }

                                    this.set('disabled', false);
                                    this.attrs.toggleLoading();
                                    this.toast.error('Some fields are missing!');
                                    return _context.abrupt('return', false);

                                case 20:
                                    _context.next = 22;
                                    return node.save();

                                case 22:
                                    item.set('sourceId', node.get('id'));
                                    uri = _environment.default.OSF.waterbutlerUrl + 'v1/resources/' + node.get('id') + '/providers/osfstorage/?kind=file&name=' + this.get('parameters.fileName.value') + '&direct=true';
                                    xhr = new XMLHttpRequest();

                                    xhr.open('PUT', uri, true);
                                    xhr.withCredentials = false;
                                    xhr.setRequestHeader('Authorization', 'Bearer ' + getToken());

                                    deferred = Ember.RSVP.defer();

                                    xhr.onreadystatechange = function () {
                                        if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
                                            item.set('url', 'http://example.com');
                                            item.set('fileLink', JSON.parse(xhr.responseText).data.links.download);
                                            item.save().then(function (item) {
                                                var workflow_id = _this.get('collection.collectionWorkflows').find(function (collectionWorkflow) {
                                                    return collectionWorkflow.role === 'approval';
                                                });

                                                _this.get('store').findRecord('workflow', workflow_id, { reload: true }).then(function (wf) {
                                                    var caxe = _this.get('store').createRecord('case');
                                                    caxe.set('collection', _this.get('collection'));
                                                    caxe.set('workflow', wf);
                                                    caxe.save().then(function (caxe) {
                                                        _this.get('store').queryRecord('parameter', {
                                                            name: 'item',
                                                            case: caxe.id
                                                        }).then(function (itemParameter) {
                                                            if (!itemParameter) {
                                                                itemParameter = _this.get('store').createRecord('parameter');
                                                                itemParameter.disableAutosave = true;
                                                                itemParameter.set('workflow', wf);
                                                                itemParameter.set('name', 'item');
                                                                itemParameter.get('cases').then(function (cases) {
                                                                    return cases.addObject(caxe);
                                                                });
                                                            }

                                                            itemParameter.set('value', item.id);
                                                            itemParameter.save().then(function (itemParameter) {
                                                                return _this.get('router').transitionTo('collections.collection.item', _this.get('collection').id, item.id);
                                                            });
                                                            _this.set('disabled', false);
                                                            _this.attrs.toggleLoading();
                                                        });
                                                    });
                                                });
                                            }, function (err) {
                                                console.log(err);
                                                _this.set('disabled', false);
                                                _this.attrs.toggleLoading();
                                            });
                                        } else if (xhr.readyState === 4 && xhr.status >= 409) {
                                            _this.attrs.toggleLoading();
                                            _this.toast.error('Duplicate file!');
                                            _this.set('disabled', false);
                                        } else if (xhr.readyState === 4 && xhr.status >= 400) {
                                            _this.toast.error('Some fields are missing!');
                                        }
                                    };
                                    // The base64 data needs to be converted to binary. We followed this stackoverflow answer:
                                    // https://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript

                                    if (!(this.get('parameters.fileData.value') === null)) {
                                        _context.next = 35;
                                        break;
                                    }

                                    this.set('disabled', false);
                                    this.attrs.toggleLoading();
                                    this.toast.error('Some fields are missing!');
                                    return _context.abrupt('return', false);

                                case 35:
                                    b64Data = this.get('parameters.fileData.value').split(',')[1];
                                    contentType = this.get('parameters.fileData.value').split(',')[0];
                                    binaryData = atob(b64Data);
                                    byteNumbers = new Array(binaryData.length);

                                    for (i = 0; i < binaryData.length; i++) {
                                        byteNumbers[i] = binaryData.charCodeAt(i);
                                    }
                                    byteArray = new Uint8Array(byteNumbers);
                                    blob = new Blob([byteArray], { type: contentType });

                                    xhr.send(blob);

                                case 43:
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
define("collections/components/widget-meeting-submit/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5OEn6oBa", "block": "{\"symbols\":[],\"statements\":[[6,\"button\"],[9,\"class\",\"btn btn-primary submit_button pull-right\"],[10,\"disabled\",[25,\"if\",[[20,[\"disabled\"]],\"disabled\",null],null],null],[3,\"action\",[[19,0,[]],\"pressButton\"]],[7],[0,\"\\n    \"],[1,[18,\"description\"],false],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"br\"],[7],[8],[0,\"\\n\"],[6,\"br\"],[7],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/widget-meeting-submit/template.hbs" } });
});
define('collections/components/widget-node-creator/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({

        chosen: null,
        create: false,
        node_created: false,

        store: Ember.inject.service(),

        createNodeObserver: Ember.observer('parameters.enable.value', function () {
            var _this = this;

            Ember.run(function () {
                _this.get('parameters.node').disableAutosave = true;
                if (_this.get('parameters.enable.value') === true) {
                    _this.set('parameters.node.value', _this.get('node'));
                }
            });
        }),

        init: function init() {
            var node = this.get('store').createRecord('node');
            node.set('category', 'other');
            node.set('title', 'Created by collections submission form.');
            this.set('node', node);
            return this._super.apply(this, arguments);
        }
    });
});
define("collections/components/widget-node-creator/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "NgCQOpDr", "block": "{\"symbols\":[],\"statements\":[],\"hasEval\":false}", "meta": { "moduleName": "collections/components/widget-node-creator/template.hbs" } });
});
define('collections/components/widget-paragraph/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define("collections/components/widget-paragraph/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6b8dMXRB", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[9,\"class\",\"m-t-sm\"],[7],[0,\"\\n\"],[1,[18,\"description\"],false],[0,\"\\n\"],[8],[0,\"\\n\"],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/widget-paragraph/template.hbs" } });
});
define('collections/components/widget-repository-submit/component', ['exports', 'collections/config/environment'], function (exports, _environment) {
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
        var session = window.localStorage['ember_simple_auth-session'];
        if (session) {
            token = JSON.parse(session).authenticated;
            if ('attributes' in token) {
                return token.attributes.accessToken;
            }
            return token;
        }
    }

    exports.default = Ember.Component.extend({

        store: Ember.inject.service(),

        buttonString: 'Save',
        disabled: false,
        description: 'Submit',

        parameters: {},

        init: function init() {
            this.set('parameters.type', { value: 'meeting' });
            return this._super.apply(this, arguments);
        },


        actions: {
            pressButton: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var _this = this;

                    var item, node, uri, xhr, deferred, b64Data, contentType, binaryData, byteNumbers, i, byteArray, blob;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    this.attrs.toggleLoading();
                                    this.set('disabled', true);
                                    item = void 0;

                                    if (!(Number(this.get('parameters.item.value')) === NaN || Number(this.get('parameters.item.value')) === 0)) {
                                        _context.next = 7;
                                        break;
                                    }

                                    item = this.get('store').createRecord('item');
                                    _context.next = 10;
                                    break;

                                case 7:
                                    _context.next = 9;
                                    return this.get('store').findRecord('item', this.get('parameters.item.value'));

                                case 9:
                                    item = _context.sent;

                                case 10:

                                    item.set('kind', 'repository');
                                    item.set('title', this.get('parameters.title.value'));
                                    item.set('status', this.get('parameters.submissionSuccessStatus.value'));
                                    item.set('collection', this.get('collection'));
                                    item.set('description', this.get('parameters.description.value'));
                                    item.set('fileName', this.get('parameters.fileName.value'));
                                    item.set('metadata', this.get('parameters.metadata.value'));

                                    node = this.get('parameters.node.value');

                                    if (!(node == undefined || node === undefined)) {
                                        _context.next = 23;
                                        break;
                                    }

                                    this.set('disabled', false);
                                    this.attrs.toggleLoading();
                                    this.toast.error('Some fields are missing!');
                                    return _context.abrupt('return', false);

                                case 23:
                                    _context.next = 25;
                                    return node.save();

                                case 25:
                                    item.set('sourceId', node.get('id'));
                                    uri = _environment.default.OSF.waterbutlerUrl + 'v1/resources/' + node.get('id') + '/providers/osfstorage/?kind=file&name=' + this.get('parameters.fileName.value') + '&direct=true';
                                    xhr = new XMLHttpRequest();

                                    xhr.open('PUT', uri, true);
                                    xhr.withCredentials = false;
                                    xhr.setRequestHeader('Authorization', 'Bearer ' + getToken());

                                    deferred = Ember.RSVP.defer();

                                    xhr.onreadystatechange = function () {
                                        if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
                                            item.set('url', 'http://example.com');
                                            item.set('fileLink', JSON.parse(xhr.responseText).data.links.download);
                                            item.save().then(function (item) {

                                                if (Number(_this.get('parameters.item.value')) === NaN || Number(_this.get('parameters.item.value')) === 0) {
                                                    console.log('DKbsbnfgsngsnngn setting CASE is NOT a number');
                                                    _this.set('parameters.item.value', item.id);
                                                } else {
                                                    console.log('CASE is a number', _this.get('parameters.item.value'));
                                                }

                                                _this.get('store').findRecord('workflow', _this.get('parameters.nextWorkflow.value'), { reload: true }).then(function (wf) {
                                                    var caxe = _this.get('store').createRecord('case');
                                                    caxe.set('collection', _this.get('collection'));
                                                    caxe.set('workflow', wf);
                                                    caxe.save().then(function (caxe) {
                                                        _this.get('store').queryRecord('parameter', {
                                                            name: 'item',
                                                            case: caxe.id
                                                        }).then(function (itemParameter) {
                                                            if (!itemParameter) {
                                                                itemParameter = _this.get('store').createRecord('parameter');
                                                                itemParameter.disableAutosave = true;
                                                                itemParameter.set('workflow', wf);
                                                                itemParameter.set('name', 'item');
                                                                itemParameter.get('cases').then(function (cases) {
                                                                    return cases.addObject(caxe);
                                                                });
                                                            }

                                                            itemParameter.set('value', item.id);
                                                            itemParameter.save().then(function (itemParameter) {
                                                                return _this.get('router').transitionTo('collections.collection.item', _this.get('collection').id, item.id);
                                                            });
                                                            _this.set('disabled', false);
                                                            _this.attrs.toggleLoading();
                                                        });
                                                    });
                                                });
                                            }, function (err) {
                                                console.log(err);
                                                _this.set('disabled', false);
                                                _this.attrs.toggleLoading();
                                            });
                                        } else if (xhr.readyState === 4 && xhr.status >= 409) {
                                            _this.attrs.toggleLoading();
                                            _this.toast.error('Duplicate file!');
                                            _this.set('disabled', false);
                                        } else if (xhr.readyState === 4 && xhr.status >= 400) {
                                            _this.toast.error('Some fields are missing!');
                                        }
                                    };
                                    // The base64 data needs to be converted to binary. We followed this stackoverflow answer:
                                    // https://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript

                                    if (!(this.get('parameters.fileData.value') === null)) {
                                        _context.next = 38;
                                        break;
                                    }

                                    this.set('disabled', false);
                                    this.attrs.toggleLoading();
                                    this.toast.error('Some fields are missing!');
                                    return _context.abrupt('return', false);

                                case 38:
                                    b64Data = this.get('parameters.fileData.value').split(',')[1];
                                    contentType = this.get('parameters.fileData.value').split(',')[0];
                                    binaryData = atob(b64Data);
                                    byteNumbers = new Array(binaryData.length);

                                    for (i = 0; i < binaryData.length; i++) {
                                        byteNumbers[i] = binaryData.charCodeAt(i);
                                    }
                                    byteArray = new Uint8Array(byteNumbers);
                                    blob = new Blob([byteArray], { type: contentType });

                                    xhr.send(blob);

                                case 46:
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
define("collections/components/widget-repository-submit/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "LZYRHwNe", "block": "{\"symbols\":[],\"statements\":[[6,\"button\"],[9,\"class\",\"btn btn-primary submit_button\"],[10,\"disabled\",[25,\"if\",[[20,[\"disabled\"]],\"disabled\",null],null],null],[3,\"action\",[[19,0,[]],\"pressButton\"]],[7],[0,\"\\n    \"],[1,[18,\"description\"],false],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"br\"],[7],[8],[0,\"\\n\"],[6,\"br\"],[7],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/widget-repository-submit/template.hbs" } });
});
define('collections/components/widget-subject-picker/component', ['exports'], function (exports) {
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
    exports.default = Ember.Component.extend({
        store: Ember.inject.service(),
        theme: Ember.inject.service(),

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

        disciplineValid: Ember.computed.notEmpty('selected'),

        tier1Sorted: Ember.computed.sort('tier1Filtered', 'tierSorting'),
        tier2Sorted: Ember.computed.sort('tier2Filtered', 'tierSorting'),
        tier3Sorted: Ember.computed.sort('tier3Filtered', 'tierSorting'),

        tier1Filtered: Ember.computed('tier1FilterText', '_tier1.[]', function () {
            var items = this.get('_tier1') || [];
            var filterText = this.get('tier1FilterText').toLowerCase();
            if (filterText) {
                return items.filter(function (item) {
                    return item.get('text').toLowerCase().includes(filterText);
                });
            }
            return items;
        }),

        tier2Filtered: Ember.computed('tier2FilterText', '_tier2.[]', function () {
            var items = this.get('_tier2') || [];
            var filterText = this.get('tier2FilterText').toLowerCase();
            if (filterText) {
                return items.filter(function (item) {
                    return item.get('text').toLowerCase().includes(filterText);
                });
            }
            return items;
        }),

        tier3Filtered: Ember.computed('tier3FilterText', '_tier3.[]', function () {
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
        subjectsList: Ember.computed('subjects.@each', function () {
            return this.get('subjects') ? Ember.$.extend(true, [], this.get('subjects')) : Ember.A();
        }),

        // Flattened subject list
        disciplineReduced: Ember.computed('subjects', function () {
            return Ember.$.extend(true, [], this.get('subjects')).reduce(function (acc, val) {
                return acc.concat(val);
            }, []).uniqBy('id');
        }),

        disciplineChanged: Ember.computed('subjects.@each.subject', 'selected.@each.subject', 'disciplineModifiedToggle', function () {
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
                this.set('selected', Ember.$.extend(true, [], this.get('subjects')));
            },
            saveSubjects: function saveSubjects() {
                var _this2 = this;

                var subjectMap = Ember.$.extend(true, [], this.get('selected'));
                this.get('action')(this).then(function () {
                    _this2.attrs.saveParameter(_this2.attrs.widget.value.parameters.subjects, {
                        value: subjectMap,
                        state: ['defined']
                    });
                    // Update subjects with selected subjects
                    _this2.set('subjects', Ember.$.extend(true, [], subjectMap));
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
define("collections/components/widget-subject-picker/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "RC3U+gbm", "block": "{\"symbols\":[\"subject\",\"subject\",\"subject\",\"subject\",\"segment\",\"subject\"],\"statements\":[[4,\"if\",[[25,\"not\",[[20,[\"isOpen\"]]],null]],null,{\"statements\":[[4,\"if\",[[20,[\"disciplineReduced\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col-xs-12\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"disciplineReduced\"]]],null,{\"statements\":[[0,\"                \"],[6,\"span\"],[9,\"class\",\"subject-preview\"],[7],[1,[19,6,[\"text\"]],false],[8],[0,\"\\n\"]],\"parameters\":[6]},null],[0,\"        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"preprint-form-body\",null,null,{\"statements\":[[4,\"if\",[[20,[\"isOpen\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"selected\"]]],null,{\"statements\":[[0,\"            \"],[6,\"span\"],[9,\"class\",\"subject\"],[7],[0,\"\\n\"],[4,\"each\",[[19,4,[]]],null,{\"statements\":[[0,\"                    \"],[6,\"b\"],[7],[1,[19,5,[\"text\"]],false],[8],[0,\"\\n\"]],\"parameters\":[5]},null],[0,\"                \"],[1,[25,\"fa-icon\",[\"times\"],[[\"click\"],[[25,\"action\",[[19,0,[]],\"deselect\",[19,4,[]]],null]]]],false],[0,\"\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[4]},null],[0,\"    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"col-md-4\"],[7],[0,\"\\n            \"],[6,\"ul\"],[9,\"style\",\"overflow: scroll\"],[7],[0,\"\\n                \"],[1,[25,\"input\",null,[[\"value\",\"class\",\"placeholder\"],[[20,[\"tier1FilterText\"]],\"form-control\",\"Search\"]]],false],[0,\"\\n\"],[4,\"each\",[[20,[\"tier1Sorted\"]]],null,{\"statements\":[[0,\"                    \"],[6,\"li\"],[10,\"class\",[25,\"if\",[[25,\"eq\",[[19,3,[]],[20,[\"selection1\"]]],null],\"selected\"],null],null],[3,\"action\",[[19,0,[]],\"select\",[19,3,[]],\"1\"]],[7],[0,\"\\n                        \"],[1,[19,3,[\"text\"]],false],[0,\"\\n                    \"],[8],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"col-md-4\"],[7],[0,\"\\n            \"],[6,\"ul\"],[9,\"style\",\"overflow: scroll\"],[7],[0,\"\\n                \"],[1,[25,\"input\",null,[[\"value\",\"class\",\"placeholder\"],[[20,[\"tier2FilterText\"]],\"form-control\",\"Search\"]]],false],[0,\"\\n\"],[4,\"each\",[[20,[\"tier2Sorted\"]]],null,{\"statements\":[[0,\"                    \"],[6,\"li\"],[10,\"class\",[25,\"if\",[[25,\"eq\",[[19,2,[]],[20,[\"selection2\"]]],null],\"selected\"],null],null],[3,\"action\",[[19,0,[]],\"select\",[19,2,[]],\"2\"]],[7],[0,\"\\n                        \"],[1,[19,2,[\"text\"]],false],[0,\"\\n                    \"],[8],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"col-md-4\"],[7],[0,\"\\n            \"],[6,\"ul\"],[9,\"style\",\"overflow: scroll\"],[7],[0,\"\\n                \"],[1,[25,\"input\",null,[[\"value\",\"class\",\"placeholder\"],[[20,[\"tier3FilterText\"]],\"form-control\",\"Search\"]]],false],[0,\"\\n\"],[4,\"each\",[[20,[\"tier3Sorted\"]]],null,{\"statements\":[[0,\"                    \"],[6,\"li\"],[10,\"class\",[25,\"if\",[[25,\"eq\",[[19,1,[]],[20,[\"selection3\"]]],null],\"selected\"],null],null],[3,\"action\",[[19,0,[]],\"select\",[19,1,[]],\"3\"]],[7],[0,\"\\n                        \"],[1,[19,1,[\"text\"]],false],[0,\"\\n                    \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"col-md-12\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"pull-right\"],[7],[0,\"\\n              \"],[6,\"button\"],[9,\"class\",\"btn btn-default\"],[10,\"disabled\",[25,\"unless\",[[20,[\"disciplineChanged\"]],true],null],null],[3,\"action\",[[19,0,[]],\"discardSubjects\"]],[7],[0,\"Discard changes\"],[8],[0,\"\\n              \"],[6,\"button\"],[9,\"class\",\"btn btn-primary\"],[10,\"disabled\",[25,\"unless\",[[20,[\"disciplineValid\"]],true],null],null],[3,\"action\",[[19,0,[]],\"saveSubjects\"]],[7],[0,\"Save and continue\"],[8],[0,\"\\n          \"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/widget-subject-picker/template.hbs" } });
});
define('collections/components/widget-text-area/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({

        editing: true,

        description: 'Enter a title for the preprint.',

        didReceiveAttrs: function didReceiveAttrs() {
            this.set('description', this.attrs.description);
        }
    });
});
define("collections/components/widget-text-area/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "+jb9cFx4", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"style\"],[7],[0,\"\\n\\n    .submission-text-area {\\n        margin-top: 10px;\\n    }\\n    .submission-text-area > textarea {\\n        resize: vertical;\\n    }\\n\\n\\n\"],[8],[0,\"\\n\\n\"],[4,\"if\",[[25,\"not\",[[20,[\"editing\"]]],null]],null,{\"statements\":[[0,\"\\n    \"],[1,[18,\"valueName\"],false],[0,\": \"],[1,[20,[\"parameters\",\"value\",\"value\"]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[20,[\"editing\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"submission-text-area\"],[7],[0,\"\\n        \"],[6,\"label\"],[7],[1,[20,[\"widget\",\"description\"]],false],[8],[0,\"\\n        \"],[1,[25,\"textarea\",null,[[\"value\",\"class\"],[[20,[\"parameters\",\"value\",\"value\"]],\"form-control\"]]],false],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/widget-text-area/template.hbs" } });
});
define('collections/components/widget-text-field/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({

        editing: true,

        description: 'Enter a title for the preprint.',

        didReceiveAttrs: function didReceiveAttrs() {
            this.set('description', this.attrs.description);
        }
    });
});
define("collections/components/widget-text-field/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "54yG+zDF", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"style\"],[7],[0,\"\\n\\n    .submission-text-field {\\n        margin-top: 10px;\\n    }\\n\\n\\n\"],[8],[0,\"\\n\\n\"],[4,\"if\",[[25,\"not\",[[20,[\"editing\"]]],null]],null,{\"statements\":[[0,\"\\n    \"],[1,[18,\"valueName\"],false],[0,\": \"],[1,[20,[\"widget\",\"parameter\",\"value\",\"value\"]],false],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[20,[\"editing\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"submission-text-field\"],[7],[0,\"\\n        \"],[6,\"label\"],[7],[1,[20,[\"widget\",\"description\"]],false],[8],[0,\"\\n        \"],[1,[25,\"input\",null,[[\"value\",\"class\"],[[20,[\"parameters\",\"value\",\"value\"]],\"form-control\"]]],false],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/widget-text-field/template.hbs" } });
});
define('collections/components/widget-user-picker/component', ['exports', 'ember-osf/const/permissions', 'ember-osf/mixins/node-actions', 'collections/config/environment'], function (exports, _permissions, _nodeActions, _environment) {
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

    exports.default = Ember.Component.extend(_nodeActions.default, (_Ember$Component$exte = {
        i18n: Ember.inject.service(),

        // Variables that used to pass in from Controller
        store: Ember.inject.service(),
        toast: Ember.inject.service('toast'),
        currentUser: Ember.inject.service('currentUser'),
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

        parentContributors: Ember.A(),
        searchResults: Ember.A(), // defaults, need update

        contributors: Ember.computed('node', function () {
            var contribs = this.get('node.contributors');
            this.set('widget.parameter', {
                contribs: contribs,
                state: ['defined']
            });
            return contribs;
        }),
        // Returns list of user ids associated with current node
        currentContributorIds: Ember.computed('contributors', function () {
            var contribIds = [];
            this.get('contributors').forEach(function (contrib) {
                return contribIds.push(contrib.get('userId'));
            });
            return contribIds;
        })
    }, _defineProperty(_Ember$Component$exte, 'sendEmail', false), _defineProperty(_Ember$Component$exte, 'editing', true), _defineProperty(_Ember$Component$exte, 'numParentContributors', Ember.computed('parentNode', function () {
        if (this.get('parentNode')) {
            return this.get('parentNode').get('contributors').get('length');
        } else {
            return 0;
        }
    })), _defineProperty(_Ember$Component$exte, 'totalSearchResults', Ember.computed('searchResults.[]', function () {
        var searchResults = this.get('searchResults');
        if (searchResults && searchResults.links) {
            return searchResults.meta.pagination.total;
        }
    })), _defineProperty(_Ember$Component$exte, 'pages', Ember.computed('searchResults.[]', function () {
        var searchResults = this.get('searchResults');
        if (searchResults && searchResults.links) {
            return searchResults.meta.total;
        }
    })), _defineProperty(_Ember$Component$exte, 'valid', Ember.observer('contributors.length', function () {
        var hasContributors = this.get('contributors.length');
        this.set('isSectionSaved', hasContributors);
        return hasContributors;
    })), _defineProperty(_Ember$Component$exte, 'elementsLoaded', Ember.observer('isOpen', function () {
        if (this.get('isOpen')) {
            Ember.run.once(this.get('applyPopovers').bind(this));
        }
    })), _defineProperty(_Ember$Component$exte, 'init', function init() {
        this._super.apply(this, arguments);
        this.set('node', this.get('store').createRecord('node'));
    }), _defineProperty(_Ember$Component$exte, 'actions', {
        // Adds contributor then redraws view - addition of contributor
        // may change which update/remove contributor requests are permitted
        addContributorLocal: function addContributorLocal(user) {
            var node = this.get('node');
            if (node) {
                var contributor = this.get('store').createRecord('contributor');
                contributor.set('users', user);

                node.get('contributors').pushObject(contributor);
                window.nod = node;

                // this.get('actions.addContributor').call(this, user.id, 'write', true, false, undefined,
                //    undefined, true)
                //    .then((res) => {
                //        this.toggleAuthorModification();
                //        this.get('contributors').pushObject(res);
                //        this.get('toast').success(this.get('i18n').t('submit.preprint_author_added'));
                //        this.highlightSuccessOrFailure(res.id, this, 'success');
                //    }, () => {
                //        this.get('toast').error(this.get('i18n').t('submit.error_adding_author'));
                //        this.highlightSuccessOrFailure(user.id, this, 'error');
                //        user.rollbackAttributes();
                //    });
            } else {
                this.get('toast').error('No node selected');
            }
        },

        // Adds all contributors from parent project to current
        // component as long as they are not current contributors
        addContributorsFromParentProject: function addContributorsFromParentProject() {
            var _this = this;

            this.set('parentContributorsAdded', true);
            var contributorsToAdd = Ember.A();
            this.get('parentContributors').toArray().forEach(function (contributor) {
                if (_this.get('currentContributorIds').indexOf(contributor.get('userId')) === -1) {
                    contributorsToAdd.push({
                        permission: contributor.get('permission'),
                        bibliographic: contributor.get('bibliographic'),
                        userId: contributor.get('userId')
                    });
                }
            });
            this.get('actions.addContributors').call(this, contributorsToAdd, this.get('sendEmail')).then(function (contributors) {
                contributors.forEach(function (contrib) {
                    _this.get('contributors').pushObject(contrib);
                });
                _this.toggleAuthorModification();
            }).catch(function () {
                _this.get('toast').error('Some contributors may not have been added. ' + 'Try adding manually.');
            });
        },

        // Adds unregistered contributor, then clears form and switches back to search view.
        // Should wait to transition until request has completed.
        addUnregisteredContributor: function addUnregisteredContributor(fullName, email) {
            var _this2 = this;

            if (fullName && email) {
                var res = this.get('actions.addContributor').call(this, null, 'write', true, this.get('sendEmail'), fullName, email, true);
                res.then(function (contributor) {
                    _this2.get('contributors').pushObject(contributor);
                    _this2.toggleAuthorModification();
                    _this2.set('addState', 'searchView');
                    _this2.set('fullName', '');
                    _this2.set('email', '');
                    _this2.get('toast').success(_this2.get('i18n').t('submit.preprint_unregistered_author_added'));
                    _this2.highlightSuccessOrFailure(contributor.id, _this2, 'success');
                }, function (error) {
                    if (error.errors[0] && error.errors[0].detail && error.errors[0].detail.indexOf('is already a contributor') > -1) {
                        _this2.get('toast').error(error.errors[0].detail);
                    } else {
                        _this2.get('toast').error(_this2.get('i18n').t('submit.error_adding_unregistered_author'));
                    }
                    _this2.highlightSuccessOrFailure('add-unregistered-contributor-form', _this2, 'error');
                });
            }
        },

        // Requests a particular page of user results
        findContributors: function findContributors(page) {
            var _this3 = this;

            var query = this.get('query');
            if (query) {
                this.findContributors(query, page).then(function () {
                    return _this3.set('addState', 'searchView');
                }, function () {
                    _this3.get('toast').error('Could not perform search query.');
                    _this3.highlightSuccessOrFailure('author-search-box', _this3, 'error');
                });
            }
        },

        // Removes contributor then redraws contributor list view -
        // removal of contributor may change which additional update/remove requests are permitted.
        removeContributorLocal: function removeContributorLocal(contrib) {
            var _this4 = this;

            this.get('actions.removeContributor').call(this, contrib).then(function () {
                _this4.toggleAuthorModification();
                _this4.removedSelfAsAdmin(contrib, contrib.get('permission'));
                _this4.get('contributors').removeObject(contrib);
                _this4.get('toast').success(_this4.get('i18n').t('submit.preprint_author_removed'));
            }, function () {
                _this4.get('toast').error(_this4.get('i18n').t('submit.error_adding_author'));
                _this4.highlightSuccessOrFailure(contrib.id, _this4, 'error');
                contrib.rollbackAttributes();
            });
        },

        // Updates contributor then redraws contributor list view - updating contributor
        // permissions may change which additional update/remove requests are permitted.
        updatePermissions: function updatePermissions(contributor, permission) {
            var _this5 = this;

            this.get('actions.updateContributor').call(this, contributor, permission, '').then(function () {
                _this5.toggleAuthorModification();
                _this5.highlightSuccessOrFailure(contributor.id, _this5, 'success');
                _this5.removedSelfAsAdmin(contributor, permission);
            }, function () {
                _this5.get('toast').error('Could not modify author permissions');
                _this5.highlightSuccessOrFailure(contributor.id, _this5, 'error');
                contributor.rollbackAttributes();
            });
        },

        // Updates contributor then redraws contributor list view - updating contributor
        // bibliographic info may change which additional update/remove requests are permitted.
        updateBibliographic: function updateBibliographic(contributor, isBibliographic) {
            var _this6 = this;

            this.get('actions.updateContributor').call(this, contributor, '', isBibliographic).then(function () {
                _this6.toggleAuthorModification();
                _this6.highlightSuccessOrFailure(contributor.id, _this6, 'success');
            }, function () {
                _this6.get('toast').error('Could not modify citation');
                _this6.highlightSuccessOrFailure(contributor.id, _this6, 'error');
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
            var _this7 = this;

            var originalOrder = this.get('contributors');
            this.set('contributors', itemModels);
            var newIndex = itemModels.indexOf(draggedContrib);
            this.get('actions.reorderContributors').call(this, draggedContrib, newIndex, itemModels).then(function () {
                _this7.highlightSuccessOrFailure(draggedContrib.id, _this7, 'success');
            }, function () {
                _this7.highlightSuccessOrFailure(draggedContrib.id, _this7, 'error');
                _this7.set('contributors', originalOrder);
                _this7.get('toast').error('Could not reorder contributors');
                draggedContrib.rollbackAttributes();
            });
        },

        // Action used by the pagination-pager component to the handle user-click event.
        pageChanged: function pageChanged(current) {
            var _this8 = this;

            var query = this.get('query');
            if (query) {
                this.findContributors(query, current).then(function () {
                    _this8.set('addState', 'searchView');
                    _this8.set('currentPage', current);
                }).catch(function () {
                    _this8.get('toast').error('Could not perform search query.');
                    _this8.highlightSuccessOrFailure('author-search-box', _this8, 'error');
                });
            }
        }
    }), _defineProperty(_Ember$Component$exte, 'findContributors', function findContributors(query, page) {
        var _this9 = this;

        return this.get('store').query('osf-user', {
            filter: {
                'full_name,given_name,middle_names,family_name': query
            },
            page: page
        }).then(function (contributors) {
            _this9.set('searchResults', contributors);
            return contributors;
        }).catch(function () {
            _this9.get('toast').error(_this9.get('i18n').t('submit.search_contributors_error'));
            _this9.highlightSuccessOrFailure('author-search-box', _this9, 'error');
        });
    }), _defineProperty(_Ember$Component$exte, 'highlightSuccessOrFailure', function highlightSuccessOrFailure(elementId, context, status) {
        var highlightClass = (status === 'success' ? 'success' : 'error') + 'Highlight';
        context.$('#' + elementId).addClass(highlightClass);
        Ember.run.later(function () {
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
define("collections/components/widget-user-picker/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "lpkyTd9X", "block": "{\"symbols\":[\"c\",\"group\",\"contrib\",\"option\",\"result\"],\"statements\":[[4,\"if\",[[20,[\"editing\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[9,\"class\",\"row form\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-xs-12 col-md-5 col-division-right\"],[7],[0,\"\\n            \"],[6,\"form\"],[3,\"action\",[[19,0,[]],\"findContributors\",1],[[\"on\"],[\"submit\"]]],[7],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"input-group author-search-box\"],[7],[0,\"\\n                \"],[6,\"input\"],[9,\"id\",\"author-search-box\"],[9,\"type\",\"text\"],[9,\"class\",\"form-control searchQuery\"],[10,\"onchange\",[25,\"action\",[[19,0,[]],[25,\"mut\",[[20,[\"query\"]]],null]],[[\"value\"],[\"target.value\"]]],null],[10,\"placeholder\",[25,\"t\",[\"components.preprint-form-authors.search.placeholder\"],null],null],[7],[8],[0,\"\\n                \"],[6,\"span\"],[9,\"class\",\"input-group-btn\"],[7],[0,\"\\n                            \"],[6,\"button\"],[9,\"class\",\"btn btn-default authors-search-button\"],[9,\"type\",\"button\"],[3,\"action\",[[19,0,[]],\"findContributors\",1]],[7],[0,\"\\n                                \"],[6,\"i\"],[9,\"class\",\"fa fa-search\"],[7],[8],[0,\"\\n                            \"],[8],[0,\"\\n                        \"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n\"],[4,\"if\",[[25,\"not-eq\",[[20,[\"addState\"]],\"emptyView\"],null]],null,{\"statements\":[[4,\"if\",[[25,\"eq\",[[20,[\"addState\"]],\"searchView\"],null]],null,{\"statements\":[[0,\"                \"],[2,\" <div class=\\\"unregisteredUsers\\\">\\n                  <p>{{t \\\"components.preprint-form-authors.unregistered_users.paragraph\\\"}}</p>\\n                  <button class=\\\"btn btn-primary btn-small\\\" {{action \\\"unregisteredView\\\"}}>{{t \\\"components.preprint-form-authors.unregistered_users.button\\\"}}</button>\\n                </div> \"],[0,\"\\n                \"],[6,\"h3\"],[7],[0,\" \"],[1,[25,\"t\",[\"components.preprint-form-authors.results\"],null],false],[0,\" \"],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"searchResults\"]]],null,{\"statements\":[[0,\"                  \"],[6,\"table\"],[9,\"class\",\"table author-table\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"searchResults\"]]],null,{\"statements\":[[0,\"                      \"],[6,\"tr\"],[10,\"id\",[19,5,[\"id\"]],null],[7],[0,\"\\n                        \"],[6,\"td\"],[9,\"class\",\"p-v-xs\"],[7],[0,\"\\n                          \"],[6,\"img\"],[9,\"class\",\"m-l-xs\"],[10,\"src\",[19,5,[\"links\",\"profile_image\"]],null],[9,\"height\",\"30\"],[9,\"width\",\"30\"],[7],[8],[0,\"\\n                          \"],[6,\"a\"],[10,\"href\",[19,5,[\"links\",\"html\"]],null],[9,\"target\",\"_blank\"],[7],[0,\" \"],[1,[19,5,[\"fullName\"]],false],[0,\" \"],[8],[0,\"\\n\"],[4,\"if\",[[25,\"eq\",[[20,[\"currentUser\"]],[19,5,[]]],null]],null,{\"statements\":[[0,\"                            \"],[6,\"span\"],[9,\"class\",\"small\"],[7],[0,\" \"],[1,[25,\"t\",[\"components.preprint-form-authors.yourself\"],null],false],[0,\" \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                        \"],[8],[0,\"\\n                        \"],[6,\"td\"],[9,\"class\",\"p-v-xs\"],[7],[0,\"\\n\"],[4,\"if\",[[25,\"user-is-contributor\",[[19,5,[]],[20,[\"contributors\"]],[20,[\"authorModification\"]]],null]],null,{\"statements\":[[0,\"                            \"],[6,\"span\"],[9,\"class\",\"hint hint--left pull-right\"],[10,\"aria-label\",[26,[[25,\"t\",[\"components.preprint-form-authors.already_added\"],null]]]],[7],[0,\"\\n                                \"],[6,\"button\"],[9,\"class\",\"btn btn-default btn-small disabled disabled-checkmark\"],[7],[0,\"\\n                                    \"],[6,\"i\"],[9,\"class\",\"fa fa-check\"],[9,\"aria-hidden\",\"true\"],[7],[8],[0,\"\\n                                \"],[8],[0,\"\\n                            \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                            \"],[6,\"button\"],[9,\"class\",\"btn btn-success btn-small pull-right\"],[3,\"action\",[[19,0,[]],\"addContributorLocal\",[19,5,[]]]],[7],[0,\" \"],[1,[25,\"t\",[\"global.add\"],null],false],[0,\" \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"                        \"],[8],[0,\"\\n                      \"],[8],[0,\"\\n\"]],\"parameters\":[5]},null],[0,\"                  \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                  \"],[1,[25,\"t\",[\"global.no_results_found\"],null],false],[0,\"\\n\"]],\"parameters\":[]}],[4,\"if\",[[25,\"gt\",[[20,[\"pages\"]],1],null]],null,{\"statements\":[[0,\"                  \"],[6,\"div\"],[9,\"class\",\"pull-right text-right\"],[7],[0,\"\\n                    \"],[1,[25,\"pagination-pager\",null,[[\"count\",\"current\",\"change\"],[[20,[\"pages\"]],[20,[\"currentPage\"]],[25,\"action\",[[19,0,[]],\"pageChanged\"],null]]]],false],[0,\"\\n                  \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"if\",[[25,\"eq\",[[20,[\"addState\"]],\"unregisteredView\"],null]],null,{\"statements\":[[0,\"                \"],[6,\"h3\"],[7],[0,\" \"],[1,[25,\"t\",[\"components.preprint-form-authors.add_email\"],null],false],[0,\" \"],[8],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"user-validation\"],[9,\"id\",\"add-unregistered-contributor-form\"],[7],[0,\"\\n                  \"],[1,[25,\"unregistered-contributor-form\",null,[[\"editMode\",\"resetfindContributorsView\",\"addUnregisteredContributor\"],[[20,[\"editMode\"]],[25,\"action\",[[19,0,[]],\"resetfindContributorsView\"],null],[25,\"action\",[[19,0,[]],\"addUnregisteredContributor\"],null]]]],false],[0,\"\\n                \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-xs-12 col-md-7\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"author-header\"],[7],[0,\"\\n              \"],[6,\"h2\"],[9,\"class\",\"header-inline\"],[7],[0,\" \"],[1,[25,\"t\",[\"global.authors\"],null],false],[0,\" \"],[8],[0,\"\\n              \"],[6,\"span\"],[7],[0,\"\\n                        \"],[6,\"i\"],[9,\"class\",\"fa fa-question-circle permission-info\"],[9,\"data-toggle\",\"popover\"],[10,\"data-title\",[26,[[25,\"t\",[\"components.preprint-form-authors.authors.title\"],null]]]],[9,\"data-trigger\",\"hover\"],[9,\"data-html\",\"true\"],[9,\"data-placement\",\"bottom\"],[9,\"id\",\"author-popover\"],[7],[0,\"\\n                        \"],[8],[0,\"\\n                    \"],[8],[0,\"\\n\"],[4,\"if\",[[25,\"and\",[[25,\"gt\",[[20,[\"numParentContributors\"]],1],null],[25,\"not\",[[20,[\"parentContributorsAdded\"]]],null]],null]],null,{\"statements\":[[0,\"                \"],[6,\"button\"],[9,\"class\",\"btn btn-default pull-right\"],[3,\"action\",[[19,0,[]],\"addContributorsFromParentProject\"]],[7],[0,\" \"],[6,\"i\"],[9,\"class\",\"fa fa-plus icon-large small\"],[7],[8],[0,\" \"],[6,\"em\"],[9,\"class\",\"small\"],[7],[0,\" \"],[1,[25,\"t\",[\"components.preprint-form-authors.authors.parent_contributors\"],null],false],[0,\" \"],[8],[0,\" \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[8],[0,\"\\n            \"],[6,\"p\"],[9,\"class\",\"drag-drop small\"],[7],[0,\" \"],[1,[25,\"t\",[\"components.preprint-form-authors.authors.order_instructions\"],null],false],[0,\" \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"panel-body\"],[7],[0,\"\\n              \"],[6,\"table\"],[9,\"class\",\"table author-table current-authors\"],[7],[0,\"\\n                \"],[6,\"tr\"],[7],[0,\"\\n                  \"],[6,\"th\"],[7],[0,\" \"],[8],[0,\"\\n                  \"],[6,\"th\"],[9,\"class\",\"contrib-column-header\"],[7],[0,\" \"],[1,[25,\"t\",[\"components.preprint-form-authors.authors.name\"],null],false],[0,\" \"],[8],[0,\"\\n                  \"],[6,\"th\"],[9,\"class\",\"contrib-column-header\"],[7],[0,\"\\n                    \"],[1,[25,\"t\",[\"components.preprint-form-authors.authors.permissions\"],null],false],[0,\"\\n                    \"],[6,\"span\"],[7],[0,\"\\n                          \"],[6,\"i\"],[9,\"class\",\"fa fa-question-circle permission-info\"],[9,\"data-toggle\",\"popover\"],[10,\"data-title\",[26,[[25,\"t\",[\"components.preprint-form-authors.authors.permission_info\"],null]]]],[9,\"data-trigger\",\"hover\"],[9,\"data-html\",\"true\"],[9,\"data-placement\",\"bottom\"],[9,\"id\",\"permissions-popover\"],[7],[0,\"\\n                          \"],[8],[0,\"\\n                      \"],[8],[0,\"\\n                    \"],[6,\"br\"],[7],[8],[0,\"\\n                  \"],[8],[0,\"\\n                  \"],[6,\"th\"],[9,\"class\",\"bib-padding\"],[7],[0,\"\\n                    \"],[1,[25,\"t\",[\"components.preprint-form-authors.authors.citation\"],null],false],[0,\"\\n                    \"],[6,\"span\"],[7],[0,\"\\n                                    \"],[6,\"i\"],[9,\"class\",\"fa fa-question-circle permission-info\"],[9,\"data-toggle\",\"popover\"],[10,\"data-title\",[26,[[25,\"t\",[\"components.preprint-form-authors.authors.citation_info\"],null]]]],[9,\"data-trigger\",\"hover\"],[9,\"data-html\",\"true\"],[9,\"data-placement\",\"bottom\"],[9,\"id\",\"bibliographic-popover\"],[7],[0,\"\\n                                    \"],[8],[0,\"\\n                                \"],[8],[0,\"\\n                    \"],[6,\"br\"],[7],[8],[0,\"\\n                  \"],[8],[0,\"\\n                  \"],[6,\"th\"],[7],[0,\" \"],[8],[0,\"\\n                \"],[8],[0,\"\\n\"],[4,\"sortable-group\",null,[[\"tagName\",\"onChange\"],[\"tbody\",\"reorderItems\"]],{\"statements\":[[4,\"each\",[[20,[\"contributors\"]]],null,{\"statements\":[[4,\"sortable-item\",null,[[\"tagName\",\"model\",\"class\",\"group\",\"spacing\",\"handle\",\"id\"],[\"tr\",[19,3,[]],\"contributor-row\",[19,2,[]],1,\".handle\",[19,3,[\"id\"]]]],{\"statements\":[[0,\"                      \"],[6,\"td\"],[9,\"class\",\"text-nowrap author-cols\"],[7],[0,\"\\n                        \"],[6,\"div\"],[9,\"class\",\"form-group drag-drop-contrib\"],[7],[0,\"\\n                          \"],[6,\"span\"],[9,\"class\",\"fa fa-bars sortable-bars handle small\"],[7],[8],[0,\"\\n                          \"],[6,\"img\"],[9,\"class\",\"m-l-xs\"],[10,\"src\",[19,3,[\"users\",\"profileImage\"]],null],[9,\"height\",\"30\"],[9,\"width\",\"30\"],[7],[8],[0,\"\\n                          \"],[6,\"span\"],[9,\"class\",\"visible-xs-inline\"],[7],[0,\" \"],[0,\"\\n\"],[4,\"if\",[[19,3,[\"unregisteredContributor\"]]],null,{\"statements\":[[0,\"                              \"],[1,[19,3,[\"unregisteredContributor\"]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                              \"],[6,\"a\"],[10,\"href\",[19,3,[\"users\",\"links\",\"html\"]],null],[9,\"target\",\"_blank\"],[7],[0,\" \"],[1,[19,3,[\"users\",\"fullName\"]],false],[0,\" \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"                            \"],[6,\"span\"],[9,\"class\",\"pull-right remove-contributor-padding-xs\"],[7],[0,\"\\n                              \"],[2,\" {{#if (and (permissionToRemoveContributor contrib currentUser isAdmin node) (conditionsForContribRemoval contrib contributors authorModification))}}\\n                                <button class=\\\"remove-contributor-xs\\\" {{action 'removeContributor' contrib}} aria-label={{t \\\"components.preprint-form-authors.authors.remove_author\\\"}}>\\n                                                            <i class=\\\"fa fa-times\\\"> </i>\\n                                                        </button>\\n                              {{/if}} \"],[0,\"\\n                            \"],[8],[0,\"\\n                                            \"],[8],[0,\"\\n                        \"],[8],[0,\"\\n                      \"],[8],[0,\"\\n                      \"],[6,\"td\"],[7],[0,\"\\n                        \"],[6,\"div\"],[9,\"class\",\"vert-align-contributor-name hidden-xs\"],[7],[0,\"\\n\"],[4,\"if\",[[19,3,[\"unregisteredContributor\"]]],null,{\"statements\":[[0,\"                            \"],[1,[19,3,[\"unregisteredContributor\"]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                            \"],[6,\"a\"],[10,\"href\",[19,3,[\"users\",\"links\",\"html\"]],null],[9,\"target\",\"_blank\"],[7],[0,\" \"],[1,[19,3,[\"users\",\"fullName\"]],false],[0,\" \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"                        \"],[8],[0,\"\\n                      \"],[8],[0,\"\\n                      \"],[6,\"td\"],[7],[0,\"\\n                        \"],[6,\"div\"],[9,\"class\",\"form-group vert-align-enabled-permissions\"],[7],[0,\"\\n\"],[4,\"if\",[[25,\"and\",[[25,\"not\",[[25,\"contributor-is-current-user\",[[19,3,[]],[20,[\"currentUser\"]]],null]],null],[20,[\"isAdmin\"]],[25,\"and\",[[20,[\"canEdit\"]],[25,\"min-admins\",[[19,3,[]],[20,[\"contributors\"]],[20,[\"authorModification\"]]],null]],null]],null]],null,{\"statements\":[[0,\"                            \"],[6,\"span\"],[9,\"class\",\"visible-xs-inline permission-label\"],[7],[6,\"em\"],[7],[0,\" \"],[1,[25,\"t\",[\"components.preprint-form-authors.authors.permissions\"],null],false],[0,\": \"],[8],[8],[0,\"\\n                            \"],[6,\"select\"],[9,\"class\",\"text-smaller form-control permission-select\"],[10,\"onchange\",[25,\"action\",[[19,0,[]],[25,\"action\",[[19,0,[]],\"updatePermissions\",[19,3,[]]],null]],[[\"value\"],[\"target.value\"]]],null],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"permissionOptions\"]]],null,{\"statements\":[[0,\"                                \"],[6,\"option\"],[10,\"selected\",[25,\"eq\",[[19,3,[\"permission\"]],[19,4,[\"value\"]]],null],null],[10,\"value\",[19,4,[\"value\"]],null],[7],[0,\"\\n                                  \"],[1,[19,4,[\"text\"]],false],[0,\"\\n                                \"],[8],[0,\"\\n\"]],\"parameters\":[4]},null],[0,\"                            \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                            \"],[6,\"div\"],[9,\"class\",\"vert-align-disabled-permissions\"],[7],[0,\"\\n                              \"],[6,\"span\"],[9,\"class\",\"visible-xs-inline permission-label\"],[7],[0,\" \"],[6,\"em\"],[7],[0,\" \"],[1,[25,\"t\",[\"components.preprint-form-authors.authors.permissions\"],null],false],[0,\":  \"],[8],[8],[0,\" \"],[6,\"span\"],[9,\"class\",\"text-smaller\"],[7],[0,\" \"],[1,[25,\"permission-map\",[[19,3,[\"permission\"]]],null],false],[0,\" \"],[8],[0,\"\\n                            \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"                        \"],[8],[0,\"\\n                      \"],[8],[0,\"\\n                      \"],[6,\"td\"],[9,\"class\",\"bib-padding\"],[7],[0,\"\\n                        \"],[6,\"div\"],[9,\"class\",\"form-group vert-align\"],[7],[0,\"\\n                          \"],[6,\"span\"],[9,\"class\",\"visible-xs-inline checkbox-padding\"],[7],[6,\"em\"],[7],[1,[25,\"t\",[\"components.preprint-form-authors.authors.in_citation\"],null],false],[0,\":\"],[8],[8],[0,\"\\n                          \"],[6,\"input\"],[10,\"disabled\",[25,\"if\",[[25,\"and\",[[20,[\"isAdmin\"]],[25,\"and\",[[20,[\"canEdit\"]],[25,\"min-bibliographic\",[[19,3,[]],[20,[\"contributors\"]],[20,[\"authorModification\"]]],null]],null]],null],false,true],null],null],[10,\"onchange\",[25,\"action\",[[19,0,[]],[25,\"action\",[[19,0,[]],\"updateBibliographic\",[19,3,[]]],null]],[[\"value\"],[\"target.checked\"]]],null],[10,\"checked\",[25,\"eq\",[[19,3,[\"bibliographic\"]],true],null],null],[9,\"type\",\"checkbox\"],[9,\"name\",\"bibliographic\"],[7],[8],[0,\"\\n                        \"],[8],[0,\"\\n                      \"],[8],[0,\"\\n                      \"],[6,\"td\"],[7],[0,\"\\n                        \"],[6,\"div\"],[9,\"class\",\"delete-contrib-button form-group vert-align nudge-right hidden-xs\"],[7],[0,\"\\n\"],[4,\"if\",[[25,\"and\",[[25,\"permission-to-remove-contributor\",[[19,3,[]],[20,[\"currentUser\"]],[20,[\"isAdmin\"]],[20,[\"node\"]]],null],[25,\"conditions-for-contrib-removal\",[[19,3,[]],[20,[\"contributors\"]],[20,[\"authorModification\"]]],null]],null]],null,{\"statements\":[[0,\"                            \"],[6,\"button\"],[9,\"class\",\"btn btn-danger btn-sm\"],[3,\"action\",[[19,0,[]],\"removeContributorLocal\",[19,3,[]]]],[7],[0,\" \"],[1,[25,\"t\",[\"components.preprint-form-authors.remove\"],null],false],[0,\" \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                            \"],[6,\"button\"],[9,\"class\",\"btn btn-danger btn-sm disabled\"],[7],[0,\" \"],[1,[25,\"t\",[\"components.preprint-form-authors.remove\"],null],false],[0,\" \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"                        \"],[8],[0,\"\\n                      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[25,\"not\",[[20,[\"editing\"]]],null]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-xs-12\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"contributors\"]]],null,{\"statements\":[[0,\"                    \"],[6,\"ul\"],[9,\"class\",\"comma-list\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"contributors\"]]],null,{\"statements\":[[0,\"                            \"],[6,\"li\"],[7],[1,[19,1,[\"users\",\"fullName\"]],false],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"                    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "collections/components/widget-user-picker/template.hbs" } });
});
define('collections/controllers/application', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        session: Ember.inject.service(),

        init: function init() {
            this._super();
            window.addEventListener('scroll', function () {
                var nav = document.getElementById('osf-nav');
                if (window.pageYOffset > 0) {
                    nav.style.position = 'fixed';
                    nav.style.top = '-1px';
                } else {
                    nav.style.position = 'absolute';
                    nav.style.top = '0px';
                }
            });
        },


        actions: {
            login: function login() {
                this.get('session').authenticate('authenticator:osf-token');
            }
        }
    });
});
define('collections/controllers/collections', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({});
});
define('collections/controllers/collections/collection', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({

        searchGuid: 'fkat6',
        loadingGuid: false,
        organizeMode: false,

        actions: {
            toggleOrganizeMode: function toggleOrganizeMode() {
                this.toggleProperty('organizeMode');
            }
        }

    });
});
define('collections/controllers/collections/collection/add', ['exports', 'collections/config/environment'], function (exports, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({

        editMode: false,
        loading: false,
        toggleLoading: function toggleLoading() {
            this.toggleProperty('loading');
        },
        didRender: function didRender() {
            this.set('loading', false);
        },

        actions: {
            updateProperty: function updateProperty(oldValue, newValue) {
                this.set(oldValue, newValue);
                this.set('methodSelected', true); // Change view to show the methods
            },
            transition: function transition(name, id) {
                this.transitionToRoute(name, id);
            }
        }

    });
});
define('collections/controllers/collections/collection/browse', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        actions: {
            changeRoute: function changeRoute(path, params) {
                this.get('changeRoute')(path, params);
            }
        }
    });
});
define('collections/controllers/collections/collection/edit', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({

        session: Ember.inject.service(),
        jsonBodyHeight: '400px',
        jsonBtnText: 'Show More ▼',
        editMode: false,
        store: Ember.inject.service(),
        collectionSettings: {},

        types: ['Repository', 'Meeting'],

        modelCache: Ember.computed('collection', function () {
            return this.resetModelCache();
        }),
        formattedTags: Ember.computed('collection.tags', function () {
            var tags = this.get('collection.tags');
            if (tags) {
                return this.get('collection.tags').split(',');
            }
            return [];
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
                var collection = this.get('collection');
                var location = this.get('modelCache.location');
                var address = this.get('modelCache.address');
                var startDate = this.get('modelCache.startDate');
                var endDate = this.get('modelCache.endDate');

                collection.set('settings', JSON.parse(this.get('modelCache.settings')));
                collection.set('title', this.get('modelCache.title'));
                collection.set('description', this.get('modelCache.description'));
                collection.set('tags', this.get('modelCache.tags'));
                collection.set('location', location);
                collection.set('address', address);
                collection.set('startDate', startDate);
                collection.set('endDate', endDate);
                collection.save();
                this.set('editMode', false);
            },
            updateCacheSettings: function updateCacheSettings(jsonSettings) {
                this.set('collection.settings', jsonSettings);
            },
            deleteCollection: function deleteCollection() {
                var _this = this;

                this.get('collection').destroyRecord().then(function () {
                    return _this.transitionToRoute('/');
                });
            },
            removeWorkflow: function removeWorkflow(collectionWorkflow) {
                var collection = this.get('collection');
                collection.get('collectionWorkflows').removeObject(collectionWorkflow);
                collection.get('workflows').removeObject(collectionWorkflow.workflow);
                collection.save();
                collectionWorkflow.destroyRecord();
            },
            addWorkflow: function addWorkflow() {
                var _this2 = this;

                var collectionWorkflow = this.get('store').createRecord('collectionWorkflow');
                collectionWorkflow.set('collection', this.get('collection'));
                collectionWorkflow.save().then(function (collectionWorkflow) {
                    var collection = _this2.get('collection');
                    collection.get('collectionWorkflows').addObject(collectionWorkflow);
                    collection.save();
                });
            },
            setCollectionType: function setCollectionType(ev) {
                this.set('collection.type', ev.target.value);
            },
            setWorkflowTypeForCollectionWorkflow: function setWorkflowTypeForCollectionWorkflow(collectionWorkflow, ev) {
                collectionWorkflow.set('workflow', this.get('workflows').find(function (workflow) {
                    return workflow.id === ev.target.value;
                }));
                collectionWorkflow.save();
            },
            saveChanges: function saveChanges() {
                this.get('collection').save();
            },
            setGroupForCollectionWorkflow: function setGroupForCollectionWorkflow(collectionWorkflow, ev) {
                collectionWorkflow.set('selectedGroup', this.get('groups').find(function (group) {
                    return group.id === ev.target.value;
                }));
            },
            addGroupToCollectionWorkflow: function addGroupToCollectionWorkflow(collectionWorkflow) {
                collectionWorkflow.get('authorizedGroups').addObject(collectionWorkflow.get('selectedGroup'));
                collectionWorkflow.save();
            },
            removeCollectionWorkflowGroup: function removeCollectionWorkflowGroup(collectionWorkflow, group) {
                collectionWorkflow.get('authorizedGroups').removeObject(group);
                collectionWorkflow.save();
            }
        },
        resetModelCache: function resetModelCache() {
            var collection = this.get('collection');
            return {
                title: collection.get('title'),
                description: collection.get('description'),
                tags: collection.get('tags'),
                settings: JSON.stringify(collection.get('settings'), null, 2),
                location: collection.get('location'),
                address: collection.get('address'),
                startDate: collection.get('startDate'),
                endDate: collection.get('endDate')
            };
        }
    });
});
define('collections/controllers/collections/collection/group', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        organizeMode: false,
        breadCrumb: Ember.computed('model.title', function () {
            return this.get('model.title');
        }),
        actions: {
            toggleOrganizeMode: function toggleOrganizeMode() {
                this.toggleProperty('organizeMode');
            }
        }
    });
});
define('collections/controllers/collections/collection/group/index', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        organizeMode: false,
        cardView: true,
        showDeleteItemConfirmation: false, // Modal for deleting items
        selectedItems: Ember.A(),
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
                    return Ember.run.once(function () {
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
define('collections/controllers/collections/collection/group/item', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        breadCrumb: Ember.computed('model.title', function () {
            return this.get('model.title');
        })
    });
});
define('collections/controllers/collections/collection/index', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        session: Ember.inject.service(),
        actions: {
            changeRoute: function changeRoute(path, params) {
                this.transitionToRoute(path, params);
            }
        }
    });
});
define('collections/controllers/collections/collection/item', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({

        store: Ember.inject.service(),

        actions: {
            continueWorkflow: function continueWorkflow(role) {
                var _this = this;

                this.get('store').queryRecord('case', {
                    for_item: this.get('item').id,
                    role: 'approval'
                }).then(function (caxe) {
                    _this.transitionToRoute('collections.collection.add', caxe.id);
                });
            }
        }

    });
});
define('collections/controllers/collections/collection/search', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        searchText: '',
        results: Ember.A(),
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
define('collections/controllers/collections/collection/submissions', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({

        caxe: Ember.inject.service(),

        actions: {
            newCase: function newCase(collection) {
                var _this = this;

                var caxe = this.store.createRecord('case');
                var wf = collection.get('collectionWorkflows').find(function (cw) {
                    return cw.get('role') === 'submission';
                }).get('workflow');
                caxe.set('workflow', wf);
                caxe.set('collection', collection);
                caxe.save().then(function (caxe) {
                    _this.set('caxe.activeCase', caxe);
                    _this.transitionToRoute('collections.collection.add', collection, caxe.id);
                });
            }
        }

    });
});
define('collections/controllers/collections/index', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({

        queryParams: ['kind', 'q'],
        kind: null,
        q: null,
        loading: false,

        actions: {
            addFilter: function addFilter(name, value) {
                this.set(name, value);
            }
        }

    });
});
define('collections/controllers/collections/my-collection', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        session: Ember.inject.service('session')
    });
});
define('collections/controllers/create', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        title: '',
        collectionWorkflows: [],
        description: '',
        workflows: undefined,
        collectionType: undefined,

        typeList: [{
            label: 'Meeting',
            value: 'meeting',
            description: 'A meeting is a collection of talks and posters. Each talk or poster should have title and description.'
        }, {
            label: 'Repository',
            value: 'repository',
            description: 'A repository is a collection of items with the same data fields attached to each ofthem.'
        }, {
            label: 'Appendix',
            value: 'appendix',
            description: 'An appendix is a collection of additional materials that relate to apublished article.'
        }, {
            label: 'Preprints',
            value: 'preprints',
            description: 'A collection of articles that{ may be considered for publishin but have not yet been published.'
        }, {
            label: 'Registrations',
            value: 'registrations',
            descriptions: 'A collection of snapshots of the state of a project at a certain point in its lifecycle, registered publicly.'
        }, {
            label: 'Bookmarks',
            value: 'bookmarks',
            description: 'A collection of related URLs.'
        }, {
            label: 'Proposals',
            value: 'proposals',
            description: 'A collection of ideas to be pursued.'
        }],

        actions: {
            addCollection: function addCollection() {
                var _this = this;

                var collection = this.store.createRecord('collection', {
                    title: this.get('title'),
                    location: this.get('location'),
                    address: this.get('address'),
                    tags: '',
                    settings: {},
                    collectionType: this.get('collectionType'),
                    description: this.get('description')
                });
                collection.save().then(function (record) {
                    _this.set('newCollectionTitle', '');
                    collection.save().then(function (collection) {
                        Ember.RSVP.all(_this.get('collectionWorkflows').map(function (cw) {
                            cw.set('collection', collection);
                            cw.save().then(function (cw) {
                                collection.get('collectionWorkflows').addObject(cw);
                            });
                        })).then(function (cws) {
                            return _this.transitionToRoute('collections.collection', record.id);
                        });
                    });
                });
            },
            removeWorkflow: function removeWorkflow(collectionWorkflow) {
                this.get('collectionWorkflows').removeObject(collectionWorkflow);
                collectionWorkflow.destroyRecord();
            },
            addWorkflow: function addWorkflow() {
                var collectionWorkflow = this.get('store').createRecord('collectionWorkflow');
                this.get('collectionWorkflows').addObject(collectionWorkflow);
            },
            setCollectionType: function setCollectionType(ev) {
                this.set('collection.type', ev.target.value);
            },
            setWorkflowTypeForWorkflowCollection: function setWorkflowTypeForWorkflowCollection(collectionWorkflow, ev) {
                collectionWorkflow.set('workflow', this.get('workflows').find(function (workflow) {
                    return workflow.id === ev.target.value;
                }));
            },
            setGroupForCollectionWorkflow: function setGroupForCollectionWorkflow(collectionWorkflow, ev) {
                collectionWorkflow.set('selectedGroup', this.get('groups').find(function (group) {
                    return group.id === ev.target.value;
                }));
            },
            addGroupToCollectionWorkflow: function addGroupToCollectionWorkflow(collectionWorkflow) {
                collectionWorkflow.get('authorizedGroups').addObject(collectionWorkflow.get('selectedGroup'));
            },
            removeCollectionWorkflowGroup: function removeCollectionWorkflowGroup(collectionWorkflow, group) {
                collectionWorkflow.get('authorizedGroups').removeObject(group);
                collectionWorkflow.save();
            }
        }
    });
});
define('collections/controllers/explore', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        session: Ember.inject.service(),
        newCollectionTitle: '',
        modelCache: null,
        filterText: '',
        currentPage: 1,
        loadingMore: false,
        showLoadMore: Ember.computed('collections.meta', function () {
            return this.get('collections.meta.pagination.count') > this.get('collections.length');
        }),
        actions: {
            filter: function filter() {
                var collections = this.get('collections');
                var text = this.get('filterText').toLowerCase();
                if (this.get('modelCache') === null) {
                    this.set('modelCache', collections);
                }
                this.set('collections', this.get('modelCache').filter(function (item) {
                    return item.get('title').toLowerCase().includes(text);
                }));
            },
            clearFilter: function clearFilter() {
                this.set('filterText', '');
                return false;
            },
            loadMore: function loadMore() {
                var _this = this;

                this.set('loadingMore', true);
                this.store.query('collection', {
                    page: this.get('currentPage') + 1
                }).then(function (data) {
                    _this.incrementProperty('currentPage');
                    var currentModel = _this.get('collections').toArray();
                    var arr = data.toArray();
                    currentModel.pushObjects(arr);
                    _this.set('collections', currentModel);
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
            loadMore: function loadMore() {}
        }
    });
});
define('collections/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_and.andHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_and.andHelper);
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
define('collections/helpers/conditions-for-contrib-removal', ['exports', 'ember-osf/const/permissions'], function (exports, _permissions) {
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

    function conditionsForContribRemoval(params /* , hash */) {
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

    exports.default = Ember.Helper.helper(conditionsForContribRemoval);
});
define('collections/helpers/contains-substring', ['exports'], function (exports) {
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
    function containsSubstring(params /* , hash */) {
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

    exports.default = Ember.Helper.helper(containsSubstring);
});
define('collections/helpers/contributor-is-current-user', ['exports'], function (exports) {
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
  function contributorIsCurrentUser(params /* , hash */) {
    var _params = _slicedToArray(params, 2),
        contributor = _params[0],
        currentUser = _params[1];

    var currentUserId = currentUser.get('currentUserId') || currentUser.get('id');
    return contributor.get('userId') === currentUserId;
  }

  exports.default = Ember.Helper.helper(contributorIsCurrentUser);
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
define('collections/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_equal.equalHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_equal.equalHelper);
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
define('collections/helpers/filter-replace', ['exports'], function (exports) {
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

  exports.default = Ember.Helper.helper(filterReplace);
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
define('collections/helpers/fixed-grid-layout', ['exports', 'ember-collection/layouts/grid'], function (exports, _grid) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Helper.helper(function (params, hash) {
    return new _grid.default(params[0], params[1]);
  });
});
define('collections/helpers/get-ancestor-descriptor', ['exports'], function (exports) {
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

    function getAncestorDescriptor(params /* , hash */) {
        // Formats titles similar to the way they're displayed in the dashboard.
        // For example, Root Name / ... / Parent Name / Node Name.
        var node = params[0];
        var nodeId = node.get('id');
        var rootId = node.get('root.id');
        var parentId = node.get('parent.id');
        var parent = node.get('parent') instanceof Ember.ObjectProxy ? node.get('parent.content') : node.get('parent');
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

    exports.default = Ember.Helper.helper(getAncestorDescriptor);
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
define('collections/helpers/get-section-id', ['exports'], function (exports) {
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

    function getSectionId(params /* , hash */) {
        var sectionHeader = params[0];
        if (sectionHeader) {
            return sectionHeader;
        }
    }

    exports.default = Ember.Helper.helper(getSectionId);
});
define('collections/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_gt.gtHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_gt.gtHelper);
  }

  exports.default = forExport;
});
define('collections/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_gte.gteHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_gte.gteHelper);
  }

  exports.default = forExport;
});
define('collections/helpers/if-filter', ['exports'], function (exports) {
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

    exports.default = Ember.Helper.helper(ifFilter);
});
define('collections/helpers/is-after', ['exports', 'collections/config/environment', 'ember-moment/helpers/is-after'], function (exports, _environment, _isAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _isAfter.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('collections/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_isArray.isArrayHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_isArray.isArrayHelper);
  }

  exports.default = forExport;
});
define('collections/helpers/is-before', ['exports', 'collections/config/environment', 'ember-moment/helpers/is-before'], function (exports, _environment, _isBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _isBefore.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('collections/helpers/is-between', ['exports', 'collections/config/environment', 'ember-moment/helpers/is-between'], function (exports, _environment, _isBetween) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _isBetween.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
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
define('collections/helpers/is-same-or-after', ['exports', 'collections/config/environment', 'ember-moment/helpers/is-same-or-after'], function (exports, _environment, _isSameOrAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _isSameOrAfter.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('collections/helpers/is-same-or-before', ['exports', 'collections/config/environment', 'ember-moment/helpers/is-same-or-before'], function (exports, _environment, _isSameOrBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _isSameOrBefore.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('collections/helpers/is-same', ['exports', 'collections/config/environment', 'ember-moment/helpers/is-same'], function (exports, _environment, _isSame) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _isSame.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('collections/helpers/is-section-editable', ['exports'], function (exports) {
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
  function isSectionEditable(params /* , hash */) {
    var section = params[0];
    var uneditableSections = ['Submit', 'location_of_preprint', 'Update'];
    return !uneditableSections.includes(section);
  }

  exports.default = Ember.Helper.helper(isSectionEditable);
});
define('collections/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_lt.ltHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_lt.ltHelper);
  }

  exports.default = forExport;
});
define('collections/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_lte.lteHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_lte.lteHelper);
  }

  exports.default = forExport;
});
define('collections/helpers/min-admins', ['exports'], function (exports) {
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
    function minAdmins(params /* , hash */) {
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

    exports.default = Ember.Helper.helper(minAdmins);
});
define('collections/helpers/min-bibliographic', ['exports'], function (exports) {
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
    function minBibliographic(params /* , hash */) {
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

    exports.default = Ember.Helper.helper(minBibliographic);
});
define('collections/helpers/mixed-grid-layout', ['exports', 'ember-collection/layouts/mixed-grid'], function (exports, _mixedGrid) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Helper.helper(function (params, hash) {
    return new _mixedGrid.default(params[0]);
  });
});
define('collections/helpers/moment-add', ['exports', 'collections/config/environment', 'ember-moment/helpers/moment-add'], function (exports, _environment, _momentAdd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentAdd.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('collections/helpers/moment-calendar', ['exports', 'collections/config/environment', 'ember-moment/helpers/moment-calendar'], function (exports, _environment, _momentCalendar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentCalendar.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('collections/helpers/moment-diff', ['exports', 'collections/config/environment', 'ember-moment/helpers/moment-diff'], function (exports, _environment, _momentDiff) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentDiff.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
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
define('collections/helpers/moment-format', ['exports', 'collections/config/environment', 'ember-moment/helpers/moment-format'], function (exports, _environment, _momentFormat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentFormat.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('collections/helpers/moment-from-now', ['exports', 'collections/config/environment', 'ember-moment/helpers/moment-from-now'], function (exports, _environment, _momentFromNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentFromNow.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('collections/helpers/moment-from', ['exports', 'collections/config/environment', 'ember-moment/helpers/moment-from'], function (exports, _environment, _momentFrom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentFrom.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('collections/helpers/moment-subtract', ['exports', 'collections/config/environment', 'ember-moment/helpers/moment-subtract'], function (exports, _environment, _momentSubtract) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentSubtract.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('collections/helpers/moment-to-date', ['exports', 'collections/config/environment', 'ember-moment/helpers/moment-to-date'], function (exports, _environment, _momentToDate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentToDate.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('collections/helpers/moment-to-now', ['exports', 'collections/config/environment', 'ember-moment/helpers/moment-to-now'], function (exports, _environment, _momentToNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentToNow.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});
define('collections/helpers/moment-to', ['exports', 'collections/config/environment', 'ember-moment/helpers/moment-to'], function (exports, _environment, _momentTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentTo.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
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
define('collections/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_notEqual.notEqualHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_notEqual.notEqualHelper);
  }

  exports.default = forExport;
});
define('collections/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_not.notHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_not.notHelper);
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
define('collections/helpers/number-format', ['exports'], function (exports) {
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
  function numberFormat(params /* , hash */) {
    var _params = _slicedToArray(params, 1),
        number = _params[0];

    return number.toLocaleString();
  }

  exports.default = Ember.Helper.helper(numberFormat);
});
define('collections/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_or.orHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_or.orHelper);
  }

  exports.default = forExport;
});
define('collections/helpers/percentage-columns-layout', ['exports', 'ember-collection/layouts/percentage-columns'], function (exports, _percentageColumns) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Helper.helper(function (params, hash) {
    return new _percentageColumns.default(params[0], params[1], params[2]);
  });
});
define('collections/helpers/permission-map', ['exports', 'ember-osf/const/permissions'], function (exports, _permissions) {
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
  function permissionMap(params /* , hash */) {
    var map = {};
    for (var i = 0; i < _permissions.permissionSelector.length; i++) {
      map[_permissions.permissionSelector[i].value] = _permissions.permissionSelector[i].text;
    }
    var permission = params[0];
    return map[permission];
  }

  exports.default = Ember.Helper.helper(permissionMap);
});
define('collections/helpers/permission-to-remove-contributor', ['exports'], function (exports) {
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
  function permissionToRemoveContributor(params /* , hash */) {
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

  exports.default = Ember.Helper.helper(permissionToRemoveContributor);
});
define('collections/helpers/permission-to-remove-contributors', ['exports'], function (exports) {
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
  function permissionToRemoveContributor(params /* , hash */) {
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

  exports.default = Ember.Helper.helper(permissionToRemoveContributor);
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
define('collections/helpers/route-prefix', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Helper.extend({
        theme: Ember.inject.service(),

        onSubRouteChange: Ember.observer('theme.isSubRoute', function () {
            this.recompute();
        }),

        compute: function compute(params) {
            var route = params.join('');

            return this.get('theme.isSubRoute') ? 'provider.' + route : route;
        }
    });
});
define('collections/helpers/safe-markup', ['exports'], function (exports) {
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
  function safeMarkup(params /* , hash */) {
    return Ember.String.htmlSafe(params.join(''));
  }

  exports.default = Ember.Helper.helper(safeMarkup);
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
define('collections/helpers/slice-array', ['exports'], function (exports) {
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
  function sliceArray(params /* , hash */) {
    var _params = _slicedToArray(params, 3),
        array = _params[0],
        start = _params[1],
        finish = _params[2];

    return array.slice(start, finish);
  }

  exports.default = Ember.Helper.helper(sliceArray);
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
define('collections/helpers/truncate-text', ['exports', 'ember-truncate-text/helpers/truncate-text'], function (exports, _truncateText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _truncateText.default;
    }
  });
  Object.defineProperty(exports, 'truncateText', {
    enumerable: true,
    get: function () {
      return _truncateText.truncateText;
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
define('collections/helpers/user-is-contributor', ['exports'], function (exports) {
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
  function userIsContributor(params /* , hash */) {
    var _params = _slicedToArray(params, 2),
        user = _params[0],
        contributors = _params[1];

    var userIds = contributors.map(function (contrib) {
      return contrib.get('userId');
    });
    return userIds.indexOf(user.id) > -1;
  }

  exports.default = Ember.Helper.helper(userIsContributor);
});
define('collections/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_xor.xorHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_xor.xorHelper);
  }

  exports.default = forExport;
});
define('collections/human-file-size/util', ['exports', 'ember-osf/human-file-size/util'], function (exports, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _util.default;
    }
  });
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
define('collections/initializers/component-routes', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.initialize = initialize;
    function initialize(app) {
        app.inject('component', 'router', 'router:main');
    }

    exports.default = {
        name: 'component-routes',
        initialize: initialize
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
define('collections/initializers/export-application-global', ['exports', 'collections/config/environment'], function (exports, _environment) {
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
        globalName = Ember.String.classify(_environment.default.modulePrefix);
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
define('collections/initializers/metrics', ['exports', 'collections/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    var _config$metricsAdapte = _environment.default.metricsAdapters,
        metricsAdapters = _config$metricsAdapte === undefined ? [] : _config$metricsAdapte;
    var _config$environment = _environment.default.environment,
        environment = _config$environment === undefined ? 'development' : _config$environment;

    var options = { metricsAdapters: metricsAdapters, environment: environment };

    application.register('config:metrics', options, { instantiate: false });
    application.inject('service:metrics', 'options', 'config:metrics');
  }

  exports.default = {
    name: 'metrics',
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
define('collections/initializers/promise', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.initialize = initialize;
    function initialize() {
        window.Promise = Ember.RSVP.Promise;
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
define('collections/initializers/truth-helpers', ['exports', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _registerHelper, _and, _or, _equal, _not, _isArray, _notEqual, _gt, _gte, _lt, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (Ember.Helper) {
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
define('collections/models/case-parameter', ['exports', 'collections/models/case'], function (exports, _case) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _case.default.extend({});
});
define('collections/models/case', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var computed = Ember.computed;
    var Model = _emberData.default.Model,
        attr = _emberData.default.attr,
        belongsTo = _emberData.default.belongsTo,
        hasMany = _emberData.default.hasMany;
    exports.default = Model.extend({

        workflow: belongsTo('workflow', {
            inverse: 'cases'
        }),

        sections: hasMany('section', {
            async: false,
            inverse: null
        }),

        widgets: hasMany('widget', {
            inverse: null,
            async: false
        }),

        parameterAliases: hasMany('parameter-alias', {
            inverse: 'cases',
            async: false
        }),

        parameters: hasMany('parameter', {
            inverse: 'cases',
            async: false
        }),

        stubs: hasMany('parameter-stub', {
            inverse: 'cases',
            async: false
        }),

        collection: belongsTo('collection', {
            inverse: null,
            async: true
        })

    });
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
define('collections/models/collection-workflow', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Model = _emberData.default.Model,
        attr = _emberData.default.attr,
        hasMany = _emberData.default.hasMany,
        belongsTo = _emberData.default.belongsTo;
    exports.default = Model.extend({
        role: _emberData.default.attr('string'),
        collection: belongsTo('collection', {
            inverse: 'collectionWorkflows'
        }),
        workflow: belongsTo('workflow', {
            inverse: 'collectionWorkflows'
        }),
        authorizedGroups: hasMany('group', {
            inverse: 'authorizedCollectionWorkflows'
        })
    });
});
define('collections/models/collection', ['exports', 'ember-data'], function (exports, _emberData) {
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
        location: attr('string'),
        address: attr('string'),
        collectionType: attr('string'),
        createdBy: belongsTo('user'),
        groups: hasMany('group'),
        items: hasMany('item'),
        workflows: hasMany('workflow', {
            inverse: 'collections',
            async: false
        }),
        collectionWorkflows: hasMany('collection-workflow', {
            inverse: 'collection',
            async: false
        }),
        titleCaseCollectionType: Ember.computed('collectionType', function () {
            var t = this.get('collectionType');
            return t.charAt(0).toUpperCase() + t.slice(1);
        })
    });
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
define('collections/models/group', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Model = _emberData.default.Model,
        attr = _emberData.default.attr,
        hasMany = _emberData.default.hasMany,
        belongsTo = _emberData.default.belongsTo;
    exports.default = Model.extend({
        name: attr('string'),
        authorizedCollectionWorkflows: hasMany('collection-workflow', {
            inverse: 'authorizedGroups'
        }),
        createdBy: belongsTo('user'),
        items: hasMany('item'),
        list: Ember.computed.alias('items')
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
define('collections/models/item', ['exports', 'ember-data', 'moment'], function (exports, _emberData, _moment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Model = _emberData.default.Model,
        attr = _emberData.default.attr,
        belongsTo = _emberData.default.belongsTo;
    exports.default = Model.extend({
        sourceId: attr('string'),
        title: attr('string'),
        description: attr('string'),
        status: attr('string'),
        url: attr('string'),
        metadata: attr(),
        dateAdded: attr('date'),
        dateUpdated: attr('date'),
        location: attr('string'),
        startTime: attr('string'),
        endTime: attr('string'),
        collection: belongsTo('collection'),
        group: belongsTo('group'),
        createdBy: belongsTo('user'),
        fileLink: attr('string'),
        kind: attr('string'),
        fileName: attr('string'),
        fileFormat: Ember.computed('fileName', function () {
            var name = this.get('fileName');
            if (name) {
                var arr = this.get('fileName').split('.');
                return arr[arr.length - 1];
            } else {
                return 'Unavailable';
            }
        }),
        startDateTimeFormatted: Ember.computed('startTime', function () {
            var st = (0, _moment.default)(this.get('startTime'));
            return st.format('MMM Do, YYYY @ h:mmA');
        }),
        startTimeFormatted: Ember.computed('endTime', function () {
            var st = (0, _moment.default)(this.get('startTime'));
            return st.format('h:mmA');
        }),
        endTimeFormatted: Ember.computed('startTime', function () {
            var st = (0, _moment.default)(this.get('endTime'));
            return st.format('h:mmA');
        }),
        scheduleFilterText: Ember.computed('title', 'location', 'startTimeFormatted', function () {
            return this.get('title') + this.get('location') + this.get('startTimeFormatted') + this.get('userName');
        }),
        parsedMetadata: Ember.computed('metadata', function () {
            return JSON.parse(this.get('metadata'));
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
define('collections/models/osf-user', ['exports', 'ember-osf/models/user'], function (exports, _user) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _user.default;
    }
  });
});
define('collections/models/parameter-alias', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Model = _emberData.default.Model,
        attr = _emberData.default.attr,
        belongsTo = _emberData.default.belongsTo,
        hasMany = _emberData.default.hasMany;
    exports.default = Model.extend({

        alias: attr('string'),

        widget: belongsTo('widget', {
            inverse: 'parameterAliases'
        }),

        cases: hasMany('case', {
            inverse: 'parameterAliases'
        }),

        workflow: belongsTo('workflow', {
            inverse: 'parameterAliases'
        }),

        parameters: hasMany('parameter', {
            inverse: 'aliases'
        }),

        parameterStub: belongsTo('parameter-stub', {
            inverse: 'aliases'
        })

    });
});
define('collections/models/parameter-stub', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Model = _emberData.default.Model,
        attr = _emberData.default.attr,
        belongsTo = _emberData.default.belongsTo,
        hasMany = _emberData.default.hasMany;
    exports.default = Model.extend({

        name: attr('string'),

        workflow: belongsTo('workflow', {
            inverse: null
        }),

        parameters: hasMany('parameter', {
            inverse: 'stub'
        }),

        cases: hasMany('case', {
            inverse: 'stubs'
        }),

        aliases: hasMany('parameter-alias', {
            inverse: 'parameterStub'
        })

    });
});
define('collections/models/parameter', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Model = _emberData.default.Model,
        attr = _emberData.default.attr,
        hasMany = _emberData.default.hasMany,
        belongsTo = _emberData.default.belongsTo;
    exports.default = Model.extend({

        name: attr('string'),
        value: attr(),
        properties: attr(), // Property hash to store additional information about a parameter.

        aliases: hasMany('parameter-aliases', {
            inverse: 'parameters'
        }),

        cases: hasMany('case', {
            inverse: 'parameters'
        }),

        workflow: belongsTo('workflow', {
            inverse: 'parameters'
        }),

        stub: belongsTo('parameter-stub', {
            inverse: 'parameters'
        }),

        disableAutosave: false,

        autoSave: Ember.observer('currentState.isDirty', function () {
            var _this = this;

            Ember.run.debounce(function () {
                _this.get('currentState.isDirty') && !_this.disableAutosave && _this.save();
            }, 1000);
        })

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
define('collections/models/section', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var computed = Ember.computed;
    var Model = _emberData.default.Model,
        attr = _emberData.default.attr,
        hasMany = _emberData.default.hasMany;
    exports.default = Model.extend({
        label: attr('string'),
        description: attr('string'),
        index: attr('number'),
        widgets: hasMany('widget', {
            inverse: 'section'
        }),
        sortedWidgets: Ember.computed('widgets.@each.index', function () {
            return this.get('widgets').sortBy('index');
        }),
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
define('collections/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
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
        computedFullName: Ember.computed('firstName', 'lastName', function () {
            return this.get('firstName') + ' ' + this.get('lastName');
        })
    });
});
define('collections/models/widget', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

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

    var computed = Ember.computed;
    var Model = _emberData.default.Model,
        attr = _emberData.default.attr,
        belongsTo = _emberData.default.belongsTo,
        hasMany = _emberData.default.hasMany;
    exports.default = Model.extend({

        caxe: Ember.inject.service(),

        label: attr('string'),
        description: attr('string'),
        widgetType: attr('string'),
        defaultValue: attr('string'),
        index: attr('number'),
        parameterAliases: hasMany('parameter-alias', {
            inverse: 'widget',
            async: false
        }),

        workflow: belongsTo('workflow', {
            inverse: 'widgets'
        }),

        section: belongsTo('section', {
            inverse: 'widgets'
        }),

        caseParameters: Ember.computed('caxe.activeCase.parameters.@each', function () {
            var activeCase = this.get('caxe.activeCase');
            if (activeCase) {
                var aliases = this.get('parameterAliases');
                var caseParams = aliases.reduce(function (case_parameters, alias) {
                    var key = alias.get('alias');
                    var value = activeCase.get('parameters').find(function (p) {
                        return p.get('stub.id') === alias.get('parameterStub.id');
                    });
                    return Object.assign(_defineProperty({}, key, value), case_parameters);
                }, {});
                return caseParams;
            }
            return {};
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
define('collections/models/workflow', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Model = _emberData.default.Model,
        attr = _emberData.default.attr,
        hasMany = _emberData.default.hasMany;
    exports.default = Model.extend({
        title: attr('string'),
        parameters: hasMany('parameter', {
            inverse: 'workflow'
        }),
        description: attr('string'),
        caseDescription: attr('string'),
        sortedSections: Ember.computed('sections.@each.index', 'sections.@each', 'sections', function () {
            return this.get('sections').sortBy('index');
        }),
        sections: hasMany('section', {
            inverse: null
        }),
        actions: hasMany('action', {
            inverse: null
        }),
        collectionWorkflows: hasMany('collection-workflow', {
            inverse: 'workflow'
        }),
        initialParameters: hasMany('parameter', {
            inverse: null
        }),
        widgets: hasMany('widget', {
            inverse: 'workflow'
        }),
        parameterAliases: hasMany('parameter-alias', {
            inverse: 'workflow'
        }),
        collections: hasMany('collection', {
            inverse: 'workflows'
        }),
        cases: hasMany('case', {
            inverse: 'workflow'
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
define('collections/router', ['exports', 'collections/config/environment'], function (exports, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    var Router = Ember.Router.extend({
        location: _environment.default.locationType,
        rootURL: _environment.default.rootURL
    });

    // eslint-disable-next-line array-callback-return
    Router.map(function () {
        this.route('index', {
            path: ''
        });
        this.route('tasks', {
            path: 'tasks'
        });
        this.route('explore', {
            path: 'explore'
        });
        this.route('workflows', {
            path: 'workflows'
        }, function () {
            this.route('workflow', {
                path: ':workflow_id'
            });
        });
        this.route('collections', {
            path: 'collections'
        }, function () {
            this.route('my-collection', {
                path: 'my-collection'
            });
            this.route('collection', {
                path: ':collection_id'
            }, function () {
                this.route('item', {
                    path: 'item/:item_id'
                });
                this.route('submissions');
                this.route('browse');
                this.route('edit');
                this.route('add', {
                    path: 'add/:case_id'
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

    exports.default = Router;
});
define('collections/routes/appendices', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        session: Ember.inject.service(),
        model: function model() {}
    });
});
define('collections/routes/application', ['exports', 'ember-simple-auth/mixins/application-route-mixin'], function (exports, _applicationRouteMixin) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend(_applicationRouteMixin.default, {
        session: Ember.inject.service(),
        beforeModel: function beforeModel() {
            var session = this.get('session');
            if (!session.get('isAuthenticated')) {
                session.authenticate('authenticator:osf-token', false).catch(function () {});
            }
        }
    });
});
define("collections/routes/base", [], function () {
  "use strict";
});
define('collections/routes/collections', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({

        title: 'Collections',
        crumb: {},

        beforeModel: function beforeModel() {
            this.set('crumb.label', this.title);
            this.set('crumb.route', this.routeName);
            this.set('nav.links', [{
                label: 'Showcase',
                route: 'explore'
            }, {
                label: 'Trending',
                route: 'explore'
            }]);
        },
        model: function model(params, transition) {
            return Ember.RSVP.hash({
                collections: this.store.query('collection', {
                    filter: {
                        kind: transition.queryParams.kind
                    }
                })
            });
        },
        setupController: function setupController(collection, data) {
            collection.set('collections', data.collections);
        }
    });
});
define('collections/routes/collections/collection', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({

        crumb: {},

        model: function model(params) {
            return this.store.findRecord('collection', params.collection_id, { reload: true });
        },
        afterModel: function afterModel(model, transition) {
            this.set('crumb.label', model.get('title'));
            this.set('crumb.route', this.routeName);
            this.set('crumb.models', [model]);

            this.set('nav.links', [{
                label: 'Settings',
                route: 'collections.collection.edit',
                models: [model]
            }, {
                label: 'Submissions',
                route: 'collections.collection.submissions',
                models: [model]
            }]);
        },
        setupController: function setupController(controller, model) {
            controller.set('collection', model);
        }
    });
});
define('collections/routes/collections/collection/add', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({

        caxe: Ember.inject.service(),

        crumb: {},

        model: function model(params) {
            return Ember.RSVP.hash({
                caxe: this.get('store').findRecord('case', params.case_id, {
                    reload: true
                }),
                collection: this.modelFor('collections.collection')
            });
        },
        afterModel: function afterModel(model, transition) {
            this.set('crumb.label', 'Submission ' + model.caxe.id);
            this.set('crumb.route', this.routeName);
            this.set('crumb.models', [model.collection, model.caxe]);

            this.set('nav.links', [{
                label: 'Settings',
                route: 'collections.collection.edit',
                models: [model.collection]
            }, {
                label: 'Submissions',
                route: 'collections.collection.submissions',
                models: [model.collection]
            }]);

            this.set('caxe.activeCase', model.caxe);
        },
        setupController: function setupController(controller, model) {
            controller.set('caxe', model.caxe);
            controller.set('collection', model.collection);

            console.log("the collection item", model.collection.get('items'));

            model.collection.get('items').then(function (results) {
                results.forEach(function (item) {
                    console.log(item.id);
                });
            });
        }
    });
});
define('collections/routes/collections/collection/browse', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('collections/routes/collections/collection/edit', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({

        title: 'Settings',
        crumb: {},

        model: function model() {
            var collection = this.modelFor('collections.collection');
            return Ember.RSVP.hash({
                cases: this.store.query('case', {
                    collection: collection.id
                }),
                collection: collection,
                groups: this.store.findAll('group'),
                workflows: this.store.findAll('workflow')
            });
        },
        afterModel: function afterModel(model, transition) {
            this.set('nav.links', [{
                label: 'Settings',
                route: 'collections.collection.edit',
                models: [model.collection]
            }, {
                label: 'Submissions',
                route: 'collections.collection.submissions',
                models: [model.collection]
            }]);
        },
        setupController: function setupController(controller, data) {
            controller.set('collection', data.collection);
            controller.set('groups', data.groups);
            controller.set('workflows', data.workflows);
        }
    });
});
define('collections/routes/collections/collection/group', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        model: function model(params) {
            return this.get('store').findRecord('group', params.group_id).then(function (group) {
                return group;
            });
        }
    });
});
define('collections/routes/collections/collection/group/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('collections/routes/collections/collection/group/item', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        model: function model(params) {
            return this.store.findRecord('item', params.group_item_id);
        }
    });
});
define('collections/routes/collections/collection/index', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        model: function model(params) {
            return this.modelFor('collections.collection');
        },
        afterModel: function afterModel(model, transition) {
            this.set('nav.links', [{
                label: 'Settings',
                route: 'collections.collection.edit',
                models: [model]
            }, {
                label: 'Submissions',
                route: 'collections.collection.submissions',
                models: [model]
            }]);
        },
        setupController: function setupController(controller, model) {
            controller.set('collection', model);
        }
    });
});
define('collections/routes/collections/collection/item', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({

        crumb: {},

        model: function model(params) {
            var _this = this;

            var collection = this.modelFor('collections.collection');
            var item = this.store.findRecord('item', params.item_id);
            var node = item.then(function (_item) {
                return _this.store.findRecord('node', _item.get('sourceId'));
            });

            return Ember.RSVP.hash({
                collection: collection,
                item: item,
                node: node
            });
        },
        afterModel: function afterModel(model, transition) {
            this.set('crumb.label', model.item.get('title'));
            this.set('crumb.route', this.routeName);
            this.set('crumb.models', [model.collection, model.item]);

            this.set('nav.links', [{
                label: 'Edit',
                route: 'collections.collection.submissions',
                models: [
                    // model.collection,
                    // model.item
                ]
            }]);
        },
        setupController: function setupController(controller, data) {
            controller.set('collection', data.collection);
            controller.set('item', data.item);
            controller.set('node', data.node);
        }
    });
});
define('collections/routes/collections/collection/search', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({

        title: 'Search In Collection'

    });
});
define('collections/routes/collections/collection/submissions', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({

        title: 'Submissions',
        crumb: {},

        model: function model() {
            var collection = this.modelFor('collections.collection');
            return Ember.RSVP.hash({
                cases: this.store.query('case', {
                    collection: collection.id
                }),
                collection: collection
            });
        },
        afterModel: function afterModel(model, transition) {
            this.set('crumb.label', this.title);
            this.set('crumb.route', this.routeName);
            this.set('crumb.models', [model.collection]);

            this.set('nav.links', [{
                label: 'Settings',
                route: 'collections.collection.edit',
                models: [model.collection]
            }, {
                label: 'Submissions',
                route: 'collections.collection.submissions',
                models: [model.collection]
            }]);
        },
        setupController: function setupController(controller, data) {
            controller.set('collection', data.collection);
            controller.set('cases', data.cases);

            this.get('store').queryRecord('case', { for_item: 401, role: "submission" }).then(function (result) {
                console.log("the collection item", result);
            });

            // data.collection.get('items').then((results)=>{
            //     results.forEach((item)=>{
            //         console.log(item.get('group'))
            //     })
            // })
        }
    });
});
define('collections/routes/collections/index', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({

        queryParams: {
            kind: {
                refreshModel: true
            },
            q: {
                refreshModel: true
            }
        },
        actions: {
            willTransition: function willTransition(transition) {
                console.log('willTransition');
                this.controllerFor("collections.index").set('loading', true);
            }
        },

        model: function model(params, transition) {
            return Ember.RSVP.hash({
                collections: this.store.query('item', {
                    q: transition.queryParams.q,
                    filter: {
                        kind: transition.queryParams.kind
                    }
                })
            });
        },
        setupController: function setupController(controller, model) {
            controller.set("loading", false);
            controller.set("collections", model.collections);
        }
    });
});
define('collections/routes/collections/my-collection', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({

        title: 'My Collection',
        crumb: {},

        beforeModel: function beforeModel() {
            this.set('crumb.label', this.title);
            this.set('crumb.route', this.routeName);
            this.set('nav.links', [{
                label: 'Showcase',
                route: 'explore'
            }, {
                label: 'Trending',
                route: 'explore'
            }]);
        },
        model: function model(params) {
            return Ember.RSVP.hash({
                collections: this.store.findAll('collection')
            });
        },
        setupController: function setupController(collection, data) {
            collection.set('collections', data.collections);
        }
    });
});
define('collections/routes/create', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        model: function model() {
            return Ember.RSVP.hash({
                workflows: this.get('store').findAll('workflow'),
                groups: this.get('store').findAll('group')
            });
        },
        setupController: function setupController(controller, model) {
            controller.set('workflows', model.workflows);
            controller.set('groups', model.groups);
        }
    });
});
define('collections/routes/explore', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({

        title: 'Explore',
        crumb: {},

        beforeModel: function beforeModel() {
            this.set('crumb.label', this.title);
            this.set('crumb.route', this.routeName);
            this.set('nav.links', [{
                label: 'Showcase',
                route: 'explore'
            }, {
                label: 'Trending',
                route: 'explore'
            }]);
        },
        model: function model(params) {
            return Ember.RSVP.hash({
                collections: this.store.findAll('collection')
            });
        },
        setupController: function setupController(collection, data) {
            collection.set('collections', data.collections);
        }
    });
});
define('collections/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('collections/routes/meetings', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        session: Ember.inject.service(),
        model: function model() {}
    });
});
define('collections/routes/not-found', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('collections/routes/tasks', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({

        title: 'Tasks',
        crumb: {},

        model: function model() {
            return Ember.RSVP.hash({
                cases: this.store.findAll('case')
            });
        },
        afterModel: function afterModel(model, transition) {
            this.set('crumb.label', this.title);
            this.set('crumb.route', this.routeName);
            this.set('crumb.models', []);

            this.set('nav.links', [{}]);
        },
        setupController: function setupController(controller, data) {
            controller.set('cases', data.cases);
        }
    });
});
define('collections/serializers/action', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPISerializer.extend({});
});
define('collections/serializers/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var JSONAPISerializer = _emberData.default.JSONAPISerializer;
  exports.default = JSONAPISerializer.extend({});
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
define('collections/serializers/condition', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPISerializer.extend({});
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
define('collections/serializers/osf-user', ['exports', 'ember-osf/serializers/user'], function (exports, _user) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _user.default;
    }
  });
});
define('collections/serializers/parameter-mapping', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPISerializer.extend({});
});
define('collections/serializers/parameter', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPISerializer.extend({});
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
define('collections/serializers/section', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPISerializer.extend({});
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
define('collections/serializers/widget', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPISerializer.extend({});
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
define('collections/serializers/workflow', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPISerializer.extend({});
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
define('collections/services/caxe', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Service.extend({

        activeCase: 1

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
define('collections/services/dependency-checker', ['exports', 'collections/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({

    hasLiquidFire: Ember.computed('', function () {
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
define('collections/services/metrics', ['exports', 'ember-metrics/services/metrics'], function (exports, _metrics) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _metrics.default;
    }
  });
});
define('collections/services/moment', ['exports', 'collections/config/environment', 'ember-moment/services/moment'], function (exports, _environment, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _moment.default.extend({
    defaultFormat: Ember.get(_environment.default, 'moment.outputFormat')
  });
});
define('collections/services/nav', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Service.extend({

        crumbs: []

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
define('collections/services/store', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Store.extend({});
});
define('collections/services/theme', ['exports', 'ember-get-config'], function (exports, _emberGetConfig) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var Service = Ember.Service,
        inject = Ember.inject,
        computed = Ember.computed;
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
            var query = Ember.$.param({
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
define("collections/templates/appendices", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "k2xAQ0iU", "block": "{\"symbols\":[\"item\"],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"coll-banner text-center\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"f-w-lg\"],[7],[0,\" OSF for Meetings \"],[8],[0,\"\\n        \"],[6,\"p\"],[9,\"class\",\"lead f-w-md\"],[7],[0,\"A free poster and presentation sharing service for academic meetings and conferences\"],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"            \"],[4,\"link-to\",[\"create_meeting\"],[[\"class\"],[\"btn btn-success btn-lg m-t-lg\"]],{\"statements\":[[0,\"Start a meeting\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"coll-toolbar row\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col-xs-6\"],[7],[6,\"h2\"],[7],[0,\" All meetings\"],[8],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col-xs-6\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"pull-right\"],[7],[1,[25,\"input\",null,[[\"class\",\"value\",\"key-up\",\"placeholder\"],[\"form-control\",[20,[\"filterText\"]],\"filter\",\"Filter\"]]],false],[0,\"  \"],[1,[20,[\"model\",\"length\"]],false],[0,\" shown \"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[2,\" <input type=text placeholder=\\\"Filter collections\\\" onkeyup={{action 'filter'}}> \"],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"coll-group\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"model\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[9,\"class\",\"coll-single\"],[7],[0,\"\\n                \"],[4,\"link-to\",[\"collection\",[19,1,[\"id\"]]],[[\"class\"],[\"btn btn-info pull-right\"]],{\"statements\":[[6,\"span\"],[3,\"action\",[[19,0,[]],\"clearFilter\"]],[7],[0,\"View\"],[8]],\"parameters\":[]},null],[0,\"\\n                \"],[6,\"h3\"],[7],[4,\"link-to\",[\"collection\",[19,1,[\"id\"]]],null,{\"statements\":[[6,\"span\"],[3,\"action\",[[19,0,[]],\"clearFilter\"]],[7],[1,[19,1,[\"title\"]],false],[8]],\"parameters\":[]},null],[8],[0,\"\\n                \"],[6,\"p\"],[7],[1,[19,1,[\"description\"]],false],[8],[0,\"\\n\"],[4,\"if\",[[19,1,[\"tags\"]]],null,{\"statements\":[[0,\"                    \"],[6,\"div\"],[7],[0,\"Tags: \"],[1,[19,1,[\"tags\"]],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                \"],[6,\"div\"],[9,\"class\",\"text-muted\"],[7],[0,\"Created on \"],[1,[25,\"moment-format\",[[19,1,[\"dateCreated\"]],\"MMMM DD, YYYY\"],null],false],[0,\" \"],[8],[0,\"\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"text-center\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"showLoadMore\"]]],null,{\"statements\":[[4,\"if\",[[20,[\"loadingMore\"]]],null,{\"statements\":[[0,\"                    \"],[6,\"i\"],[9,\"class\",\"fa fa-circle-o-notch fa-spin fa-3x fa-fw text-muted m-t-md\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                    \"],[6,\"button\"],[9,\"class\",\"btn btn-default\"],[3,\"action\",[[19,0,[]],\"loadMore\"]],[7],[0,\" Load more \"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/appendices.hbs" } });
});
define("collections/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "1hP8vWur", "block": "{\"symbols\":[],\"statements\":[[1,[25,\"new-osf-navbar\",null,[[\"loginAction\"],[[25,\"action\",[[19,0,[]],\"login\"],null]]]],false],[0,\"\\n\\n\"],[4,\"if\",[[25,\"not\",[true],null]],null,{\"statements\":[[0,\"    \"],[1,[25,\"search-dropdown\",null,[[\"action\"],[\"toggleSearch\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\\n\"],[1,[18,\"osf-footer\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/application.hbs" } });
});
define("collections/templates/collections", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "gITz4RSv", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"nav-bar\"],false],[0,\"\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/collections.hbs" } });
});
define("collections/templates/collections/collection", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7bgo9a1q", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/collections/collection.hbs" } });
});
define("collections/templates/collections/collection/add-loading", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "JCccIh9I", "block": "{\"symbols\":[],\"statements\":[[1,[25,\"loading-spinner\",null,[[\"fullPage\",\"style\"],[true,\"fa-4x\"]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/collections/collection/add-loading.hbs" } });
});
define("collections/templates/collections/collection/add", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qxB9ernQ", "block": "{\"symbols\":[\"section\",\"widget\"],\"statements\":[[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"hero\"],[7],[0,\"\\n    \"],[6,\"h1\"],[7],[1,[20,[\"caxe\",\"workflow\",\"title\"]],false],[0,\" \"],[8],[0,\"\\n    \"],[6,\"h3\"],[7],[1,[20,[\"caxe\",\"workflow\",\"description\"]],false],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"loading\"]]],null,{\"statements\":[[0,\"    \"],[1,[25,\"loading-spinner\",null,[[\"fullPage\",\"style\"],[true,\"fa-4x\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[6,\"section\"],[7],[0,\"\\n\\n\"],[4,\"if\",[[25,\"eq\",[[20,[\"caxe\",\"workflow\",\"submissionFormType\"]],\"Website\"],null]],null,{\"statements\":[[0,\"\\n        \"],[1,[25,\"add-website\",null,[[\"model\",\"transition\"],[[20,[\"model\"]],[25,\"action\",[[19,0,[]],\"transition\"],null]]]],false],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[6,\"p\"],[9,\"class\",\"text-center\"],[7],[0,\"\\n            Any changes you make here are automatically saved. You can use the reference code \"],[6,\"span\"],[9,\"class\",\"emphasis\"],[9,\"style\",\"background-color:#ddd; color:#333;\"],[7],[1,[20,[\"caxe\",\"id\"]],false],[8],[0,\" to load this submission again.\\n        \"],[8],[0,\"\\n\\n\\n\"],[4,\"each\",[[20,[\"caxe\",\"workflow\",\"sortedSections\"]]],null,{\"statements\":[[0,\"\\n            \"],[6,\"fieldset\"],[7],[0,\"\\n                \"],[6,\"h2\"],[7],[1,[19,1,[\"label\"]],false],[8],[0,\"\\n                \"],[6,\"p\"],[7],[1,[19,1,[\"description\"]],false],[8],[0,\"\\n\"],[4,\"each\",[[19,1,[\"sortedWidgets\"]]],null,{\"statements\":[[0,\"                    \"],[1,[25,\"component\",[[19,2,[\"widgetType\"]]],[[\"widget\",\"collection\",\"parameters\",\"toggleLoading\"],[[19,2,[]],[20,[\"collection\"]],[19,2,[\"caseParameters\"]],[25,\"action\",[[19,0,[]],[20,[\"toggleLoading\"]]],null]]]],false],[0,\"\\n                \\n                \\n\"]],\"parameters\":[2]},null],[0,\"            \"],[8],[0,\"\\n\\n\"]],\"parameters\":[1]},null],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/collections/collection/add.hbs" } });
});
define("collections/templates/collections/collection/browse", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "XQE2hWTJ", "block": "{\"symbols\":[],\"statements\":[[1,[25,\"browse-list\",null,[[\"model\"],[[20,[\"model\"]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/collections/collection/browse.hbs" } });
});
define("collections/templates/collections/collection/edit", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Y4PHqXeJ", "block": "{\"symbols\":[\"collectionWorkflow\",\"group\",\"group\",\"workflow\",\"type\"],\"statements\":[[6,\"section\"],[9,\"class\",\"hero\"],[7],[0,\"\\n    \"],[6,\"h1\"],[7],[1,[20,[\"collection\",\"title\"]],false],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"section\"],[7],[0,\"\\n\\n    \"],[6,\"h2\"],[7],[0,\"Collection Information\"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"input-item\"],[7],[0,\"\\n        \"],[6,\"label\"],[9,\"for\",\"collectionTitle\"],[7],[0,\"Title\"],[8],[0,\"\\n        \"],[1,[25,\"input\",null,[[\"class\",\"value\",\"placeholder\",\"id\"],[\"form-control\",[20,[\"collection\",\"title\"]],\"Enter title\",\"collectionTitle\"]]],false],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"input-item\"],[7],[0,\"\\n        \"],[6,\"label\"],[9,\"for\",\"collectionDescription\"],[7],[0,\"Description\"],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"collection\",\"description\"]]],null,{\"statements\":[[0,\"            \"],[1,[25,\"textarea\",null,[[\"class\",\"value\",\"id\"],[\"form-control\",[20,[\"collection\",\"description\"]],\"collectionDescription\"]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[6,\"span\"],[9,\"class\",\"text-muted\"],[3,\"action\",[[19,0,[]],\"showEdit\"]],[7],[0,\"Add description\"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"input-item\"],[7],[0,\"\\n        \"],[6,\"label\"],[9,\"for\",\"collectionTags\"],[7],[0,\"Tags\"],[8],[0,\"\\n        \"],[1,[25,\"input\",null,[[\"class\",\"value\",\"placeholder\",\"id\"],[\"form-control\",[20,[\"collection\",\"tags\"]],\"Enter comma separated tags\",\"collectionTags\"]]],false],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"input item\"],[7],[0,\"\\n        \"],[6,\"label\"],[7],[0,\"Type\"],[8],[0,\"\\n        \"],[6,\"select\"],[9,\"class\",\"form-control\"],[10,\"onchange\",[25,\"action\",[[19,0,[]],\"setCollectionType\"],null],null],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"types\"]]],null,{\"statements\":[[0,\"                \"],[6,\"option\"],[10,\"value\",[19,5,[]],null],[10,\"selected\",[25,\"eq\",[[19,5,[]],[20,[\"collection\",\"type\"]]],null],null],[7],[0,\"\\n                    \"],[1,[19,5,[]],false],[0,\"\\n                \"],[8],[0,\"\\n\"]],\"parameters\":[5]},null],[0,\"        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"p\"],[7],[6,\"label\"],[7],[0,\"Created by:\"],[8],[0,\" \"],[1,[20,[\"collection\",\"createdBy\",\"firstName\"]],false],[0,\" \"],[1,[20,[\"collection\",\"createdBy\",\"lastName\"]],false],[8],[0,\"\\n    \"],[6,\"p\"],[7],[6,\"label\"],[7],[0,\"Date created:\"],[8],[0,\" \"],[1,[20,[\"collection\",\"dateCreated\"]],false],[0,\" \"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[6,\"label\"],[7],[0,\"Date updated:\"],[8],[0,\" \"],[1,[20,[\"collection\",\"dateUpdated\"]],false],[8],[0,\"\\n\\n\"],[4,\"if\",[[25,\"eq\",[[20,[\"collection\",\"settings\",\"collection_type\"]],\"Meeting\"],null]],null,{\"statements\":[[0,\"        \"],[6,\"p\"],[7],[6,\"label\"],[7],[0,\"Location:\"],[8],[0,\" \"],[1,[20,[\"collection\",\"location\"]],false],[8],[0,\"\\n        \"],[6,\"p\"],[7],[6,\"label\"],[7],[0,\"Address:\"],[8],[0,\" \"],[1,[20,[\"collection\",\"address\"]],false],[8],[0,\"\\n        \"],[6,\"p\"],[7],[6,\"label\"],[7],[0,\"Start Date:\"],[8],[0,\" \"],[1,[20,[\"collection\",\"startDate\"]],false],[8],[0,\"\\n        \"],[6,\"p\"],[7],[6,\"label\"],[7],[0,\"End Date:\"],[8],[0,\" \"],[1,[20,[\"collection\",\"endDate\"]],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\\n\"],[8],[0,\"\\n\\n\"],[6,\"section\"],[9,\"class\",\"collection-workflows\"],[7],[0,\"\\n\\n    \"],[6,\"h2\"],[7],[0,\"Workflows\"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"This is the list of workflows associated with the collection\"],[8],[0,\"\\n\"],[4,\"each\",[[20,[\"collection\",\"collectionWorkflows\"]]],null,{\"statements\":[[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"edit-workflow\"],[7],[0,\"\\n            \"],[6,\"h3\"],[9,\"class\",\"workflow\"],[7],[0,\"\\n                \"],[1,[19,1,[\"role\"]],false],[0,\" Workflow\\n            \"],[8],[0,\"\\n            \"],[6,\"p\"],[7],[0,\"\\n                \"],[6,\"label\"],[7],[0,\"Workflow Role\"],[8],[0,\"\\n                \"],[1,[25,\"input\",null,[[\"value\",\"class\"],[[19,1,[\"role\"]],\"form-control\"]]],false],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"p\"],[7],[0,\"\\n                \"],[6,\"label\"],[7],[0,\"Workflow Type:\"],[8],[0,\"\\n                \"],[6,\"select\"],[9,\"class\",\"form-control\"],[10,\"onchange\",[25,\"action\",[[19,0,[]],\"setWorkflowTypeForCollectionWorkflow\",[19,1,[]]],null],null],[7],[0,\"\\n                    \"],[6,\"option\"],[9,\"disabled\",\"\"],[9,\"selected\",\"\"],[7],[0,\"\\n                        -- Select a workflow type --\\n                    \"],[8],[0,\"\\n\"],[4,\"each\",[[20,[\"workflows\"]]],null,{\"statements\":[[0,\"                        \"],[6,\"option\"],[10,\"value\",[19,4,[\"id\"]],null],[10,\"selected\",[25,\"eq\",[[19,4,[\"id\"]],[19,1,[\"workflow\",\"id\"]]],null],null],[7],[0,\"\\n                            \"],[1,[19,4,[\"title\"]],false],[0,\"\\n                        \"],[8],[0,\"\\n\"]],\"parameters\":[4]},null],[0,\"                \"],[8],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"p\"],[7],[0,\"\\n                \"],[6,\"label\"],[7],[0,\"Authorized Groups:\"],[8],[0,\"\\n                \"],[6,\"ul\"],[7],[0,\"\\n\"],[4,\"each\",[[19,1,[\"authorizedGroups\"]]],null,{\"statements\":[[0,\"                        \"],[6,\"li\"],[7],[6,\"label\"],[7],[0,\"Group Name: \"],[8],[1,[19,3,[\"name\"]],false],[0,\"\\n                        \"],[6,\"a\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"removeCollectionWorkflowGroup\",[19,1,[]],[19,3,[]]],null],null],[7],[0,\"\\n                            \"],[6,\"i\"],[9,\"class\",\"fa fa-minus-square-o pull-right\"],[9,\"style\",\"color: red; font-size: 1.5em; cursor: pointer;\"],[9,\"title\",\"De-authorize group\"],[7],[8],[0,\"\\n                        \"],[8],[0,\"\\n                        \"],[8],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"                \"],[8],[0,\"\\n                    \"],[6,\"div\"],[9,\"class\",\"input-group\"],[7],[0,\"\\n                        \"],[6,\"select\"],[9,\"class\",\"form-control\"],[10,\"onchange\",[25,\"action\",[[19,0,[]],\"setGroupForCollectionWorkflow\",[19,1,[]]],null],null],[7],[0,\"\\n                            \"],[6,\"option\"],[9,\"disabled\",\"\"],[9,\"selected\",\"\"],[7],[0,\" -- Select a group to add as authorized for the workflow -- \"],[8],[0,\"\\n\"],[4,\"each\",[[20,[\"groups\"]]],null,{\"statements\":[[0,\"                                \"],[6,\"option\"],[10,\"value\",[19,2,[\"id\"]],null],[10,\"selected\",[25,\"eq\",[[19,2,[\"id\"]],[19,1,[\"group\",\"id\"]]],null],null],[7],[0,\"\\n                                    \"],[1,[19,2,[\"name\"]],false],[0,\"\\n                                \"],[8],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"                        \"],[8],[0,\"\\n                        \"],[6,\"span\"],[9,\"class\",\"input-group-btn\"],[7],[0,\"\\n                            \"],[6,\"a\"],[9,\"class\",\"btn btn-default\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"addGroupToCollectionWorkflow\",[19,1,[]]],null],null],[7],[0,\"\\n                                Authorize Group\\n                            \"],[8],[0,\"\\n                        \"],[8],[0,\"\\n                    \"],[8],[0,\"\\n            \"],[8],[0,\"\\n\\n            \"],[2,\" TODO: create a modal or double-click function - \\\"Are you sure you want to delete this workflow?\\\" \"],[0,\"\\n\\n            \"],[6,\"button\"],[9,\"class\",\"btn btn-inverse btn-danger\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"removeWorkflow\",[19,1,[]]],null],null],[7],[0,\"\\n                Remove Workflow\\n            \"],[8],[0,\"\\n\\n\\n        \"],[8],[0,\"\\n\\n\"]],\"parameters\":[1]},null],[0,\"\\n    \"],[6,\"button\"],[9,\"class\",\"button-add-workflow btn btn-primary\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"addWorkflow\"],null],null],[7],[0,\"\\n        Add a workflow\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[4,\"if\",[[25,\"eq\",[[20,[\"collection\",\"collectionType\"]],\"meeting\"],null]],null,{\"statements\":[[0,\"\\n    \"],[6,\"section\"],[7],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n            \"],[6,\"label\"],[9,\"for\",\"location\"],[7],[0,\"Location\"],[8],[0,\"\\n            \"],[1,[25,\"input\",null,[[\"class\",\"value\",\"placeholder\",\"id\"],[\"form-control\",[20,[\"collection\",\"location\"]],\"Enter location\",\"location\"]]],false],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n            \"],[6,\"label\"],[9,\"for\",\"address\"],[7],[0,\"Address\"],[8],[0,\"\\n            \"],[1,[25,\"input\",null,[[\"class\",\"value\",\"placeholder\",\"id\"],[\"form-control\",[20,[\"collection\",\"address\"]],\"Enter address\",\"address\"]]],false],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n            \"],[6,\"label\"],[9,\"for\",\"startDate\"],[7],[0,\"Start Date\"],[8],[0,\"\\n            \"],[1,[25,\"input\",null,[[\"class\",\"value\",\"placeholder\",\"id\"],[\"form-control\",[20,[\"collection\",\"startDate\"]],\"Enter start date\",\"startDate\"]]],false],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n            \"],[6,\"label\"],[9,\"for\",\"endDate\"],[7],[0,\"End Date\"],[8],[0,\"\\n            \"],[1,[25,\"input\",null,[[\"class\",\"value\",\"placeholder\",\"id\"],[\"form-control\",[20,[\"collection\",\"endDate\"]],\"Enter end date\",\"endDate\"]]],false],[0,\"\\n        \"],[8],[0,\"\\n\\n    \"],[8],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n\\n\"],[6,\"section\"],[7],[0,\"\\n\\n    \"],[6,\"h2\"],[7],[0,\"Page Settings\"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"\\n        \"],[6,\"a\"],[9,\"target\",\"_blank\"],[9,\"href\",\"https://github.com/cos-labs/collections/blob/develop/README.md#how-to-edit-your-meetings-landing-page\"],[7],[0,\"\\n            Click here for settings documentation\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[1,[25,\"json-editor\",null,[[\"json\",\"onChange\"],[[20,[\"collection\",\"settings\"]],[25,\"action\",[[19,0,[]],\"updateCacheSettings\"],null]]]],false],[0,\"\\n\\n\"],[8],[0,\"\\n\\n\\n\"],[6,\"section\"],[7],[0,\"\\n\\n\"],[4,\"if\",[[20,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"\\n        \"],[6,\"div\"],[7],[0,\"\\n            \"],[6,\"button\"],[9,\"class\",\"btn btn-danger btn-inverse\"],[3,\"action\",[[19,0,[]],\"revert\"]],[7],[0,\"\\n                \"],[6,\"i\"],[9,\"class\",\"fa fa-times\"],[7],[8],[0,\"\\n                Revert\\n            \"],[8],[0,\"\\n            \"],[6,\"button\"],[9,\"class\",\"btn btn-success btn-progress\"],[3,\"action\",[[19,0,[]],\"saveChanges\"]],[7],[0,\"\\n                \"],[6,\"i\"],[9,\"class\",\"fa fa-pencil\"],[7],[8],[0,\"\\n                Save\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[8],[0,\"\\n\\n\\n\"],[4,\"if\",[[20,[\"showDeleteConfirmation\"]]],null,{\"statements\":[[0,\"    \"],[6,\"section\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"modal fade in\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"modal-dialog\"],[9,\"role\",\"document\"],[7],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n                    \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n                        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"aria-label\",\"Close\"],[3,\"action\",[[19,0,[]],[20,[\"toggleProperty\"]],\"showDeleteConfirmation\"]],[7],[0,\"\\n                            \"],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n                        \"],[6,\"h4\"],[9,\"class\",\"modal-title\"],[7],[0,\"Delete collection \\\"\"],[1,[20,[\"collection\",\"title\"]],false],[0,\"\\\"?\"],[8],[0,\"\\n                    \"],[8],[0,\"\\n                    \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n                        \"],[6,\"p\"],[7],[0,\"This will remove all groups and items inside collections. Original projects\\n                            are not deleted.\"],[8],[0,\"\\n                    \"],[8],[0,\"\\n                    \"],[6,\"div\"],[9,\"class\",\"modal-footer\"],[7],[0,\"\\n                        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-default\"],[3,\"action\",[[19,0,[]],[20,[\"toggleProperty\"]],\"showDeleteConfirmation\"]],[7],[0,\"Close\"],[8],[0,\"\\n                        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-danger\"],[3,\"action\",[[19,0,[]],\"deleteCollection\"]],[7],[0,\"Delete\"],[8],[0,\"\\n                    \"],[8],[0,\"\\n                \"],[8],[2,\" /.modal-content \"],[0,\"\\n            \"],[8],[2,\" /.modal-dialog \"],[0,\"\\n        \"],[8],[2,\" /.modal \"],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"modal-backdrop fade in\"],[7],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/collections/collection/edit.hbs" } });
});
define("collections/templates/collections/collection/group", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "UyL8ayql", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/collections/collection/group.hbs" } });
});
define("collections/templates/collections/collection/group/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "scATyL7l", "block": "{\"symbols\":[],\"statements\":[[1,[25,\"browse-list\",null,[[\"model\",\"groupView\"],[[20,[\"model\"]],true]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/collections/collection/group/index.hbs" } });
});
define("collections/templates/collections/collection/group/item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "n+hA98gq", "block": "{\"symbols\":[],\"statements\":[[1,[25,\"item-detail-page\",null,[[\"item\"],[[20,[\"model\"]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/collections/collection/group/item.hbs" } });
});
define("collections/templates/collections/collection/index-loading", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "FfpkENd0", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[1,[25,\"loading-spinner\",null,[[\"model\",\"fullPage\",\"style\"],[[20,[\"model\"]],true,\"fa-4x\"]]],false]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/collections/collection/index-loading.hbs" } });
});
define("collections/templates/collections/collection/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "tIltImfb", "block": "{\"symbols\":[\"view\",\"index\"],\"statements\":[[4,\"if\",[[20,[\"collection\",\"settings\",\"layers\"]]],null,{\"statements\":[[4,\"each\",[[20,[\"collection\",\"settings\",\"layers\"]]],null,{\"statements\":[[0,\"\\n            \"],[1,[25,\"component\",[[19,1,[\"component\"]]],[[\"model\",\"collection\",\"layout\",\"branding\",\"changeRoute\",\"editMode\",\"index\"],[[20,[\"collection\"]],[20,[\"collection\"]],[19,1,[\"settings\"]],[20,[\"collection\",\"settings\",\"branding\"]],[25,\"action\",[[19,0,[]],\"changeRoute\"],null],[20,[\"editMode\"]],[19,2,[]]]]],false],[0,\"\\n\\n\"]],\"parameters\":[1,2]},null]],\"parameters\":[]},{\"statements\":[[0,\"\\n    \"],[6,\"section\"],[9,\"class\",\"hero show\"],[7],[0,\"\\n        \"],[6,\"h2\"],[7],[1,[20,[\"collection\",\"title\"]],false],[8],[0,\"\\n        \"],[6,\"p\"],[9,\"class\",\"p-v-md\"],[7],[1,[20,[\"collection\",\"description\"]],false],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"           \"],[4,\"link-to\",[\"collections.collection.submissions\",[20,[\"collection\"]]],[[\"class\"],[\"btn btn-success btn-lg\"]],{\"statements\":[[0,\"Add to Collection \"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"        \"],[6,\"section\"],[7],[0,\"\\n            \"],[6,\"h4\"],[7],[0,\"Customize your landing page\"],[8],[0,\"\\n            \"],[6,\"p\"],[7],[0,\"You can add details to your landing page by changing settings to add layout layers. Visit Edit page to make changes.\"],[8],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/collections/collection/index.hbs" } });
});
define("collections/templates/collections/collection/item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "wSuiZll6", "block": "{\"symbols\":[\"key\",\"value\"],\"statements\":[[6,\"div\"],[9,\"class\",\"hero\"],[7],[0,\"\\n    \"],[6,\"h1\"],[7],[1,[20,[\"item\",\"title\"]],false],[8],[0,\"\\n\\n    \"],[6,\"h5\"],[9,\"class\",\"view-authors\"],[7],[0,\"\\n        \"],[1,[20,[\"item\",\"createdBy\",\"firstName\"]],false],[0,\" \"],[1,[20,[\"item\",\"createdBy\",\"lastName\"]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"Added on: \"],[1,[25,\"moment-format\",[[20,[\"model\",\"item\",\"datePublished\"]],\"MMMM DD, YYYY\"],null],false],[0,\" | Last\\n    edited: \"],[1,[25,\"moment-format\",[[20,[\"model\",\"item\",\"dateModified\"]],\"MMMM DD, YYYY\"],null],false],[0,\" \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"section\"],[9,\"style\",\"flex-direction: row;  flex-wrap: unset; \"],[7],[0,\"\\n    \"],[6,\"fieldset\"],[9,\"class\",\"item-view-horizontal\"],[9,\"style\",\"min-width: 600px;\"],[7],[0,\"\\n        \"],[1,[25,\"file-renderer\",null,[[\"download\",\"width\",\"allowfullscreen\"],[[20,[\"item\",\"fileLink\"]],\"100%\",true]]],false],[0,\"\\n\\n    \"],[8],[0,\"\\n    \"],[6,\"fieldset\"],[9,\"class\",\"item-view-horizontal\"],[7],[0,\"\\n\"],[4,\"if\",[[25,\"or\",[[20,[\"item\",\"location\"]],[25,\"and\",[[20,[\"item\",\"startTime\"]],[20,[\"item\",\"endTime\"]]],null]],null]],null,{\"statements\":[[0,\"            \"],[6,\"h4\"],[9,\"class\",\"p-v-md f-w-md\"],[7],[6,\"strong\"],[7],[0,\"Presentation Details\"],[8],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"item\",\"location\"]]],null,{\"statements\":[[0,\"                \"],[6,\"p\"],[7],[1,[20,[\"item\",\"location\"]],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[25,\"and\",[[20,[\"item\",\"startTime\"]],[20,[\"item\",\"endTime\"]]],null]],null,{\"statements\":[[0,\"                \"],[6,\"p\"],[7],[1,[20,[\"item\",\"startTime\"]],false],[0,\" - \"],[1,[20,[\"item\",\"endTime\"]],false],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"        \"],[6,\"h4\"],[9,\"class\",\"p-v-md f-w-md\"],[7],[6,\"strong\"],[7],[0,\"Description\"],[8],[8],[0,\"\\n        \"],[6,\"p\"],[7],[1,[20,[\"item\",\"description\"]],false],[8],[0,\"\\n\\n        \"],[6,\"h4\"],[9,\"class\",\"p-v-md f-w-md\"],[7],[6,\"strong\"],[7],[0,\"Submission Status\"],[8],[8],[0,\"\\n        \"],[6,\"p\"],[10,\"class\",[26,[\"coll-item-status \",[20,[\"item\",\"status\"]]]]],[7],[0,\" \"],[1,[20,[\"item\",\"status\"]],false],[0,\" \"],[8],[0,\"\\n        \"],[6,\"button\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"continueWorkflow\",\"approve\"],null],null],[7],[0,\"\\n            Approve\\n        \"],[8],[0,\"\\n\\n\"],[4,\"if\",[[20,[\"item\",\"tags\"]]],null,{\"statements\":[[0,\"        \"],[6,\"h4\"],[9,\"class\",\"p-v-md f-w-md\"],[7],[6,\"strong\"],[7],[0,\"Tags\"],[8],[8],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"coll-item-tag\"],[7],[1,[20,[\"item\",\"tags\"]],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[6,\"hr\"],[7],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"item\",\"metadata\"]]],null,{\"statements\":[[0,\"            \"],[6,\"h4\"],[9,\"class\",\"p-v-md f-w-md\"],[7],[0,\"Metadata\"],[8],[0,\"\\n            \"],[6,\"ul\"],[7],[0,\"\\n\"],[4,\"each\",[[25,\"-each-in\",[[20,[\"item\",\"parsedMetadata\"]]],null]],null,{\"statements\":[[0,\"                    \"],[6,\"li\"],[7],[6,\"strong\"],[7],[1,[19,1,[]],false],[8],[0,\" - \"],[1,[19,2,[]],false],[8],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"            \"],[8],[0,\"\\n            \"],[6,\"hr\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[6,\"a\"],[10,\"href\",[26,[\"https://osf.io/\",[20,[\"item\",\"sourceId\"]]]]],[9,\"class\",\"btn btn-default btn-block\"],[7],[0,\" View on OSF\"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/collections/collection/item.hbs" } });
});
define("collections/templates/collections/collection/search", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mfCryaTN", "block": "{\"symbols\":[\"item\"],\"statements\":[[6,\"div\"],[9,\"class\",\"coll-add-choice text-center\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n        \"],[6,\"h2\"],[7],[0,\" Search content \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"search-panel m-t-lg p-md\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"col-sm-6 col-sm-offset-3\"],[7],[0,\"\\n                    \"],[1,[25,\"input\",null,[[\"class\",\"value\",\"enter\"],[\"form-control\",[20,[\"searchText\"]],\"search\"]]],false],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"col-sm-2 text-left\"],[7],[0,\"\\n                    \"],[6,\"button\"],[9,\"class\",\"btn btn-success \"],[3,\"action\",[[19,0,[]],\"search\"]],[7],[0,\"Search\"],[8],[0,\"\\n                \"],[8],[0,\"\\n            \"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"p\"],[9,\"class\",\"text-muted\"],[7],[0,\" Search is for demo purpose only. Results will show all items. \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"search-results-panel\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n        \"],[6,\"h4\"],[9,\"class\",\"m-t-md\"],[7],[0,\" Results \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"search-results-wrapper m-t-md\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"results\"]]],null,{\"statements\":[[0,\"                \"],[6,\"div\"],[9,\"class\",\"search-result p-sm m-sm\"],[7],[0,\" \"],[1,[19,1,[\"title\"]],false],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/collections/collection/search.hbs" } });
});
define("collections/templates/collections/collection/submissions", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "uG13d4ZD", "block": "{\"symbols\":[\"case\"],\"statements\":[[6,\"div\"],[9,\"class\",\"hero\"],[7],[0,\"\\n    \"],[6,\"h1\"],[7],[1,[20,[\"collection\",\"title\"]],false],[0,\" Submissions\"],[8],[0,\"\\n    \"],[6,\"a\"],[9,\"class\",\"btn btn-success btn-lg\"],[3,\"action\",[[19,0,[]],\"newCase\",[20,[\"collection\"]]]],[7],[0,\"\\n        Start a new submission\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\\n\"],[6,\"div\"],[9,\"class\",\"text-center\"],[9,\"style\",\" margin-top: 15px; margin-bottom: 15px;\"],[7],[0,\"\\n    In progress submissions to the \"],[1,[20,[\"collection\",\"title\"]],false],[0,\". Any of the submissions may be continued by pressing the continue button.\\n\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"active-cases\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"table-heading\"],[9,\"style\",\"background-color: #444; color: #fff;\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"form-type\"],[7],[0,\"Form Type\"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"continue-button\"],[7],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n\"],[4,\"each\",[[20,[\"cases\"]]],null,{\"statements\":[[0,\"\\n        \"],[1,[25,\"case-list-item\",null,[[\"case\",\"collection\"],[[19,1,[]],[20,[\"collection\"]]]]],false],[0,\"\\n\\n\"]],\"parameters\":[1]},{\"statements\":[[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"empty-state\"],[7],[0,\"\\n            You have not started any submissions to \"],[1,[20,[\"collection\",\"title\"]],false],[0,\"\\n        \"],[8],[0,\"\\n\\n\"]],\"parameters\":[]}],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/collections/collection/submissions.hbs" } });
});
define("collections/templates/collections/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "WwgprDJp", "block": "{\"symbols\":[\"collection\"],\"statements\":[[4,\"if\",[[20,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"    \"],[6,\"section\"],[9,\"class\",\"coll-banner text-center\"],[7],[0,\"\\n        \"],[4,\"link-to\",[\"create\"],[[\"class\"],[\"btn btn-success btn-lg m-t-lg\"]],{\"statements\":[[0,\"Start a collection \"]],\"parameters\":[]},null],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"results\"],[7],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"search\"],[7],[0,\"\\n    \\n        \"],[1,[25,\"input\",null,[[\"class\",\"placeholder\",\"value\"],[\"searchbox\",\"Type to search...\",[20,[\"q\"]]]]],false],[0,\"\\n    \\n    \"],[8],[0,\"\\n\\n    \"],[6,\"nav\"],[9,\"class\",\"results-nav\"],[7],[0,\"\\n        \"],[6,\"h2\"],[7],[0,\"By kind\"],[8],[0,\"\\n        \"],[6,\"a\"],[3,\"action\",[[19,0,[]],\"addFilter\",\"kind\",\"meeting\"]],[7],[0,\"Meetings\"],[8],[0,\"\\n        \"],[6,\"a\"],[3,\"action\",[[19,0,[]],\"addFilter\",\"kind\",\"repositories\"]],[7],[0,\"Repositories\"],[8],[0,\"\\n        \"],[6,\"a\"],[3,\"action\",[[19,0,[]],\"addFilter\",\"kind\",\"preprints\"]],[7],[0,\"Preprints\"],[8],[0,\"\\n        \"],[6,\"a\"],[3,\"action\",[[19,0,[]],\"addFilter\",\"kind\",\"registrations\"]],[7],[0,\"Registrations\"],[8],[0,\"\\n        \"],[6,\"h2\"],[7],[0,\"By creator\"],[8],[0,\"\\n        \"],[1,[25,\"input\",null,[[\"placeholder\",\"value\"],[\"Creator\",[20,[\"creator\"]]]]],false],[0,\"\\n        \"],[6,\"h2\"],[7],[0,\"By date\"],[8],[0,\"\\n        \"],[6,\"h3\"],[7],[0,\"Date created\"],[8],[0,\"\\n        \"],[6,\"h3\"],[7],[0,\"Date updated\"],[8],[0,\"\\n\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"result-items\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"loading\"]]],null,{\"statements\":[[0,\"            \"],[6,\"br\"],[7],[8],[0,\"\\n            \"],[1,[25,\"loading-spinner\",null,[[\"fullPage\",\"style\"],[false,\"fa-4x\"]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \\n\"],[4,\"each\",[[20,[\"collections\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[9,\"class\",\"result-item\"],[7],[0,\"\\n\\n                \"],[6,\"h2\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"collections.collection.item\",[19,1,[\"collection\",\"id\"]],[19,1,[\"id\"]]],null,{\"statements\":[[0,\"                        \"],[6,\"span\"],[7],[0,\"\\n                            \"],[1,[19,1,[\"title\"]],false],[0,\" \\n                        \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                \"],[8],[0,\"\\n                \"],[6,\"div\"],[7],[6,\"b\"],[7],[0,\"Found in: \"],[1,[19,1,[\"collection\",\"title\"]],false],[8],[8],[0,\"\\n                \"],[6,\"br\"],[7],[8],[0,\"\\n \\n                \"],[6,\"div\"],[9,\"class\",\"description\"],[7],[1,[19,1,[\"description\"]],false],[8],[0,\"\\n\\n            \"],[8],[0,\"\\n\\n\"]],\"parameters\":[1]},{\"statements\":[[0,\"           \"],[6,\"h2\"],[9,\"class\",\"text-center\"],[7],[0,\" No results found...\"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"    \"],[8],[0,\"\\n\\n\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/collections/index.hbs" } });
});
define("collections/templates/collections/my-collection", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "VUUWqq3Y", "block": "{\"symbols\":[\"collection\"],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\n\"],[6,\"section\"],[9,\"class\",\"coll-banner text-center\"],[7],[0,\"\\n    \"],[6,\"h1\"],[9,\"class\",\"f-w-lg\"],[7],[0,\" My Collection \"],[8],[0,\"\\n    \"],[6,\"p\"],[9,\"class\",\"lead f-w-md\"],[7],[0,\"One centralized place for all your creations.\"],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"        \"],[4,\"link-to\",[\"create\"],[[\"class\"],[\"btn btn-success btn-lg m-t-lg\"]],{\"statements\":[[0,\"Add a new collection\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[8],[0,\"\\n\"],[6,\"div\"],[7],[0,\"\\n    \"],[6,\"h2\"],[9,\"class\",\"text-center\"],[7],[0,\"Your Items\"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"cards\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"collections\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[9,\"class\",\"card coll-single\"],[7],[0,\"\\n                \"],[6,\"div\"],[9,\"class\",\"card-content\"],[7],[0,\"\\n                    \"],[6,\"h3\"],[7],[0,\"\\n                       \\n\"],[4,\"link-to\",[\"collections.collection\",[19,1,[\"id\"]]],null,{\"statements\":[[0,\"                            \"],[6,\"span\"],[3,\"action\",[[19,0,[]],\"clearFilter\"]],[7],[1,[19,1,[\"title\"]],false],[8]],\"parameters\":[]},null],[0,\"\\n                    \"],[8],[0,\"\\n                    \"],[6,\"p\"],[7],[1,[25,\"truncate-text\",[[19,1,[\"description\"]]],[[\"limit\",\"omission\"],[250,\"...\"]]],false],[8],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"footer\"],[7],[0,\"\\n\"],[4,\"if\",[[19,1,[\"tags\"]]],null,{\"statements\":[[0,\"                        \"],[6,\"div\"],[9,\"class\",\"coll-tags\"],[7],[0,\"Tags: \"],[1,[25,\"truncate-text\",[[19,1,[\"tags\"]]],[[\"limit\",\"omission\"],[50,\"...\"]]],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                    \"],[6,\"h6\"],[9,\"class\",\"text-muted\"],[7],[0,\"\\n                        \"],[1,[19,1,[\"titleCaseCollectionType\"]],false],[0,\" | Created on \"],[1,[25,\"moment-format\",[[19,1,[\"dateCreated\"]],\"MMMM DD, YYYY\"],null],false],[0,\"\\n                    \"],[8],[0,\"\\n                \"],[8],[0,\"\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"text-center\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"showLoadMore\"]]],null,{\"statements\":[[4,\"if\",[[20,[\"loadingMore\"]]],null,{\"statements\":[[0,\"                \"],[6,\"i\"],[9,\"class\",\"fa fa-circle-o-notch fa-spin fa-3x fa-fw text-muted m-t-md\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                \"],[6,\"button\"],[9,\"class\",\"btn btn-default\"],[3,\"action\",[[19,0,[]],\"loadMore\"]],[7],[0,\" Load more\"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/collections/my-collection.hbs" } });
});
define("collections/templates/components/bread-crumbs", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "UvVNYJuP", "block": "{\"symbols\":[\"crumb\"],\"statements\":[[6,\"ul\"],[9,\"class\",\"breadcrumbs\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"breadCrumbs\"]]],null,{\"statements\":[[0,\"    \"],[6,\"li\"],[10,\"class\",[25,\"if\",[[19,1,[\"isCurrent\"]],\"current\"],null],null],[7],[0,\"\\n\"],[4,\"if\",[[19,1,[\"linkable\"]]],null,{\"statements\":[[0,\"        \"],[4,\"if\",[[19,1,[\"model\"]]],null,{\"statements\":[[0,\"\\n\"],[4,\"link-to\",[[19,1,[\"path\"]],[19,1,[\"model\"]]],null,{\"statements\":[[0,\"            \"],[1,[19,1,[\"label\"]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"link-to\",[[19,1,[\"path\"]]],null,{\"statements\":[[0,\"            \"],[1,[19,1,[\"label\"]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[1,[19,1,[\"label\"]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/components/bread-crumbs.hbs" } });
});
define("collections/templates/components/bs-accordion-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "CNBNvtXB", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[9,\"role\",\"tab\"],[10,\"class\",[26,[\"panel-heading \",[25,\"if\",[[20,[\"collapsed\"]],\"collapsed\"],null]]]],[3,\"action\",[[19,0,[]],\"toggleActive\"]],[7],[0,\"\\n    \"],[6,\"h4\"],[9,\"class\",\"panel-title\"],[7],[0,\"\\n        \"],[6,\"a\"],[9,\"href\",\"#\"],[7],[0,\"\\n            \"],[1,[18,\"title\"],false],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[4,\"bs-collapse\",null,[[\"collapsed\",\"class\"],[[20,[\"collapsed\"]],\"panel-collapse\"]],{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"panel-body\"],[7],[0,\"\\n        \"],[11,1],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/components/bs-accordion-item.hbs" } });
});
define("collections/templates/components/bs-alert", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "oxYV7zCF", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"unless\",[[20,[\"hidden\"]]],null,{\"statements\":[[4,\"if\",[[20,[\"dismissible\"]]],null,{\"statements\":[[0,\"    \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"aria-label\",\"Close\"],[3,\"action\",[[19,0,[]],\"dismiss\"]],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n\"]],\"parameters\":[]},null],[11,1],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/components/bs-alert.hbs" } });
});
define("collections/templates/components/bs-button", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "cYt1aL4P", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[20,[\"icon\"]]],null,{\"statements\":[[6,\"i\"],[10,\"class\",[26,[[18,\"icon\"]]]],[7],[8],[0,\" \"]],\"parameters\":[]},null],[1,[18,\"text\"],false],[11,1]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/components/bs-button.hbs" } });
});
define("collections/templates/components/bs-form-element", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "VNhm0tOA", "block": "{\"symbols\":[],\"statements\":[[12,[20,[\"formElementTemplate\"]],[]]],\"hasEval\":true}", "meta": { "moduleName": "collections/templates/components/bs-form-element.hbs" } });
});
define("collections/templates/components/bs-form-group", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "1GXS8QFG", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1],[0,\"\\n\"],[4,\"if\",[[20,[\"hasFeedback\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"class\",[26,[\"form-control-feedback \",[18,\"iconName\"]]]],[9,\"aria-hidden\",\"true\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/components/bs-form-group.hbs" } });
});
define("collections/templates/components/bs-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "g+KGnchZ", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/components/bs-form.hbs" } });
});
define("collections/templates/components/bs-modal-dialog", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "xbvXJ/b1", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[10,\"class\",[26,[\"modal-dialog \",[18,\"sizeClass\"]]]],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"header\"]]],null,{\"statements\":[[0,\"            \"],[1,[25,\"bs-modal-header\",null,[[\"title\",\"closeButton\"],[[20,[\"title\"]],[20,[\"closeButton\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[20,[\"body\"]]],null,{\"statements\":[[4,\"bs-modal-body\",null,null,{\"statements\":[[0,\"                \"],[11,1],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[11,1],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[4,\"if\",[[20,[\"footer\"]]],null,{\"statements\":[[0,\"            \"],[1,[18,\"bs-modal-footer\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/components/bs-modal-dialog.hbs" } });
});
define("collections/templates/components/bs-modal-footer", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qaj6DNgV", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[22,1]],null,{\"statements\":[[0,\"    \"],[11,1,[[19,0,[]]]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[20,[\"hasSubmitButton\"]]],null,{\"statements\":[[0,\"        \"],[4,\"bs-button\",null,[[\"type\",\"action\"],[\"default\",\"close\"]],{\"statements\":[[1,[18,\"closeTitle\"],false]],\"parameters\":[]},null],[0,\"\\n        \"],[4,\"bs-button\",null,[[\"type\",\"buttonType\",\"disabled\"],[\"primary\",\"submit\",[20,[\"submitDisabled\"]]]],{\"statements\":[[1,[18,\"submitTitle\"],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[4,\"bs-button\",null,[[\"type\",\"action\"],[\"primary\",\"close\"]],{\"statements\":[[1,[18,\"closeTitle\"],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/components/bs-modal-footer.hbs" } });
});
define("collections/templates/components/bs-modal-header", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "cNzOGesS", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[20,[\"closeButton\"]]],null,{\"statements\":[[0,\"    \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"aria-label\",\"Close\"],[3,\"action\",[[19,0,[]],\"close\"]],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,1]],null,{\"statements\":[[0,\"    \"],[11,1,[[19,0,[]]]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[6,\"h4\"],[9,\"class\",\"modal-title\"],[7],[1,[18,\"title\"],false],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/components/bs-modal-header.hbs" } });
});
define("collections/templates/components/bs-modal", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4wPvujbC", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"ember-wormhole\",null,[[\"to\",\"renderInPlace\"],[\"ember-bootstrap-modal-container\",[20,[\"renderInPlace\"]]]],{\"statements\":[[0,\"\\n\"],[4,\"bs-modal-dialog\",null,[[\"close\",\"fade\",\"in\",\"id\",\"title\",\"closeButton\",\"keyboard\",\"header\",\"body\",\"footer\",\"size\",\"backdropClose\"],[[25,\"action\",[[19,0,[]],\"close\"],null],[20,[\"fade\"]],[20,[\"in\"]],[20,[\"modalId\"]],[20,[\"title\"]],[20,[\"closeButton\"]],[20,[\"keyboard\"]],[20,[\"header\"]],[20,[\"body\"]],[20,[\"footer\"]],[20,[\"size\"]],[20,[\"backdropClose\"]]]],{\"statements\":[[0,\"  \"],[11,1,[[19,0,[]]]],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[20,[\"showBackdrop\"]]],null,{\"statements\":[[0,\"  \"],[6,\"div\"],[10,\"class\",[26,[\"modal-backdrop \",[25,\"if\",[[20,[\"fade\"]],\"fade\"],null],\" \",[25,\"if\",[[20,[\"in\"]],\"in\"],null]]]],[10,\"id\",[26,[[18,\"backdropId\"]]]],[7],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/components/bs-modal.hbs" } });
});
define("collections/templates/components/bs-progress-bar", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "DLnEz9ca", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[4,\"if\",[[20,[\"showLabel\"]]],null,{\"statements\":[[4,\"if\",[[22,1]],null,{\"statements\":[[0,\"        \"],[11,1,[[20,[\"percentRounded\"]]]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[1,[18,\"percentRounded\"],false],[0,\"%\\n\"]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,1]],null,{\"statements\":[[0,\"        \"],[6,\"span\"],[9,\"class\",\"sr-only\"],[7],[11,1,[[20,[\"percentRounded\"]]]],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[6,\"span\"],[9,\"class\",\"sr-only\"],[7],[1,[18,\"percentRounded\"],false],[0,\"%\"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/components/bs-progress-bar.hbs" } });
});
define("collections/templates/components/bs-progress", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "cqz5/9Dx", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/components/bs-progress.hbs" } });
});
define("collections/templates/components/bs-select", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "lUvQ6YT/", "block": "{\"symbols\":[\"item\"],\"statements\":[[4,\"if\",[[20,[\"prompt\"]]],null,{\"statements\":[[0,\"    \"],[6,\"option\"],[9,\"disabled\",\"\"],[10,\"selected\",[25,\"is-not\",[[20,[\"value\"]]],null],null],[7],[0,\"\\n        \"],[1,[18,\"prompt\"],false],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"each\",[[20,[\"content\"]]],[[\"key\"],[\"@identity\"]],{\"statements\":[[0,\"    \"],[6,\"option\"],[10,\"value\",[26,[[25,\"read-path\",[[19,1,[]],[20,[\"optionValuePath\"]]],null]]]],[10,\"selected\",[25,\"is-equal\",[[19,1,[]],[20,[\"value\"]]],null],null],[7],[0,\"\\n        \"],[1,[25,\"read-path\",[[19,1,[]],[20,[\"optionLabelPath\"]]],null],false],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/components/bs-select.hbs" } });
});
define("collections/templates/components/cp-panel-body", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "a6J0A3Mg", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[20,[\"shouldAnimate\"]]],null,{\"statements\":[[0,\"\\n\"],[4,\"liquid-if\",[[20,[\"isOpen\"]]],[[\"use\"],[\"crossFade\"]],{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"cp-Panel-body-inner\"],[7],[0,\"\\n      \"],[11,1],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"\\n\"],[4,\"if\",[[20,[\"isOpen\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[9,\"class\",\"cp-Panel-body-inner\"],[7],[0,\"\\n      \"],[11,1],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/components/cp-panel-body.hbs" } });
});
define("collections/templates/components/form-element/errors", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "GEX+vgCK", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[20,[\"showErrors\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[9,\"class\",\"help-block\"],[7],[1,[20,[\"errors\",\"firstObject\"]],false],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/components/form-element/errors.hbs" } });
});
define("collections/templates/components/form-element/feedback-icon", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4JxXZoRb", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[20,[\"hasFeedback\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"class\",[26,[\"form-control-feedback \",[18,\"iconName\"]]]],[9,\"aria-hidden\",\"true\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/components/form-element/feedback-icon.hbs" } });
});
define("collections/templates/components/form-element/horizontal/checkbox", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "LfMpYRKP", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",[26,[[18,\"horizontalInputGridClass\"],\" \",[18,\"horizontalInputOffsetGridClass\"]]]],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"checkbox\"],[7],[0,\"\\n        \"],[6,\"label\"],[7],[0,\"\\n            \"],[1,[25,\"input\",null,[[\"name\",\"type\",\"checked\",\"disabled\",\"required\"],[[20,[\"name\"]],\"checkbox\",[20,[\"value\"]],[20,[\"disabled\"]],[20,[\"required\"]]]]],false],[0,\" \"],[1,[18,\"label\"],false],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[12,\"components/form-element/errors\",[]],[0,\"\\n\"],[8]],\"hasEval\":true}", "meta": { "moduleName": "collections/templates/components/form-element/horizontal/checkbox.hbs" } });
});
define("collections/templates/components/form-element/horizontal/default", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "PcAWSDcs", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[20,[\"hasLabel\"]]],null,{\"statements\":[[0,\"    \"],[6,\"label\"],[10,\"class\",[26,[\"control-label \",[18,\"horizontalLabelGridClass\"]]]],[10,\"for\",[26,[[18,\"formElementId\"]]]],[7],[1,[18,\"label\"],false],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",[26,[[18,\"horizontalInputGridClass\"]]]],[7],[0,\"\\n\"],[4,\"if\",[[22,1]],null,{\"statements\":[[0,\"            \"],[11,1,[[20,[\"value\"]],[20,[\"formElementId\"]]]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[1,[25,\"bs-input\",null,[[\"id\",\"name\",\"type\",\"value\",\"placeholder\",\"autofocus\",\"disabled\",\"required\"],[[20,[\"formElementId\"]],[20,[\"name\"]],[20,[\"controlType\"]],[20,[\"value\"]],[20,[\"placeholder\"]],[20,[\"autofocus\"]],[20,[\"disabled\"]],[20,[\"required\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[12,\"components/form-element/feedback-icon\",[]],[0,\"\\n        \"],[12,\"components/form-element/errors\",[]],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",[26,[[18,\"horizontalInputGridClass\"],\" \",[18,\"horizontalInputOffsetGridClass\"]]]],[7],[0,\"\\n\"],[4,\"if\",[[22,1]],null,{\"statements\":[[0,\"            \"],[11,1,[[20,[\"value\"]]]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[1,[25,\"bs-input\",null,[[\"name\",\"type\",\"value\",\"placeholder\",\"autofocus\",\"disabled\",\"required\"],[[20,[\"name\"]],[20,[\"controlType\"]],[20,[\"value\"]],[20,[\"placeholder\"]],[20,[\"autofocus\"]],[20,[\"disabled\"]],[20,[\"required\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[12,\"components/form-element/feedback-icon\",[]],[0,\"\\n        \"],[12,\"components/form-element/errors\",[]],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":true}", "meta": { "moduleName": "collections/templates/components/form-element/horizontal/default.hbs" } });
});
define("collections/templates/components/form-element/horizontal/select", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "NmJdVIbF", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[20,[\"hasLabel\"]]],null,{\"statements\":[[0,\"    \"],[6,\"label\"],[10,\"class\",[26,[\"control-label \",[18,\"horizontalLabelGridClass\"]]]],[10,\"for\",[26,[[18,\"formElementId\"]]]],[7],[1,[18,\"label\"],false],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",[26,[[18,\"horizontalInputGridClass\"]]]],[7],[0,\"\\n        \"],[1,[25,\"bs-select\",null,[[\"id\",\"name\",\"content\",\"optionValuePath\",\"optionLabelPath\",\"value\",\"disabled\",\"required\"],[[20,[\"formElementId\"]],[20,[\"name\"]],[20,[\"choices\"]],[20,[\"choiceValueProperty\"]],[20,[\"choiceLabelProperty\"]],[20,[\"value\"]],[20,[\"disabled\"]],[20,[\"required\"]]]]],false],[0,\"\\n        \"],[12,\"components/form-element/feedback-icon\",[]],[0,\"\\n        \"],[12,\"components/form-element/errors\",[]],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",[26,[[18,\"horizontalInputGridClass\"],\" \",[18,\"horizontalInputOffsetGridClass\"]]]],[7],[0,\"\\n        \"],[1,[25,\"bs-select\",null,[[\"name\",\"content\",\"optionValuePath\",\"optionLabelPath\",\"value\"],[[20,[\"name\"]],[20,[\"choices\"]],[20,[\"choiceValueProperty\"]],[20,[\"choiceLabelProperty\"]],[20,[\"value\"]]]]],false],[0,\"\\n        \"],[12,\"components/form-element/feedback-icon\",[]],[0,\"\\n        \"],[12,\"components/form-element/errors\",[]],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":true}", "meta": { "moduleName": "collections/templates/components/form-element/horizontal/select.hbs" } });
});
define("collections/templates/components/form-element/horizontal/textarea", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "eHXh1I3f", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[20,[\"hasLabel\"]]],null,{\"statements\":[[0,\"    \"],[6,\"label\"],[10,\"class\",[26,[\"control-label \",[18,\"horizontalLabelGridClass\"]]]],[10,\"for\",[26,[[18,\"formElementId\"]]]],[7],[1,[18,\"label\"],false],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",[26,[[18,\"horizontalInputGridClass\"]]]],[7],[0,\"\\n        \"],[1,[25,\"bs-textarea\",null,[[\"id\",\"name\",\"value\",\"placeholder\",\"autofocus\",\"cols\",\"rows\",\"disabled\",\"required\"],[[20,[\"formElementId\"]],[20,[\"name\"]],[20,[\"value\"]],[20,[\"placeholder\"]],[20,[\"autofocus\"]],[20,[\"cols\"]],[20,[\"rows\"]],[20,[\"disabled\"]],[20,[\"required\"]]]]],false],[0,\"\\n        \"],[12,\"components/form-element/feedback-icon\",[]],[0,\"\\n        \"],[12,\"components/form-element/errors\",[]],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",[26,[[18,\"horizontalInputGridClass\"],\" \",[18,\"horizontalInputOffsetGridClass\"]]]],[7],[0,\"\\n        \"],[1,[25,\"bs-textarea\",null,[[\"name\",\"value\",\"placeholder\",\"autofocus\",\"cols\",\"rows\",\"disabled\",\"required\"],[[20,[\"name\"]],[20,[\"value\"]],[20,[\"placeholder\"]],[20,[\"autofocus\"]],[20,[\"cols\"]],[20,[\"rows\"]],[20,[\"disabled\"]],[20,[\"required\"]]]]],false],[0,\"\\n        \"],[12,\"components/form-element/feedback-icon\",[]],[0,\"\\n        \"],[12,\"components/form-element/errors\",[]],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":true}", "meta": { "moduleName": "collections/templates/components/form-element/horizontal/textarea.hbs" } });
});
define("collections/templates/components/form-element/inline/checkbox", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "CUi+EAPI", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"checkbox\"],[7],[0,\"\\n    \"],[6,\"label\"],[7],[0,\"\\n        \"],[1,[25,\"input\",null,[[\"name\",\"type\",\"checked\",\"disabled\",\"required\"],[[20,[\"name\"]],\"checkbox\",[20,[\"value\"]],[20,[\"disabled\"]],[20,[\"required\"]]]]],false],[0,\" \"],[1,[18,\"label\"],false],[0,\"\\n    \"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/components/form-element/inline/checkbox.hbs" } });
});
define("collections/templates/components/form-element/inline/default", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "KCM4+75c", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[20,[\"hasLabel\"]]],null,{\"statements\":[[0,\"    \"],[6,\"label\"],[9,\"class\",\"control-label\"],[10,\"for\",[26,[[18,\"formElementId\"]]]],[7],[1,[18,\"label\"],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,1]],null,{\"statements\":[[0,\"    \"],[11,1,[[20,[\"value\"]],[20,[\"formElementId\"]]]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[1,[25,\"bs-input\",null,[[\"id\",\"name\",\"type\",\"value\",\"placeholder\",\"autofocus\",\"disabled\",\"required\"],[[20,[\"formElementId\"]],[20,[\"name\"]],[20,[\"controlType\"]],[20,[\"value\"]],[20,[\"placeholder\"]],[20,[\"autofocus\"]],[20,[\"disabled\"]],[20,[\"required\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]}],[12,\"components/form-element/feedback-icon\",[]],[0,\"\\n\"]],\"hasEval\":true}", "meta": { "moduleName": "collections/templates/components/form-element/inline/default.hbs" } });
});
define("collections/templates/components/form-element/inline/select", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "kAoSSog1", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[20,[\"hasLabel\"]]],null,{\"statements\":[[0,\"    \"],[6,\"label\"],[9,\"class\",\"control-label\"],[10,\"for\",[26,[[18,\"formElementId\"]]]],[7],[1,[18,\"label\"],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[1,[25,\"bs-select\",null,[[\"id\",\"name\",\"content\",\"optionValuePath\",\"optionLabelPath\",\"value\",\"disabled\",\"required\"],[[20,[\"formElementId\"]],[20,[\"name\"]],[20,[\"choices\"]],[20,[\"choiceValueProperty\"]],[20,[\"choiceLabelProperty\"]],[20,[\"value\"]],[20,[\"disabled\"]],[20,[\"required\"]]]]],false],[0,\"\\n\"],[12,\"components/form-element/feedback-icon\",[]],[0,\"\\n\"]],\"hasEval\":true}", "meta": { "moduleName": "collections/templates/components/form-element/inline/select.hbs" } });
});
define("collections/templates/components/form-element/inline/textarea", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "710XGTDF", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[20,[\"hasLabel\"]]],null,{\"statements\":[[0,\"    \"],[6,\"label\"],[9,\"class\",\"control-label\"],[10,\"for\",[26,[[18,\"formElementId\"]]]],[7],[1,[18,\"label\"],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[1,[25,\"bs-textarea\",null,[[\"id\",\"name\",\"value\",\"placeholder\",\"autofocus\",\"cols\",\"rows\",\"disabled\",\"required\"],[[20,[\"formElementId\"]],[20,[\"name\"]],[20,[\"value\"]],[20,[\"placeholder\"]],[20,[\"autofocus\"]],[20,[\"cols\"]],[20,[\"rows\"]],[20,[\"disabled\"]],[20,[\"required\"]]]]],false],[0,\"\\n\"],[12,\"components/form-element/feedback-icon\",[]],[0,\"\\n\"],[12,\"components/form-element/errors\",[]]],\"hasEval\":true}", "meta": { "moduleName": "collections/templates/components/form-element/inline/textarea.hbs" } });
});
define("collections/templates/components/form-element/vertical/checkbox", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "X3GjSobg", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"checkbox\"],[7],[0,\"\\n    \"],[6,\"label\"],[7],[0,\"\\n        \"],[1,[25,\"input\",null,[[\"name\",\"type\",\"checked\",\"disabled\",\"required\"],[[20,[\"name\"]],\"checkbox\",[20,[\"value\"]],[20,[\"disabled\"]],[20,[\"required\"]]]]],false],[0,\" \"],[1,[18,\"label\"],false],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[12,\"components/form-element/errors\",[]]],\"hasEval\":true}", "meta": { "moduleName": "collections/templates/components/form-element/vertical/checkbox.hbs" } });
});
define("collections/templates/components/form-element/vertical/default", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mUl1xHih", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[20,[\"hasLabel\"]]],null,{\"statements\":[[0,\"    \"],[6,\"label\"],[9,\"class\",\"control-label\"],[10,\"for\",[26,[[18,\"formElementId\"]]]],[7],[1,[18,\"label\"],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[22,1]],null,{\"statements\":[[0,\"    \"],[11,1,[[20,[\"value\"]],[20,[\"formElementId\"]]]],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[1,[25,\"bs-input\",null,[[\"id\",\"name\",\"type\",\"value\",\"placeholder\",\"autofocus\",\"disabled\",\"required\"],[[20,[\"formElementId\"]],[20,[\"name\"]],[20,[\"controlType\"]],[20,[\"value\"]],[20,[\"placeholder\"]],[20,[\"autofocus\"]],[20,[\"disabled\"]],[20,[\"required\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]}],[12,\"components/form-element/feedback-icon\",[]],[0,\"\\n\"],[12,\"components/form-element/errors\",[]]],\"hasEval\":true}", "meta": { "moduleName": "collections/templates/components/form-element/vertical/default.hbs" } });
});
define("collections/templates/components/form-element/vertical/select", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "NFqybqB+", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[20,[\"hasLabel\"]]],null,{\"statements\":[[0,\"    \"],[6,\"label\"],[9,\"class\",\"control-label\"],[10,\"for\",[26,[[18,\"formElementId\"]]]],[7],[1,[18,\"label\"],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[1,[25,\"bs-select\",null,[[\"id\",\"name\",\"content\",\"optionValuePath\",\"optionLabelPath\",\"value\",\"disabled\",\"required\"],[[20,[\"formElementId\"]],[20,[\"name\"]],[20,[\"choices\"]],[20,[\"choiceValueProperty\"]],[20,[\"choiceLabelProperty\"]],[20,[\"value\"]],[20,[\"disabled\"]],[20,[\"required\"]]]]],false],[0,\"\\n\"],[12,\"components/form-element/feedback-icon\",[]],[0,\"\\n\"],[12,\"components/form-element/errors\",[]]],\"hasEval\":true}", "meta": { "moduleName": "collections/templates/components/form-element/vertical/select.hbs" } });
});
define("collections/templates/components/form-element/vertical/textarea", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "CKTOwERo", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[20,[\"hasLabel\"]]],null,{\"statements\":[[0,\"    \"],[6,\"label\"],[9,\"class\",\"control-label\"],[10,\"for\",[26,[[18,\"formElementId\"]]]],[7],[1,[18,\"label\"],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[1,[25,\"bs-textarea\",null,[[\"id\",\"value\",\"name\",\"placeholder\",\"autofocus\",\"disabled\",\"required\",\"cols\",\"rows\"],[[20,[\"formElementId\"]],[20,[\"value\"]],[20,[\"name\"]],[20,[\"placeholder\"]],[20,[\"autofocus\"]],[20,[\"disabled\"]],[20,[\"required\"]],[20,[\"cols\"]],[20,[\"rows\"]]]]],false],[0,\"\\n\"],[12,\"components/form-element/feedback-icon\",[]],[0,\"\\n\"],[12,\"components/form-element/errors\",[]]],\"hasEval\":true}", "meta": { "moduleName": "collections/templates/components/form-element/vertical/textarea.hbs" } });
});
define("collections/templates/components/page-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "dl1uG0nl", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[20,[\"isDots\"]]],null,{\"statements\":[[0,\"  \"],[6,\"a\"],[7],[1,[18,\"page\"],false],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[6,\"a\"],[10,\"href\",[26,[[18,\"url\"]]]],[3,\"action\",[[19,0,[]],\"select\"]],[7],[1,[18,\"page\"],false],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/components/page-item.hbs" } });
});
define("collections/templates/components/pagination-pager", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "jOYyngPf", "block": "{\"symbols\":[\"page\",\"&default\"],\"statements\":[[6,\"ul\"],[9,\"class\",\"pagination\"],[7],[0,\"\\n\"],[4,\"unless\",[[20,[\"pager\"]]],null,{\"statements\":[[0,\"    \"],[6,\"li\"],[10,\"class\",[26,[\"previous \",[25,\"if\",[[20,[\"isFirstDisabled\"]],\"disabled\"],null]]]],[7],[0,\"\\n      \"],[6,\"a\"],[10,\"href\",[26,[[18,\"previousUrl\"]]]],[3,\"action\",[[19,0,[]],\"previous\"]],[7],[1,[18,\"paginationPrevious\"],true],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n\"],[4,\"each\",[[20,[\"pages\"]]],[[\"key\"],[\"@index\"]],{\"statements\":[[0,\"      \"],[1,[25,\"page-item\",null,[[\"disabled\",\"page\",\"selected\",\"seperator\",\"urlTemplate\",\"firstPage\",\"firstPageUrlTemplate\",\"pageSet\"],[[20,[\"disabled\"]],[19,1,[]],[19,0,[\"current\"]],[20,[\"seperator\"]],[20,[\"urlTemplate\"]],[20,[\"firstPage\"]],[20,[\"firstPageUrlTemplate\"]],\"pageChanged\"]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n    \"],[6,\"li\"],[10,\"class\",[26,[\"next \",[25,\"if\",[[20,[\"isLastDisabled\"]],\"disabled\"],null]]]],[7],[0,\"\\n      \"],[6,\"a\"],[10,\"href\",[26,[[18,\"nextUrl\"]]]],[3,\"action\",[[19,0,[]],\"next\"]],[7],[1,[18,\"paginationNext\"],true],[8],[0,\"\\n    \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[20,[\"pagerFirst\"]]],null,{\"statements\":[[0,\"      \"],[6,\"li\"],[10,\"class\",[26,[[25,\"if\",[[20,[\"isFirstDisabled\"]],\"disabled\"],null]]]],[7],[0,\"\\n        \"],[6,\"a\"],[10,\"href\",[26,[[18,\"firstUrl\"]]]],[3,\"action\",[[19,0,[]],\"first\"]],[7],[1,[18,\"pagerFirst\"],true],[8],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[6,\"li\"],[10,\"class\",[26,[[25,\"if\",[[20,[\"pagerSpread\"]],\"previous\"],null],\" \",[25,\"if\",[[20,[\"isFirstDisabled\"]],\"disabled\"],null]]]],[7],[0,\"\\n      \"],[6,\"a\"],[10,\"href\",[26,[[18,\"previousUrl\"]]]],[3,\"action\",[[19,0,[]],\"previous\"]],[7],[1,[18,\"pagerPrevious\"],true],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n\"],[4,\"if\",[[22,2]],null,{\"statements\":[[0,\"      \"],[6,\"li\"],[9,\"class\",\"pager-inner\"],[7],[11,2],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[6,\"li\"],[10,\"class\",[26,[[25,\"if\",[[20,[\"pagerSpread\"]],\"next\"],null],\" \",[25,\"if\",[[20,[\"isLastDisabled\"]],\"disabled\"],null]]]],[7],[0,\"\\n      \"],[6,\"a\"],[10,\"href\",[26,[[18,\"nextUrl\"]]]],[3,\"action\",[[19,0,[]],\"next\"]],[7],[1,[18,\"pagerNext\"],true],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n\"],[4,\"if\",[[20,[\"pagerLast\"]]],null,{\"statements\":[[0,\"      \"],[6,\"li\"],[10,\"class\",[26,[\"last \",[25,\"if\",[[20,[\"isLastDisabled\"]],\"disabled\"],null]]]],[7],[0,\"\\n        \"],[6,\"a\"],[10,\"href\",[26,[[18,\"lastUrl\"]]]],[3,\"action\",[[19,0,[]],\"last\"]],[7],[1,[18,\"pagerLast\"],true],[8],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/components/pagination-pager.hbs" } });
});
define("collections/templates/create", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "S+/8Khdi", "block": "{\"symbols\":[\"collectionWorkflow\",\"group\",\"group\",\"workflow\",\"type\"],\"statements\":[[6,\"h1\"],[9,\"class\",\"submission\"],[7],[0,\"Create a collection\"],[8],[0,\"\\n\"],[6,\"section\"],[7],[0,\"\\n\\n    \"],[6,\"fieldset\"],[7],[0,\"\\n        \"],[6,\"h2\"],[7],[0,\"Add title \"],[8],[0,\"\\n        \"],[1,[25,\"input\",null,[[\"class\",\"value\",\"placeholder\"],[\"form-control\",[20,[\"title\"]],\"Enter collection name\"]]],false],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"fieldset\"],[7],[0,\"\\n        \"],[6,\"h2\"],[7],[0,\"Select collection type\"],[8],[0,\"\\n\"],[4,\"each\",[[20,[\"typeList\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[9,\"class\",\"radio\"],[7],[0,\"\\n            \"],[1,[25,\"element-radio-button\",null,[[\"id\",\"value\",\"name\",\"checked\"],[[19,5,[\"value\"]],[19,5,[\"value\"]],\"radio-collection-type\",[20,[\"collectionType\"]]]]],false],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",[26,[[19,5,[\"value\"]]]]],[7],[1,[19,5,[\"label\"]],false],[6,\"p\"],[7],[1,[19,5,[\"description\"]],false],[8],[8],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[5]},null],[0,\"    \"],[8],[0,\"\\n\\n    \"],[6,\"fieldset\"],[7],[0,\"\\n        \"],[6,\"h2\"],[7],[0,\"Add description \"],[6,\"span\"],[9,\"class\",\"text-muted\"],[7],[0,\"Optional \"],[8],[8],[0,\"\\n        \"],[1,[25,\"textarea\",null,[[\"class\",\"value\",\"rows\"],[\"form-control\",[20,[\"description\"]],\"6\"]]],false],[0,\"\\n    \"],[8],[0,\"\\n\\n\"],[4,\"if\",[[25,\"eq\",[[20,[\"collectionType\"]],\"meeting\"],null]],null,{\"statements\":[[0,\"\\n    \"],[6,\"fieldset\"],[7],[0,\"\\n        \"],[6,\"h2\"],[7],[0,\"Logistics\"],[8],[0,\"\\n        \"],[6,\"h3\"],[7],[0,\" Add Location \"],[8],[0,\"\\n        \"],[1,[25,\"input\",null,[[\"class\",\"value\",\"placeholder\"],[\"form-control\",[20,[\"location\"]],\"Enter meeting location\"]]],false],[0,\"\\n        \"],[6,\"h3\"],[7],[0,\" Add Address \"],[8],[0,\"\\n        \"],[1,[25,\"input\",null,[[\"class\",\"value\",\"placeholder\"],[\"form-control\",[20,[\"address\"]],\"Enter meeting address\"]]],false],[0,\"\\n        \"],[6,\"h3\"],[7],[0,\" Add Meeting Dates \"],[8],[0,\"\\n        Start Date:\\n        \"],[1,[25,\"bs-datetimepicker\",null,[[\"date\"],[[20,[\"startDate\"]]]]],false],[0,\"\\n        End Date:\\n        \"],[1,[25,\"bs-datetimepicker\",null,[[\"date\"],[[20,[\"endDate\"]]]]],false],[0,\"\\n    \"],[8],[0,\"\\n\\n\"]],\"parameters\":[]},null],[6,\"section\"],[7],[0,\"\\n\\n    \"],[6,\"fieldset\"],[7],[0,\"\\n        \"],[6,\"h2\"],[7],[0,\"Collection Workflows\"],[8],[0,\"\\n\\n\"],[4,\"each\",[[20,[\"collectionWorkflows\"]]],null,{\"statements\":[[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"edit-workflow\"],[7],[0,\"\\n                \"],[6,\"h3\"],[9,\"class\",\"workflow\"],[7],[0,\"\\n                    \"],[1,[19,1,[\"role\"]],false],[0,\" Workflow\\n                \"],[8],[0,\"\\n                \"],[6,\"p\"],[7],[0,\"\\n                    \"],[6,\"label\"],[7],[0,\"Workflow Role\"],[8],[0,\"\\n                    \"],[1,[25,\"input\",null,[[\"value\",\"class\"],[[19,1,[\"role\"]],\"form-control\"]]],false],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"p\"],[7],[0,\"\\n                    \"],[6,\"label\"],[7],[0,\"Workflow Type:\"],[8],[0,\"\\n                    \"],[6,\"select\"],[9,\"class\",\"form-control\"],[10,\"onchange\",[25,\"action\",[[19,0,[]],\"setWorkflowTypeForWorkflowCollection\",[19,1,[]]],null],null],[7],[0,\"\\n                        \"],[6,\"option\"],[9,\"disabled\",\"\"],[9,\"selected\",\"\"],[7],[0,\"\\n                            -- Select a workflow type --\\n                        \"],[8],[0,\"\\n\"],[4,\"each\",[[20,[\"workflows\"]]],null,{\"statements\":[[0,\"                            \"],[6,\"option\"],[10,\"value\",[19,4,[\"id\"]],null],[10,\"selected\",[25,\"eq\",[[19,4,[\"id\"]],[19,1,[\"workflow\",\"id\"]]],null],null],[7],[0,\"\\n                                \"],[1,[19,4,[\"title\"]],false],[0,\"\\n                            \"],[8],[0,\"\\n\"]],\"parameters\":[4]},null],[0,\"                    \"],[8],[0,\"\\n                \"],[8],[0,\"\\n                \"],[6,\"p\"],[7],[0,\"\\n                    \"],[6,\"label\"],[7],[0,\"Authorized Groups:\"],[8],[0,\"\\n                \"],[6,\"ul\"],[7],[0,\"\\n\"],[4,\"each\",[[19,1,[\"authorizedGroups\"]]],null,{\"statements\":[[0,\"                        \"],[6,\"li\"],[7],[6,\"label\"],[7],[0,\"Group Name: \"],[8],[1,[19,3,[\"name\"]],false],[0,\"\\n                        \"],[6,\"a\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"removeCollectionWorkflowGroup\",[19,1,[]],[19,3,[]]],null],null],[7],[0,\"\\n                            \"],[6,\"i\"],[9,\"class\",\"fa fa-minus-square-o pull-right\"],[9,\"style\",\"color: red; font-size: 1.5em; cursor: pointer;\"],[9,\"title\",\"De-authorize group\"],[7],[8],[0,\"\\n                        \"],[8],[0,\"\\n                        \"],[8],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"                \"],[8],[0,\"\\n\\n                    \"],[6,\"div\"],[9,\"class\",\"input-group\"],[7],[0,\"\\n                        \"],[6,\"select\"],[9,\"class\",\"form-control\"],[10,\"onchange\",[25,\"action\",[[19,0,[]],\"setGroupForCollectionWorkflow\",[19,1,[]]],null],null],[7],[0,\"\\n                            \"],[6,\"option\"],[9,\"disabled\",\"\"],[9,\"selected\",\"\"],[7],[0,\" -- Select a group to add as authorized for the workflow -- \"],[8],[0,\"\\n\"],[4,\"each\",[[20,[\"groups\"]]],null,{\"statements\":[[0,\"                                \"],[6,\"option\"],[10,\"value\",[19,2,[\"id\"]],null],[10,\"selected\",[25,\"eq\",[[19,2,[\"id\"]],[19,1,[\"group\",\"id\"]]],null],null],[7],[0,\"\\n                                    \"],[1,[19,2,[\"name\"]],false],[0,\"\\n                                \"],[8],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"                        \"],[8],[0,\"\\n                        \"],[6,\"span\"],[9,\"class\",\"input-group-btn\"],[7],[0,\"\\n                            \"],[6,\"a\"],[9,\"class\",\"btn btn-default\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"addGroupToCollectionWorkflow\",[19,1,[]]],null],null],[7],[0,\"\\n                                Authorize Group\\n                            \"],[8],[0,\"\\n                        \"],[8],[0,\"\\n                    \"],[8],[0,\"\\n                \"],[8],[0,\"\\n\\n         \\n            \"],[6,\"button\"],[9,\"class\",\"btn btn-inverse btn-danger\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"removeWorkflow\",[19,1,[]]],null],null],[7],[0,\"\\n                Remove Workflow\\n            \"],[8],[0,\"\\n\\n            \"],[8],[0,\"\\n\\n\"]],\"parameters\":[1]},null],[0,\"        \"],[6,\"button\"],[9,\"class\",\"button-add-workflow btn btn-primary pull-right\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"addWorkflow\"],null],null],[7],[0,\"\\n            Add a workflow\\n        \"],[8],[0,\"\\n\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n    \"],[6,\"fieldset\"],[7],[0,\"\\n        \"],[4,\"link-to\",[\"explore\"],[[\"class\"],[\"btn btn-default\"]],{\"statements\":[[0,\" Cancel \"]],\"parameters\":[]},null],[0,\"\\n        \"],[6,\"button\"],[10,\"class\",[26,[\"btn btn-primary \",[25,\"unless\",[[20,[\"title\"]],\"disabled\"],null]]]],[3,\"action\",[[19,0,[]],\"addCollection\"]],[7],[0,\"\\n            Continue\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n\\n\\n\\n\"],[8],[0,\"\\n\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/create.hbs" } });
});
define("collections/templates/explore", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "KmrwVF/Q", "block": "{\"symbols\":[\"collection\"],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\n\"],[1,[18,\"nav-bar\"],false],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"explore-hero\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"cards collection-types\"],[7],[0,\"\\n\\n\"],[4,\"link-to\",[\"collections.index\",[25,\"query-params\",null,[[\"kind\"],[\"meeting\"]]]],[[\"class\"],[\"card\"]],{\"statements\":[[0,\"            \"],[6,\"span\"],[9,\"class\",\"image\"],[9,\"style\",\"background-image: url('/img/meetings-a90e47b96d72df0d4b252ecb62739271.jpg');\"],[7],[8],[0,\"\\n            \"],[6,\"h3\"],[7],[0,\"Meetings\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"link-to\",[\"collections\",[25,\"query-params\",null,[[\"kind\"],[\"repository\"]]]],[[\"class\"],[\"card\"]],{\"statements\":[[0,\"            \"],[6,\"span\"],[9,\"class\",\"image\"],[9,\"style\",\"background-image: url('/img/repositories-2386ba30e071621810b0145cc1b4a147.jpg');\"],[7],[8],[0,\"\\n            \"],[6,\"h3\"],[7],[0,\"Repositories\"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\\n\\n\"],[6,\"div\"],[9,\"class\",\"explore-collection-list\"],[7],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"cards\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"collections\"]]],null,{\"statements\":[[0,\"            \"],[1,[25,\"collection-detail\",null,[[\"collection\"],[[19,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"text-center\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"showLoadMore\"]]],null,{\"statements\":[[4,\"if\",[[20,[\"loadingMore\"]]],null,{\"statements\":[[0,\"                \"],[6,\"i\"],[9,\"class\",\"fa fa-circle-o-notch fa-spin fa-3x fa-fw text-muted m-t-md\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                \"],[6,\"button\"],[9,\"class\",\"btn btn-default\"],[3,\"action\",[[19,0,[]],\"loadMore\"]],[7],[0,\" Load more\"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/explore.hbs" } });
});
define("collections/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "PLrAFjdC", "block": "{\"symbols\":[],\"statements\":[[0,\"  \\n    \"],[6,\"div\"],[9,\"class\",\"watermarked\"],[7],[0,\"\\n            \\n\\n    \"],[2,\" Main jumbotron for a primary marketing message or call to action \"],[0,\"\\n    \"],[6,\"div\"],[9,\"id\",\"home-hero\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"container text-center\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"visible-xs-block visible-sm-block visible-md-block network-bg\"],[7],[8],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"hero-brand\"],[7],[0,\"Open Science Framework\"],[8],[0,\"\\n        \"],[6,\"h3\"],[9,\"class\",\"hero-tagline\"],[7],[0,\"A scholarly commons to connect the entire research cycle\"],[8],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"id\",\"canvas-container\"],[7],[0,\"\\n          \"],[6,\"canvas\"],[9,\"id\",\"demo-canvas\"],[7],[8],[0,\"\\n        \"],[8],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"id\",\"logo\"],[9,\"class\",\"off\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"circle\"],[9,\"id\",\"circle-1\"],[7],[6,\"span\"],[7],[8],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"circle\"],[9,\"id\",\"circle-2\"],[7],[6,\"span\"],[7],[8],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"circle\"],[9,\"id\",\"circle-3\"],[7],[6,\"span\"],[7],[8],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"circle\"],[9,\"id\",\"circle-4\"],[7],[6,\"span\"],[7],[8],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"circle\"],[9,\"id\",\"circle-5\"],[7],[6,\"span\"],[7],[8],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"circle\"],[9,\"id\",\"circle-6\"],[7],[6,\"span\"],[7],[8],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"circle\"],[9,\"id\",\"circle-7\"],[7],[6,\"span\"],[7],[8],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"circle\"],[9,\"id\",\"circle-8\"],[7],[6,\"span\"],[7],[8],[8],[0,\"\\n        \"],[8],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"id\",\"hero-signup\"],[9,\"class\",\"container\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-sm-6 hidden-xs\"],[7],[0,\"\\n              \"],[6,\"a\"],[9,\"class\",\"youtube\"],[9,\"href\",\"//www.youtube.com/watch?v=2TV21gOzfhw\"],[9,\"aria-label\",\"OSF YouTube Video\"],[7],[6,\"i\"],[9,\"class\",\"\"],[7],[8],[8],[0,\"\\n              \"],[2,\" <img src=\\\"/static/img/front-page/screenshot.png\\\" class=\\\"img-responsive\\\" id=\\\"screenshot\\\" alt=\\\"Screenshot of OSF\\\" /> \"],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-sm-6 sign-up-div\"],[7],[0,\"\\n              \"],[6,\"h2\"],[7],[0,\"Free and open source. Start now.\"],[8],[0,\"\\n\\n             \"],[6,\"div\"],[9,\"id\",\"signUp\"],[9,\"class\",\"anchor\"],[7],[8],[0,\"\\n                \"],[6,\"div\"],[9,\"id\",\"signUpScope\"],[7],[0,\"\\n                    \"],[6,\"form\"],[9,\"data-bind\",\"submit: submit\"],[7],[0,\"\\n                        \"],[6,\"div\"],[9,\"class\",\"form-group\"],[9,\"data-bind\",\"css: {'has-error': fullName() && !fullName.isValid(), 'has-success': fullName() && fullName.isValid()}\"],[7],[0,\"\\n                              \"],[6,\"label\"],[9,\"class\",\"placeholder-replace\"],[9,\"style\",\"display:none\"],[7],[0,\"Full name\"],[8],[0,\"\\n                              \"],[6,\"input\"],[9,\"class\",\"form-control\"],[9,\"placeholder\",\"Full Name\"],[9,\"data-bind\",\" value: fullName, disable: submitted(), event: { blur: trim.bind($data, fullName)}\"],[7],[8],[0,\"\\n                              \"],[6,\"p\"],[9,\"class\",\"help-block osf-box-lt\"],[9,\"data-bind\",\"validationMessage: fullName\"],[9,\"style\",\"display: none;\"],[7],[8],[0,\"\\n                          \"],[8],[0,\"\\n                          \"],[6,\"div\"],[9,\"class\",\"form-group\"],[9,\"data-bind\",\"css: {'has-error': email1() && !email1.isValid(), 'has-success': email1() && email1.isValid()}\"],[7],[0,\"\\n                              \"],[6,\"label\"],[9,\"class\",\"placeholder-replace\"],[9,\"style\",\"display:none\"],[7],[0,\"Contact email\"],[8],[0,\"\\n                              \"],[6,\"input\"],[9,\"class\",\"form-control\"],[9,\"placeholder\",\"Contact Email\"],[9,\"data-bind\",\" value: email1, disable: submitted(), event: { blur: trim.bind($data, email1)}\"],[7],[8],[0,\"\\n                              \"],[6,\"p\"],[9,\"class\",\"help-block osf-box-lt\"],[9,\"data-bind\",\"validationMessage: email1\"],[9,\"style\",\"display: none;\"],[7],[8],[0,\"\\n                          \"],[8],[0,\"\\n                          \"],[6,\"div\"],[9,\"class\",\"form-group\"],[9,\"data-bind\",\"css: {'has-error': email2() && !email2.isValid(),'has-success': email2() && email2.isValid()}\"],[7],[0,\"\\n                              \"],[6,\"label\"],[9,\"class\",\"placeholder-replace\"],[9,\"style\",\"display:none\"],[7],[0,\"Confirm email\"],[8],[0,\"\\n                              \"],[6,\"input\"],[9,\"class\",\"form-control\"],[9,\"placeholder\",\"Confirm Email\"],[9,\"data-bind\",\"value: email2, disable: submitted(), event: { blur: trim.bind($data, email2)}\"],[7],[8],[0,\"\\n                              \"],[6,\"p\"],[9,\"class\",\"help-block osf-box-lt\"],[9,\"data-bind\",\"validationMessage: email2\"],[9,\"style\",\"display: none;\"],[7],[8],[0,\"\\n                          \"],[8],[0,\"\\n                          \"],[6,\"div\"],[9,\"class\",\"form-group\"],[9,\"data-bind\",\"css: {'has-error': password() && !password.isValid(), 'has-success': password() && password.isValid()}\"],[7],[0,\"\\n                              \"],[6,\"label\"],[9,\"class\",\"placeholder-replace\"],[9,\"style\",\"display:none\"],[7],[0,\"Password\"],[8],[0,\"\\n                              \"],[6,\"input\"],[9,\"type\",\"password\"],[9,\"class\",\"form-control\"],[9,\"placeholder\",\"Password (Must be 8 to 255 characters)\"],[9,\"data-bind\",\", textInput: typedPassword, value: password, disable: submitted(), event: {blur: trim.bind($data, password)}\"],[7],[8],[0,\"\\n\\n                              \"],[6,\"div\"],[9,\"class\",\"row\"],[9,\"data-bind\",\"visible: typedPassword().length > 0\"],[7],[0,\"\\n        \\n                                  \"],[6,\"div\"],[9,\"class\",\"col-xs-4 f-w-xl text-left pv-darkbg\"],[7],[0,\"\\n                                      \"],[2,\" ko if: passwordFeedback() \"],[0,\"\\n                                      \"],[6,\"p\"],[9,\"id\",\"front-password-info\"],[9,\"data-bind\",\"text: passwordComplexityInfo().text, attr: passwordComplexityInfo().text_attr\"],[7],[8],[0,\"\\n                                      \"],[2,\" /ko \"],[0,\"\\n                                  \"],[8],[0,\"\\n                              \"],[8],[0,\"\\n\\n                              \"],[6,\"div\"],[9,\"class\",\"pv-darkbg\"],[7],[0,\"\\n                                  \"],[2,\" ko if: passwordFeedback() \"],[0,\"\\n                                  \"],[6,\"p\"],[9,\"class\",\"help-block osf-box-lt p-xs\"],[9,\"data-bind\",\"validationMessage: password\"],[9,\"style\",\"display: none;\"],[7],[8],[0,\"\\n                                  \"],[6,\"p\"],[9,\"class\",\"osf-box-lt\"],[9,\"data-bind\",\"css : { 'p-xs': passwordFeedback().warning }, visible: typedPassword().length > 0, text: passwordFeedback().warning\"],[7],[8],[0,\"\\n                                  \"],[2,\" /ko \"],[0,\"\\n                              \"],[8],[0,\"\\n\\n\\n                          \"],[8],[0,\"\\n\\n                          \"],[2,\" Flashed Messages \"],[0,\"\\n                          \"],[6,\"div\"],[9,\"class\",\"help-block osf-box-lt\"],[7],[0,\"\\n                              \"],[6,\"p\"],[9,\"data-bind\",\"html: message, attr: {class: messageClass}\"],[9,\"class\",\"\"],[7],[8],[0,\"\\n                          \"],[8],[0,\"\\n                          \"],[2,\" ko ifnot: submitted \"],[0,\"\\n                          \"],[6,\"div\"],[7],[0,\"\\n                              \"],[6,\"small\"],[7],[0,\" By clicking \\\"Sign up free\\\", you agree to our \"],[6,\"a\"],[9,\"style\",\"color:#5BC0DE\"],[9,\"href\",\"https://github.com/CenterForOpenScience/centerforopenscience.org/blob/master/TERMS_OF_USE.md\"],[7],[0,\"Terms\"],[8],[0,\" and that you have read our \"],[6,\"a\"],[9,\"style\",\"color:#5BC0DE\"],[9,\"href\",\"https://github.com/CenterForOpenScience/centerforopenscience.org/blob/master/PRIVACY_POLICY.md\"],[7],[0,\"Privacy Policy\"],[8],[0,\", including our information on \"],[6,\"a\"],[9,\"style\",\"color:#5BC0DE\"],[9,\"href\",\"https://github.com/CenterForOpenScience/centerforopenscience.org/blob/master/PRIVACY_POLICY.md#f-cookies\"],[7],[0,\"Cookie Use\"],[8],[0,\".\"],[8],[0,\"\\n                          \"],[8],[0,\"\\n                          \"],[2,\" /ko \"],[0,\"\\n                              \"],[6,\"div\"],[9,\"data-bind\",\"fadeVisible: (fullName.isValid() || email1.isValid() || email2.isValid() || password.isValid()) && !submitted()\"],[9,\"class\",\"col-md-12 m-t-sm\"],[9,\"style\",\"z-index: 9;\"],[7],[0,\"\\n                                  \"],[6,\"div\"],[9,\"class\",\"g-recaptcha\"],[9,\"style\",\"display: inline-block; margin: 0 auto;\"],[9,\"data-sitekey\",\"6Ld2hikTAAAAAAhExltkBtTplSAJCSwAjpvMnOhc\"],[7],[8],[0,\"\\n                              \"],[8],[0,\"\\n                          \"],[6,\"div\"],[7],[0,\"\\n                              \"],[6,\"button\"],[9,\"type\",\"submit\"],[9,\"class\",\"btn btn-warning m-t-sm\"],[9,\"data-bind\",\"visible: !submitted()\"],[9,\"id\",\"signupSubmit\"],[7],[0,\"Sign up free\"],[8],[0,\"\\n                          \"],[8],[0,\"\\n                  \"],[8],[0,\"\\n\\n                \"],[8],[2,\" end #signUpScope \"],[0,\"\\n\\n\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"container grey-pullout space-top space-bottom\"],[7],[0,\"\\n\\n      \"],[6,\"div\"],[9,\"class\",\"row space-bottom\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col-xs-12 text-center\"],[7],[0,\"\\n            \"],[6,\"h2\"],[7],[6,\"strong\"],[7],[0,\"Simplified Scholarly Collaboration\"],[8],[8],[0,\"\\n          \"],[6,\"h3\"],[7],[0,\"Cloud-based management for your projects.\"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n\\n      \"],[6,\"div\"],[9,\"class\",\"row feature-1\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col-md-6\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-xs-1\"],[7],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-xs-9 col-xs-offset-1\"],[7],[0,\"\\n              \"],[6,\"h3\"],[7],[0,\"Structured projects\"],[8],[0,\"\\n              \"],[6,\"p\"],[7],[0,\"Keep all your files, data, and protocols in \"],[6,\"strong\"],[7],[0,\"one centralized location.\"],[8],[0,\" No more trawling emails to find files or scrambling to recover from lost data. \"],[6,\"span\"],[9,\"class\",\"label label-primary\"],[7],[0,\"Secure Cloud\"],[8],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-xs-1\"],[7],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-xs-9 col-xs-offset-1\"],[7],[0,\"\\n              \"],[6,\"h3\"],[7],[0,\"Control access\"],[8],[0,\"\\n              \"],[6,\"p\"],[7],[6,\"strong\"],[7],[0,\"You control which parts of your project are public or private\"],[8],[0,\" making it easy to collaborate with the worldwide community or just your team.  \"],[6,\"span\"],[9,\"class\",\"label label-primary\"],[7],[0,\"Project-level Permissions\"],[8],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-xs-1\"],[7],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-xs-9 col-xs-offset-1\"],[7],[0,\"\\n              \"],[6,\"h3\"],[7],[0,\"Respect for your workflow\"],[8],[0,\"\\n              \"],[6,\"p\"],[7],[6,\"strong\"],[7],[0,\"Connect your favorite third party services\"],[8],[0,\" directly to the Open Science Framework.  \"],[6,\"span\"],[9,\"class\",\"label label-primary\"],[7],[0,\"3rd Party Integrations\"],[8],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col-md-6\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"student-wrap\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"student-image\"],[7],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"quote\"],[7],[0,\"\\n                \"],[6,\"span\"],[9,\"class\",\"main\"],[7],[0,\"“The OSF is a great way to collaborate and stay organized while still using your favorite external services.\\\"\"],[8],[0,\"\\n                \"],[6,\"span\"],[9,\"class\",\"attrib\"],[7],[6,\"strong\"],[7],[0,\"Kara Woo\"],[8],[0,\" - Information Manager, Aquatic Ecology, Washington State\"],[8],[0,\"\\n              \"],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"feature-2 space-top space-bottom\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-xs-12 text-center headline\"],[7],[0,\"\\n            \"],[6,\"h2\"],[7],[0,\"OSF integrations make your \"],[6,\"strong\"],[7],[0,\"workflow more efficient\"],[8],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"row integrations\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-sm-3 col-xs-6\"],[7],[0,\"\\n            \"],[6,\"img\"],[9,\"src\",\"/static/img/front-page/dropbox.png\"],[9,\"class\",\"img-responsive\"],[9,\"alt\",\"Dropbox logo\"],[7],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-sm-3 col-xs-6\"],[7],[0,\"\\n            \"],[6,\"img\"],[9,\"src\",\"/static/img/front-page/github.png\"],[9,\"class\",\"img-responsive\"],[9,\"alt\",\"Github logo\"],[7],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-sm-3 col-xs-6\"],[7],[0,\"\\n            \"],[6,\"img\"],[9,\"src\",\"/static/img/front-page/amazon.png\"],[9,\"class\",\"img-responsive\"],[9,\"alt\",\"Amazon S3 logo\"],[7],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-sm-3 col-xs-6\"],[7],[0,\"\\n            \"],[6,\"img\"],[9,\"src\",\"/static/img/front-page/box.png\"],[9,\"class\",\"img-responsive\"],[9,\"alt\",\"Box logo\"],[7],[8],[0,\"\\n          \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"row integrations\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-sm-3 col-xs-6\"],[7],[0,\"\\n           \"],[6,\"img\"],[9,\"src\",\"/static/img/front-page/google.png\"],[9,\"class\",\"img-responsive\"],[9,\"alt\",\"Google Drive logo\"],[7],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-sm-3 col-xs-6\"],[7],[0,\"\\n            \"],[6,\"img\"],[9,\"src\",\"/static/img/front-page/figshare.png\"],[9,\"class\",\"img-responsive\"],[9,\"alt\",\"Figshare logo\"],[7],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-sm-3 col-xs-6\"],[7],[0,\"\\n            \"],[6,\"img\"],[9,\"src\",\"/static/img/front-page/dataverse.png\"],[9,\"class\",\"img-responsive\"],[9,\"alt\",\"Dataverse logo\"],[7],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-sm-3 col-xs-6\"],[7],[0,\"\\n            \"],[6,\"img\"],[9,\"src\",\"/static/img/front-page/mendeley.png\"],[9,\"class\",\"img-responsive\"],[9,\"alt\",\"Mendeley logo\"],[7],[8],[0,\"\\n          \"],[8],[0,\"\\n      \"],[8],[0,\"\\n\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"feature-3\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"row space-top\"],[7],[0,\"\\n\\n          \"],[6,\"div\"],[9,\"class\",\"col-md-12 text-center space-bottom\"],[7],[0,\"\\n            \"],[6,\"h2\"],[7],[6,\"strong\"],[7],[0,\"Everything\"],[8],[0,\" your research needs to be a success\"],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"row space-bottom\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-sm-6 text-right\"],[7],[0,\"\\n            \"],[6,\"h3\"],[7],[0,\"Manage your project\"],[8],[0,\"\\n            \"],[6,\"p\"],[7],[0,\"View all of your projects from \"],[6,\"strong\"],[7],[0,\"one dashboard.\"],[8],[8],[0,\"\\n\\n            \"],[6,\"h3\"],[7],[0,\"Quickly share files\"],[8],[0,\"\\n            \"],[6,\"p\"],[7],[6,\"strong\"],[7],[0,\"Share key project information\"],[8],[0,\" and allow others to use and cite it.\"],[8],[0,\"\\n\\n            \"],[6,\"h3\"],[7],[0,\"See project changes\"],[8],[0,\"\\n            \"],[6,\"p\"],[7],[0,\"See the latest project changes, who is contributing and \"],[6,\"strong\"],[7],[0,\"historical file versions.\"],[8],[8],[0,\"\\n\\n            \"],[6,\"h3\"],[7],[0,\"View project analytics\"],[8],[0,\"\\n            \"],[6,\"p\"],[7],[0,\"Access \"],[6,\"strong\"],[7],[0,\"project data\"],[8],[0,\" ranging from visits over time to top referring websites.\"],[8],[0,\"\\n\\n          \"],[8],[0,\"\\n\\n          \"],[6,\"div\"],[9,\"class\",\"col-sm-6 text-left\"],[7],[0,\"\\n            \"],[6,\"h3\"],[7],[0,\"Archive your data\"],[8],[0,\"\\n            \"],[6,\"p\"],[7],[0,\"Computer or collaborator explode? With the OSF \"],[6,\"strong\"],[7],[0,\"you will never lose your project data.\"],[8],[8],[0,\"\\n\\n            \"],[6,\"h3\"],[7],[0,\"Control access and collaboration\"],[8],[0,\"\\n            \"],[6,\"p\"],[7],[0,\" Add others to your projects to collaborate, or provide private access to view.\"],[8],[0,\"\\n\\n            \"],[6,\"h3\"],[7],[0,\"Supercharge your workflow\"],[8],[0,\"\\n            \"],[6,\"p\"],[7],[0,\"The OSF helps individuals, teams and labs make their \"],[6,\"strong\"],[7],[0,\"research processes more efficient.\"],[8],[8],[0,\"\\n\\n            \"],[6,\"h3\"],[7],[0,\"Registration\"],[8],[0,\"\\n            \"],[6,\"p\"],[7],[6,\"strong\"],[7],[0,\"Preserve the state of a project at important parts of its lifecycle\"],[8],[0,\" such as the onset of data collection.\"],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\\n      \"],[6,\"div\"],[9,\"class\",\"feature-4\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"row space-top space-bottom text-center\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-md-4 col-md-offset-1\"],[7],[0,\"\\n              \"],[6,\"h2\"],[7],[6,\"strong\"],[7],[0,\"Contribute\"],[8],[0,\" to global scientific efforts\"],[8],[0,\"\\n              \"],[6,\"p\"],[7],[0,\"Labs and teams across the globe use the Open Science Framework to open their projects up to the scientific community. You can browse the newest and most popular public projects \"],[6,\"a\"],[9,\"href\",\"/explore/activity/\"],[7],[0,\"right here\"],[8],[0,\". \"],[6,\"span\"],[9,\"class\",\"label label-warning\"],[7],[0,\"Get involved\"],[8],[8],[0,\"\\n            \"],[8],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"col-md-4 col-md-offset-1\"],[7],[0,\"\\n              \"],[6,\"h2\"],[7],[0,\"We are a \"],[6,\"strong\"],[7],[0,\"mission-driven non-profit\"],[8],[8],[0,\"\\n              \"],[6,\"p\"],[7],[0,\"The OSF is a free, open source service of the \"],[6,\"a\"],[9,\"href\",\"https://cos.io/\"],[7],[0,\"Center for Open Science\"],[8],[0,\". We’re aligning scientific practices with scientific values by improving openness, integrity and reproducibility of research. \"],[6,\"span\"],[9,\"class\",\"label label-success\"],[7],[0,\"Non-Profit\"],[8],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n\\n      \"],[6,\"div\"],[9,\"class\",\"space-top space-bottom feature-5\"],[7],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-md-12 text-center\"],[7],[0,\"\\n            \"],[6,\"h2\"],[7],[6,\"strong\"],[7],[0,\"Teachers, researchers, and global teams rely\"],[8],[0,\" on the Open Science Framework\"],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-xs-4 col-md-3\"],[7],[0,\"\\n            \"],[6,\"img\"],[9,\"src\",\"/static/img/front-page/user2.jpg\"],[9,\"class\",\"img-circle img-responsive\"],[9,\"alt\",\"Richard Ball\"],[7],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-xs-8\"],[7],[0,\"\\n            \"],[6,\"h3\"],[7],[0,\"Making research reproducible & verifiable\"],[8],[0,\"\\n            \"],[6,\"p\"],[7],[0,\"The OSF helps our students understand and apply sound data management principles to their work. And since we have easy access to all of the files the students are working with, it greatly enhances our ability to offer them constructive guidance.\"],[6,\"br\"],[7],[8],[6,\"small\"],[7],[6,\"em\"],[7],[0,\"Richard Ball, Professor of Economics, Haverford College\"],[8],[8],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"row hidden-xs hidden-sm\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-md-7 col-md-offset-2\"],[7],[0,\"\\n            \"],[6,\"h3\"],[7],[0,\"Version control makes life easier\"],[8],[0,\"\\n            \"],[6,\"p\"],[7],[0,\"The OSF makes version control effortless. My PI, my lab mates, and I have access to previous versions of a file at any timeand the most current version is always readily available.\"],[6,\"br\"],[7],[8],[6,\"small\"],[7],[6,\"em\"],[7],[0,\"Erica Baranski, PhD Student, Social and Personality Psychology Funder Lab, UC Riverside\"],[8],[8],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-md-3\"],[7],[0,\"\\n            \"],[6,\"img\"],[9,\"src\",\"/static/img/front-page/user3.jpg\"],[9,\"class\",\"img-circle img-responsive\"],[9,\"alt\",\"Erica Baranski\"],[7],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\\n        \"],[6,\"div\"],[9,\"class\",\"row hidden-xs hidden-sm\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-md-3\"],[7],[0,\"\\n            \"],[6,\"img\"],[9,\"src\",\"/static/img/front-page/user4.jpg\"],[9,\"class\",\"img-circle img-responsive\"],[9,\"alt\",\"Anne Allison\"],[7],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-md-7\"],[7],[0,\"\\n            \"],[6,\"h3\"],[7],[0,\"A centralized hub of information\"],[8],[0,\"\\n            \"],[6,\"p\"],[7],[0,\"The OSF creates a centralized hub of information where I can oversee a diversity of research projects across multiple classes. The centralization, organization and anywhere-access save me the time and energy necessary for managing these projects.\"],[6,\"br\"],[7],[8],[6,\"small\"],[7],[6,\"em\"],[7],[0,\"Anne Allison, Associate Professor of Biology at Piedmont Virginia Community College\"],[8],[8],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\\n\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"space-top space-bottom feature-6\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-md-8\"],[7],[0,\"\\n            \"],[6,\"h2\"],[7],[6,\"strong\"],[7],[0,\"Free and open source.\"],[8],[8],[0,\"\\n            \"],[6,\"h4\"],[7],[0,\"The OSF is a public good built to support your research.\"],[8],[0,\"\\n            \"],[6,\"a\"],[9,\"href\",\"#\"],[9,\"class\",\"btn btn-info btn-lg\"],[7],[0,\"Get started\"],[8],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"col-md-4 hidden-xs hidden-sm\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"id\",\"logo\"],[7],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"circle\"],[9,\"id\",\"circle-1\"],[7],[6,\"span\"],[7],[8],[8],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"circle\"],[9,\"id\",\"circle-2\"],[7],[6,\"span\"],[7],[8],[8],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"circle\"],[9,\"id\",\"circle-3\"],[7],[6,\"span\"],[7],[8],[8],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"circle\"],[9,\"id\",\"circle-4\"],[7],[6,\"span\"],[7],[8],[8],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"circle\"],[9,\"id\",\"circle-5\"],[7],[6,\"span\"],[7],[8],[8],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"circle\"],[9,\"id\",\"circle-6\"],[7],[6,\"span\"],[7],[8],[8],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"circle\"],[9,\"id\",\"circle-7\"],[7],[6,\"span\"],[7],[8],[8],[0,\"\\n              \"],[6,\"div\"],[9,\"class\",\"circle\"],[9,\"id\",\"circle-8\"],[7],[6,\"span\"],[7],[8],[8],[0,\"\\n            \"],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n\\n    \"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/index.hbs" } });
});
define("collections/templates/meetings", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "vrWZOd8T", "block": "{\"symbols\":[\"item\"],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"coll-banner text-center\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n        \"],[6,\"h1\"],[9,\"class\",\"f-w-lg\"],[7],[0,\" OSF for Meetings \"],[8],[0,\"\\n        \"],[6,\"p\"],[9,\"class\",\"lead f-w-md\"],[7],[0,\"A free poster and presentation sharing service for academic meetings and conferences\"],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"            \"],[4,\"link-to\",[\"create_meeting\"],[[\"class\"],[\"btn btn-success btn-lg m-t-lg\"]],{\"statements\":[[0,\"Start a meeting\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"coll-toolbar row\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col-xs-6\"],[7],[6,\"h2\"],[7],[0,\" All meetings\"],[8],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col-xs-6\"],[7],[0,\"\\n            \"],[6,\"div\"],[9,\"class\",\"pull-right\"],[7],[1,[25,\"input\",null,[[\"class\",\"value\",\"key-up\",\"placeholder\"],[\"form-control\",[20,[\"filterText\"]],\"filter\",\"Filter\"]]],false],[0,\"  \"],[1,[20,[\"model\",\"length\"]],false],[0,\" shown \"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[2,\" <input type=text placeholder=\\\"Filter collections\\\" onkeyup={{action 'filter'}}> \"],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"coll-group\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"model\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[9,\"class\",\"coll-single\"],[7],[0,\"\\n                \"],[4,\"link-to\",[\"collections.collection\",[19,1,[\"id\"]]],[[\"class\"],[\"btn btn-info pull-right\"]],{\"statements\":[[6,\"span\"],[3,\"action\",[[19,0,[]],\"clearFilter\"]],[7],[0,\"View\"],[8]],\"parameters\":[]},null],[0,\"\\n                \"],[6,\"h3\"],[7],[4,\"link-to\",[\"collections.collection\",[19,1,[\"id\"]]],null,{\"statements\":[[6,\"span\"],[3,\"action\",[[19,0,[]],\"clearFilter\"]],[7],[1,[19,1,[\"title\"]],false],[8]],\"parameters\":[]},null],[8],[0,\"\\n                \"],[6,\"p\"],[7],[1,[19,1,[\"description\"]],false],[8],[0,\"\\n\"],[4,\"if\",[[19,1,[\"tags\"]]],null,{\"statements\":[[0,\"                    \"],[6,\"div\"],[7],[0,\"Tags: \"],[1,[19,1,[\"tags\"]],false],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                \"],[6,\"div\"],[9,\"class\",\"text-muted\"],[7],[0,\"Created on \"],[1,[25,\"moment-format\",[[19,1,[\"dateCreated\"]],\"MMMM DD, YYYY\"],null],false],[0,\" \"],[8],[0,\"\\n            \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"text-center\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"showLoadMore\"]]],null,{\"statements\":[[4,\"if\",[[20,[\"loadingMore\"]]],null,{\"statements\":[[0,\"                    \"],[6,\"i\"],[9,\"class\",\"fa fa-circle-o-notch fa-spin fa-3x fa-fw text-muted m-t-md\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                    \"],[6,\"button\"],[9,\"class\",\"btn btn-default\"],[3,\"action\",[[19,0,[]],\"loadMore\"]],[7],[0,\" Load more \"],[8],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/meetings.hbs" } });
});
define("collections/templates/not-found", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "CwDbR90W", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"text-center m-t-lg\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"p-xl\"],[7],[0,\"\\n            \"],[6,\"div\"],[7],[6,\"i\"],[9,\"class\",\"fa fa-exclamation-triangle fa-5x\"],[7],[8],[8],[0,\"\\n            \"],[6,\"h1\"],[7],[0,\" Not Found \"],[8],[0,\"\\n            \"],[6,\"p\"],[9,\"class\",\"lead\"],[7],[0,\" Sorry, the page you are looking for is not here anymore. \"],[4,\"link-to\",[\"index\"],null,{\"statements\":[[0,\"Go home \"]],\"parameters\":[]},null],[0,\" instead\"],[8],[0,\"\\n        \"],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/not-found.hbs" } });
});
define("collections/templates/tasks", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "CutgmlXf", "block": "{\"symbols\":[\"case\"],\"statements\":[[6,\"div\"],[9,\"class\",\"hero\"],[7],[0,\"\\n    \"],[6,\"h1\"],[7],[0,\"Tasks\"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\\n\"],[6,\"div\"],[9,\"class\",\"text-center\"],[9,\"style\",\" margin-top: 15px; margin-bottom: 15px;\"],[7],[0,\"\\n    In progress submissions to the \"],[1,[20,[\"collection\",\"title\"]],false],[0,\". Any of the submissions may be continued by pressing the continue button.\\n\"],[8],[0,\"\\n\\n\"],[6,\"div\"],[9,\"class\",\"active-cases\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"table-heading\"],[9,\"style\",\"background-color: #444; color: #fff;\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"case-no\"],[7],[0,\"Case No.\"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"form-type\"],[7],[0,\"Form Type\"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"continue-button\"],[7],[8],[0,\"\\n    \"],[8],[0,\"\\n\"],[4,\"each\",[[20,[\"cases\"]]],null,{\"statements\":[[0,\"\\n        \"],[1,[25,\"case-list-item\",null,[[\"case\",\"collection\"],[[19,1,[]],[20,[\"collection\"]]]]],false],[0,\"\\n\\n\"]],\"parameters\":[1]},{\"statements\":[[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"empty-state\"],[7],[0,\"\\n            You have no active tasks\\n        \"],[8],[0,\"\\n\\n\"]],\"parameters\":[]}],[8],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "collections/templates/tasks.hbs" } });
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
define('collections/transforms/object', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Transform.extend({
        deserialize: function deserialize(serialized) {
            return Ember.isBlank(serialized) ? {} : serialized;
        },
        serialize: function serialize(deserialized) {
            return Ember.isBlank(deserialized) ? {} : deserialized;
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
define('collections/utils/can-use-dom', ['exports', 'ember-metrics/utils/can-use-dom'], function (exports, _canUseDom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _canUseDom.default;
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
define('collections/utils/object-transforms', ['exports', 'ember-metrics/utils/object-transforms'], function (exports, _objectTransforms) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _objectTransforms.default;
    }
  });
});
define('collections/utils/path-join', ['exports', 'ember-osf/utils/path-join'], function (exports, _pathJoin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pathJoin.default;
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


define('collections/config/environment', [], function() {
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
  require("collections/app")["default"].create({"usingCors":true,"corsWithCreds":true,"apiURL":"https://dev-labs-2.cos.io/api","name":"collections","version":"0.0.0+a6e8caf5"});
}
