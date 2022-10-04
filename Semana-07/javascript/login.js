window.onload = function (){
    //EmailValidation
var userEmail = document.getElementById('username');
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var numsAndLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var errorAlertEmail = document.createElement('p');
errorAlertEmail.classList.add('error-txt');
var errorAlertPass = document.createElement('p');
errorAlertPass.classList.add('error-txt');
userEmail.onblur = function (){
    if(emailExpression.test (userEmail.value)){
        userEmail.classList.add('green-border');
    }
    else{
        userEmail.classList.add('red-border');
        errorAlertEmail.innerHTML = 'Error: you must enter a valid E-Mail';
        errorAlertEmail.classList.remove('hide');
        userEmail.parentNode.insertBefore(errorAlertEmail, userEmail.nextElementSibling);
    }
}
userEmail.onfocus = function (){
    userEmail.classList.remove('red-border');
    userEmail.nextElementSibling.classList.add('hide');
}
    //PasswordValidation
var password = document.getElementById('password');
function passwordError() {
    password.classList.add('red-border');
    errorAlertPass.innerHTML = 'Error: you must enter a password';
    errorAlertPass.classList.remove('hide');
    password.parentNode.insertBefore(errorAlertPass, password.nextElementSibling);
} 
function PasswordValidation(pass,min){
    if (pass.length < min){
        return (false);
    }
    var passLength = pass.length;
    for (i = 0; i < passLength; i++){
        caracters = pass[i];
        if (numsAndLetters.indexOf(caracters) == -1){
            return (false);
        }
    }
    return (true);
}
password.onblur = function (){
    if (password.value == ''){
        passwordError();
    }
    else if (!PasswordValidation(password.value, 8)){
        passwordError();
    }
    else{
        password.classList.add('green-border');
    }
}
password.onfocus = function (){
    password.classList.remove('red-border');
    password.nextElementSibling.classList.add('hide');
}
    //Button
var buttonLogin = document.getElementsByClassName('button-Continue')[0];
buttonLogin.onclick = function (e){
    e.preventDefault();
    email = userEmail.value;
    passwordValue = password.value;
    var urlQP = 'https://basp-m2022-api-rest-server.herokuapp.com/login?' +
    'email=' + email + '&password=' + passwordValue;
    if (PasswordValidation(passwordValue, 8) && emailExpression.test (email)){
        fetch(urlQP)
        .then((response) => {
            if (response.status < 200 || response.status > 299) {
              throw new Error('There is an error');
            } 
            return response.json()    
          })
        .then(function(data){
            alert (data.msg);
            if (data.success){
                alert('Username: ' + email + ' ' + 'Password: ' + passwordValue);
            }
        })
        .catch (function(error) {
            alert(error);
        })      
    }
    else if (!emailExpression.test (email) && (!PasswordValidation(passwordValue, 8))){
        alert("Invalid Username and Invalid Password")
    }
    else {
        if (!emailExpression.test (email)){
            alert("Invalid Username");
        }
        if (!PasswordValidation(passwordValue, 8)){
            alert("Invalid Password");
        }
    }
}
}