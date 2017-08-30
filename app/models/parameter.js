import DS from 'ember-data';
import DisableableAdapterModel from '../mixins/disableable-adapter-model';

const {
    Model,
    attr,
} = DS;

export default Model.extend(DisableableAdapterModel, {
    name: attr('string'),
    value: attr(),
    properties: attr(), // Property hash to store additional information about a parameter.
});
