/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'MyApp.store.Personnel',
        'Ext.grid.plugin.RowDragDrop'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [{
        text: 'Name',
        dataIndex: 'name',
        width: 100,
        cell: {
            userCls: 'bold'
        }
    }, {
        text: 'Email',
        dataIndex: 'email',
        width: 230
    }, {
        text: 'Phone',
        dataIndex: 'phone',
        width: 150
    }],
    selectable: {
        checkbox: true
    },

    plugins: {
        gridrowdragdrop: true
    },

    listeners: {
        select: 'onItemSelected'
    }
});
