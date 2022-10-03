window.onload = function (){
    //firstName validation
var fName = document.getElementById('first-name');
var numsAndLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var errorAlertFN = document.createElement('p');
var errorAlertLN = document.createElement('p');
var errorAlertEmail = document.createElement('p');
var errorAlertPass = document.createElement('p');
var errorAlertRPass = document.createElement('p');
var errorAlertDate = document.createElement('p');
var errorAlertID = document.createElement('p');
var errorAlertPhone = document.createElement('p');
var errorAlertCountry = document.createElement('p');
var errorAlertAddress = document.createElement('p');
var errorAlertPostal = document.createElement('p');
function allValidation(value, type, min){
    if (value.length < min){
        return false;
    }
    var valueLength = value.length;
    for (i = 0; i < valueLength; i++){
        caracters = value[i];
        if (type.indexOf(caracters) == -1){
            return false;
        }
    }
    return true;
}
var vFName = false;
fName.onblur = function (){
    if (fName.value == ''){
        fName.classList.add('red-border');
        errorAlertFN.innerHTML = 'Error: you must enter the First Name';
        errorAlertFN.classList.remove('hide');
        fName.parentNode.insertBefore(errorAlertFN, fName.nextElementSibling);
        vFName = false;
    }
    else if (!allValidation(fName.value, letters, 4)){
        fName.classList.add('red-border');
        errorAlertFN.innerHTML = 'Error: you must enter a valid First Name';
        errorAlertFN.classList.remove('hide');
        fName.parentNode.insertBefore(errorAlertFN, fName.nextElementSibling);
        vFName = false;
    }
    else{
       fName.classList.add('green-border');
       vFName = true;
    }
}
fName.onfocus = function (){
    fName.classList.remove('red-border');
    fName.nextElementSibling.classList.add('hide');
}
    //email
var userEmail = document.getElementById('username');
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var vUserEmail = false;
userEmail.onblur = function (){
    if(emailExpression.test (userEmail.value)){
        userEmail.classList.add('green-border');
        vUserEmail = true;
    }
    else{
        userEmail.classList.add('red-border');
        errorAlertEmail.innerHTML = 'Error: you must enter a valid E-Mail';
        errorAlertEmail.classList.remove('hide');
        userEmail.parentNode.insertBefore(errorAlertEmail, userEmail.nextElementSibling);
        vUserEmail = false;
    }
}
userEmail.onfocus = function (){
    userEmail.classList.remove('red-border');
    userEmail.nextElementSibling.classList.add('hide');
}
    //address
var address = document.getElementById('address');
var vAddress = false;
address.onblur = function (){
    addressValue = address.value;
    space = addressValue.indexOf(" ");
    if (addressValue == ''){
        address.classList.add('red-border');
        errorAlertAddress.innerHTML = 'Error: you must enter the Address';
        errorAlertAddress.classList.remove('hide');
        address.parentNode.insertBefore(errorAlertAddress, address.nextElementSibling);
        vAddress = false;
    }
    else if (!allValidation(addressValue.substring(0,space), numsAndLetters, 5) && !allValidation(addressValue.substring(space +1), numsAndLetters, 1)){
        address.classList.add('red-border');
        errorAlertAddress.innerHTML = 'Error: you must enter a valid Address';
        errorAlertAddress.classList.remove('hide');
        address.parentNode.insertBefore(errorAlertAddress, address.nextElementSibling);
        vAddress = false;
    }
    else{
        address.classList.add('green-border');
        vAddress = true;
    }
}
address.onfocus = function (){
    address.classList.remove('red-border');
    address.nextElementSibling.classList.add('hide');
}
    //password
var password = document.getElementById('password');
function passwordError() {
    password.classList.add('red-border');
    errorAlertPass.innerHTML = 'Error: your password must have 8 or more alphanumeric characters';
    errorAlertPass.classList.remove('hide');
    password.parentNode.insertBefore(errorAlertPass, password.nextElementSibling);
} 
function PasswordValidation(pass){
    if (pass.length < 8){
        return false;
    }
    var passLength = pass.length;
    for (i = 0; i < passLength; i++){
        caracters = pass[i];
        if (numsAndLetters.indexOf(caracters) == -1){
            return false;
        }
    }
    return true;
}
var vPassword = false;
password.onblur = function (){
    if (password.value == ''){
        passwordError();
        vPassword = false;
    }
    else if (!PasswordValidation(password.value)){
        passwordError();
        vPassword = false;
    }
    else{
        password.classList.add('green-border');
        vPassword = true;
    }
}
password.onfocus = function (){
    password.classList.remove('red-border');
    password.nextElementSibling.classList.add('hide');
}
    //lastName
var lName = document.getElementById('last-name');
var vLName = false;
lName.onblur = function (){
    if (lName.value == ''){
        lName.classList.add('red-border');
        errorAlertLN.innerHTML = 'Error: you must enter the Last Name';
        errorAlertLN.classList.remove('hide');
        lName.parentNode.insertBefore(errorAlertLN, lName.nextElementSibling);
        vLName = false;
    }
    else if (!allValidation(lName.value, letters, 4)){
        lName.classList.add('red-border');
        errorAlertLN.innerHTML = 'Error: you must enter a valid Last Name';
        errorAlertLN.classList.remove('hide');
        lName.parentNode.insertBefore(errorAlertLN, lName.nextElementSibling);
        vLName = false;
    }
    else{
       lName.classList.add('green-border');    
       vLName = true;
    }
}
lName.onfocus = function (){
    lName.classList.remove('red-border');
    lName.nextElementSibling.classList.add('hide');
}
    //Phone
function phoneValidation(value){
    if (value.length != 10){
        return false;
    }
    var valueLength = value.length;
    for (i = 0; i < valueLength; i++){
        caracters = value[i];
        if (numbers.indexOf(caracters) == -1){
            return false;
        }
    }
    return true;
}
var numbers = '1234567890';
var phone = document.getElementById('phone');
var vPhone = false;
phone.onblur = function (){
    if (phone.value == ''){
        phone.classList.add('red-border');
        errorAlertPhone.innerHTML = 'Error: you must enter a Phone number';
        errorAlertPhone.classList.remove('hide');
        phone.parentNode.insertBefore(errorAlertPhone, phone.nextElementSibling);
        vPhone = false;
    }
    else if (!phoneValidation(phone.value)){
        phone.classList.add('red-border');
        errorAlertPhone.innerHTML = 'Error: you must enter a valid Phone number';
        errorAlertPhone.classList.remove('hide');
        phone.parentNode.insertBefore(errorAlertPhone, phone.nextElementSibling);
        vPhone = false;
    }
    else{
       phone.classList.add('green-border');
       vPhone = true;    
    }
}
phone.onfocus = function (){
    phone.classList.remove('red-border');
    phone.nextElementSibling.classList.add('hide');
}
    //country
var country = document.getElementById('country');
var vCountry = false;
country.onblur = function (){
    if (country.value == ''){
        country.classList.add('red-border');
        errorAlertCountry.innerHTML = 'Error: you must enter a country ';
        errorAlertCountry.classList.remove('hide');
        country.parentNode.insertBefore(errorAlertCountry, country.nextElementSibling);
        vCountry = false;
    }
    else if (!allValidation(country.value, letters,3)){
        country.classList.add('red-border');
        errorAlertCountry.innerHTML = 'Error: you must enter a valid country';
        errorAlertCountry.classList.remove('hide');
        country.parentNode.insertBefore(errorAlertCountry, country.nextElementSibling);
        vCountry = false;
    }
    else{
       country.classList.add('green-border');
       vCountry = true;    
    }
}
country.onfocus = function (){
    country.classList.remove('red-border');
    country.nextElementSibling.classList.add('hide');
}
    //repeat Password
var repeatPassword = document.getElementById('password-confirm')
var vRepeatPassword = false;
repeatPassword.onblur = function (){
    if (repeatPassword.value == ''){
        repeatPassword.classList.add('red-border');
        errorAlertRPass.innerHTML = 'Error: you must enter a password ';
        errorAlertRPass.classList.remove('hide');
        repeatPassword.parentNode.insertBefore(errorAlertRPass, repeatPassword.nextElementSibling);
        vRepeatPassword = false;
    }
    else if (!PasswordValidation(repeatPassword.value, numsAndLetters, 8)){
        repeatPassword.classList.add('red-border');
        errorAlertRPass.innerHTML = 'Error: you must enter a valid password ';
        errorAlertRPass.classList.remove('hide');
        repeatPassword.parentNode.insertBefore(errorAlertRPass, repeatPassword.nextElementSibling);
        vRepeatPassword = false;
    }
    else if (repeatPassword.value !== password.value){
        repeatPassword.classList.add('red-border');
        errorAlertRPass.innerHTML = 'Error: passwords did not match ';
        errorAlertRPass.classList.remove('hide');
        repeatPassword.parentNode.insertBefore(errorAlertRPass, repeatPassword.nextElementSibling);
        vRepeatPassword = false;
    }
    else{
        repeatPassword.classList.add('green-border');
        vRepeatPassword = true;
    }
}
repeatPassword.onfocus = function (){
    repeatPassword.classList.remove('red-border');
    repeatPassword.nextElementSibling.classList.add('hide');
}
    //identification
var id = document.getElementById('id');
var vId = false;
id.onblur = function (){
    if (id.value == ''){
        id.classList.add('red-border');
        errorAlertID.innerHTML = 'Error: you must enter an id number';
        errorAlertID.classList.remove('hide');
        id.parentNode.insertBefore(errorAlertID, id.nextElementSibling);
        vId = false;
    }
    else if (!allValidation(id.value, numbers, 7)){
        id.classList.add('red-border');
        errorAlertID.innerHTML = 'Error: you must enter a valid id number';
        errorAlertID.classList.remove('hide');
        id.parentNode.insertBefore(errorAlertID, id.nextElementSibling);
        vId = false;
    }
    else{
       id.classList.add('green-border'); 
       vId = true;   
    }
}
id.onfocus = function (){
    id.classList.remove('red-border');
    id.nextElementSibling.classList.add('hide');
}
    //postalCode
var postalCode = document.getElementById('postal-code');
function postalCodeValidation(){
    if (postalCode.value.length < 4){
        return false;
    }
    else if (postalCode.value.length > 5){
        return false;
    }
    var valueLength = postalCode.value.length;
    for (i = 0; i < valueLength; i++){
        caracters = postalCode.value[i];
        if (numbers.indexOf(caracters) == -1){
            return false;
        }
    }
    return true;
}
var vPostalCode = false;
postalCode.onblur = function (){
    if (postalCode.value == ''){
        postalCode.classList.add('red-border');
        errorAlertPostal.innerHTML = 'Error: you must enter the postal code number';
        errorAlertPostal.classList.remove('hide');
        postalCode.parentNode.insertBefore(errorAlertPostal, postalCode.nextElementSibling);
        vPostalCode = false; 
    }
    else if (!postalCodeValidation()){
        postalCode.classList.add('red-border');
        errorAlertPostal.innerHTML = 'Error: you must enter a valid postal code number';
        errorAlertPostal.classList.remove('hide');
        postalCode.parentNode.insertBefore(errorAlertPostal, postalCode.nextElementSibling);
        vPostalCode = false; 
    }
    else{
       postalCode.classList.add('green-border'); 
       vPostalCode = true;   
    }
}
postalCode.onfocus = function (){
    postalCode.classList.remove('red-border');
    postalCode.nextElementSibling.classList.add('hide');
}
    //dateofBirth
var date = document.getElementById('date');
var vDateOfB = false;
function dateValidation(){
    if (date.value.length != 10){
        return false;
    }
    return true;
}
date.onblur = function(){
    if(!dateValidation()){
        date.classList.add('red-border');
        errorAlertDate.innerHTML = 'Error: you must enter a valid date of birth';
        errorAlertDate.classList.remove('hide');
        date.parentNode.insertBefore(errorAlertDate, date.nextElementSibling);
        vDateOfB = false;
    }
    else{
        date.classList.add('green-border'); 
        vDateOfB = true;   
    }
}
date.onfocus = function (){
    date.classList.remove('red-border');
    date.nextElementSibling.classList.add('hide');
}

    //Button
var buttonSignup = document.getElementsByClassName('button-Create')[0];
buttonSignup.onclick = function (e){
    e.preventDefault();
    if(vFName && vLName && vUserEmail && vPassword && vRepeatPassword
        && vDateOfB && vId && vPhone && vCountry && vAddress && vPostalCode){ 
        alert("Employee created: \nFirst name: "+ fName.value + "\nLast name: " + lName.value +
        "\nEmail: " + userEmail.value + "\nPassword: " + password.value + "\nPassword confirmed: " + repeatPassword.value +
        "\nDate of birth: " + date.value + "\nDNI: " + id.value +  "\nTelephone: " + phone.value +
        "\nCountry: " + country.value + "\nAddress: " + address.value +  "\nPostal code: " + postalCode.value);
    }else{
        if(!vFName) alert("Invalid first name entered");
        if(!vLName) alert("Invalid last name entered");
        if(!vUserEmail) alert("Invalid email entered");
        if(!vPassword) alert("Invalid password entered");
        if(!vRepeatPassword) alert("Passwords didn't match");
        if(!vDateOfB) alert("Invalid date of birth entered");
        if(!vId) alert("Invalid DNI entered");
        if(!vPhone) alert("Invalid telephone entered");
        if(!vCountry) alert("Invalid locality entered");
        if(!vAddress) alert("Invalid address entered");
        if(!vPostalCode) alert("Invalid postal code entered");
    }
}
}

