function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
};

var teams = {
 	'Chelsea' :{
 		'attack': 90,
		'defence': 6.5,
		'goals' : 4.6,
		'opponents' : [],
		'players' : {
			'Costa' : 9.9,
			'Hazard' : 6.1,
			'Pedro' : 4.1,
			'William' : 3.1,
			'Luiz': 1.4,
			'Cahill' : 0.4,
			'Fabregas' : 2.1,
			'Matic': 0.9,
			'Kante' : 0.3
		}
  	},
 	'Middlesborough' : {
	 	'attack' : 74,
		'defence' :4,
		'goals' : 3.8,
		'opponents' : [],
		'players' : {
			'Gestede' : 9.8,
			'Downing' : 7.9,
			'Ramirez' : 6.4 ,
			'Negredo' : 4.9,
			'Leadbitter' : 3.4,
			'de Roon' : 0.4,
			'Clayton' : 2.4,
			'Traore' : 1.4

		}
 	},
 	'Leicester' : {
	 	'attack' : 83,
		'defence' :4,
		'goals' : 4.4,
		'opponents' : [],
		'players' : {
			'Vardy' : 9.9,
			'Mahrez' : 6.9,
			'Slimani' : 5.4, 
			'Drinkwater' : 3.4, 
			'Okazaki' : 2.4, 
			'Huth' : 1.4, 
			'Morgan' : 0.9, 
			'Fuchs' : 0.4, 
		}

 	},
 	'Arsenal' : {
	 	'attack' : 88,
		'defence' :5,
		'goals' : 4.6,
		'opponents' : [],
		'players': {
			'Sanchez' : 9.9,
			'Giroud' : 6.6,
			'Ozil' : 2.1,
			'Ramsey' : 3.4,
			'Koscielny': 0.4,
			'Oxlade Chamberlain' : 1.1,
			'Walcott' :  4.9 
		}
 	},
 	'Manchester United' : {
	 	'attack' : 85,
		'defence' :6,
		'goals' : 4.5,
		'opponents' : [],
		'players': {
			'Ibrahimovic' : 9.9,
			'Rashford' : 7.1,
			'Mata' : 4.4,
			'Martial' : 5.7,
			'Mkhitaryan' : 3.3,
			'Herrera' : 1.2,
			'Pogba' : 2.2,
			'Smalling' : 0.7,
			'Valencia' : 0.3 


		}
 	},
 	'Manchester City' : {
	 	'attack' : 92,
		'defence' :5,
		'goals' : 4.8,
		'opponents' : [],
		'players' : {
			'Aguero' : 9.9,
			'Jesus' : 7.4,
			'De Bruyne' : '6.1',
			'Sterling': 4.9,
			'Sane' : 3.9,
			'Silva' : 2.9,
			'Toure' : 2.1,
			'Kolarov' : 0.7,
			'Kompany' : 0.3,
			'Fernandinho' : 1.3
		}
 	},
 	'Liverpool' : {
	 	'attack' : 88,
		'defence' :5,
		'goals' : 4.6,
		'opponents' : [],
		'players' : {
			'Mane' : 9.9,
			'Coutinho': 7.9,
			'Firminho' : 6.4,
			'Lallana' : 4.9,
			'Origi' : 3.9,
			'Henderson': 3.1,
			'Wjinaldum' : 2.3,
			'Milner' : 0.8,
			'Sturridge' : 1.5,
			'Clyne' : 0.2

		}
 	},
 	'Everton' : {
	 	'attack' : 83,
		'defence' :4.6,
		'goals' : 4.2,
		'opponents' : [],
		'players' : {
			'Lukaku' : 9.9,
			'Barkley' : 6.4,
			'Mirallas' : 5.4,
			'Baines' : 3.4,
			'Jagielka' : 2.9,
			'E.Valencia' : 4.4,
			'Schneiderlein' : 2.4,
			'Williams' : 1.9,
			'Davies' : 1.4,
			'Gueye' : 0.9,
			'Coleman': 0.4
			}
 	},
 	'Burnley' : {
	 	'attack' : 78,
		'defence' :4.5,
		'goals' : 4.1,
		'opponents' : [],
		'players' : {
			'Vokes' : 9.9,
			'Gray' : 8.4,
			'Barnes' : 6.9,
			'Brady' : 5.4,
			'Boyd': 3.9,
			'Keane' : 2.9,
			'Hendrick' : 1.9,
			'Ward' : 0.9
		}
 	},
 	'Southampton' : {
	 	'attack' : 80,
		'defence' :4.8,
		'goals' : 4.2,
		'opponents' : [],
		'players' : {
			'Gabbiadini' : 9.9,
			'Redmond' : 7.4,
			'Tadic' : 6.4,
			'Højbjerg' : 4.9,
			'Ward-Prowse' : 3.9,
			'Davis' : 2.9,
			'Long' : 1.9,
			'Yoshida' : 0.9,
			'Van Dijk' : 0.4


		}
 	},
 	'Stoke' : {
	 	'attack' : 79,
		'defence' :4.7,
		'goals' : 4.1,
		'opponents' : [],
		'players' : {
			'Arnautovic' : 9.9,
			'Crouch' : 6.4,
			'Shaqiri' : 5.2,
			'Bojan' : 7.9,
			'Walters' : 2.8,
			'Pieters' : 1.8,
			'Berahino' : 4.0,
			'Shawcross' : 0.4,
			'Cameron' : 1.1

		}
 	},
 	'Sunderland' : {
	 	'attack' : 71,
		'defence' :3.8,
		'goals' : 3.6,
		'opponents' : [],
		'players' : {
			'Defoe' : 9.9,
			'Anichebe' : 4.9,
			'Borini' : 3.9,
			'Januzaj' : 2.9,
			'Ndong' : 2.4,
			'Khazri' : 1.9,
			'Rodwell' : 1.4,
			'Kone' : 0.9,
			"O'Shea" : 0.4
		}
 	},
 	'Crystal Palace' : {
	 	'attack' : 79,
		'defence' :4.3,
		'goals' : 4.1,
		'opponents' : [],
		'players' : {
			'Benteke' : 9.9,
			'Zaha' : 6.9,
			'McCarthur' : 5.4,
			'Townsend' : 4.4,
			'Wickham' : 3.4,
			'Cabaye' : 2.4,
			'Dann' : 1.4,
			'Tomkins' : 0.4
		}
 	},
 	'Tottenham' : {
	 	'attack' : 89,
		'defence' :6,
		'goals' : 4.7,
		'opponents' : [],
		'players' : {
			'Kane' : 9.9,
			'Alli' : 6.4,
			'Erikksen' : 3.3,
			'Lamela' : 2.3,
			'Dembele' : 1.5,
			'Son' : 4.7,
			'Walker' : 1.0,
			'Alderwiereld' : 0.2,
			'Rose' : 0.6
		}
 	},
 	'West Ham' : {
	 	'attack' : 78,
		'defence' :4.5,
		'goals' : 4.0,
		'opponents' : [],
		'players' : {
			'Carroll' : 9.9,
			'Antonio' :  4.7,
			'Ayew' : 7.4,
			'Snodgrass' : 3.7,
			'Noble' : 2.7,
			'Lanzini' : 5.9,
			'Kouyate' : 0.9,
			'Collins ' :0.4,
			'Feghouli' : 1.7

		}
 	},
 	'Bournemouth' : {
	 	'attack' : 79,
		'defence' :4.1,
		'goals' : 4.1,
		'opponents' : [],
		'players' : {
			'King' : 9.9,
			'Afobe' : 5.8,
			'Wilson' : 5.3,
			'Stanislas' : 4.1,
			'Gosling' : 2.9,
			'Fraser' : 2.0,
			'Daniels' : 1.2,
			'Arter' : 0.7,
			'Gradel ' : 0.3
		}
 	},
 	'West Brom' : {
	 	'attack' : 79,
		'defence' :4.7,
		'goals' : 4.1,
		'opponents' : [],
		'players' : {
			'Rondon' : 9.9,
			'Robson-Kanu' : 5.2,
			'Chadli' : 6.7,
			'Fletcher' : 4.2,
			'Philips' : 7.9,
			'McClean' : 3.2,
			'Morrison' : 2.2,
			'McCauley' : 1.2,
			'Dawson' : 0.4

		}
 	},
 	'Hull' : {
	 	'attack' : 74,
		'defence' :4.2,
		'goals' : 3.9,
		'opponents' : [],
		'players' : {
			'Niasse' : 9.9,
			'Diomande' : 7.9,
			'Hernandez' : 6.0,
			'Mason' : 4.5,
			'Huddlestone': 1.9,
			'Dawson' : 2.8,
			'Maguire' : 1.1,
			'Meyler' : 0.4,

		}
 	},
 	'Swansea' : {
	 	'attack' : 76,
		'defence' :4.1,
		'goals' : 4,
		'opponents' : [],
		'players' : {
			'Llorente' : 9.9,
			'Siggurdson' : 6.9,
			'Routledge' : 3.2,
			'Fer' : 4.4,
			'Carrol' : 1.4,
			'Mawson' : 0.9,
			'Olsson' : 0.4,
			'Cork' : 2.2
		}
 	},
 	'Watford' : {
	 	'attack' : 78,
		'defence' :4.5,
		'goals' : 4,
		'opponents' : [],
		'players' : {
			'Deeney' : 9.9,
			'Niang' : 7.4,
			'Okaka' : 5.4,
			'Success' : 3.9,
			'Capoue' : 2.9,
			'Kaboul' : 1.4,
			'Kabesele' : 0.9,
			'Pereyra' : 0.4
		}
 	},


};

var totalScorers = {};

var leagueObject = {};
var teamsNamesArray = Object.keys(teams);
for(team in teams){
	leagueObject[team] = {for: 0, against: 0,  points: 0, diff : 0};
};

var allFixtureObject =  {};
fixtureCounter = 0;

//populate each fixture round with empty array

for(i=0;i<=18;i++){
 allFixtureObject[i] = []
};




// key functions for scheduling algorithm:

for(i=19; 1>=1; i--){
	var teamsNamesArray = Object.keys(teams);
	var zeroIndexOpponent = teamsNamesArray.splice(i, 1);
	var firstTeam = teamsNamesArray.splice(0, 1);
	var numberOfArrayShifts = 19 - i;
	for(y=0;y<numberOfArrayShifts;y++){
		teamsNamesArray.splice(0, 0, teamsNamesArray.pop())	
	};
	allFixtureObject[i-1].push([firstTeam[0],zeroIndexOpponent[0]] );
	for(x=0; x<= 8; x++){
		var firstTeam = teamsNamesArray[x];
		var lastTeam =  teamsNamesArray[17 - x] ;
		allFixtureObject[i-1].push([firstTeam,lastTeam]);
	};
}

