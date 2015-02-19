(function () {
    'use strict';

    angular
        .module('poprevo.lineup')
        .controller('LineupArtistController', LineupArtistController);

    function LineupArtistController($filter, $scope, $state, $stateParams, artists) {
        var vm = this;

        vm.artists = artists.index();

        vm.artist = $filter('filter')(vm.artists, {slug: $stateParams.artist}, true);

        if(vm.artist.length) {
            vm.artist = vm.artist[0];
        } else {
            $state.go('lineup', null, { reload: true });
        }
    }
})();