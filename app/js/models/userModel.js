/**
 * Created by Tejasva Dhyani on 25/06/15.
 */
define(['backbone'],function(Backbone){
    var userModel = Backbone.Model.extend({
        defaults : {
            name : 'Foo Bar',
            type : 'User'
        }
    });

    return userModel;
});
