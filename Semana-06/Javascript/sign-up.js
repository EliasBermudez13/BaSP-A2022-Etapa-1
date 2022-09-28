window.onload = function (){
    //firstName validation
var fName = document.getElementById('first-name');
var numsAndLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var errorAlert = document.createElement('p');
function allValidation(value,type,min){
    if (value.length < min){
        return (false);
    }
    var valueLength = value.length;
    for (i = 0; i < valueLength; i++){
        caracters = value[i];
        if (type.indexOf(caracters) == -1){
            return (false);
        }
    }
    return (true);
}
var vFName = false;
fName.onblur = function (){
    if (fName.value == ''){
        fName.classList.add('red-border');
        errorAlert.innerHTML = 'Error: you must enter the First Name';
        fName.parentNode.insertBefore(errorAlert, fName.nextElementSibling)
    }
    else if (!allValidation(fName.value, letters, 4)){
        fName.classList.add('red-border');
        errorAlert.innerHTML = 'Error: you must enter a valid First Name';
        fName.parentNode.insertBefore(errorAlert, fName.nextElementSibling)
    }
    else{
       fName.classList.add('green-border');
       vFName = true;
    }
}
fName.onfocus = function (){
    fName.classList.remove('red-border');
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
        errorAlert.innerHTML = 'Error: you must enter a valid E-Mail';
        userEmail.parentNode.insertBefore(errorAlert, userEmail.nextElementSibling);
    }
}
userEmail.onfocus = function (){
    userEmail.classList.remove('red-border');
}
    //address
var address = document.getElementById('address');
var vAddress = false;
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
        vAddress = true;
    }
}
address.onfocus = function (){
    address.classList.remove('red-border');
}
    //password
var password = document.getElementById('password');
function passwordError() {
    password.classList.add('red-border');
    errorAlert.innerHTML = 'Error: you must enter a valid password';
    password.parentNode.insertBefore(errorAlert, password.nextElementSibling);
} 
numsAndLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
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
var vPassword = false;
password.onblur = function (){
    if (password.value == ''){
        passwordError();
    }
    else if (!PasswordValidation(password.value, numsAndLetters, 8)){
        passwordError();
    }
    else{
        password.classList.add('green-border');
         vPassword = true;
    }
}
password.onfocus = function (){
    password.classList.remove('red-border');
}
    //lastName
var lName = document.getElementById('last-name');
var vLName = false;
lName.onblur = function (){
    if (lName.value == ''){
        lName.classList.add('red-border');
        errorAlert.innerHTML = 'Error: you must enter the Last Name';
        lName.parentNode.insertBefore(errorAlert, lName.nextElementSibling)
    }
    else if (!allValidation(lName.value, letters, 4)){
        lName.classList.add('red-border');
        errorAlert.innerHTML = 'Error: you must enter a valid Last Name';
        lName.parentNode.insertBefore(errorAlert, lName.nextElementSibling)
    }
    else{
       lName.classList.add('green-border');    
       vLName = true;
    }
}
lName.onfocus = function (){
    lName.classList.remove('red-border');
}
    //Phone
var numbers = '1234567890';
var phone = document.getElementById('phone');
var vPhone = false;
phone.onblur = function (){
    if (phone.value == ''){
        phone.classList.add('red-border');
        errorAlert.innerHTML = 'Error: you must enter a Phone number';
        phone.parentNode.insertBefore(errorAlert, phone.nextElementSibling);
    }
    else if (!allValidation(phone.value, numbers, 10)){
        phone.classList.add('red-border');
        errorAlert.innerHTML = 'Error: you must enter a valid Phone number';
        phone.parentNode.insertBefore(errorAlert, phone.nextElementSibling);
    }
    else{
       phone.classList.add('green-border');
       vPhone = true;    
    }
}
phone.onfocus = function (){
    phone.classList.remove('red-border');
}
    //country
