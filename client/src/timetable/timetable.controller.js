(function () {
    'use strict';

    angular
        .module('poprevo.timetable')
        .controller('TimetableController', TimetableController);

    function TimetableController(artists) {
        var vm = this;

        vm.artists = artists.index();
    }
})();