
const fs = require('node:fs/promises');
const path = require('node:path');
const pc = require('picocolors');

const folder = process.argv[2] ?? '.';

async function ls(folder) {

    let files;

    try {
        files = await fs.readdir(folder);
    } catch {
        console.error(pc.red(`😘 No se pudo leer el directorio ${folder}`));
        process.exit(1);
    }


    const filePromises = files.map(async file => {

        const filePath = path.join(folder, file);
        let stats;

        try {
             stats = await fs.stat(filePath); //stat: status/información del archivo  
        } catch {
            console.error(pc.red(' No se pudo leer el archivo', `${folder}`));
            process.exit(1);
        }

        const isDirectory = stats.isDirectory();

        const fileType = isDirectory ? 'd' : 'f';
        const fileSize = stats.size;
        const fileModified = stats.mtime.toLocaleString();
        return `${pc.green(fileType)} ${pc.bold(pc.blue(file.padEnd(20)))} ${pc.yellow(fileSize.toString().padStart(10))} ${pc.white(fileModified)}`
    });

    const filesInfo = await Promise.all(filePromises);

    filesInfo.forEach(fileInfo => {
        console.log(fileInfo);
    });

};

ls(folder);

// .then(files => {
//     files.forEach(file => {
//         const filePath = path.join(folder, file);

//         fs.stat(filePath);
//     })
// }).catch(err => {
//     if (err) {
//         console.err('Hubo un error al leer la dirección del archivo');
//         return;
//     }
// });