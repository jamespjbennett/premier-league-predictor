

function adjustTable(home_team, away_team, home_score,away_score){
	var homeGoalsFor = document.querySelector('#league-' + home_team.replace(/\s+/g, '')+ ' .for span');
	var awayGoalsFor = document.querySelector('#league-' + away_team.replace(/\s+/g, '') + ' .for span');
	var homeGoalsAgainst = document.querySelector('#league-' + home_team.replace(/\s+/g, '') + ' .against span');
	var awayGoalsAgainst = document.querySelector('#league-' + away_team.replace(/\s+/g, '') + ' .against span');
	var homePoints = document.querySelector('#league-' + home_team.replace(/\s+/g, '') + ' .points span');
	var awayPoints = document.querySelector('#league-' + away_team.replace(/\s+/g, '') + ' .points span');
	if(home_score > away_score){
		var homePointsGained = 3;
	    var awayPointsGained = 0;
	}else if(away_score > home_score){
		var homePointsGained = 0;
	    var awayPointsGained = 3;
	}else{
		var homePointsGained = 1;
	    var awayPointsGained = 1;
	};
	resetLeagueData(home_team, away_team, home_score, away_score, homePointsGained, awayPointsGained);
};

function resetLeagueData(home_team, away_team, home_score, away_score, homePointsGained, awayPointsGained){
	leagueObject[home_team]['for'] += home_score;
	leagueObject[home_team]['against'] += away_score;
	leagueObject[home_team]['points'] += homePointsGained;
	leagueObject[home_team]['diff'] += home_score - away_score;
	leagueObject[away_team]['for'] += away_score;
	leagueObject[away_team]['against'] += home_score;
	leagueObject[away_team]['points'] += awayPointsGained;
	leagueObject[away_team]['diff'] += away_score - home_score;


};

function play_game(first_team, second_team){
	var home_team = teams[first_team];
	var away_team = teams[second_team];
	var home_score = score_calculation(home_team, away_team);
	var away_score = score_calculation(away_team, home_team);
	if(home_score != away_score){
		var min = Math.min(home_score, away_score);
		if(home_score == min){
			var homeEmptyDivsToPopulate = away_score - home_score;
			var awayEmptyDivsToPopulate = 0;
		}else{
			var awayEmptyDivsToPopulate = home_score - away_score;
			var homeEmptyDivsToPopulate = 0; 
		}
	}else{
		var awayEmptyDivsToPopulate = 0;
		var homeEmptyDivsToPopulate = 0 ;		
	}
	pickScorers(first_team, home_score, homeEmptyDivsToPopulate);
	pickScorers(second_team, away_score, awayEmptyDivsToPopulate);
	document.querySelector('.fixture--' + first_team.replace(/\s+/g, '') +' span').innerHTML = first_team + "   " + home_score;
	document.querySelector('.fixture--' + second_team.replace(/\s+/g, '') +' span').innerHTML = second_team + "   " + away_score;
	adjustTable(first_team, second_team, home_score,away_score);
};

function scorerName(team){
	var random = parseFloat(((Math.random() * 100) / 10).toFixed(1))
	debugger
	var players = teams[team]['players'];
	var scores = Object.values(players).sort();
	var i = 0;
	while (i < scores.length) {
	    number  = scores[i]
		if (random <= scores[i]) { break; }
	    i++;
	};
	return Object.keys(players).filter(function(el){return players[el] == number})[0];
};

function pickScorers(team, score, emptyDivs){
	for(y=0; y<score; y++){
		// var random = parseFloat(((Math.random() * 100) / 10).toFixed(1))
		// var players = teams[team]['players'];
		// var scores = Object.values(players).sort();
		// var i = 0;
		// while (i < scores.length) {
		//     number  = scores[i]
		// 	if (random <= scores[i]) { break; }
		//     i++;
		// };
		// var scorer = Object.keys(players).filter(function(el){return players[el] == number})[0];
		var scorer = scorerName(team);
		document.querySelector('.fixture--' + team.replace(/\s+/g, '')).insertAdjacentHTML('beforeend','<p>'+scorer+'</p>');
		!totalScorers[scorer] ?  totalScorers[scorer] = 1 : totalScorers[scorer] += 1;
		!totalScorersWithTeam[team][scorer] ?  totalScorersWithTeam[team][scorer] = 1 : totalScorersWithTeam[team][scorer] += 1;
	};
	for(y=0; y<emptyDivs; y++){
		document.querySelector('.fixture--' + team.replace(/\s+/g, '')).insertAdjacentHTML('beforeend','<p></p>');
	};
};

