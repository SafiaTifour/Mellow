var inputs = document.querySelectorAll(".common");
var button = document.querySelector('form button');
var form = document.querySelector('form');
var error = document.querySelector('form .error')
var errorelemnts = error.querySelectorAll('p');
let check;

var error1 = document.querySelector('form .error1')
var error2 = document.querySelector('form .error2')
var error3 = document.querySelector('form .error3')
var error4 = document.querySelector('form .error4')

var done1;
var done2;
var done3;
var done4;
var done5;


inputs.forEach((inputDiv) =>
{
    var inputField = inputDiv.querySelector('input')
    button.addEventListener('click', function(event) {
        if (inputField.value === '') {
          inputField.style.borderColor = 'red';
          inputField.placeholder= "you have to enter a "+inputField.name;
          done1 = -1;
        }
        else{
            inputField.style.borderColor = ''; 
            inputField.placeholder= "";
           // button.innerHTML="Done"; 
            done1 = 1;
        }
//---------------------username handler-------------------------------//
        if(inputField.name === 'username')
         {
            if(/\d/.test(inputField.value))
            {   
                inputField.style.borderColor = 'red';
                error1.innerHTML = "The username must not contain numbers";
                error1.style.display = 'block';
                inputField.style.marginBottom = '0.2rem';
                button.innerHTML="Submit";
                done2 = -1;
            }
            else if(inputField.value.length < 8 && inputField.value.length != 0)
            {   
                inputField.style.borderColor = 'red';
                error1.innerHTML = "The username must be at least 8 characters long";
                error1.style.display = 'block';
                inputField.style.marginBottom = '0.2rem';
                button.innerHTML="Submit";
                done2 = -1;
            }
            else if(inputField.value.length > 15)
            {   
                inputField.style.borderColor = 'red';
                error1.innerHTML = "The username must be at most 15 characters long";
                error1.style.display = 'block';
                inputField.style.marginBottom = '0.2rem';
                button.innerHTML="Submit";
                done2 = -1;
            }
            else{
                error1.innerHTML='';
                error1.style.display = 'none';
                inputField.style.marginBottom ='';
                done2 = 1; 
            }
         }
 //---------------------Email handler-------------------------------//        
         if(inputField.name === 'Email')
         {
            
            if((/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputField.value)) || inputField.value =='')
            {
                done3 = 1;
                
                error2.innerHTML='';
                error2.style.display = 'none';
                inputField.style.marginBottom ='';
            }
            else {
                button.innerHTML="Submit";
                inputField.style.borderColor = 'red';
                 error2.style.display = 'block';
                 error2.innerHTML = "Invalid email";
                 inputField.style.marginBottom = '0.2rem';
                 done3 = -1;
            }
         }
        
//---------------------password handler-------------------------------//
        
        if(inputField.name === 'password')
         {  
            
            //the form of a valid password
            var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
            if(passwordRegex.test(inputField.value) || inputField.value =='')
            {
                done4 = 1;
                error3.innerHTML='';
                error3.style.display = 'none';
                inputField.style.marginBottom ='';
            }
            else{
                button.innerHTML="Submit";
                inputField.style.borderColor = 'red';
                error3.style.display = 'block';
                error3.innerHTML = "Invalid password";
                inputField.style.marginBottom = '0.2rem';
                done4 = -1;
            }
         }
//---------------------confirm password handler-------------------------------//
         if(inputField.name === 'Cpassword')
         {
            var passwordinput = inputs[2].querySelector('input').value;;
            if(inputField.value === passwordinput || inputField.value =='')
            {
                done5 = 1;
                error4.innerHTML='';
                error4.style.display = 'none';
                inputField.style.marginBottom ='';
            }
            else{
                done5 = -1;
                button.innerHTML="Submit";
                inputField.style.borderColor = 'red';
                error4.style.display = 'block';
                error4.innerHTML = "Confirm password should match password";
                inputField.style.marginBottom = '0.2rem';
            }
         }
         
         if(done1 == 1 && done2 == 1 && done3 == 1 && done4 == 1 && done5 == 1  )
         {
            button.innerHTML="Done";
         }

    event.preventDefault();
     })
   
}) 









