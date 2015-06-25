/**
 * Created by Tejasva Dhyani on 23/06/15.
 */

requirejs.config({
    paths : {
        jquery : '../../js/lib/jquery-1.9.1',
        bootstrap : '../../js/lib/bootstrap.min',
        backbone : '../../js/lib/backbone-min',
        underscore : '../../js/lib/underscore-min',
        router : '../../js/routers',
        view : '../../js/views',
        model : '../../js/models',
        collection : '../../js/collections'
    },
    shim : {
        bootstrap : {
            deps : ['jquery']
        },
        backbone : {
            deps : ['jquery', 'underscore']
        }
    }
});

requirejs(['../../js/main/main']);