
var inputs = document.querySelectorAll(".Icommon");
var button = document.querySelector('.login-btn .btn');
var error1 = document.querySelector('.signin-form .error1');
var error2 = document.querySelector('.signin-form .error2');

var done1;
var done2;
var done3;


button.addEventListener('click', function (event) {
    inputs.forEach((inputDiv) => {
        var inputField = inputDiv.querySelector('input');

        // Check if the input value is empty
        if (inputField.value === '') {
            inputField.style.borderColor = 'red';
            inputField.placeholder = "You have to enter your " + inputField.name; 
            done1 = -1;
        } 
        else {
            inputField.style.borderColor = '';
            inputField.placeholder = "";
           /*  button.innerHTML = "DONE"; */
            done1 = 1;
        }
        // Email handler
        if (inputField.name === 'email') {
            if ((/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputField.value)) || inputField.value == '') {
                error1.innerHTML = '';
                error1.style.display = 'none';
                inputField.style.marginBottom = '';
                done2 = 1;
            } else {
                inputField.style.borderColor = 'red';
                error1.style.display = 'block';
                error1.innerHTML = "Invalid email";
                inputField.style.marginBottom = '0.2rem';
                button.innerHTML = "Log in";
                done2 = -1;
            }
        }

        // Password handler
        if (inputField.name === 'password') {
            // The form of a valid password
            var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
             if (passwordRegex.test(inputField.value) || inputField.value == '') {
                error2.innerHTML = '';
                error2.style.display = 'none';
                inputField.style.marginBottom = '';
                done3 = 1;
            } else{
                inputField.style.borderColor = 'red';
                error2.style.display = 'block';
                error2.innerHTML = "Invalid password";
                inputField.style.marginBottom = '0.2rem';
                button.innerHTML = "Log in";
                done3 = -1;
            } 
        }
  
        if(done1 == 1 && done2 == 1 && done3 == 1 )
         {
            button.innerHTML="Done";
         }

         

    });
    event.preventDefault();
});