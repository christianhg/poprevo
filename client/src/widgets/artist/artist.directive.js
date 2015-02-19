(function () {
    'use strict';

    angular
        .module('poprevo.widgets')
        .directive('artist', artist);

    function artist() {
        var directive = {
            templateUrl: 'widgets/artist/artist.view.html',
            restrict: 'E',
            scope: {
                artist: '='
            },
            controller: ArtistController,
            controllerAs: 'vm'
        };

        return directive;

        /**
         * @ngInject
         */
        function ArtistController($scope) {
            var vm = this;

            vm.artist = {};

            $scope.$watch('artist', function(newValue) {
                if(newValue) {
                    vm.artist = newValue;
                }
            });
        }
    }
})();