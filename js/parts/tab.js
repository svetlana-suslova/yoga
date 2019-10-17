function tab() {
	let tab = document.getElementsByClassName('info-header__tab'),
	    tabContent = document.getElementsByClassName('info-tabcontent'),
	    info = document.getElementsByClassName('info-header')[0],
	    moreInTab = document.getElementsByClassName('description-btn');

	function hideTabContent(a) {

		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
      tab[i].classList.remove('info-header__tab-clicked');
		}
	}

	hideTabContent(1);

 function showTabContent(b) {

 	if (tabContent[b].classList.contains('hide') ) {
 		hideTabContent(0);
 		tabContent[b].classList.remove('hide');
		tabContent[b].classList.add('show');
    tab[b].classList.add('info-header__tab-clicked');
 	}
 }


 info.addEventListener('click', function(event) {
 	let target = event.target;

 	if (target.className == 'info-header__tab') {
 		for (let i = 0; i < tab.length; i++) {
 			if (target == tab[i]) {
 				showTabContent(i);
 				break;
 			}
 		}
 	}
 });
}

module.exports = tab;