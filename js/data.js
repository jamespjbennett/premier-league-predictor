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
	'Cardiff':{
 		'attack': 75,
		'defence': 4,
		'goals' : 3.9,
		'opponents' : [],
		'players' : {
			'Paterson' : 9.9,
			'Hoilett' : 8.1,
			'Zohore' : 8.1,
			'Rails' : 5.1,
			'Morrison': 5.0,
			'Mendez-Laing' : 4.0,
			'Ward' : 3.0,
			'Bamba': 2.5,
			'Pilkington': 2.0,
			'Bryson' : 1.5,
			'Gunnarsson': 1.0,
			'Bennett': 1.0,
			'Grujic': 1.0,
			'Manga': 0.5,
			'Peltier': 0.3,
		}
	},
	'Fulham':{
 		'attack': 79,
		'defence': 3.7,
		'goals' : 4.2,
		'opponents' : [],
		'players' : {
			'Mitrovic' : 9.9,
			'Sessegnon' : 8.1,
			'Johansen' : 5.1,
			'Kamara' : 5.1,
			'Cairney': 4.0,
			'Piazon': 3.0,
			'Norwood': 3.0,
			'Ayite': 2.0,
			'Ojo': 2.0,
			'Mcdonald': 1.0,
			'Kebano': 1.0,
			'Fonte': 1.0,
			'Odoi': 0.7,
			'Targett': 0.5,
			'Ream': 0.4,
		}

	},
	'Huddersfield':{
 		'attack': 77,
		'defence': 3.7,
		'goals' : 4.0,
		'opponents' : [],
		'players' : {
			'Mounie' : 9.9,
			'Depoitre' : 8.1,
			'Mooy' : 7.1,
			'Van La Parra' : 6.5,
			'Ince': 6.4,
			'Pritchard': 6.1,
			'Kachunga': 5.5,

		}
	},
	'Wolves':{
 		'attack': 79,
		'defence': 3.8,
		'goals' : 4.2,
		'opponents' : [],
		'players' : {
			'Jota' : 9.9,
			'Bonatini' : 7.1,
			'Caveleiro' : 5.1,
			'Afobe' : 4.1,
			'Neves': 4.0,
			'Douglas': 3.0,
			'Costa': 3.0,
			'Doherty': 2.5,
			'Saiss': 2.5,
			"N'Diaye": 1.5,
			"Boly": 1.5,
			"Enobakhare": 1.5,
			"Coady": 0.5,
			"Batth": 0.5,
			"Burr": 0.5,
			"Vinagre": 0.5,
		}
	},
	'Brighton':{
 		'attack': 77,
		'defence': 3.5,
		'goals' : 4.1,
		'opponents' : [],
		'players' : {
			'Murray' : 9.9,
			'Groß' : 6.0,
			'Izquierdo' : 4.0,
			'Knockaert' : 2.5,
			'Temed' : 2.0,
			'Locadia' : 1.0,
			'Ulloa' : 1.0,
			'Dunk' : 1.0,
			'March' : 1.0,

		}
	},
	'Newcastle':{
 		'attack': 79,
		'defence': 3.7,
		'goals' : 4.2,
		'opponents' : [],
		'players' : {
			'Perez' : 9.9,
			'Gayle' : 8.1,
			'Joselu' : 7.1,
			'Lascelles' : 2.1,
			'Ritchie': 4.0,
			'Atsu': 3.0,
			'Clark': 3.0,
			'Diame': 3.0,
			'Kenedy': 3.0,
			'Shelvey': 4.0,
			'Hayden': 2.0,
			'Murphy': 2.0,
			'Merino': 2.0,
		}
	},

 	'Chelsea' :{
 		'attack': 85,
		'defence': 6.3,
		'goals' : 4.4,
		'opponents' : [],
		'players' : {
			'Morata' : 9.9,
			'Hazard' : 8.1,
			'Giroud' : 7.5,
			'Willian' : 4.1,
			'Pedro': 3.5,
			'Alonso' : 2.4,
			'Fabregas' : 1.5,
			'Bakayoko': 1.5,
			'Moses': 1.3,
			'Cahill' : 1.0,
			'Azpilicueta': 1.0,
		}
  	},
 	'Manchester United' : {
	 	'attack' : 85,
		'defence' :6,
		'goals' : 4.5,
		'opponents' : [],
		'players': {
			'Lukaku' : 9.9,
			'Rashford' : 5.5,
			'Sanchez' : 5.5,
			'Mata' : 3.0,
			'Lingard' : 4.0,
			'Martial' : 5.7,
			'Fred' : 1.2,
			'Matic' : 0.8,
			'Pogba' : 2.9,
			'Smalling' : 0.7,
			'Fellaini' : 2.5,
			'Bailly' : 0.7,
			'Valencia' : 0.3,
			'Lindelof' : 0.3,
			'Jones' : 0.3,
			'Young' : 0.9,
		}
 	},
 	'Leicester' : {
	 	'attack' : 82,
		'defence' :4,
		'goals' : 4.3,
		'opponents' : [],
		'players' : {
			'Vardy' : 9.9,
			'Mahrez' : 6.9,
			'Okazaki' : 4.4, 
			'Gray' : 4.5, 
			'Ineanacho' : 3.5, 
			'Iborra' : 1.4, 
			'Maguire' : 1.4, 
			'Albrighton' : 1.0, 
			'Silva' : 1.0, 
			'Ndidi' : 1.0, 

		}

 	},
 	'Arsenal' : {
	 	'attack' : 86,
		'defence' :4.8,
		'goals' : 4.6,
		'opponents' : [],
		'players': {
			'Aubameyang' : 9.9,
			'Lacazette' : 8.0,
			'Ramsey' : 5.0,
			'Welbeck' : 3.8,
			'Monreal': 2.2,
			'Ozil' : 3.5,
			'Iwobi' :  2.5,
			'Mkhitaryan' : 3.5,
			'Leichsteiner' : 1.5,
			'Bellerin' : 1.0,
			'Koscielny' : 1.0,
			'Xhaka' : 2.0,
			'Kolasinac' : 2.0,
		}
 	},
 	'Manchester City' : {
	 	'attack' : 94,
		'defence' :5.3,
		'goals' : 4.9,
		'opponents' : [],
		'players' : {
			'Aguero' : 9.9,
			'Jesus' : 7.4,
			'De Bruyne' : 4.9,
			'Bernardo Silva' : 2.0,
			'Sterling': 6.1,
			'Sane' : 4.9,
			'Silva' : 2.9,
			'Kompany' : 0.3,
			'Otamendi' : 0.8,
			'Fernandinho' : 1.3,
			'Stones' : 0.5,
			'Mendy' : 0.5,
			'Walker' : 0.3,
		}
 	},
 	'Liverpool' : {
	 	'attack' : 89,
		'defence' :4.9,
		'goals' : 4.7,
		'opponents' : [],
		'players' : {
			'Salah' : 9.9,
			'Mane': 6.4,
			'Firminho' : 6.4,
			'Lallana' : 4.9,
			'Keita': 3.1,
			'Fabinho': 2.0,
			'Henderson': 1.0,
			'Wjinaldum' : 1.0,
			'Van Dijk' : 0.8,
			'Chamberlain' : 1.5,
			'Milner' : 0.8,
			'Robertson' : 0.2

		}
 	},
 	'Everton' : {
	 	'attack' : 83,
		'defence' :4.6,
		'goals' : 4.2,
		'opponents' : [],
		'players' : {
			'Tosun' : 9.9,
			'Niasse' : 7.0,
			'Calvert-Lewin' : 5.4,
			'Sigursson' : 6.0,
			'Walcott' : 5.3,
			'Bolasie' : 4.0,
			'Williams' : 1.9,
			'Davies' : 1.4,
			'Gueye' : 0.9,
			'Coleman': 0.4,
			'Davies': 1.0,
			'McCarthy': 0.5,
			}
 	},
 	'Burnley' : {
	 	'attack' : 79,
		'defence' :4.6,
		'goals' : 4.3,
		'opponents' : [],
		'players' : {
			'Vokes' : 7.0,
			'Wood' : 9.9,
			'Barnes' : 6.9,
			'Cork' : 5.0,
			'Hendrick': 3.9,
			'Gudmundsson' : 2.3,
			'Arfield' : 2.0,
			'Long' : 1.0,
			'Brady' : 1.0,
			'Ward' : 1.0,
			'Lennon' : 1.0,
			'Defour' : 1.0,
		}
 	},
 	'Southampton' : {
	 	'attack' : 78,
		'defence' :4.3,
		'goals' : 4.1,
		'opponents' : [],
		'players' : {
			'Austin' : 9.9,
			'Tadic' : 7.4,
			'Gabbiadini' : 6.4,
			'Højbjerg' : 4.9,
			'Ward-Prowse' : 3.9,
			'Davis' : 2.9,
			'Long' : 2.9,
			'Yoshida' : 0.9,
			'Davis' : 3.6,
			'Stephens' : 3.2,
			'Boufal' : 2.5,
			'Bertrand' : 2.0,
		}
 	},
 	'Crystal Palace' : {
	 	'attack' : 78,
		'defence' :4.5,
		'goals' : 4.0,
		'opponents' : [],
		'players' : {
			'Benteke' : 9.9,
			'Zaha' : 7.5,
			'Milivojevic' : 7.5,
			'McCarthur' : 4.4,
			'Townsend' : 4.4,
			'Cabaye' : 2.4,
			'Dann' : 1.4,
			'Tomkins' : 0.4,
			'Sako' : 0.4,
			'Tomkins' : 0.4,
			'Loftus-Cheek' : 1.5,
			'Sakho' : 1.0,
			'Cabaye' : 1.0
		}
 	},
 	'Tottenham' : {
	 // 	'attack' : 94,
		// 'defence' :5.3,
		// 'goals' : 4.9,
	 	'attack' : 90,
		'defence' :5.7,
		'goals' : 4.6,
		'opponents' : [],
		'players' : {
			'Kane' : 9.9,
			'Alli' : 4.5,
			'Erikksen' : 5.0,
			'Lamela' : 2.3,
			'Dembele' : 1.5,
			'Son' : 5.0,
			'Alderwiereld' : 0.2,
			'Rose' : 0.6,
			'Davies' : 0.6,
			'Dier' : 0.6,
			'Davinson Sanchez' : 0.6,
			'Vertonghen' : 0.6,
			'Moura' : 1.5,
		}
 	},
 	'West Ham' : {
	 	'attack' : 78,
		'defence' :4.5,
		'goals' : 4.0,
		'opponents' : [],
		'players' : {
			'Arnautovic' : 9.9,
			'Chicarito' : 9.0,
			'Lanzini' : 5.0,
			'Carroll' : 5.0,
			'Joao Mario' : 3.5,
			'Antonio' :  3.5,
			'Noble' : 2.7,
			'Kouyate' : 2.5,
			'Collins ' :0.4,
			'Obiang ' :0.4,
			'Ogbonna ' :0.4,
			'Reid ' :0.4,

		}
 	},
 	'Bournemouth' : {
	 	'attack' : 79,
		'defence' :4.1,
		'goals' : 4.1,
		'opponents' : [],
		'players' : {
			'King' : 9.9,
			'Wilson' : 9.9,
			'Stanislas' : 5.0,
			'Gosling' : 2.9,
			'Fraser' : 5.0,
			'Daniels' : 1.2,
			'Defoe' : 4.0,
			'Arter' : 0.7,
			'Ibe' : 2.0,
			'Ake' : 0.5,

		}
 	},
 	'Watford' : {
	 	'attack' : 78,
		'defence' :4.5,
		'goals' : 4,
		'opponents' : [],
		'players' : {
			'Deeney' : 6.0,
			'Doucoure' : 9.9,
			'Capoue' : 1.5,
			'Gray' : 7.0,
			'Richarlison' : 7.0,
			'Pereyra' : 7.0,
			'Janmaat' : 4.0,
			'Kabasele' : 2.0,
			'Hughes' : 2.0,
			'Carrilo' : 2.0,
			'Femenia' : 2.0,
			'Okaka' : 2.0,
			'Wague' : 2.0,
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

