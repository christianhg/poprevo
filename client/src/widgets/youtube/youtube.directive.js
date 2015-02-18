(function () {
    'use strict';

    angular
        .module('poprevo.widgets')
        .directive('youtube', youtube);

    function youtube() {
        var directive = {
            templateUrl: 'widgets/youtube/youtube.view.html',
            restrict: 'E',
            scope: {
                link: '@link',
                title: '@title'
            }
        };

        return directive;
    }
})();