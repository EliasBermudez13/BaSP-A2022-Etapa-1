window.onload = function (){
    //firstName validation
    var fName = document.getElementById('first-name');
    var numsAndLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbers = '1234567890';
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
    fName.value = localStorage.getItem('name');
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
    userEmail.value = localStorage.getItem('email');
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
    function addressValidationNum(){
        for (i = 0; i < address.value.length; i++){
            caracters = address.value[i];
            if (numbers.indexOf(caracters) != -1){
                return true;
            }
        }
        return false;
    }   
    function addressValidationLet(){
        for (i = 0; i < address.value.length; i++){
            caracters = address.value[i];
            if (letters.indexOf(caracters) != -1){
                return true;
            }
        }
        return false;
    }    
    var address = document.getElementById('address');
    var vAddress = false;
    address.value = localStorage.getItem('address');
    address.onblur = function (){
        addressValue = address.value;
        if (addressValue == ''){
            address.classList.add('red-border');
            errorAlertAddress.innerHTML = 'Error: you must enter the Address';
            errorAlertAddress.classList.remove('hide');
            address.parentNode.insertBefore(errorAlertAddress, address.nextElementSibling);
            vAddress = false;
        }
        else if( addressValue.length < 5){
            address.classList.add('red-border');
            errorAlertAddress.innerHTML = 'Error: you must enter a valid Address with 5 or more alphanumeric characters ';
            errorAlertAddress.classList.remove('hide');
            address.parentNode.insertBefore(errorAlertAddress, address.nextElementSibling);
            vAddress = false;
        }
        else if ( !addressValue.includes(' ')){
            address.classList.add('red-border');
            errorAlertAddress.innerHTML = 'Error: your address must have: at least one space between';
            errorAlertAddress.classList.remove('hide');
            address.parentNode.insertBefore(errorAlertAddress, address.nextElementSibling);
            vAddress = false;
        }
        else if (!addressValidationNum()){
            address.classList.add('red-border');
            errorAlertAddress.innerHTML = 'Error: your address must have: at least one number';
            errorAlertAddress.classList.remove('hide');
            address.parentNode.insertBefore(errorAlertAddress, address.nextElementSibling);
            vAddress = false;
        }
        else if (!addressValidationLet()){
            address.classList.add('red-border');
            errorAlertAddress.innerHTML = 'Error: your address must have: at least one letter';
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
    password.value = localStorage.getItem('password');
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
    lName.value = localStorage.getItem('lastName');
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
    var phone = document.getElementById('phone');
    var vPhone = false;
    phone.value = localStorage.getItem('phone');
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
    country.value = localStorage.getItem('city');
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
    id.value = localStorage.getItem('dni');
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
    postalCode.value = localStorage.getItem('zip');
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
    date.value = localStorage.getItem('dob');
    var date0 = date.value;
    var [year, month, day] = date0.split('-');
    var date1 = [month, day, year]. join('/');
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
        var date0 = date.value;
        var [year, month, day] = date0.split('-');
        var date1 = [month, day, year]. join('/');
        var errorFields = [];
        var urlQP = 'https://basp-m2022-api-rest-server.herokuapp.com/signup?'+ 'name=' + fName.value + 
        '&lastName=' + lName.value + '&dni=' + id.value + '&dob=' + date1 + 
        '&phone='+ phone.value + '&address=' +address.value + '&city=' + country.value +
        '&zip=' + postalCode.value + '&email=' + userEmail.value + '&password=' + password.value;
        if(vFName && vLName && vUserEmail && vPassword && vRepeatPassword
            && vDateOfB && vId && vPhone && vCountry && vAddress && vPostalCode){
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
                    alert('Employee created: \nFirst name: '+ fName.value + '\nLast name: ' + lName.value +
                    '\nEmail: ' + userEmail.value + '\nPassword: ' + password.value + '\nPassword confirmed: ' + repeatPassword.value +
                    '\nDate of birth: ' + date1 + '\nDNI: ' + id.value +  '\nTelephone: ' + phone.value +
                    '\nCountry: ' + country.value + '\nAddress: ' + address.value +  '\nPostal code: ' + postalCode.value);
                    localStorage.setItem('name', fName.value);
                    localStorage.setItem('lastName', lName.value);
                    localStorage.setItem('dni', userEmail.value);
                    localStorage.setItem('dob', date1);
                    localStorage.setItem('phone', phone.value);
                    localStorage.setItem('address', address.value);
                    localStorage.setItem('city', country.value);
                    localStorage.setItem('zip', postalCode.value);
                    localStorage.setItem('email', userEmail.value);
                    localStorage.setItem('password', password.value);
                }
            })
            .catch (function(error) {
                alert(error);
            })        
        }else{
            if(!vFName){
                errorFields.push('\nInvalid first name entered');
            } 
            if(!vLName){
                errorFields.push('\nInvalid last name entered');
            } 
            if(!vUserEmail){
                errorFields.push('\nInvalid email entered');
            } 
            if(!vPassword){
                errorFields.push('\nInvalid password entered');
            } 
            if(!vRepeatPassword){
                errorFields.push('\nPasswords did not match');
            } 
            if(!vDateOfB){
                errorFields.push('\nInvalid date of birth entered');
            } 
            if(!vId){
                errorFields.push('\nInvalid DNI entered');
            } 
            if(!vPhone){
                errorFields.push('\nInvalid telephone entered');
            }
            if(!vCountry){
                errorFields.push('\nInvalid country entered');
            } 
            if(!vAddress){
                errorFields.push('\nInvalid address entered');
            }
            if(!vPostalCode){
                errorFields.push('\nInvalid postal code entered');
            }
            alert('There are some errors: ' + '\n' + errorFields);
        }
    }
}

