/**
 * Created by Tejasva Dhyani on 25/06/15.
 */
define(['jquery','underscore','backbone'],function($,_,Backbone){
    var mainView = Backbone.View.extend({
        el : '.container',
        render : function(){
            var $this = this;
            $.get('/html/templates/helloWorldTemplate.html',function(data){
                $this.template = _.template(data);
                $this.$el.html($this.template($this.model.attributes));
            });
        },
        initialize : function(){
            //this.render();
        }
    });

    return mainView;
});