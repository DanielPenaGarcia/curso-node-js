//Objeto process
/**
 * Es un objeto global, que proporciona información y control, sobre el proceso actual de ejecución
 */

//Por ejemplo de procesos actuales
/**
 * Información
 * ► Argumentos de entrada "process.argv"
 * ► Buscar en que carpeta se está ejecutando el proceso "process.cwd()"
 * Controlar 
 * ► Procesos y salida "process.exit()"
 * ► Eventos "process.on()"
 */

//Argumentos de entrada
//console.log(process.argv);
//RESULTADO DE EJEMPLO
//Inserta en la consola lo siguiente
// node 7-process.js hola mundo
//El resultado sería
//El path de node
//El path completo del archivo "7-process.js"
//hola
//mundo

//Con process exit
/**
 * Con 0, se finaliza y quiere decir que está todo correcto
 * Con 1, Indica que ha habido un error
 */
//process.exit(); 

//Con process on
// process.on('exit', ()=>{
//     //Limpiar la consola
// });

//Current working directory
console.log(process.cwd());