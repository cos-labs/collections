import DS from 'ember-data';
import hashMany from 'collections/utils/hash-many';

const {
    Model,
    attr,
    belongsTo,
    hasMany
} = DS;

export default Model.extend({
    label: attr('string'),
    description: attr('string'),
    widgetType: attr('string'),
    defaultValue: attr('string'),
    parameters: hasMany('parameter-mapping', {
        inverse: 'widget',
    }),
});
