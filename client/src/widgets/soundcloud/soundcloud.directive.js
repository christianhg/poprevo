(function () {
    'use strict';

    angular
        .module('poprevo.widgets')
        .directive('soundcloud', soundcloud);

    function soundcloud() {
        var directive = {
            templateUrl: 'widgets/soundcloud/soundcloud.view.html',
            restrict: 'E',
            scope: {
                link: '@link',
                title: '@title'
            }
        };

        return directive;
    }
})();