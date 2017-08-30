export default Ember.Mixin.create({

  disableAdapter: false,

  saveWithoutSave() {

    this.set('disableAdapter', true);
    let saveResult = this.save();
    return saveResult;

  }

});
