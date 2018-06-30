var navContent = document.getElementsByClassName('detail-selector');
var navSections = document.getElementsByClassName('nav-section');
for (var i = 0; i < navContent.length; i++) {
    navContent[i].addEventListener('click', switchActiveNavContent, false);
}


function switchActiveNavContent(e){
	for (var i = 0; i < navContent.length; i++) {
	    navContent[i].classList.remove('active');
	}
	for (var i = 0; i < navSections.length; i++) {
	    navSections[i].classList.remove('show');
	    navSections[i].classList.add('hide');
	}
	this.classList.add('active');
	var idToTarget = this.id + "-section";
	document.getElementById(idToTarget).classList.add('show');
};

function showTeamsStats(e){
	console.log('hit show team stats');

	var team = this.id;
	var teamScorerElements = document.getElementsByClassName('team-scorer-element');
	for (var i = 0; i < teamScorerElements.length; i++) {
	    teamScorerElements[i].classList.remove('show');
	    teamScorerElements[i].classList.add('hide');
	};
	document.getElementById(team +'-dropdown').classList.add('show');
};

function backToAllTeams(e){
	console.log('hit back to all teams');
	this.parentElement.classList.remove('show');
	this.parentElement.classList.add('hide');
	var teamStatLinks = document.getElementsByClassName('team-scorer-element');
	for (var i = 0; i < teamStatLinks.length; i++) {
	    teamStatLinks[i].classList.remove('hide');
	    teamStatLinks[i].classList.add('show');
	}	
}