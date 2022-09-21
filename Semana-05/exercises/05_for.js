console.log('--EXERCISE 5: FOR');
/*Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle
 for de JavaScript para mostrar una alerta utilizando cada una de las palabras.*/
console.log('-Exercise 5.a:');
 var word5 = ['falcon', 'sun', 'wizard', 'cheap', 'car'];
 for (var contador = 0; contador < word5.length; contador++){
    alert(word5[contador]);
 }
 /*Al array anterior convertir la primera letra de cada palabra en mayúscula y
  mostrar una alerta por cada palabra modificada.*/
console.log('-Exercise 5.b:');
for (var contador = 0; contador < word5.length; contador++){
    alert(word5[contador].substring(0,1).toUpperCase() + word5[contador].substring(1,word5[contador].length).toLowerCase());
}
/*Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a)
 recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence.
 Al final mostrar una única alerta con la cadena completa.*/
console.log('-Exercise 5.c:');
var sentence = [];
for (var contador = 0; contador < word5.length; contador++){
    sentence.push(word5[contador]);
}
alert(sentence);
/*Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición,
 es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array,
 desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).*/
 console.log('-Exercise 5.d:');
 var emptyArray = [];
 for (var contador = 0; contador < 10; contador++){
    emptyArray.push(contador);
 }
 console.log(emptyArray);