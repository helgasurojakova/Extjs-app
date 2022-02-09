Ext.define('MyApp.view.templates.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLogin: function() {

        ///

        // var email = this.lookup('formEmail').items.get(0);
        // email.setValue('Olya');
        //
        // var password = this.lookup('formPass').items.get(0);
        // password.setValue('123');

        ///

        var me = this,
            errorCmp = me.lookup('formLoginFailure'),
            form = me.lookup('formLogin'),
            errors = [],
            data = {
                errors: errors
            };

        if (form.validate()) {
            Ext.Msg.alert('Login Success', 'You have been logged in!');
            this.fireEvent('login');
        }
        else {
            Ext.Msg.alert('Login Failure', 'The username/password provided is invalid.');

            form.getFields(false).forEach(function(field) {
                var error;

                if (!field.validate() && (error = field.getError())) {
                    errors.push({
                        errors: error,
                        name: field.getLabel()
                    });
                }
            });
        }

        if (errorCmp) {
            errorCmp.setData(data);
        }
    }
});
