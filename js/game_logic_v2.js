Array.prototype.sum = function (prop) {
    var total = 0
    for ( var i = 0, _len = this.length; i < _len; i++ ) {
        total += this[i][prop]
    }
    return total
};


function likelyShotsArray(teamShots){
	var shots_array = [];
	for(x=0;x<=10;x++){
		if(x>0){
			if(teamShots-x < 0){
	     		break;
	   		}else{
	    		var iterationNumber = 20 - (x*2);
	    		for(y=1;y<=iterationNumber;y++){
	    			shots_array.push(teamShots + x);
	        		shots_array.push(teamShots - x);
		  		};
	   		};
	 	}else{
	    	for(y=1;y<=20;y++){
	    		shots_array.push(teamShots);
		  	};  
	 	};
	};
	return shots_array;
};


function playDetailedGamed(){
	var homeTeamName = document.getElementById('home').value
	var awayTeamName = document.getElementById('away').value
	var team1 = generateTeam(homeTeamName, 'home-team');
	var team2 = generateTeam(awayTeamName, 'away-team');
	var team1Shots = calculateShots(team1);
	var team2Shots = calculateShots(team2);
};


function generateTeam(team, selector){
	var object = {}
	object['name'] = team;
	object['players'] = [];
	var parentDiv = document.querySelector("."+selector);
	var playerSelection = parentDiv.querySelectorAll('.position-blob');
	for(i=0;i<playerSelection.length;i++){
		var player = playerSelection[1].getAttribute('data-player');
		object['players'].push(teamsV2[team]['players'][player])
	};
	return object;
};



// TEAMS ATTACK AND DEFENCE RATINGS ARE CALCULATED BASED ON THE PLAYERS
// function calculateDefenceAndAttackRatings(object){
// 	object['attack'] = object["players"].sum("attack");
// 	object['defence'] = object["players"].sum("defence");	
// }

// // TRIAL AND ERROR CALCULATION TO GET HOW MANY SHOTS THE TEAM WILL HAVE


function calculateShots(object){
	// TEAMS ATTACK AND DEFENCE RATINGS ARE CALCULATED BASED ON THE PLAYERS
	object['attack'] = object["players"].sum("attack");
	object['defence'] = object["players"].sum("defence");	
	// CALCULATION TO GET HOW MANY SHOTS THE TEAM WILL HAVE
	var objectMaxShots = object["players"].sum("attack") / 24;
	var objectShotRemoval = object['defence'] / 35;
	var objectShotsAverage = Math.round(objectMaxShots - objectShotRemoval);
	var objectShotPossibilties = likelyShotsArray(objectShotsAverage).sort();
	var objectShotFinal = shuffle(objectShotPossibilties)[0];
	return objectShotFinal
};


// var gameStats = {
// 	'team1Score': 0,
// 	'team1Scorers':{},
// 	'team2Score': 0,
// 	'team2Scorers':{},
// 	'team1Shots': 0,
// 	'team2Shots': 0,
// 	'minutesPlayed': 0,
// };

// var minuteStats = {};
// for(i=1; i<=90;i++){
// 	minuteStats[i] = {
// 		'team1Shots': 0,
// 		'team2Shots': 0
// 	};
// };

// for(i=1;i<=team1ShotFinal;i++){
// 	var minute = shuffle(Object.keys(minuteStats))[0];
// 	minuteStats[minute]["team1Shots"] = minuteStats[minute]["team1Shots"] + 1;
// };

// for(i=1;i<=team2ShotFinal;i++){
// 	var minute = shuffle(Object.keys(minuteStats))[0];
// 	minuteStats[minute]["team2Shots"] = minuteStats[minute]["team2Shots"] + 1;
// }

// PLAY GAME

var timer = 0;

// var intervalID = setInterval(function () {
// 	timer+=1;
// 	gameStats['minutesPlayed'] == timer;
//    if(minuteStats[timer]['team1Shots'] != 0){
//  	  incrementShotsAndCalculateScoreLikelihood('Manchester United',minuteStats[timer]['team1Shots'], timer, gameStats, 'team1Score', 'team1Scorers', 'team1Shots');
//    }else{
//    };
//    if(minuteStats[timer]['team2Shots'] != 0){
//  	  incrementShotsAndCalculateScoreLikelihood('Bournemouth', minuteStats[timer]['team2Shots'], timer, gameStats, 'team2Score', 'team2Scorers', 'team2Shots');
//    };  
//    if(minuteStats[timer]['team2Shots'] + minuteStats[timer]['team1Shots'] == 0){
// 		console.log(timer + ' minutes: MANU ' + gameStats['team1Score'] + ' BOURN ' + gameStats['team2Score']);
//    };
//    if (timer === 90) {
//        window.clearInterval(intervalID);
// 		console.log('score is MANU ' + gameStats['team1Score'] + ' BOURN ' + gameStats['team2Score'] );
//    }
// }, 100);


// function incrementShotsAndCalculateScoreLikelihood(teamName, shotCount, minute, gameStats, score, scorers, shots){
// 	for(z=1;z<=shotCount;z++){
// 		gameStats[shots] += 1;
// 		if(isAGoal()){
// 			gameStats[score] +=1;
// 			gameStats[scorers][minute] = scorerName(teamName);
// 			console.log('GOAL FOR '+teamName+'!! score is MANU ' + gameStats['team1Score'] + ' BOURN ' + gameStats['team2Score'] );
// 		}else{
// 			console.log('shot for '+teamName+'. score is MANU ' + gameStats['team1Score'] + ' BOURN ' + gameStats['team2Score'] );
// 		}
// 	};
// };

// function isAGoal(){
// 	return shuffle([true, false, false, false])[0];
// };

document.getElementById('play-game').onclick = function(e){
  playDetailedGamed();
};
