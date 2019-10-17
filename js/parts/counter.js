function counter() {
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
}
module.exports = counter;