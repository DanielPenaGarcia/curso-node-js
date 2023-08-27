const http = require('node:http');

const {findAvaliblePort} = require('./10-free-port.js');

const server = http.createServer((req, res) => {
    console.log('request received');
    res.end('Hola mundo');
});

findAvaliblePort(12345).then(port => {
    server.listen(port, () =>{
        console.log(`Estamos escuchando en el puerto http://localhost:${server.address().port}`);    
    });
});

// server.listen(0, () =>{
//     console.log(`Estamos escuchando en el puerto http://localhost:${server.address().port}`);
// });