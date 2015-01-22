(function () {
    'use strict';

    /**
     * Main app module
     */
    angular
        .module('poprevo', [
            'poprevo.core',
            'poprevo.history',
            'poprevo.home',
            'poprevo.info',
            'poprevo.lineup',
            'poprevo.templates',
            'poprevo.timetable',
            'poprevo.widgets'
        ]);
})();