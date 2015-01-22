(function () {
    'use strict';

    angular
        .module('poprevo.lineup')
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('lineup', {
                url: '/lineup',
                templateUrl: 'lineup/lineup.view.html',
                controller: 'LineupController',
                controllerAs: 'vm',
                data: {
                    pageTitle: 'Lineup'
                }
            });
    }
})();