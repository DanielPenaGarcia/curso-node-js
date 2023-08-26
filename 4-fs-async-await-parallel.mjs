/**
 * Una vez que ya tenemos las promesas, ya podemos aplicar el async await.
 * Tenemos que tener en cuenta que el archivo esté en la extensión de modulos (.mjs).
 */

import { readFile } from 'node:fs/promises';

Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
]).then(([text, secondText]) => {
    console.log(text);
    console.log(secondText);
});


//Investigar las diferencias entre
// - Asincrono en paralelo
// - Asincrono secuencial
// - Sincrono


