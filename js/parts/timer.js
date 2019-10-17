function timer() {
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
}

module.exports = timer;