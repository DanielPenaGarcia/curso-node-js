//FS File System
//Temas asyncronos
//En nodeJS siempre tenemos que poner las extensiones? 
// En ES Modules siempre debemos colocar las extensiones

//Los File System siempre lo utilizaremos día a día

const fileSystem = require('node:fs'); //A partir de node 16, se recomienda colocar node y dos puntos "node:"

const stats = fileSystem.statSync('./archivo.txt');

console.log(
    stats.isFile(),// Si es un fichero
    stats.isDirectory(), //Si es un directorio
    stats.isSymbolicLink(), //Si es un mensaje simbolico
    stats.size //Tamaño en bytes 
)