Ext.define('MyApp.view.main.UserDD', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainuser',
    controller: 'user',
    requires: ['Ext.grid.plugin.RowDragDrop'],
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    scrollable: 'true',

    items: [{
        title: 'Grid 1',
        xtype: 'grid',
        reference: 'gridFirst',
        height: '50%',
        store: {
            type: 'user'
        },
        plugins: {
            gridrowdragdrop: {
                // copy: true,
            }
        },
        // listeners: {
        //     drop: 'onDropGrid1'
        // },
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
    }, {
        title: 'Grid 2',
        xtype: 'grid',
        reference: 'gridSecond',
        height: '50%',
        plugins: {
            gridrowdragdrop: {
                // copy: true
            }
        },
        // listeners: {
        //     drop: 'onDropGrid2'
        // },
        store: {
            type: 'usersecond',
            model: 'MyApp.model.User'
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
    },{
        xtype: 'fieldcontainer',
        defaults:
            {
                xtype: 'button'
            },
        items: [
            {
                text: 'Reset both grids',
                scale: 'medium',
                handler: 'resetGrids'
            }]
    }]
});