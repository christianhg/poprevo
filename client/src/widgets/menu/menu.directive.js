(function () {
    'use strict';

    angular
        .module('poprevo.widgets')
        .directive('menu', menu);

    function menu() {
        var directive = {
            templateUrl: 'widgets/menu/menu.view.html',
            restrict: 'E'
        };

        return directive;
    }
})();