import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('user');
  },
  actions: {
    createUser() {
      this.get('model').save();
    }
  }
});
