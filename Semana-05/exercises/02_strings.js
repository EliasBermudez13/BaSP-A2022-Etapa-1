console.log('--EXERCISE 2: STRINGS');
/*Crear una variable de tipo string con al menos 10 caracteres
 y convertir todo el texto en mayúscula (utilizar toUpperCase).*/
console.log('-Exercise 2.a:');
var words = 'javascript exercises';
words = words.toUpperCase();
console.log(words);
 /*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
  con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
console.log('-Exercise 2.b:');
var revenge = 'butterflies';
var sea = revenge.substring(0,5);
console.log(sea);
/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
 con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
console.log('-Exercise 2.c:');
var awp = 'chimpanzee';
var paw = awp.substring(awp.length - 3, awp.length);
console.log(paw);
/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
 con la primera letra en mayúscula y las demás en minúscula.
 Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/
console.log('-Exercise 2.d:');
var what = 'confusions';
var ahh = what.substring(0,1).toUpperCase() + what.substring(1,what.length).toLowerCase();
console.log(ahh);
/*Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
 Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/
console.log('-Exercise 2.e:');
var stupid = 'I forgot it was in English';
var me = stupid.indexOf(' ');
console.log(me);
/*Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
 Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga
 la primera letra de ambas  palabras en mayúscula y las demás letras en minúscula 
 (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/
console.log('-Exercise 2.f:');
var twoWords = 'concentrating programming';
var niceWords = twoWords.substring(0,1).toUpperCase() + twoWords.substring(1,twoWords.indexOf(' ')).toLowerCase() + ' '
                + twoWords.substring(twoWords.indexOf(' ') + 1,twoWords.indexOf(' ') + 2).toUpperCase() + 
                twoWords.substring(twoWords.indexOf(' ') + 2,twoWords.length).toLowerCase();
console.log(niceWords);