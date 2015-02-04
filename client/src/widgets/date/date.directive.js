(function () {
    'use strict';

    angular
        .module('poprevo.widgets')
        .directive('date', date);

    function date() {
        var directive = {
            templateUrl: 'widgets/date/date.view.html',
            restrict: 'E'
        };

        return directive;
    }
})();