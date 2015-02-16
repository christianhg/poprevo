(function () {
    'use strict';

    angular
        .module('poprevo.widgets')
        .directive('sticky', sticky);

    function sticky() {
        var directive = {
            restrict: 'A',
            controller: StickyController,
            controllerAs: 'vm',
            scope: {}
        };

        return directive;
    }

    /**
     * @ngInject
     */
    function StickyController($element, $scope, $window) {
        var vm = this;

        var offset = $element[0].offsetTop;

        angular.element($window).on('scroll', function(e) {
            if($window.scrollY >= offset) {
                $element.addClass('sticky');
            } else {
                $element.removeClass('sticky');

            }
        });
    }
})();