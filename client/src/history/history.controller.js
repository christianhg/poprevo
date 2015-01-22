(function () {
    'use strict';

    angular
        .module('poprevo.history')
        .controller('HistoryController', HistoryController);

    function HistoryController(artists) {

        var vm = this;

        vm.artists = artists.index();

    }
})();