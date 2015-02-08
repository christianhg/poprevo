(function () {
    'use strict';

    angular
        .module('poprevo.widgets')
        .directive('stickyMenu', stickyMenu);

    function stickyMenu() {
        var directive = {
            restrict: 'A',
            controller: StickyMenuController,
            controllerAs: 'vm',
            scope: {}
        };

        return directive;
    }

    /**
     * @ngInject
     */
    function StickyMenuController($element, $scope, $window) {
        var vm = this;

        //console.log($window);
    }
})();