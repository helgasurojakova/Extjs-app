Ext.define('MyApp.store.Company', {
    extend: 'Ext.data.Store',

    alias: 'store.company',

    model: 'MyApp.model.Company',

    data: { items: [
            {name: 'Gazprom', country: 'Russia'},
            {name: 'Apple', country: 'USA'},
            {name: 'Yamaha', country: 'Japan'},
            {name: 'IKEA', country: 'Sweden'}
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});