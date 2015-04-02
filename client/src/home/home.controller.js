(function () {
    'use strict';

    angular
        .module('poprevo.home')
        .controller('HomeController', HomeController);

    function HomeController($filter, artists) {
        var vm = this;

        vm.artists = artists.index();

        vm.bigArtists = $filter('filter')(vm.artists, {size: 'big'}, true);
        vm.smallArtists = $filter('filter')(vm.artists, {size: 'small'}, true);
        vm.mediumArtists = $filter('filter')(vm.artists, {size: 'medium'}, true);

    }
})();