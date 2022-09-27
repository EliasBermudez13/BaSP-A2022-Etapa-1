window.onload = function (){
    //firstName validation
var fName = document.getElementById('first-name');
numsAndLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var errorAlert = document.createElement('p');
function allValidation(value,type,min){
    if (value.length < min){
        return (false);
    }
    var valueLength = value.length;
    for (i = 0; i < valueLength; i++){
        caracters = value[i];
        if (numsAndLetters.indexOf(caracters) == -1){
            return (false);
        }
    }
    return (true);
}
fName.onblur = function (){
    if (fName.value == ''){
        fName.classList.add('red-border');
        errorAlert.innerHTML = 'Error: you must enter the First Name';
        fName.parentNode.insertBefore(errorAlert, fName.nextElementSibling)
    }
    else if (!allValidation(address.value, numsAndLetters, 4)){
        address.classList.add('red-border');
        errorAlert.innerHTML = 'Error: you must enter a valid First Name';
        fName.parentNode.insertBefore(errorAlert, fName.nextElementSibling)
    }
    else{
       fName.classList.add('green-border');
        
    }
}
fName.onfocus = function (){
    fName.classList.remove('red-border');
}
    //email
var userEmail = document.getElementById('username');
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
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
    //address
var address = document.getElementById('address');
address.onblur = function (){
    addressValue = address.value;
    space = addressValue.indexOf(" ");
    if (addressValue == ''){
        address.classList.add('red-border');
        errorAlert.innerHTML = 'Error: you must enter the Address';
        address.parentNode.insertBefore(errorAlert, address.nextElementSibling)
    }
    else if (!allValidation(addressValue.substring(0,space), numsAndLetters, 5) && !allValidation(addressValue.substring(space +1), numsAndLetters, 1)){
        address.classList.add('red-border');
        errorAlert.innerHTML = 'Error: you must enter a valid Address';
        address.parentNode.insertBefore(errorAlert, address.nextElementSibling)
    }
    else{
        address.classList.add('green-border');
        
    }
}
userEmail.onfocus = function (){
    userEmail.classList.remove('red-border');
}
    //password
var password = document.getElementById('password');
function passwordError() {
    password.classList.add('red-border');
    errorAlert.innerHTML = 'Error: you must enter a valid password';
    password.parentNode.insertBefore(errorAlert, password.nextElementSibling);
} 
numsAndLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
function PasswordValidation(pass,type,min){
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
    //lastName
var lName = document.getElementById('last-name');
lName.onblur = function (){
    if (lName.value == ''){
        lName.classList.add('red-border');
        errorAlert.innerHTML = 'Error: you must enter the Last Name';
        lName.parentNode.insertBefore(errorAlert, lName.nextElementSibling)
    }
    else if (!allValidation(address.value, numsAndLetters, 4)){
        address.classList.add('red-border');
        errorAlert.innerHTML = 'Error: you must enter a valid Last Name';
        lName.parentNode.insertBefore(errorAlert, lName.nextElementSibling)
    }
    else{
       lName.classList.add('green-border');    
    }
}
lName.onfocus = function (){
    lName.classList.remove('red-border');
}
}