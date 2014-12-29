(function () {
    'use strict';

    var express = require('express');

    var app = express();

    app.use(express.static(__dirname + '/client/build'));

    var server = app.listen(2000, function() {
        console.log('workin');
    });


})();