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