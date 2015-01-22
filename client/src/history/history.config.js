(function () {
    'use strict';

    angular
        .module('poprevo.history')
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('history', {
                url: '/history',
                templateUrl: 'history/history.view.html',
                controller: 'HistoryController',
                controllerAs: 'vm',
                data: {
                    pageTitle: 'Historie'
                }
            });
    }
})();