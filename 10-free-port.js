
    const net = require('node:net');

    function findAvaliblePort(desiredPort){
        return new Promise((resolve, reject) => {
            const server = net.createServer();

            server.listen(desiredPort, () => {
                const {port} = server.address().port;
                server.close(() => {
                    resolve(port);
                });
            });
            server.on('error' , (err) => {
                if(err.code === 'EADDRINUSE'){
                    console.log('si');
                    findAvaliblePort(0).then(port => resolve(port));
                }else{
                    reject(err);
                }
            });
        });
    };

    module.exports = {findAvaliblePort};