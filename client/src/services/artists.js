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
                    day: 'saturday',
                    time: '2015-05-16 22:15:00',
                    venue: 'Voxhall'
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
                    day: 'friday',
                    time: '2015-05-15 20:00:00',
                    venue: 'Voxhall'
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
                    day: 'friday',
                    time: '2015-05-16 00:30:00',
                    venue: 'Voxhall'
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
                    day: 'saturday',
                    time: '2015-05-17 00:30:00',
                    venue: 'Voxhall'
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
                    day: 'saturday',
                    time: '2015-05-16 19:00:00',
                    venue: 'Atlas'
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
                    day: 'friday',
                    length: '',
                    time: '2015-05-15 23:30:00',
                    venue: 'Atlas'
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
                    day: 'friday',
                    length: '',
                    time: '2015-05-15 22:15:00',
                    venue: 'Voxhall'
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
                    day: 'saturday',
                    length: '',
                    time: '2015-05-16 23:30:00',
                    venue: 'Atlas'
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
                    day: 'saturday',
                    length: '',
                    time: '2015-05-16 21:15:00',
                    venue: 'Atlas'
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
                    day: 'saturday',
                    length: '',
                    time: '2015-05-16 20:00:00',
                    venue: 'Voxhall'
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
            },
            {
                active: true,
                country: 'DK',
                concert: {
                    day: 'thursday',
                    length: '',
                    time: '2015-05-14 23:00:00',
                    venue: 'Radar'
                },
                name: 'Secret Life',
                image: 'secretlife.jpg',
                info: 'Secret Life er en duo bestående af Patrick Kociszewskiog Bastian Emil. Bandet spiller mørk, aggressiv pop og har i det københavnske henrykket med energiske liveoptrædener. Lyden er skiftevis kølig og eksotisk, dansabel og melodiøs, mens Kociszewskis vokal er intens og pågående. Rytmerne er varierende og overraskende. Bandet er på vej med debutalbum.',
                size: 'small',
                slug: 'secretlife',
                sound: {
                    type: '',
                    link: '',
                    title: ''
                }
            },
            {
                active: true,
                country: 'US',
                concert: {
                    day: 'thursday',
                    length: '',
                    time: '2015-05-14 22:00:00',
                    venue: 'Radar'
                },
                name: 'Tomorrow\'s Tulips',
                image: 'tomorrowstulips.jpg',
                info: 'Tomorrow’s Tulips udgav deres debutalbum på Burger Records sidste år, en tilbagelænet, genrerystende sag med sirupssøde slowburners og glamaspirationer side om side med røgfulde eksperimenter.',
                size: 'small',
                slug: 'tomorrowstulips',
                sound: {
                    type: 'youtube',
                    link: 'XXnbvEsyfnk',
                    title: 'Flowers on the Wall'
                }
            },
            {
                active: true,
                country: 'US',
                concert: {
                    day: 'saturday',
                    length: '',
                    time: '2015-05-16 23:30:00',
                    venue: 'Radar'
                },
                name: 'Norman Blake & Jad Fair',
                image: 'normanblakeandjadfair.jpg',
                info: 'Jad Fair har siden 1980 udgivet noget af de mest forunderlige musik til at komme ud af USA med sit band Half Japanese, hvor Fairs dybt originale sange inspirerede af kærlighed og sci-fi/monstre-film pakkes ind i en musikalsk enkel og råt ubarberet ramme, hvilket sikret bandet vaskeægte kultstatus. Den uortodokse musik og den æstetiske naivisme kan virke chokerende på nogen, men Fairs talent er at skrive sange der taler direkte til hjertet. Sideløbende har den uhyre produktive Fair udgivet en lang række solo album, samt adskillige samarbejdsprojekter, som resulteret i album med blandt mange andre: Daniel Johnston, Moe Tucker(Velvet Underground), Yo La Tengo, The Pastels, Danielson, R. Stevie Moore og altså nu også Norman Blake, hvis band Teenage Fanclub Fair også tidligere har lavet et album med.\nNorman Blake kendes bedst som sanger, guitarist og sangskiver i Skotlands Teenage Fanclub, der må siges at være et absolut flagskib på den skotske musikscene. De debuterede i 1990, og nåede med deres tredje album "Bandwagonesque" fra 1991 ud til et større publikum. Et særdeles anmelderrost album, som kritikerne placerede højt på deres årslister. Med udgangspunkt i den frodige skotske indiescene fra firserne, kombinerer bandet en skramlet D.I.Y attitude med ypperlig sangskrivning inspireret af navne som Beach Boys, Badfinger, Byrds og Big Star (et band som Teenage Fanclub i øvrigt kraftigt været med til at øge fokus på). Deres stærkt melodiske lyd er let genkendelig, og deres helt egne lokale variant af powerpop, som de forfinet over hidtil ti album, har gjort bandet højt elsket verden over af fans.\nVi selvsagt utrolig stolte af at disse to musikalske genier slår hovederne sammen på Pop Revo 2015 - forvent det uventet.',
                size: 'small',
                slug: 'normanblakeandjadfair',
                sound: {
                    type: 'youtube',
                    link: 'TC1qkZT68G0',
                    title: 'Red Dress (Café&Pop Torgal)'
                }
            },
            {
                active: true,
                country: 'CA',
                concert: {
                    day: 'saturday',
                    length: '',
                    time: '2015-05-16 21:15:00',
                    venue: 'Radar'
                },
                name: 'US Girls',
                image: 'usgirls.jpg',
                info: 'Bag U.S Girls står Toronto-baseret Maghan Remy, der siden 2007 har spillet sin minimalistiske musik og visuelle kunst under navnet. Med en næsten militant attitude, der viser, hvor absolut nødvendig kunsten er for Remy, har hendes sange lænt sig op ad så forskellige inspirationskilder som firbåndsoptagelser, Springsteen-covers og den hippe artpopbaggrund hun selv kommer fra.',
                size: 'small',
                slug: 'usgirls',
                sound: {
                    type: 'youtube',
                    link: '9gPGflHGx7A',
                    title: 'Jack'
                }
            },
            {
                active: true,
                country: 'DK',
                concert: {
                    day: 'friday',
                    length: '',
                    time: '2015-05-15 23:30:00',
                    venue: 'Radar'
                },
                name: 'Marching Church',
                image: 'marchingchurch.jpg',
                info: 'Hvad der for Elias Bender Rønnenfeldt begyndte som et ritual alene er nu blevet til et maskulint rock-monster i form af projektet Marching Church. Omgivet af sine mest betroede venner har han svøbt sine sange ind i en tyk em af sex, agression, skrøbelighed og transformation og viser sig endnu en gang som en af de mest intense og interessant skikkelser i det nye årtusindes rock med albummet This World Is Not Enough, ude den 31. Marts på Sacred Bones.',
                size: 'small',
                slug: 'marchingchurch',
                sound: {
                    type: 'soundcloud',
                    link: 'https://soundcloud.com/sacredbones/marching-church-hungry-for-your-love/s-8znFd',
                    title: 'Hungry For Love'
                }
            },
            {
                active: true,
                country: 'US',
                concert: {
                    day: 'saturday',
                    length: '',
                    time: '2015-05-16 19:00:00',
                    venue: 'Radar'
                },
                name: 'Cheval Sombre',
                image: 'chevalsombre.jpg',
                info: 'Cheval Sombres univers er introspektivt, minimalistisk og svirrende. Musikken bærer spor af folk, sadcore og shoegaze, men befinder sig egentlig uden for genrer, tid og sted. Bag navnet gemmer sig et enmandsprojekt, der består af den New York-baserede sangskriver Christopher Porpora, som også har publiceret to digtsamlinger. I de sidste 7 år har han under navnet Cheval Sombre udgivet en håndfuld singler og to albums, senest højdepunktet "Mad Love" fra efteråret 2012. På sine indspilninger har Porpora ofte fået hjælp af MGMT, Dean Wareham (ex-Galaxie 500 og Luna), Britta Phillips og i særdeleshed Pete Kember (aka ”Sonic Boom” fra Spacemen 3). Efter at have oplevet Cheval Sombres magiske, næsten spirituelle koncert på sidste års Liverpool Psych Fest, har vi været opsatte på opleve Christopher Porpora fremføre sine lavmælte og drømmende sange i Danmark. Porpora optræder sjældent live og foretrækker små spillesteder med et hengivent publikum. På den baggrund er Pop Revo glade for at kunne præsentere Cheval Sombre i en atmosfærefyldt, akustisk solokoncert i intime rammer.',
                size: 'small',
                slug: 'chevalsombre',
                sound: {
                    type: 'youtube',
                    link: 'Jn5OFskAU_Q',
                    title: 'Walking in the Desert'
                }
            },
            {
                active: true,
                country: 'Aarhus',
                concert: {
                    day: 'thursday',
                    length: '',
                    time: '2015-05-14 20:00:00',
                    venue: 'Radar'
                },
                name: 'Projektet “Collision with an insignificant city”',
                image: 'collision.jpg',
                info: 'Aarhus er midt i en musikalsk oplysningstid. Projektet “Collision with an insignificant city” skal ses som en hyldest til og et tidsbillede af den undergrundsscene som gør Aarhus til en signifikant by på det musikalske landkort.\nMusikere fra den alternative aarhusianske bands samles under navnet “Collision with an insignificant city” til en fælles koncert på Radar torsdag under Pop Revo, ud fra et ønske om at tydeliggøre og dokumentere scenens rivende udvikling. Koncerten optages og udgives som dobbeltvinyl. “Collison with an insignificant city” kurateres af forsanger Mikkel Holm fra det fremadstormende aarhusiansk rockorkester, Yung.',
                size: 'medium',
                slug: 'collision',
                sound: {
                    type: 'youtube',
                    link: '4gpu62Ps0B4',
                    title: 'Yung: Nobody Cares'
                }
            },
            {
                active: true,
                country: 'DK/US',
                concert: {
                    day: 'saturday',
                    time: '2015-05-17 01:30:00',
                    venue: 'Radar'
                },
                name: 'Total Heels',
                image: 'totalheels.jpg',
                info: 'Total Heels har taget vejen udenom Danmark og direkte til USA i deres musikalske færd - både når det kommer til deres lyd og deres vej fra undergrund til Pitchfork, Spin og Noisey.\nOg dog er man ikke et øjeblik i tvivl om, at Københavns DIY-scene er kvartettens ophav - heller ikke selvom forsanger Jason Orlovich stadig af og til kommer direkte til koncerterne fra sin egen hjemstavn i USA - og heller ikke selvom Total Heels musikalske referencer peger mere mod The Men, Crystal Stilts, Ty Segall og Steve Wynn end Mayhem og Pærepunk.\nTransatlantisk eller ej, Total Heels’ er ubesværet, direkte, underholdende og rammende rock til hyldepladsen mellem “classic rock” og “støjrock”.',
                size: 'small',
                slug: 'totalheels',
                sound: {
                    type: 'youtube',
                    link: 'H8qddzw6wsc',
                    title: 'Exhaus Trier'
                }
            },
            {
                active: true,
                country: 'DK',
                concert: {
                    day: 'friday',
                    time: '2015-05-15 19:00:00',
                    venue: 'Atlas'
                },
                name: 'Molly',
                image: 'molly.jpg',
                info: 'Den københavnske punk/rock trio Molly blev dannet i 2012. Molly har tidligere udgivet Live På Floss (2012) og Hernia (2013) og er nu aktuelle med udgivelsen Peach Melba (2015). Mollys udgangspunkt er “alternativ rock”, den dejligt bredde genrebetegnelse, som udgør et elastisk legerum for mangt et dansk band. Med Peach Melba indblander Molly særligt en skødesløs punkattitude.',
                size: 'small',
                slug: 'molly',
                sound: {
                    type: 'youtube',
                    link: '8TYQjPCoTd0',
                    title: 'Bagu Bagu'
                }
            },
            {
                active: true,
                country: 'DK',
                concert: {
                    day: 'friday',
                    time: '2015-05-15 21:15:00',
                    venue: 'Radar'
                },
                name: 'Thulebasen',
                image: 'thulebasen.jpg',
                info: 'Thulebasen er ægte Pop Revo-darlinger. Faktisk bliver koncerten til Pop Revo 2015 deres tredje koncert på festivalen, ligesom de i år arbejder på deres tredje album, opfølgeren til den stærkt roste Gate 5. Som midtpunkt i bandet er Nis Bysted, der såmænd også er medejer af Escho og producer for en lang række af danske bands som Iceage, Choir Of Young Believers og Lower. Sidstnævnte spillede Thulebasen faktisk med, sidst de gæstede Pop Revo. Hvad der er i vente er ikke godt at vide, for trioen er evigt omskiftelig - siden sidst fået ny trommeslager, mens liveoplevelsen er lige så eksplosiv.',
                size: 'small',
                slug: 'thulebasen',
                sound: {
                    type: 'youtube',
                    link: 'zasX55vJW3g',
                    title: 'Raga Gemini'
                }
            },
            {
                active: true,
                country: 'DK',
                concert: {
                    day: 'friday',
                    time: '2015-05-15 21:15:00',
                    venue: 'Atlas'
                },
                name: 'Jonas Munk/Nicklas Sørensen',
                image: 'jonasmunknicklassoerensen.jpg',
                info: 'Sammen vil Jonas Munk og Nicklas Sørensen, med udgangspunkt i materiale fra Jonas Munk\'s soloudgivelser og Nicklas Sørensens kommende plade, bevæge sig ud på en semi-improviseret rejse, hvor adskillige lag af analoge synthesizere og guitar fuzz væves sammen til en bevidsthedsudvidende helhed.\nUdover at spille guitar i syrebandet Causa Sui kører Jonas Munk pladeselskabet El Paraiso Records og har udgivet to album under sit borgerlige navn. Pladerne udforsker grænselandet mellem meditativ minimalisme og frit flydende psychedelia. Nicklas Sørensen er til dagligt guitarist i bandet Papir og arbejder i øjeblikket på sin solo debutplade. ',
                size: 'small',
                slug: 'jonasmunknicklassoerensen',
                sound: {
                    type: 'youtube',
                    link: '5fbd79t6OUk',
                    title: 'Current'
                }
            },
            {
                active: true,
                country: 'DK',
                concert: {
                    day: 'friday',
                    time: '2015-05-15 19:00:00',
                    venue: 'Radar'
                },
                name: 'Liss',
                image: 'liss.jpg',
                info: 'De fire aarhusianeres pressefoto ligner et ungdomsportræt fra 9’0erne og gennem Liss’ musik erfarer man, at 80‘erne ikke har levet forgæves. I den ovenud lovende kvartets vellydende fortolkninger bliver de to årtiers æstetikker forløs som moderne popmusik mellem slapbas, Arthur Russell, First Hate og Rhye. Liss udsendte deres første nummer nummer, “Try”, for et par måneder siden, men allerede opnået over 20.000 Soundcloud-plays, supportet såvel Dean Blunt som Jungle, og er dermed godt på vej ud over stepperne allerede.',
                size: 'small',
                slug: 'liss',
                sound: {
                    type: 'soundcloud',
                    link: 'https://soundcloud.com/liss2014/try',
                    title: 'Try'
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