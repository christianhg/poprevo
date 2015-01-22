(function () {
    'use strict';

    angular
        .module('poprevo.lineup')
        .controller('LineupController', LineupController);

    function LineupController(artists) {

        var vm = this;

        vm.artists = artists.index();

    }
})();