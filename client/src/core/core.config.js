(function() {
    'use strict';

    angular
        .module('poprevo.core')
        .config(config);

    function config($urlRouterProvider, uiGmapGoogleMapApiProvider) {
        $urlRouterProvider
            .otherwise('/');

        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyANWw1iRgT4yxYstdNd1Rhho_ZI07w2G0Y',
            v: '3.17',
            libraries: 'weather,geometry,visualization'
        });
    }
})();