
const fileSystem = require('node:fs');

console.log('Leyendo el primer archivo...')
const text = fileSystem.readFileSync('./archivo.txt', 'utf-8');
//Si se realiza lo siguiente, se obtendrá un buffer (Memoria con información, con los bytes)
//Por eso lo convertiremos en un sistema donde nosotros podamos entender, para eso
//diremos que la codificación que queramos que tenga a la hora de leer el archivo será con utf-8

console.log(text);

console.log('Leyendo el segundo texto');
const secondText = fileSystem.readFileSync('./archivo2.txt', 'utf-8');

console.log(secondText);