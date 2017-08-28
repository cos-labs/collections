import UserAdapter from 'ember-osf/adapters/user';

export default UserAdapter.extend({

    pathForType:  function() {

        return 'users';

    }

});
