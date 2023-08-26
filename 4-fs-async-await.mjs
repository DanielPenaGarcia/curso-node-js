/**
 * Una vez que ya tenemos las promesas, ya podemos aplicar el async await.
 * Tenemos que tener en cuenta que el archivo esté en la extensión de modulos (.mjs).
 */

import { readFile }  from 'node:fs/promises';

const readFileAwait = 

console.log('Leyendo el primer archivo...');

const firstText = await readFile('./archivo.txt', 'utf-8');

console.log('Primer Texto:', firstText);
console.log('--> Hacer cosas mientras lee el archivo');

console.log('Leyendo el segundo archivo...');
const secondText = await readFile('./archivo2.txt', 'utf-8');

console.log(secondText);