function playFixtureRound(){
	for(i=0;i<fixtures.length;i++){
		console.log('play game ' + i)
		play_game(fixtures[i][0], fixtures[i][1]);
	};
	document.getElementById('next-fixture').classList.remove("hide");
	document.getElementById('play-fixture').classList.add("hide");	
	populateVisualLeague();
	if(fixtureCounter == 37){
		var winner = document.getElementById('league-table-data').getElementsByClassName('team-name')[0].innerText;
		document.getElementById('winner').textContent = winner + " are the champions!";
		document.getElementById('next-fixture').remove();
	};
	populateTopScorerList();
};


function populateTopScorerList(){
	var scorersOrdered = sortScorerTable();
	var topScorerContainer=document.getElementById("top-scorers-list");
	var teamTopScorerContainer=document.getElementById("team-top-scorers-list");
	topScorerContainer.innerHTML = "";	
	for(i=0;i<=9;i++){
		topScorerContainer.insertAdjacentHTML('beforeend', '<li><div class="col-xs-3">' +  scorersOrdered[i].key + '</div><div class="col-xs-3">' + scorersOrdered[i].value +'</div></li><br>');	
	}
	teamTopScorerContainer.innerHTML = "";	
	for(i=0;i<Object.keys(teams).length;i++){
		teamTopScorerContainer.insertAdjacentHTML('beforeend', '<div class="col-xs-6 team-scorer-element" id="'+ Object.keys(teams)[i]+'">' +  Object.keys(teams)[i] +'<br>');	
	}
	var teamTopScorerTeamElements= document.getElementsByClassName('team-scorer-element');
	for(x=0;x<teamTopScorerTeamElements.length;x++){
		console.log(x);
		var teamElement = teamTopScorerTeamElements[x].id;
		console.log(teamElement)
		// teamTopScorerTeamElements[i].insertAdjacentHTML('beforeEnd', '<br>');
		teamTopScorerContainer.insertAdjacentHTML('beforeEnd', '<div id="'+teamElement+'-dropdown" class="team-info-wrapper hide"></div>');
		// teamTopScorerTeamElements[i].insertAdjacentHTML('beforeEnd', '<div id="'++'dropdown"></div>');
		var dropdownToPopulate = document.getElementById(teamElement+'-dropdown');
		dropdownToPopulate.insertAdjacentHTML('beforeend', '<h4 class="team-name-info">'+teamElement+'</h4>');
		for(scorer in totalScorersWithTeam[teamElement]){
			dropdownToPopulate.insertAdjacentHTML('beforeend', '<p>'+scorer+' - <span>'+totalScorersWithTeam[teamElement][scorer]+'</span></p>');
		};
		dropdownToPopulate.insertAdjacentHTML('beforeend', '<button  class="back-to-all-team-stats btn btn-primary">Back</button>');

		var backButtons = document.getElementsByClassName('back-to-all-team-stats');
		for (var i = 0; i < backButtons.length; i++) {
		    backButtons[i].addEventListener('click', backToAllTeams, false);
		}		
	};
	var teamScorerElements = document.getElementsByClassName('team-scorer-element');
	for (var i = 0; i < teamScorerElements.length; i++) {
	    teamScorerElements[i].addEventListener('click', showTeamsStats, false);
	}
}


function score_calculation(team_1, team_2){
	return (Math.floor((Math.random() * team_1["goals"]) * (team_1["attack"] * (team_1["goals"] / 100)) / team_2["defence"]));
};

