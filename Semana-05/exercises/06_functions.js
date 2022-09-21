console.log('--EXERCISE 6: FUNCTIONS');
/*Crear una función suma que reciba dos valores numéricos y retorne el resultado.
 Ejecutar la función y guardar el resultado en una variable,
  mostrando el valor de dicha variable en la consola del navegador.*/
console.log('-Exercise 6.a:');
function addition(val1, val2){
    return val1 + val2;
}
var resultadoAddition = addition(8, 5);
console.log(resultadoAddition);
/*A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número;
 de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y
  retornar el valor NaN como resultado.*/
console.log('-Exercise 6.b:');
var aceptedValues = /^[0-9]+$/;
function addition(val1, val2){
    if ( isNaN(val1) || isNaN(val2) ) {
        alert('One of the parameters is not a number');
        return NaN;
    }
    else{
        return val1 + val2;
    }
}
var test6b = addition('ex',4);
console.log(test6b);
/*Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva
 verdadero si es un número entero.*/
console.log('-Exercise 6.c:');
var num = 27;
function validateInteger(num){
    return Number.isInteger(num);
}
console.log(validateInteger(num));
 /*A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c.
  y que valide que los números sean enteros.
  En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a entero (redondeado).*/
console.log('-Exercise 6.d:');
function addition(val1, val2){
    if ( isNaN(val1) || isNaN(val2) ) {
        alert('One of the parameters is not a number');
        return NaN;
    }
    else if ( !validateInteger(val1) || !validateInteger(val2) ){
        alert('One of the parameters is not an integer');
        return Math.round(val1 + val2);
    }
    else{
        return val1 + val2;
    }
}
console.log(addition(3.13, 8.23));
/*Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando 
que todo siga funcionando igual.*/
console.log('-Exercise 6.e:');
function roundIfNotInteger(val1, val2){
    if ( !validateInteger(val1) || !validateInteger(val2) ){
        alert('One of the parameters is not an integer');
        return Math.round(val1 + val2);
    }
    else{
        return val1 + val2;
    }
}
function addition(val1, val2){
    if ( isNaN(val1) || isNaN(val2) ) {
        alert('One of the parameters is not a number');
        return NaN;
    }
    else {
        return roundIfNotInteger(val1, val2);
    }
 }
 console.log(addition('z', 4));
 console.log(addition(36.21 , 7.65));