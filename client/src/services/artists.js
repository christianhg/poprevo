(function () {
    'use strict';

    angular
        .module('poprevo')
        .factory('artists', artists);

    function artists() {
        var artistlist = [

            {
                active: true,
                country: 'UK',
                concert: {
                    day: '',
                    length: '',
                    time: '',
                    venue: ''
                },
                name: 'The Pop Group',
                image: 'thepopgroup.jpg',
                info: 'To album og et par singler. Mere skulle der i ‘79/’80 ikke til, før The Pop Group kunne blive et af rockens mest stilskabende navne med deres tidlige bud på rastløshed, dissonans og politiskbevidsthed udtrykt gennem den ganske vist sortrandede, men også dynamiske genre, der senere blev døbt postpunk. Det er efterhånden 35 år siden, men den 23. februar flænses stilheden igen af The Pop Group, når de udgiver albummet Citizen Zombie og tager på den turné, der sender bandet til Pop Revo.\n The Pop Groups indflydelse høres hos stort set samtlige navne, der i dag får postpunk-stemplet, men allerede Nick Cave og Sonic Youth krediterede The Pop Group som vigtig inspirationskilde.Det, som gjorde punken til postpunk var i høj grad The Pop Groups tunge, rytmisk bund, der var inspireret af lige dele funk, freejazz og dub. Således var det dub ikonet Dennis Bovell, der producerede mesterværket "Y"(1979), som gruppen debuterede med. Et album som Pitchfork tildelte plads 35 på deres liste over de hundrede bedste album fra 70\'erne (foran Rumours, Dark side of the moon, Hunky Dory m.m.fl.!), og beskrev som: "This is a record of dire necessity, armed for combat against a long litany of ills-- none more than typicality."',
                size: 'big',
                slug: 'thepopgroup',
                sound: {
                    type: 'youtube',
                    link: 'sL0tYowbIxE',
                    title: 'She\'s beyond Good and Evil'
                }
            },
            {
                active: true,
                country: 'UK',
                concert: {
                    day: '',
                    length: '',
                    time: '',
                    venue: ''
                },
                name: 'Dean Blunt',
                image: 'deanblunt.jpg',
                info: 'Hvis følelsen af fremmedgørelse i en hyperconnected verden havde et soundtrack, kunne Dean Blunt meget vel være musikeren bag. Siden Dean Blunt forlod Inga Copeland og deres fælles duo Hype Williams for at udgive debuten The Redeemer (2013), har den genreskyende brites sange vekslet mellem intimt bekendende tekster (og telefonsamtaler) og mystisk repetetive instrumenter produceret i undergrunden for Blunts ganske uimponerede og mere talende end syngende vokal.\n Hvor debuten The Redeemer i overvejende grad var baseret på strygere og programmering, forløser Dean Blunts på det aktuelle album Black Metal i overvejende grad sine sange med guitar, trommer og bas - men tag ikke fejl. Albumtitlen og ironiske sangtitler som “Punk” og “Country” til trods, er Dean Blunts musik fortsat umulig at betegne præcist.\n Black Metal er kulminationen af Dean Blunts langvarige forfinelse af sine evner til både at skabe et unikt univers og uafrystelige melodier. Lyt bare til sireneduetten "50 Cent".\n Soundvenue gav Black Metal 5/6 stjerner og skrev: "Der her er et ægte Dean Blunt-album, der med en let provokerende og original form vækker en nysgerrighed, der tilfredsstilles med nye detaljer ved hver gennemlytning.”',
                size: 'big',
                slug: 'deanblunt',
                sound: {
                    type: 'youtube',
                    link: 'YQfwPziK-SA',
                    title: '50 Cent'
                }
            },
            {
                active: true,
                country: 'US',
                concert: {
                    day: '',
                    length: '',
                    time: '',
                    venue: ''
                },
                name: 'Foxygen',
                image: 'foxygen.jpg',
                info: 'Med tungen skarpt i kinden holder Foxygen lytteren på tæerne. Raffineret og excentrisk leger den amerikanske duo med syrepsych, rock’n’roll, sukkerpop og henslængt punk over det aktuelle album … And Star Power’s 24 sange. … And Star Power følger op på Sam France og Jonathan Rados nostalgisk-farvede gennembrud We Are The 21th-century Ambassadors of Peace and Magic, der i 2013 fik hele indiescenen til at nynne med på “San Francisco”, “Shuggie” og “No Destruction”. To år efter er duoens melodiøre intakt, når Foxygen blander musikalske guldaldre til uimodståelige knaldperler og knuselskelige i al deres uforudsigelighed bliver et overbevisende bud på en genrejonglerende musikverdens yndlingsband.',
                size: 'big',
                slug: 'foxygen',
                sound: {
                    type: 'youtube',
                    link: 'PqW7EfA3VWE',
                    title: 'How Can You Really'
                }
            },

            {
                active: true,
                country: 'CA',
                concert: {
                    day: '',
                    length: '',
                    time: '',
                    venue: ''
                },
                name: 'Viet Cong',
                image: 'vietcong.jpg',
                info: 'Viet Cong støver 60‘er-garagen af og fylder den i højt tempo med fremragende, fræsende guitarspil og fængende postpunkede melodier. Bestående af medlemmer fra de hedengangne lo-fi-helte Woman og Chad VanGaalens liveband er Viet Cong en kompetent kvartet udi den ikke helt lette disciplin at skabe skarptskårne, Wall of Sound-catchy sange i et kulsort univers med alvoren tydeligt markeret i det indestængte blik.\nViet Cong udgav i januar deres selvbetitlede debutalbum til anmelderros over hele linjen - britiske The 405 skrev det præcist, da de overgav sig fuldkommen til albummet med karakteren 9/10 og den afsluttende bedømmelse: “So fuck the narrative. Fuck Women. Fuck the acrid stench of banality emanating from modern rock. Listen to Viet Cong."\nSå gør det. Lyt til albummet indtil bandet indtager Pop Revo 2015.',
                size: 'big',
                slug: 'vietcong',
                sound: {
                    type: 'youtube',
                    link: 'hdMz7BUtOvk',
                    title: 'Continental Shelf'
                }
            },
            {
                active: true,
                country: 'UK',
                concert: {
                    day: '',
                    length: '',
                    time: '',
                    venue: ''
                },
                name: 'Happyness',
                image: 'happyness.jpg',
                info: '“One of the finest new bands on the face of this Earth” skrev Stereogum i 2014, da Happyness udsendte debutalbummet Weird Little Birthday. Med en sjældent følsom intimitet excellerer det britiske band i college-inspireret og overraskende amerikansk lydende alt.-rock. -Tænk at Pavement tager på roadtrip med Broken Social Scene og samler Sparklehorse op på vejen. Foruden at skrive forrygende tongue-in-cheek/ tragikomiske tekster til diverse EP-udgivelser, har Happyness siden 2013 rejst verden rundt, og spillet på blandt andet CMJ i New York. Før de besøger Pop Revo varmer de op på NMEs forårstour rundt i UK.',
                size: 'small',
                slug: 'happyness',
                sound: {
                    type: 'youtube',
                    link: 'r0xnAisN8eA',
                    title: 'Anything I Do Is All Right'
                }
            },

            {
                active: true,
                country: 'CA',
                concert: {
                    day: '',
                    length: '',
                    time: '',
                    venue: ''
                },
                name: 'Doldrums',
                image: 'doldrums.jpg',
                info: 'Doldrums’ hårde elektro får på det kommende album The Air-Conditioned Nightmare fornyet energi til musklerne bag enmandshæren. Airick Woodheads projekts andet album er nemlig hans første på Sub Pop. Ikke kun på papiret er Doldrums sprunget til den Seattle-baserede indierock-gigant. Også i lyden høres skiftet fra det lokale, canadiske label Arbutus. På The Air-Conditioned Nightmare er lyden enorm: pågående, bombastisk - næsten skræmmende i den direkte sound opbygget af Woodheads manipulerede vokal og techno’ede beats, som snart er stabile, snart eksploderer. Du bliver budt op til en speeded dans.',
                size: 'small',
                slug: 'doldrums',
                sound: {
                    type: 'youtube',
                    link: '8vIP2ZEnxnc',
                    title: 'She is the Wave (feat. Guy Dallas)'
                }
            },
            {
                active: true,
                country: 'SE',
                concert: {
                    day: '',
                    length: '',
                    time: '',
                    venue: ''
                },
                name: 'Les Big Byrd',
                image: 'lesbigbyrd.jpg',
                info: 'Det næste store alternative rockband til at komme ud af Sverige? Sådan kunne det godt se ud, da den potente kvartet ærefrygtsskabende uimponeret gjorde deres første koncert i Danmark til en mindeværdig affære for Roskilde Festivals publikum i sommers. Overbevist var de nu også blevet af They Worshipped Cats, Les Big Byrds debutalbum fra 2014. Albummet er Les Big Byrds tour-de-force udi velskåret rock med psykedeliske udflugter og en krautet vedholdenhed - både i forrygende melodier (“Back To Bagarmossen”!) og i de instrumentale udflugter (bare lyt til titelnummeret). Brian Jonestown Massacra frontmanden Anton Newcombe er fan (og udgav faktisk albummet på sit label) med god grund - og vi slutter os gerne til ham.',
                size: 'small',
                slug: 'lesbigbyrd',
                sound: {
                    type: 'youtube',
                    link: 'X9HfTstqDMM',
                    title: 'Back to Bagarmossen'
                }
            },
            {
                active: true,
                country: 'US',
                concert: {
                    day: '',
                    length: '',
                    time: '',
                    venue: ''
                },
                name: 'Doug Tuttle',
                image: 'dougtuttle.jpg',
                info: 'Der er lejlighed til at pådrage sig et heftigt hallucinerende solstik, når amerikanske Doug Tuttle fyrer op for sine syrlige og klingende lo-fi-jams. I hans ekspanderende univers summer orientalske riffs ud og ind mellem folk-rock-guitarer og syntetiske trommer. Tuttle, der tidligere lavede Jefferson Airplane’sk psych-folk i hedengangne Mmoss, har et enkelt soloalbum med i bagagen, som flyder over med slingrende popsange med skævvredne melodier, der lyder, som var de indspillet på et smeltet kassettebånd fra 1969. Fans af bands som Woods, Morgan Delt og The Byrds vil være godt tilfredse.',
                size: 'small',
                slug: 'dougtuttle',
                sound: {
                    type: 'youtube',
                    link: 'jOTQulnVGUk',
                    title: 'With Us Soon'
                }
            },
            {
                active: true,
                country: 'DK',
                concert: {
                    day: '',
                    length: '',
                    time: '',
                    venue: ''
                },
                name: 'Gooms',
                image: 'gooms.jpg',
                info: 'Gooms\' debutalbum, Beyond Life, landede i efteråret 2014 som en anarkistisk alien fra det ydre rum. Musikerne er Gooms er dog ikke fremmede for den danske indiescene - trioen består af Aske Zidore fra hedengangne Oh No Ono, Suni A Argjaboda og Jens Ramon (Figurines). Med lige dele psych, surf-pop og musikhistoriske traditioner osende ud af sangene, er Gooms lyd ikke sådan lige at indkapsle. Men en ting står klart: Gooms sikre melodiøsitet rykker ved din opfattelse af, hvad den ideelle popsang lyder som.',
                size: 'small',
                slug: 'gooms',
                sound: {
                    type: 'youtube',
                    link: 'lqGNeZYVrQ8',
                    title: 'El Castell'
                }
            },
            {
                active: true,
                country: 'UK',
                concert: {
                    day: '',
                    length: '',
                    time: '',
                    venue: ''
                },
                name: 'The Soft Walls',
                image: 'thesoftwalls.jpg',
                info: 'Engelske Soft Walls føres an af Dan Reeves, som også spiller med i Cold Pumas og er indehaver af det glimrende pladeselskab Faux Discx. Soft Walls\' andet album "No Time", som var et af sidste års bedste, men også mest oversete plader, er en skønsom blanding af indadvendt dream pop og støjende psychedelia med en post-punket kant. Ovenover den disede produktion svæver flakkende melodier, som stikker af fra de motoriske beats. Man taber både pusten og tidsfornemmelsen i Soft Walls’ hypnotiserende hybrid af bølgende rumklang og skurrende orgeldrones.',
                size: 'small',
                slug: 'thesoftwalls',
                sound: {
                    type: 'youtube',
                    link: 'hnm6TUTMymg',
                    title: 'No Time'
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