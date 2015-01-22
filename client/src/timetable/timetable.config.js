(function () {
    'use strict';

    angular
        .module('poprevo.timetable')
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('timetable', {
                url: '/timetable',
                templateUrl: 'timetable/timetable.view.html',
                controller: 'TimetableController',
                controllerAs: 'vm',
                data: {
                    pageTitle: 'Timetable'
                }
            });
    }
})();