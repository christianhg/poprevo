(function () {
    'use strict';

    angular
        .module('poprevo.history')
        .controller('HistoryController', HistoryController);

    function HistoryController(festivals) {

        var vm = this;

        vm.festivals = festivals.index();

    }
})();