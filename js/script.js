window.addEventListener('DOMContentLoaded', function() {
//Menu
  let header = document.getElementsByTagName('header')[0],
      hamburger = document.getElementsByClassName('hamburger')[0],
      menu = document.getElementsByClassName('menu')[0],
      menu_item = document.getElementsByClassName('menu-item');

      function addMenuItemActive() {
        for (i = 0; i < menu_item.length; i++){
              menu_item[i].classList.add('menu-item-active');
            }
      }

      function removeMenuItemActive() {
        for (i = 0; i < menu_item.length; i++){
              menu_item[i].classList.remove('menu-item-active');
            }
      }
      
      hamburger.addEventListener('click', function(){
        if ( this.classList.contains('hamburger-active') ) {
            this.classList.remove('hamburger-active');
            header.classList.remove('header-active');
            removeMenuItemActive();
          } else {
            hamburger.classList.add('hamburger-active');
            header.classList.add('header-active');
            addMenuItemActive();
          }
       });
      
      for (i = 0; i < menu_item.length; i++) {
        menu_item[i].addEventListener('click', function(){
        if ( hamburger.classList.contains('hamburger-active') ) {
            hamburger.classList.remove('hamburger-active');
            header.classList.remove('header-active');
            removeMenuItemActive();
          } else {
            hamburger.classList.add('hamburger-active');
            header.classList.add('header-active');
            addMenuItemActive();
          }
       });
      }

//Tab
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

// Timer
 let deadline = 'Jan 1, 2020 00:00:00';

 function getTimeRemaining(endtime) {
  let distance = Date.parse(endtime) - Date.parse(new Date()),
      seconds = pad(Math.floor((distance % (1000 * 60)) / 1000)),
      minutes = pad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))),
      hours = pad(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
      days = pad(Math.floor(distance / (1000 * 60 * 60 * 24)));
      
      return {
        'total': distance,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
 }

 function pad(n) {
    return (n < 10 ? '0' : '') + n;
 }

 function setClock(id, endtime) {
  let timerNumbers = document.getElementById(id);

      function updateClock() {
        let t = getTimeRemaining(endtime);
        timerNumbers.innerHTML = "<span>" + t.days + "</span><span>" + t.hours + "</span><span>" + t.minutes + "</span><span>" + t.seconds + "</span>";

        if (t.total <= 0) {
          timerNumbers.innerHTML = "EXPIRED";    
        }

      }

      updateClock();
      let timeInterval = setInterval(updateClock, 1000);
 }

 setClock('timer', deadline);


 //Modal
 let more = document.getElementsByClassName('timer-btn')[0],
     overlay = document.querySelector('.overlay'),
     close = document.querySelector('.popup-close');
     
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

 // Form
 let message = new Object();
 message.loading = "Loading...";
 message.success = "Thanks! We will contact you soon";
 message.failure = "Something went wrong...";

 let modalForm = document.getElementsByClassName('main-form')[0],
     popupInput = document.getElementsByClassName('popup-form__input')[0],
     contactForm = document.getElementById('form');
     statusMessage = document.createElement('div');
     statusMessage.classList.add('status');
     statusMessage.style.color = '#bdbdbd';
     statusMessage.style.fontSize = '10px';


//AJAX 
     function sendAjaxForm(form) {
          input = form.getElementsByTagName('input'),  
          // event.preventDefault();
          form.appendChild(statusMessage);

          let request = new XMLHttpRequest();
          request.open("POST", 'server.php');
          request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

          let formData = new FormData(form);
          request.send(formData);

          request.onreadystatechange = function() {
               if (request.readyState < 4)  {
                    statusMessage.innerHTML = message.loading;
               } else if (request.readyState === 4) {
                    if (request.status == 200 && request.status < 300) {
                         statusMessage.innerHTML = message.success;
                    } else {
                         statusMessage.innerHTML = message.failure;
                    }
               }
          }

          for (let i = 0; i < input.length; i++) {
               input[i].value = '';
          }

     }

     modalForm.addEventListener('submit', function(e) {
          e.preventDefault();
          sendAjaxForm(modalForm);
     });


     contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          sendAjaxForm(contactForm);
     });

//Slider
let slideIndex = 1,
    slides = document.getElementsByClassName('slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.getElementsByClassName('dot');

showSlides(slideIndex);

function showSlides(n) {
     if (n > slides.length) {
          slideIndex = 1;
     }
     if (n < 1) {
          slideIndex = slides.length;
     }

     for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = 'none';
     }

     for (let i = 0; i < dots.length; i++) {
          dots[i].classList.remove('dot-active');
     }

     slides[slideIndex - 1].style.display = 'block';
     dots[slideIndex - 1].classList.add('dot-active');
}

function currentSlide(n) {
     showSlides(slideIndex = n);
}

function plusSlides(n) {
     showSlides(slideIndex += n);
}

prev.addEventListener('click', function() {
     plusSlides(-1);
});

next.addEventListener('click', function() {
     plusSlides(1);
});

dotsWrap.addEventListener('click', function (event) {
     for (let i = 0; i < dots.length + 1; i++) {
          if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
               currentSlide(i);
          }
     }
});

//Calc
let persons = document.getElementsByClassName('counter-block__input')[0],
    restDays = document.getElementsByClassName('counter-block__input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    personSum = 0,
    daysSum = 0,
    total = 0;

    persons.addEventListener('change', function () {
         personSum = +this.value;
         total = (daysSum + personSum) * 2000;
         if (restDays.value == '' ||  persons.value == '') {
          totalValue.innerHTML = 0;
         } else {
          totalValue.innerHTML = total * place.options[place.selectedIndex].value;
         }

    });

    restDays.addEventListener('change', function () {
         daysSum = +this.value;
         total = (daysSum + personSum) * 2000;
         if (restDays.value == '' ||  persons.value == '') {
          totalValue.innerHTML = 0;
         } else {
          totalValue.innerHTML = total * place.options[place.selectedIndex].value;
         }

    });

    place.addEventListener('change', function() {
     if (restDays.value == '' ||  persons.value == '') {
          totalValue.innerHTML = 0;
     } else {
          totalValue.innerHTML = total * this.options[this.selectedIndex].value;
     }

    });

    //Scroll
    function animate(draw, duration) {
      let start = performance.now();
      requestAnimationFrame(
        function animate(time) {
          let timePassed = time - start;
          if (timePassed > duration) {
            timePassed = duration;
          }

          draw(timePassed);

          if (timePassed < duration) {
            requestAnimationFrame(animate);
          }
        });
    }

    let navBar = document.getElementsByTagName('nav')[0];

    navBar.addEventListener('click', function(e) {
      e.preventDefault;
      animate(function(timePassed) {
        let target = e.target;
        let section = document.getElementById(target.getAttribute('href').slice(1));
        window.scrollBy(0, section.getBoundingClientRect().top / 20 - 4);
      }, 1000);

      });


});
