/**
 * Created by Tejasva Dhyani on 23/06/15.
 */
define(['jquery','underscore','backbone','view/mainView','model/userModel'],function($,_,Backbone,MainView,UserModel){
    var mainRouter = Backbone.Router.extend({
        routes : {
            '' : 'init'
        },
        _model : null,
        _view : null,

        initialize : function(){
            this._model = new UserModel({name:'Tejasva',type:'Admin'});
            this._view = new MainView({model : this._model});
        },

        init : function(){
            this._view.render();
        }
    });

    return mainRouter;
});