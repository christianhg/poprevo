(function () {
    'use strict';

    angular
        .module('poprevo')
        .factory('festivals', festivals);

    function festivals() {
        var festivalList = [
            {
                year: "2004",
                poster: "2004.jpg",
                lineup: [
                    "Action Bikers (SE)",
                    "Broken Family Band (UK)",
                    "Comet Gain (UK)",
                    "Epic 45 (UK)",
                    "James William Hindle (UK)",
                    "July Skies (UK)",
                    "Paddington DC (SE)",
                    "The Clientele (UK)",
                    "The Radio Dept. (SE)",
                    "Tompaulin (UK)",
                    "Twig (SE)"
                ]
            },
            {
                year: "2005",
                poster: "2005.jpg",
                lineup: [
                    "Ampel (DK)",
                    "Honeydrips (SE)",
                    "Labrador (DK)",
                    "Larsen & Furious Jane (DK)",
                    "Louis Phillippe (UK)",
                    "Lovejoy (UK)",
                    "Melvis & The Papercuts (DK)",
                    "Rough Bunnies (SE)",
                    "Sambassadeur (SE)",
                    "Suburban Kids With Biblical Names (SE)",
                    "Television Personalities (UK)",
                    "The Clientele (UK) with Gary Olsson (SE)"
                ]
            },
            {
                year: "2006",
                poster: "2006.jpg",
                lineup: [
                    "BMX Bandits (SCO)",
                    "Harpet Lee (UK)",
                    "In Time (DK)",
                    "Jacob Faurholt & Sweetie Pie Wilbur (DK)",
                    "Montgolfier Brothers (UK)",
                    "Most Vauable Players (SE)",
                    "Otur (SE)",
                    "Paddinton DC (SE)",
                    "Reviving Aeris (DK)",
                    "Scaredycat (DK)",
                    "Secret Shine (UK)", "The Cakekitchen (NZ)" ,"The Embassy (SE)", "Whitest Boy Alive (N/DE)"
                ]
            },
            {
                year: "2007",
                poster: "2007.jpg",
                lineup: [
                    "Almedal (SE)", "Days (SE)", "Garfunkel & Garfunkel (DK)", "I Was A King (N)", "Jab Miea Och El (DK)", "Jens Lekman (SE)", "Kirsten Ketsjer (DK)", "Mathew Sawyer and the Ghosts (UK)", "Per Hoier (DK)", "Rumskib (DK)", "Scarlet's Well (UK)", "St. Christopher (UK)", "The Elephants (DK)", "The Twillight Sad (SCO)", "Vapnet (SE)", "Would-Be-Goods (UK)"
                ]
            },
            {
                year: "2008",
                poster: "2008.jpg",
                lineup: [
                    "Cola Freaks (DK)", "Efterklang (DK)", "El Perro Del Mar (US)", "Frightened Rabbit (SCO)", "Larsen & Furious Jane (DK)", "Momus (SCO)", "Speaker Bite Me (DK)", "The Brunettes (NZ)", "White Magic (US)", "Xiu Xiu (US)", "18th Dye (DK/D)"
                ]
            },
            {
                year: "2009",
                poster: "2009.jpg",
                lineup: [
                    "Casiotune For The Painfully Alone (US)", "Choir of Young Believers (DK)", "Gang Gang Dance (US)", "Lily Electric (DK)", "Love IS All (DK)", "Slaraffenland (DK)", "Sunset Rubdown (CAN)", "Television Personalities (UK)", "The Bear Quartet (SE)"
                ]
            },
            {
                year: "2010",
                poster: "2010.jpg",
                lineup: [
                    "Bear In Heaven (US)", "Caribou (US)", "Field Music (UK)", "Figurines performing Skeleton (DK)", "Manual (DK)", "The Kissaway Trail (DK)", "The Rumour Said Fire (DK)"
                ]
            },
            {
                year: "2011",
                poster: "2011.jpg",
                lineup: [
                    "Capillary Action (US)", "Deerhoof (US)", "Flag White (DK)", "Goodiepal (FO)", "Iceage (DK)", "Owen Pallett (CAN)", "Paper (S)", "Sail A Whale (SE)", "Sleep Party People (DK)", "The New Spring (DK)", "Thulebasen (DK)"
                ]
            },
            {
                year: "2012",
                poster: "2012.png",
                lineup: [
                    "Amor de Días (UK/SP)", "Austra (CAN)", "Cloud Nothings (US)", "Deathcrush (N)", "Errors (SCO)", "Factory Floor (UK)", "Fossils (DK)", "Grimes (CAN)", "Happy Hookers For Jesus (DK)", "Hayvanlar Alemi (TUR)", "Lower (DK)", "Lower Dens (US)", "Moonface (CAN)", "Snaredrum (DK)", "Swearing At Motorists (US)", "The New Spring (DK)", "The Soft Moon (US)"
                ]
            },
            {
                year: "2013",
                poster: "2013.jpg",
                lineup: [
                    "Causa Sui (DK)", "Comet Gain (US)", "Emenkaya (DK)", "Forest Swords (UK)", "Happy Hookers For Jesus (DK)", "How To Dress Well (US)", "Lower (DK)", "Mikal Cronin (US)", "Mount Eerie (US)", "Paddinton DC (SE)", "Pins (UK)", "R. Stevie Moore (US)", "Shugo Tokumaru (JP)", "Synd Og Skam (DK)", "The Clientele (UK)", "The Rumour Said Fire (DK)", "Thulebasen (DK)", "Veronica Falls (UK)", "Widowspeak (US)", "Woods (US)"
                ]
            },
            {
                year: "2014",
                poster: "2014.jpg",
                lineup: [
                    "Ed Schrader's Music Beat (US)", "EMA (US)", "Future Islands (US)", "Hospitality (US)", "Kristian Harting (DK)", "Less Win (DK)", "Nobody (DK)", "Perennal Flax (DK)", "Pow! (US)", "Sean Nicholas Savage (CAN)", "Snaredrum (DK) vs Swearing At Motorists (US)", "Speedy Ortiz (US)", "The Silver Linings (DK)", "Tremoro Tarantura (N)", "Yung (DK)", "ZZZ's (JP)"
                ]
            }
        ];

        return {
            'index': function() {
                return festivalList;
            }
        };
    }

})();