/***************************************form****************************************************/
document.addEventListener('DOMContentLoaded', function() {
  const signinButton = document.getElementById('signin-btn');
  const signinFormContainer = document.getElementById('signin-form-container');
  const cancel = document.querySelector('.cancel');
  signinButton.addEventListener('click', function() {
    signinFormContainer.style.display = 'flex';
  });

  document.addEventListener('click', function(event) {
    if (event.target === signinFormContainer) {
      signinFormContainer.style.display = 'none';
    }
  });
  cancel.addEventListener('click', function(event)
  {
    signinFormContainer.style.display = 'none';
  })

});

/**********************************************************************************************/

var images = document.querySelectorAll('.values-img');
var amplitude = 10;
var frequency = 0.5;
var time = 0;

var interval = setInterval(function() {
  var translateY = amplitude * Math.sin(frequency * time);

  images.forEach(function(image) {
    image.style.transform = 'translateY(' + translateY + 'px)';
  });

  time += 0.1;

}, 20);