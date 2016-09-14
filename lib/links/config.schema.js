export default new SimpleSchema({
    type: {
        type: String,
        optional: true,
        defaultValue: 'one'
    },
    collection: {
        type: null,
        blackbox: true,
        optional: true
    },
    field: {
        type: String,
        optional: true
    },
    metadata: {
        type: null,
        blackbox: true,
        optional: true
    },
    inversedBy: {
        type: String,
        optional: true
    },
    resolve: {
        type: Function,
        optional: true
    }
});
