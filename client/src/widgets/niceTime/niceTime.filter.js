(function() {
    angular
        .module('poprevo.widgets')
        .filter('niceTime', niceTime);

    function niceTime() {
        return function(input) {
            var output = input;
            if(input && input.length > 16) {
                output = input.substring(11,16);
            }
            // var output = input;
            return output;
        };
    }
})();