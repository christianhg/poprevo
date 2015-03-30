(function () {
    'use strict';

    angular
        .module('poprevo.timetable')
        .controller('TimetableController', TimetableController);

    function TimetableController($filter, artists) {
        var vm = this;

        vm.artists = artists.index();

        vm.thursday = $filter('filter')(vm.artists, {concert: { day: 'thursday'}}, true);
        vm.friday = $filter('filter')(vm.artists, {concert: { day: 'friday'}}, true);
        vm.saturday = $filter('filter')(vm.artists, {concert: { day: 'saturday'}}, true);
    }
})();