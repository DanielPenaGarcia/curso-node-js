//const os = require('os') Desde la versión 16 de nodeJs ya no es necesario nombrar al módulo nativo "os"

//Lo recomendable es...
import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os';
//Conseguimos información del sistema operativo

console.log("Información del sistema operativo: ");

console.log("------------------------------------");

console.log("Nombre del sistema operativo: ", platform());
console.log("Versión del sistema operativo: ", release());
console.log("Arquitectura: ", arch());
console.log("CPUs: ", cpus()); //Vamos a poder escalar procesos en NodeJS
/*
Podemos ir creando procesos hijos, con tantos procesadores tengamos, para 
poder escalar la aplicación de node
*/

console.log("Memoria libre: " , freemem() / 1024 / 1024);
console.log("Memoria total: " , totalmem() / 1024 / 1024);
console.log("uptime: " , uptime /60 /60);