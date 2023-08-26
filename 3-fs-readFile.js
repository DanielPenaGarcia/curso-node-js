
/**
 * Es una utilidad especial, con la que puedes crear la versión de promesas de una que no sea de promesas
 * como en el siguiente caso.
 * Solo usar en módulos nativos
 */
//const promisify = require('node:util');

//Este caso solo utilizar cuando sabemos que el modulo no tiene version de promesas
//const readFilePromise = promisify(fileSystem.readFile);

const fileSystem = require('node:fs');



console.log('Leyendo el primer archivo...')
//Para cambiarlo a Asyncrono, lo cambiaremos un poco
//const text = fileSystem.readFileSync('./archivo.txt', 'utf-8');
const text = fileSystem.readFile('./archivo.txt', 'utf-8', (err, text) => { //Ejecuta el callback cuando termines
    console.log(text);    
});
//Si se realiza lo siguiente, se obtendrá un buffer (Memoria con información, con los bytes)
//Por eso lo convertiremos en un sistema donde nosotros podamos entender, para eso
//diremos que la codificación que queramos que tenga a la hora de leer el archivo será con utf-8



console.log('Hacer cosas mientras lee los archivos');

console.log('Leyendo el segundo archivo...')

//Lo mismo con el de abajo
//const secondText = fileSystem.readFileSync('./archivo2.txt', 'utf-8');
const secondText = fileSystem.readFile('./archivo2.txt', 'utf-8', (err, secondText) => { //Ejecuta el callback cuando termines
    console.log(secondText);    
});