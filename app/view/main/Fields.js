Ext.define('MyApp.view.main.Fields', {
    extend: 'Ext.form.Panel',
    xtype: 'combo',

    requires: [
        'MyApp.store.Country',
        'MyApp.store.Company'
    ],
    title: 'ComboBox',

    items: [
        {
            xtype: 'combobox',
            label: 'Choose country',
            queryMode: 'local',
            displayField: 'name',
            valueField: 'name',
            // publishes: 'value',
            bind: {
                store: {
                    type: 'country',
                },
                value: '{valueOnFirstCombo}'
            }
        },
        {
            xtype: 'combobox',
            queryMode: 'local',
            displayField: 'name',
            // valueField: 'name',
            bind: {
                store: {
                    type: 'company',
                    filters: [{
                        property: 'country',
                        value: '{valueOnFirstCombo}'
                    }]
                }
            }
        }
    ]
});
