Array.prototype.sum = function (prop) {
    var total = 0
    for ( var i = 0, _len = this.length; i < _len; i++ ) {
        total += this[i][prop]
    }
    return total
}

teamsV2 = {
 	'Manchester United' : {
		'players': {
			'Lukaku' : {
				'name' : 'Lukaku',
				'scoreChance' : 9.9,
				'defence': 40,
				'attack': 82,
			},
			'Rashford' : {
				'name' : 'Rashford',
				'scoreChance' : 5.5,
				'defence': 20,
				'attack': 73,
			},
			'Sanchez' : {
				'name' : 'Sanchez',
				'scoreChance' : 5.5,
				'defence': 29,
				'attack': 77,
			},
			'Mata' : {
				'name' : 'Mata',
				'scoreChance' : 3.0,
				'defence': 22,
				'attack': 69,
			},
			'Lingard' : {
				'name' : 'Lingard',
				'scoreChance' : 4.0,
				'defence': 35,
				'attack': 73,
			},
			'Martial' : {
				'name' : 'Martial',
				'scoreChance' : 5.7,
				'defence': 22,
				'attack': 77,
			},
			'Fred' : {
				'name' : 'Fred',
				'scoreChance' : 1.2,
				'defence': 50,
				'attack': 60,
			},
			'Matic' : {
				'name' : 'Matic',
				'scoreChance' : 0.8,
				'defence': 65,
				'attack': 60,
			},
			'Pogba' : {
				'name' : 'Pogba',
				'scoreChance' : 2.9,
				'defence': 45,
				'attack': 70,
			},
			'Smalling' : {
				'name' : 'Smalling',
				'scoreChance' : 0.7,
				'defence': 73,
				'attack': 30,
			},
			'Fellaini' : {
				'name' : 'Fellaini',
				'scoreChance' : 2.5,
				'defence': 58,
				'attack': 65,
			},
			'Bailly' : {
				'name' : 'Bailly',
				'scoreChance' : 0.7,
				'defence': 85,
				'attack': 30,
			},
			'Valencia' : {
				'name' : 'Valencia',
				'scoreChance' : 0.3,
				'defence': 70,
				'attack': 40,
			},
			'Lindelof' : {
				'name' : 'Lindelof',
				'scoreChance' : 0.3,
				'defence': 80,
				'attack': 25,
			},
			'Jones' : {
				'name' : 'Jones',
				'scoreChance' : 0.3,
				'defence': 75,
				'attack': 25,
			},
			'Young' : {
				'name' : 'Young',
				'scoreChance' : 0.9,
				'defence': 70,
				'attack': 50,
			},
		}
 	},
 	'Bournemouth' : {
		'players' : {
			'King' : {
				'name' : 'King',
				'scoreChance' : 9.9,
				'defence': 25,
				'attack': 68,
			},
			'Wilson' : {
				'name' : 'Wilson',
				'scoreChance' : 9.9,
				'defence': 20,
				'attack': 68,
			},
			'Stanislas' : {
				'name' : 'Stanislas',
				'scoreChance' : 5.0,
				'defence': 20,
				'attack': 58,
			},
			'Gosling' : {
				'name' : 'Gosling',
				'scoreChance' : 2.9,
				'defence': 35,
				'attack': 44,
			},
			'Fraser' : {
				'name' : 'Fraser',
				'scoreChance' : 5.0,
				'defence': 15,
				'attack': 43,
			},
			'Daniels' : {
				'name' : 'Daniels',
				'scoreChance' : 1.2,
				'defence': 55,
				'attack': 38,
			},
			'Defoe' : {
				'name' : 'Defoe',
				'scoreChance' : 4.0,
				'defence': 5,
				'attack': 69,
			},
			'Arter' : {
				'name' : 'Arter',
				'scoreChance' : 0.7,
				'defence': 40,
				'attack': 55,
			},
			'Ibe' : {
				'name' : 'Ibe',
				'scoreChance' : 2.0,
				'defence': 15,
				'attack': 60,
			},
			'Ake' : {
				'name' : 'Ake',
				'scoreChance' : 0.5,
				'defence': 65,
				'attack': 27,
			},
			'Cook' : {
				'name' : 'Cook',
				'scoreChance' : 0.5,
				'defence': 60,
				'attack': 25,
			},
			'Francis' : {
				'name' : 'Francis',
				'scoreChance' : 0.5,
				'defence': 55,
				'attack': 26,
			},
		}
 	}
};




