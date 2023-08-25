//const os = require('os') Desde la versión 16 de nodeJs ya no es necesario nombrar al módulo nativo "os"

//Lo recomendable es...
const os = require('node:os')
//Conseguimos información del sistema operativo

console.log("Información del sistema operativo: ");

console.log("------------------------------------");

console.log("Nombre del sistema operativo: ", os.platform());
console.log("Versión del sistema operativo: ", os.release());
console.log("Arquitectura: ", os.arch());
console.log("CPUs: ", os.cpus()); //Vamos a poder escalar procesos en NodeJS
/*
Podemos ir creando procesos hijos, con tantos procesadores tengamos, para 
poder escalar la aplicación de node
*/

console.log("Memoria libre: " , os.freemem() / 1024 / 1024);
console.log("Memoria total: " , os.totalmem() / 1024 / 1024);
console.log("uptime: " , os.uptime /60 /60)