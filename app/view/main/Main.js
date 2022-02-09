/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        }
    },

    tabBarPosition: 'bottom',

    items: [
        // TODO - Replace the content of this view to suit the needs of your application.
        {
            title: 'Home',
            reference: 'home',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                    xtype: 'mainlist'
            }
            ]
        },
        {
            title: 'Photos',
            xtype: 'panel',
            reference: 'photos',
            iconCls: 'x-fa fa-camera',
            layout: 'fit',
            items: [{
                xtype: 'carousel',
                items: [{
                    html: '<p>Swipe left to show the next card&hellip;</p>',
                    cls: 'stock-image stock-one-background',
                    style: 'background-color: #CFDBD5'
                }, {
                    html: '<p>You can also tap on either side of the indicators.</p>',
                    cls: 'stock-image stock-two-background',
                    style: 'background-color: #D4CFDB'
                }, {
                    html: 'Card #3',
                    cls: 'stock-image stock-three-background',
                    style: 'background-color: #DBCFCF'
                }]
        }]
        },
        {
            title: 'Users',
            reference: 'users',
            iconCls: 'x-fa fa-user',
            layout: 'fit',
            items: [{
                xtype: 'mainuser'
            }
            ]
        },{
            title: 'Groups',
            xtype: 'panel',
            reference: 'groups',
            iconCls: 'x-fa fa-users',
            bind: {
                html: '{loremIpsum}'
            }
        },{
            title: 'Comboboxes',
            iconCls: 'x-fa fa-cog',
            items: [{
                xtype: 'combo'
            }]
        },{
            title: 'Settings',
            iconCls: 'x-fa fa-cog',
            items: [
                {
                    xtype: 'fieldcontainer',
                    layout: 'form',
                    // layout: {
                    //     type: 'vbox',
                    //     pack: 'center',
                    //     align: 'middle',
                    // },
                    defaults:
                        {
                            xtype: 'checkbox',
                            listeners: {
                                change: 'hidePanel'
                            }
                        },
                    items: [
                        {
                            boxLabel: 'Home',
                            name: 'home',
                            bind: '{flags.hideHome}'
                        },
                        {
                            boxLabel: 'Photos',
                            name: 'photos',
                            bind: '{flags.hidePhotos}'
                        },
                        {
                            boxLabel: 'Users',
                            name: 'users',
                            bind: '{flags.hideUsers}'
                        },
                        {
                            boxLabel: 'Groups',
                            name: 'groups',
                            bind: '{flags.hideGroups}'
                        },
                        {
                            boxLabel: 'Comboboxes',
                            name: 'comboboxes',
                            bind: '{flags.hideComboboxes}'
                        }
                    ],
                }, {
                    xtype: 'fieldcontainer',
                    // layout: {
                    //     type: 'hbox',
                    //     pack: 'center',
                    //     align: 'middle',
                    // },
                    defaults:
                        {
                            xtype: 'button'
                        },
                    items: [
                        {
                            text: 'Select All',
                            scale: 'medium',
                            handler: 'hideAll'
                        },
                        {
                            text: 'Deselect All',
                            scale: 'medium',
                            handler: 'showAll'
                        },
                    ],
                },
            ],
        },
    ]
});
