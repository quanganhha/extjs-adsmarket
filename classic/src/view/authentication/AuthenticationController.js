Ext.define('Admin.view.authentication.AuthenticationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.authentication',

    //TODO: implement central Facebook OATH handling here

    onFaceBookLogin : function() {
        this.redirectTo('dashboard', true);
    },

    onLoginButton: function() {
        var userid = this.getViewModel().get('userid');
        var password = this.getViewModel().get('password');
        // Set user to global variable
        Admin.user = userid,

        Ext.Ajax.request({
            url     : 'http://localhost:8080/authenticate/',
            method: 'POST',          
            params: {
                userid      : userid,
                password    : password
            },
            cors    : true,
            scope   : this,
            failure : function() {
                
            },
            success : function(response) {
                val = Ext.decode(response.responseText)
                if (val) {
                    this.redirectTo('dashboard', true);
                } else {
                    
                }
            }
        })
    },

    onLoginAsButton: function() {
        this.redirectTo('login', true);
    },

    onNewAccount:  function() {
        this.redirectTo('register', true);
    },

    onSignupClick:  function() {
        this.redirectTo('dashboard', true);
    },

    onResetClick:  function() {
        this.redirectTo('dashboard', true);
    }
});