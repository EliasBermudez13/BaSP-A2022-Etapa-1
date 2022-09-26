window.onload = function (){
    //EmailValidation
var userEmail = document.getElementById('username');
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var errorAlert = document.createElement('p');
errorAlert.classList.add('p');
userEmail.onblur = function (){
    if(emailExpression.test (userEmail.value)){
        userEmail.classList.add('green-border');
    }
    else{
        userEmail.classList.add('red-border');
        errorAlert.innerHTML = 'Error: debe ingresar un E-Mail valido';
        userEmail.parentNode.insertBefore(errorAlert, userEmail.nextElementSibling);
    }
}
userEmail.onfocus = function (){
    userEmail.classList.remove('red-border');
}
    //PasswordValidation
var password = document.getElementById('password');

}