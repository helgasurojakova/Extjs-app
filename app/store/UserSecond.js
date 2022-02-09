Ext.define('MyApp.store.UserSecond', {
    extend: 'Ext.data.Store',

    alias: 'store.usersecond',

    model: 'MyApp.model.User',

    data: { items: [

        ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});