Ext.define('MyApp.store.Country', {
    extend: 'Ext.data.Store',

    alias: 'store.country',

    model: 'MyApp.model.Country',

    data: { items: [
            {name: 'Russia'},
            {name: 'USA'},
            {name: 'Japan'},
            {name: 'Sweden'}
        ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});