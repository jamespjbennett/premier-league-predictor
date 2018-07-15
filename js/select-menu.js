const choices = new Choices('.team-selector');

function populatePlayers(){
	var team = event.target.value;
	var playerlist = Object.keys(teamsV2[event.target.value]['players']);
	var selecter = document.getElementById(event.target.id + '-list');
	selecter.innerHTML = "";	
	for(i=0;i<playerlist.length;i++){
		selecter.insertAdjacentHTML('beforeend', '<li>'+playerlist[i]+'</li>');
	}
};