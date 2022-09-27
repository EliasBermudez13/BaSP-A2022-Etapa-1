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
        errorAlert.innerHTML = 'Error: you must enter a valid E-Mail';
        userEmail.parentNode.insertBefore(errorAlert, userEmail.nextElementSibling);
    }
}
userEmail.onfocus = function (){
    userEmail.classList.remove('red-border');
}
    //PasswordValidation
var password = document.getElementById('password');
function passwordError() {
    password.classList.add('red-border');
    errorAlert.innerHTML = 'Error: you must enter a password';
    password.parentNode.insertBefore(errorAlert, userEmail.nextElementSibling);
} 
numsAndLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
function PasswordValidation(pass,type,min){
    if (pass.length < min){
        return (false);
    }
    var passLength = pass.length;
    for (i = 0; i < passLength; i++){
        caracters = pass[i];
        if (numsAndLetters.indexOf(caracters) ==-1){
            return (false);
        }
    return (true);
    }
}
password.onblur = function (){
    if (password.value == ''){
        passwordError();
    }
    else if (!PasswordValidation(password.value, numsAndLetters, 8)){
        passwordError();
    }
    else{
        password.classList.add('green-border');
    }
}
password.onfocus = function (){
    password.classList.remove('red-border');
}
    //Button
var buttonLogin = document.getElementsByClassName('button-Continue')[0];
console.log(buttonLogin)
buttonLogin.onclick = function (e){
    e.preventDefault();
    email = userEmail.value;
    passwordValue = password.value;
    if (PasswordValidation(passwordValue, numsAndLetters, 8) && emailExpression.test (email)){
        alert('Username: ' + email + ' ' + 'Password: ' + passwordValue);
    }
    else {
        if (!emailExpression.test (email)){
            alert("Invalid Username");
        }
        if (!PasswordValidation(passwordValue, numsAndLetters, 8)){
            alert("Invalid Password");
        }
    }
}
}