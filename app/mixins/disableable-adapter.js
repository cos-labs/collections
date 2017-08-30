export default Ember.Mixin.create({

  preventSave: false,

  updateRecord(store, type, snapshot) {

    debugger;
    if (!this.get('preventSave')) {
      return this._super(store, type, snapshot);
    }
    this.set('preventSave', false);
    return true;
  }

});
