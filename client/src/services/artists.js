(function () {
    'use strict';

    angular
        .module('poprevo')
        .factory('artists', artists);

    function artists() {
        var artistlist = [
            {
                active: true,
                country: 'US',
                concert: {
                    day: '',
                    length: '',
                    time: '',
                    venue: '',
                },
                name: 'Foxygen',
                image: 'foxygen.jpg',
                info: 'Med tungen skarpt i kinden holder Foxygen lytteren på tæerne. Raffineret og excentrisk leger den amerikanske duo med syrepsych, rock’n’roll, sukkerpop og henslængt punk over det aktuelle album … And Star Power’s 24 sange. … And Star Power følger op på Sam France og Jonathan Rados nostalgisk-farvede gennembrud We Are The 21th-century Ambassadors of Peace and Magic, der i 2013 fik hele indiescenen til at nynne med på “San Francisco”, “Shuggie” og “No Destruction”. To år efter er duoens melodiøre intakt, når Foxygen blander musikalske guldaldre til uimodståelige knaldperler og knuselskelige i al deres uforudsigelighed bliver et overbevisende bud på en genrejonglerende musikverdens yndlingsband.',
                slug: 'foxygen',
                sound: {
                    type: 'youtube',
                    link: ''
                }
            },
            {
                name: 'Moon Duo'
            },
            {
                name: 'Viet Cong'
            },
            {
                name: 'Steve Gunn'
            },
            {
                name: 'Half Japanese'
            },
            {
                name: 'Happyness'
            },
            {
                name: 'William Tyler'
            },
            {
                name: 'Twerps'
            },
            {
                name: 'Mr Twin Sister'
            },
            {
                name: 'Panda Bear'
            },
            {
                name: 'Tobias Jesse Jr'
            },
            {
                name: 'Pleasure'
            },
            {
                name: 'Gooms'
            },
            {
                name: 'Lust For Youth'
            }
        ];

        return {
            'index': function() {
                return artistlist;
            }
        };
    }

})();