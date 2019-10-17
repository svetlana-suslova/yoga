function menu() {
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

}

module.exports = menu;