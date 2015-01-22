(function () {
    'use strict';

    angular
        .module('poprevo.info')
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('info', {
                url: '/info',
                templateUrl: 'info/info.view.html',
                controller: 'InfoController',
                controllerAs: 'vm',
                data: {
                    pageTitle: 'Info'
                }
            });
    }
})();