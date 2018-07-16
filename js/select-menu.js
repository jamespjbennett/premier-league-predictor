const choices = new Choices('.team-selector');

function populatePlayers(){
	var team = event.target.value;
	var playerlist = Object.keys(teamsV2[event.target.value]['players']);
	var selecter = document.getElementById(event.target.id + '-list');
	selecter.innerHTML = "";	
	for(i=0;i<playerlist.length;i++){
		selecter.insertAdjacentHTML('beforeend', '<li draggable="true" class="drag-player content-transfer">'+playerlist[i]+'</li>');
	}
};

document.addEventListener("dragover", function(event) {
    event.preventDefault();
});

document.addEventListener("drop", function(event) {
    event.preventDefault();
    var player = event.dataTransfer.getData("player");
    var remove = event.dataTransfer.getData("remove");
    if(remove){
    	var toClearParent = document.querySelector('.no-content-transfer[data-player="'+player+'"]');
    	toClearParent.childNodes[1].innerText = "";
    	toClearParent.removeAttribute('data-player');
    }else{
	    var spanElement = event.target.childNodes[1];
	    event.target.setAttribute('data-player', player);
	    if(spanElement){
		    spanElement.innerHTML = player;
	    };    	
    }
});

document.addEventListener("dragstart", function(event) {
    // The dataTransfer.setData() method sets the data type and the value of the dragged data
    if(event.target.parentElement.classList[0] == "no-content-transfer"){
   		event.dataTransfer.setData("remove", true);
   		event.dataTransfer.setData("player", event.target.innerText);
    }else{
   		event.dataTransfer.setData("player", event.target.innerText);
    };
    // // Output some text when starting to drag the p element
    // document.getElementById("demo").innerHTML = "Started to drag the p element.";
    
    // // Change the opacity of the draggable element
    // event.target.style.opacity = "0.4";
});