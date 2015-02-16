(function () {
    'use strict';

    angular
        .module('poprevo.widgets')
        .directive('matchHeight', matchHeight);


    function matchHeight($timeout, $window) {
        var directive = {
            restrict: 'A',
            groups: {},
            link: MatchHeightLink
        };

        return directive;


        /**
         * @ngInject
         */
        function MatchHeightLink(scope, element, attrs) {

            angular.element(document).ready(function () {
                getHighest();
            });

            $timeout(getHighest, 0); // make sure angular has proceeded the binding

            angular.element($window).bind('resize', function() {
                getHighest();
            });

            function getHighest() {
                element.css('height', '');

                if($window.innerWidth > 600) {
                    if(!directive.groups[attrs.matchHeight]) { // if not exists then create the group
                        directive.groups[attrs.matchHeight] = {
                            height: 0,
                            elems:[]
                        };
                    }



                    directive.groups[attrs.matchHeight].elems.push(element);





                    if (directive.groups[attrs.matchHeight].height < element[0].offsetHeight) {
                        directive.groups[attrs.matchHeight].height = element[0].offsetHeight;
                    }

                    //console.log(directive.groups[attrs.matchHeight]);

                    if(scope.$last){ // reinit the max height
                        angular.forEach(directive.groups[attrs.matchHeight].elems, function(elem){
                            elem.css('height', directive.groups[attrs.matchHeight].height + 'px');


                        });
                        directive.groups[attrs.matchHeight].height = 0;
                    }
                }
            }
        }
    }
})();