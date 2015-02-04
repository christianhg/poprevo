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
                size: 'big',
                slug: 'foxygen',
                sound: {
                    type: 'youtube',
                    link: ''
                }
            },
            {
                country: 'UK',
                concert: {

                },
                name: 'Happyness',
                image: 'happyness.jpg',
                info: '“One of the finest new bands on the face of this Earth” skrev Stereogum i 2014, da Happyness udsendte debutalbummet Weird Little Birthday. Med en sjældent følsom intimitet excellerer det britiske band i college-inspireret og overraskende amerikansk lydende alt.-rock. -Tænk at Pavement tager på roadtrip med Broken Social Scene og samler Sparklehorse op på vejen. Foruden at skrive forrygende tongue-in-cheek/ tragikomiske tekster til diverse EP-udgivelser, har Happyness siden 2013 rejst verden rundt, og spillet på blandt andet CMJ i New York. Før de besøger Pop Revo varmer de op på NMEs forårstour rundt i UK.',
                size: 'medium',
                slug: 'happyness',
                sound: {
                    type: 'youtube',
                    link: 'r0xnAisN8eA'
                }
            },
            {
                country: 'CA',
                concert: {

                },
                name: 'Viet Cong',
                image: 'vietcong.jpg',
                info: 'Viet Cong støver 60‘er-garagen af og fylder den i højt tempo med fremragende, fræsende guitarspil og fængende postpunkede melodier. Bestående af medlemmer fra de hedengangne lo-fi-helte Woman og Chad VanGaalens liveband er Viet Cong en kompetent kvartet udi den ikke helt lette disciplin at skabe skarptskårne, Wall of Sound-catchy sange i et kulsort univers med alvoren tydeligt markeret i det indestængte blik. Viet Cong udgav i januar deres selvbetitlede debutalbum til anmelderros over hele linjen - britiske The 405 skrev det præcist, da de overgav sig fuldkommen til albummet med karakteren 9/10 og den afsluttende bedømmelse: “So fuck the narrative. Fuck Women. Fuck the acrid stench of banality emanating from modern rock. Listen to Viet Cong." Så gør det. Lyt til albummet indtil bandet indtager Pop Revo 2015.',
                size: 'medium',
                slug: 'vietcong',
                sound: {
                    type: 'youtube',
                    link: 'hdMz7BUtOvk'
                }
            }
        ];

        return {
            'index': function() {
                return artistlist;
            }
        };
    }

})();