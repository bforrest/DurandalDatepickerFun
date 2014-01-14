﻿define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        search: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            router.map([
                { route: '', title:'Welcome', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'flickr', moduleId: 'viewmodels/flickr', nav: true },
                { route: 'pickadate', title: 'KO date', moduleId: 'viewmodels/pickadate', nav: true},
                { route: 'obPluginPickDate', title: 'Observable Plugin', moduleId: 'viewmodels/obPluginPickDate', nav: true},
                { route: 'ob_value_hack', title: 'Observable  + value hack', moduleId: 'viewmodels/ob_value_hack', nav: true},
                { route: 'ko_date_handler', title: 'ko handler', moduleId: 'viewmodels/ko_date_handler', nav: true}
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});