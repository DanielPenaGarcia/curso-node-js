
const path = require('node:path');

//Unir rutas con path.join

//Nunca se deben crear las rutas de la siguiente manera 

//'./content/subfolder/text.txt'
/**
 * Porque en unix y windows son diferentes
 * Unix ► \
 * Wiondows ► /
 */

//Para obtener la separación de archivos de tu sistema operativo 
// path.sep

console.log(path.sep);

//Unir rutas con path.join
const filePath = path.join('content', 'subCarpeta', 'archivo.txt');

console.log(filePath);

//Nombre de un archivo
const base = path.basename(filePath);
console.log(base);

//Nombre del archivo sin extensión
const fileName = path.basename(filePath, '.txt');
console.log(fileName);

//Solo obtener la extensión
const extension = path.extname('image.png');

console.log(extension);