function populateVisualFixtures(){
	var fixtureListContainer=document.getElementById("fixture-table"); 
	if(fixtureCounter > 18){
		var first = 0;
		var second = 1;
		fixtures = allFixtureObject[fixtureCounter - 19];
	}else{
		var first = 1;
		var second = 0;
		fixtures = allFixtureObject[fixtureCounter];

	}
	fixtureListContainer.innerHTML = "";
	// fixtureListContainer.insertAdjacentHTML('beforeend', '<h3 class="content-header">Fixtures/Results:</h3>');

	for (i=0;i <=9;i++) {

	    fixtureListContainer.insertAdjacentHTML('beforeend', '<div id="fixture-' + fixtures[i][first].replace(/\s+/g, '') + '--' + fixtures[i][second].replace(/\s+/g, '')+'"></div>');
	    var fixtureRow = document.getElementById('fixture-' + fixtures[i][first].replace(/\s+/g, '') + '--' +  fixtures[i][second].replace(/\s+/g, ''));
	    fixtureRow.insertAdjacentHTML('beforeend', '<div class="col-xs-5 fixture-row fixture--' +  fixtures[i][first].replace(/\s+/g, '') + '"><span>' + fixtures[i][first] +'</span></div>');
	    fixtureRow.insertAdjacentHTML('beforeend', '<div class="col-xs-2 team-name"><p class="vs-separator"> vs </p></div>');
	    fixtureRow.insertAdjacentHTML('beforeend', '<div class="col-xs-5 fixture-row fixture--' +  fixtures[i][second].replace(/\s+/g, '') + '"><span>' + fixtures[i][second] +'</span></div>');
	};  	
	document.getElementById('next-fixture').classList.add("hide");
	document.getElementById('play-fixture').classList.remove("hide");
}

// click events
function sortLeaguePosition(){
	var team_array = [];
	for (var key in leagueObject) {
	    if (leagueObject.hasOwnProperty(key)) {
	        team_array.push({
	            'key': key,
	            'value': leagueObject[key].valueOf()
	        })   
	    }
	};
	var sorted = team_array.sort(function(a, b){
	      if (a.value['points'] == b.value['points']){
	         return (a.value['diff'] - b.value['diff']);
	      } else {
	         return (a.value['points'] - b.value['points']);
	      }
	});
	return sorted.reverse();

};


function sortScorerTable(){
	var scorer_array = [];
	for (var key in totalScorers) {
	    if (totalScorers.hasOwnProperty(key)) {
	        scorer_array.push({
	            'key': key,
	            'value': totalScorers[key].valueOf()
	        })   
	    }
	};
	var sorted = scorer_array.sort(function(a, b){
		return (a.value - b.value);
	});
	return sorted.reverse();

};

function sortTeamScorerTable(team){
	var team_scorer_array = [];
	for (var key in team) {
	    if (team.hasOwnProperty(key)) {
	        team_scorer_array.push({
	            'key': key,
	            'value': team[key].valueOf()
	        })   
	    }
	};
	var team_scorer_array_sorted = team_scorer_array.sort(function(a, b){
		return (a.value - b.value);
	});
	return team_scorer_array_sorted.reverse();

};


function populateVisualLeague(){
	var leagueTableContainer=document.getElementById("league-table-data");
	leagueTableContainer.innerHTML = "";
	var sortedLeagueObject = sortLeaguePosition();
	for (i=0; i < sortedLeagueObject.length; i++) {
	    leagueTableContainer.insertAdjacentHTML('beforeend', '<div id="league-' + sortedLeagueObject[i].key.replace(/\s+/g, '') + '"></div>');
	    var teamLeagueRow = document.getElementById('league-' + sortedLeagueObject[i].key.replace(/\s+/g, ''));
	    teamLeagueRow.insertAdjacentHTML('beforeend', '<div class="col-xs-4 team-name"><span>' + sortedLeagueObject[i].key +'</span></div>');
	    teamLeagueRow.insertAdjacentHTML('beforeend', '<div class="col-xs-2 for"><span>' + sortedLeagueObject[i].value['for']+ '</span></div>');
	    teamLeagueRow.insertAdjacentHTML('beforeend', '<div class="col-xs-2 against"><span>' + sortedLeagueObject[i].value['against']+ '</span></div>');
	    teamLeagueRow.insertAdjacentHTML('beforeend', '<div class="col-xs-2 diff"><span>' + sortedLeagueObject[i].value['diff']+ '</span></div>');
	    teamLeagueRow.insertAdjacentHTML('beforeend', '<div class="col-xs-2 points"><span>' + sortedLeagueObject[i].value['points']+ '</span></div>');
	};	
}



populateVisualFixtures();
populateVisualLeague();

document.getElementById('play-fixture').onclick = function(e){
  playFixtureRound();
};

document.getElementById('next-fixture').onclick = function(e){
	fixtureCounter += 1;
	populateVisualFixtures();
};

