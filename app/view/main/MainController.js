/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

// Hide panels
    hidePanel(cmp) {
        let items = this.getView().getTabBar().items.items;
        Ext.each(items, el => el.config.title === cmp.initialConfig.boxLabel ? el.setHidden(cmp._checked) : null)
    },

    onChangeState: function (state) {
        let form = this.getViewModel();
        let flags = form.get('flags');
        for (let flagName in flags) {
            form.set('flags.' + flagName, state);
        }
    },

    hideAll() {
        this.onChangeState(true);
    },

    showAll() {
        this.onChangeState(false);
    }
});
