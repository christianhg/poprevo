(function () {
    'use strict';

    angular
        .module('poprevo.home')
        .controller('HomeController', HomeController);

    function HomeController(artists) {
        var vm = this;

        vm.artists = artists.index();

    }
})();