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

// TESTING THE 'PICKED' TEAMS

// 1 MANAGER HAS PICKED THE TEAM
var team1 = {
	'name': 'Manchester United',
	'players': [
		teamsV2['Manchester United']['players']['Bailly'],
		teamsV2['Manchester United']['players']['Valencia'],
		teamsV2['Manchester United']['players']['Lindelof'],
		teamsV2['Manchester United']['players']['Young'],
		teamsV2['Manchester United']['players']['Matic'],
		teamsV2['Manchester United']['players']['Fred'],
		teamsV2['Manchester United']['players']['Pogba'],
		teamsV2['Manchester United']['players']['Lukaku'],
		teamsV2['Manchester United']['players']['Sanchez'],
		teamsV2['Manchester United']['players']['Martial'],
	],
};

var team2 = {
	'name': 'Bournemouth',
	'players' : [
		teamsV2['Bournemouth']['players']['Francis'],
		teamsV2['Bournemouth']['players']['Ake'],
		teamsV2['Bournemouth']['players']['Daniels'],
		teamsV2['Bournemouth']['players']['Cook'],
		teamsV2['Bournemouth']['players']['Arter'],
		teamsV2['Bournemouth']['players']['Fraser'],
		teamsV2['Bournemouth']['players']['Gosling'],
		teamsV2['Bournemouth']['players']['Ibe'],
		teamsV2['Bournemouth']['players']['King'],
		teamsV2['Bournemouth']['players']['Wilson'],
	],
};

// TEAMS ATTACK AND DEFENCE RATINGS ARE CALCULATED BASED ON THE PLAYERS
team1['attack'] = team1["players"].sum("attack");
team1['defence'] = team1["players"].sum("defence");
team2['attack'] = team2["players"].sum("attack");
team2['defence'] = team2["players"].sum("defence");

// TRIAL AND ERROR CALCULATION TO GET HOW MANY SHOTS THE TEAM WILL HAVE
var team1MaxShots = team1["players"].sum("attack") / 24;
var team2ShotRemoval = team2['defence'] / 35;
var team2MaxShots = team2["players"].sum("attack") / 24;
var team1ShotRemoval = team1['defence'] / 35;

var team1ShotsAverage = Math.round(team1MaxShots - team2ShotRemoval);
var team2ShotsAverage = Math.round(team2MaxShots - team1ShotRemoval);

var team1ShotPossibilties = likelyShotsArray(team1ShotsAverage).sort();
var team2ShotPossibilties = likelyShotsArray(team2ShotsAverage).sort();

var team1ShotFinal = shuffle(team1ShotPossibilties)[0];
var team2ShotFinal = shuffle(team2ShotPossibilties)[0];

var gameStats = {
	'team1Score': 0,
	'team1Scorers':{},
	'team2Score': 0,
	'team2Scorers':{},
	'team1Shots': 0,
	'team2Shots': 0,
	'minutesPlayed': 0,
};

var minuteStats = {};
for(i=1; i<=90;i++){
	minuteStats[i] = {
		'team1Shots': 0,
		'team2Shots': 0
	};
};

for(i=1;i<=team1ShotFinal;i++){
	var minute = shuffle(Object.keys(minuteStats))[0];
	minuteStats[minute]["team1Shots"] = minuteStats[minute]["team1Shots"] + 1;
};

for(i=1;i<=team2ShotFinal;i++){
	var minute = shuffle(Object.keys(minuteStats))[0];
	minuteStats[minute]["team2Shots"] = minuteStats[minute]["team2Shots"] + 1;
}

// PLAY GAME

var timer = 0;

var intervalID = setInterval(function () {
	timer+=1;
	gameStats['minutesPlayed'] == timer;
   if(minuteStats[timer]['team1Shots'] != 0){
 	  incrementShotsAndCalculateScoreLikelihood('MANU',minuteStats[timer]['team1Shots'], timer, gameStats, 'team1Score', 'team1Scorers', 'team1Shots');
   }else{
   };
   if(minuteStats[timer]['team2Shots'] != 0){
 	  incrementShotsAndCalculateScoreLikelihood('BOURNEMOUTH', minuteStats[timer]['team2Shots'], timer, gameStats, 'team2Score', 'team2Scorers', 'team2Shots');
   };  
   if(minuteStats[timer]['team2Shots'] + minuteStats[timer]['team1Shots'] == 0){
		console.log(timer + ' minutes: MANU ' + gameStats['team1Score'] + ' BOURN ' + gameStats['team2Score']);
   };
   if (timer === 90) {
       window.clearInterval(intervalID);
		console.log('score is MANU ' + gameStats['team1Score'] + ' BOURN ' + gameStats['team2Score'] );
   }
}, 100);


function incrementShotsAndCalculateScoreLikelihood(teamName, shotCount, minute, gameStats, score, scorers, shots){
	for(z=1;z<=shotCount;z++){
		gameStats[shots] += 1;
		if(isAGoal()){
			gameStats[score] +=1;
			gameStats[scorers][minute] = "Scorer name";
			console.log('GOAL FOR '+teamName+'!! score is MANU ' + gameStats['team1Score'] + ' BOURN ' + gameStats['team2Score'] );
		}else{
			console.log('shot for '+teamName+'. score is MANU ' + gameStats['team1Score'] + ' BOURN ' + gameStats['team2Score'] );
		}
	};
};

function isAGoal(){
	return shuffle([true, false, false, false])[0];
};










