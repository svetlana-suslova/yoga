function ajax() {
 let message = new Object();
 message.loading = "Loading...";
 message.success = "Thanks! We will contact you soon";
 message.failure = "Something went wrong...";

 let modalForm = document.getElementsByClassName('main-form')[0],
     contactForm = document.getElementById('form');
     statusMessage = document.createElement('div');
     statusMessage.classList.add('status');
     statusMessage.style.color = '#fff';
     statusMessage.style.fontSize = '10px';

     function sendAjaxForm(form) {
          input = form.getElementsByTagName('input'),
          form.appendChild(statusMessage);

          let request = new XMLHttpRequest();
          request.open("POST", 'mail.php');

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
	
}
module.exports = ajax;