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
var test = addition('sa',4);
console.log(test);