var country = document.getElementById('country');
var vCountry = false;
country.onblur = function (){
    if (country.value == ''){
        country.classList.add('red-border');
        errorAlert.innerHTML = 'Error: you must enter a country ';
        country.parentNode.insertBefore(errorAlert, country.nextElementSibling);
    }
    else if (!allValidation(country.value, numsAndLetters,3) && !allValidation(country.value, letters,3)){
        country.classList.add('red-border');
        errorAlert.innerHTML = 'Error: you must enter a valid country';
        country.parentNode.insertBefore(errorAlert, country.nextElementSibling);
    }
    else{
       country.classList.add('green-border');
       vCountry = true;    
    }
}
country.onfocus = function (){
    country.classList.remove('red-border');
}
    //repeat Password
var repeatPassword = document.getElementById('password-confirm')
var vRepeatPassword = false;
repeatPassword.onblur = function (){
    if (repeatPassword.value == ''){
        repeatPassword.classList.add('red-border');
        errorAlert.innerHTML = 'Error: you must enter a password ';
        repeatPassword.parentNode.insertBefore(errorAlert, repeatPassword.nextElementSibling);
    }
    else if (!PasswordValidation(repeatPassword.value, numsAndLetters, 8)){
        repeatPassword.classList.add('red-border');
        errorAlert.innerHTML = 'Error: you must enter a valid password ';
        repeatPassword.parentNode.insertBefore(errorAlert, repeatPassword.nextElementSibling);
    }
    else if (repeatPassword.value !== password.value){
        repeatPassword.classList.add('red-border');
        errorAlert.innerHTML = 'Error: passwords did not match ';
        repeatPassword.parentNode.insertBefore(errorAlert, repeatPassword.nextElementSibling);
    }
    else{
        repeatPassword.classList.add('green-border');
        vRepeatPassword = true;
    }
}
repeatPassword.onfocus = function (){
    repeatPassword.classList.remove('red-border');
}
    //identification
var dni = document.getElementById('id');
var vId = false;
id.onblur = function (){
    if (id.value == ''){
        id.classList.add('red-border');
        errorAlert.innerHTML = 'Error: you must enter an id number';
        id.parentNode.insertBefore(errorAlert, id.nextElementSibling);
    }
    else if (!allValidation(id.value, numbers, 7)){
        id.classList.add('red-border');
        errorAlert.innerHTML = 'Error: you must enter a valid id number';
        id.parentNode.insertBefore(errorAlert, id.nextElementSibling);
    }
    else{
       id.classList.add('green-border'); 
       vId = true;   
    }
}
id.onfocus = function (){
    id.classList.remove('red-border');
}
    //postalCode
var postalCode = document.getElementById('postal-code');
function postalCodeValidation(){
    if (postalCode.value.length < 4){
        return (false);
    }
    else if (postalCode.value.length > 5){
        return (false);
    }
    var valueLength = postalCode.value.length;
    for (i = 0; i < valueLength; i++){
        caracters = postalCode.value[i];
        if (numbers.indexOf(caracters) == -1){
            return (false);
        }
    }
    return (true);
}
var vPostalCode = false;
postalCode.onblur = function (){
    if (postalCode.value == ''){
        postalCode.classList.add('red-border');
        errorAlert.innerHTML = 'Error: you must enter the postal code number';
        postalCode.parentNode.insertBefore(errorAlert, postalCode.nextElementSibling);
    }
    else if (!postalCodeValidation()){
        postalCode.classList.add('red-border');
        errorAlert.innerHTML = 'Error: you must enter a valid postal code number';
        postalCode.parentNode.insertBefore(errorAlert, postalCode.nextElementSibling);
    }
    else{
       postalCode.classList.add('green-border'); 
       vPostalCode = true;   
    }
}
postalCode.onfocus = function (){
    postalCode.classList.remove('red-border');
}
    //dateofBirth
var date = document.getElementById('date');
var vDateOfB = false;
function dateValidation(){
    if (date.value.length != 10){
        return (false);
    }
    return (true);
}
date.onblur = function(){
    if(!dateValidation()){
        date.classList.add('red-border');
        errorAlert.innerHTML = 'Error: you must enter a valid date of birth';
        date.parentNode.insertBefore(errorAlert, date.nextElementSibling);
    }
    else{
        date.classList.add('green-border'); 
        vDateOfB = true;   
    }
}
date.onfocus = function (){
    date.classList.remove('red-border');
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

