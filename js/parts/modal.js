function modal() {
	let more = document.getElementsByClassName('timer-btn')[0],
     overlay = document.querySelector('.overlay'),
     close = document.querySelector('.popup-close'),
     moreInTab = document.getElementsByClassName('description-btn');
     
     more.addEventListener('click', function() {
     	this.classList.add('more-splash');
     	overlay.style.display = "block";
     	document.body.style.overflow = "hidden";
     });

     close.addEventListener('click', function() {
     	overlay.style.display = "none";
     	more.classList.remove('more-splash');
     	document.body.style.overflow = "";
          let statusMessage = document.querySelector('.status');
          if (statusMessage) {
               statusMessage.remove();
          }
     });

     for (let i = 0; i < moreInTab.length; i++) {
     	moreInTab[i].addEventListener('click', function() {
          this.classList.add('more-splash');
     	overlay.style.display = "block";
     	document.body.style.overflow = "hidden";
     }); 
  }
}
module.exports = modal;