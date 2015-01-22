(function () {
    'use strict';

    angular
        .module('poprevo.info')
        .controller('InfoController', InfoController);

    function InfoController(artists) {

        var vm = this;

        vm.artists = artists.index();

    }
})();