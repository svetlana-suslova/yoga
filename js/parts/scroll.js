function scroll() {
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

    let menu = document.getElementsByTagName('nav')[0];

    menu.addEventListener('click', function(e) {
      e.preventDefault;
      animate(function(timePassed) {
        let target = e.target;
        let section = document.getElementById(target.getAttribute('href').slice(1));
        window.scrollBy(0, section.getBoundingClientRect().top / 20 - 4);
      }, 1000);

      });
}

module.exports = scroll;