const { Module } = require("@nestjs/common");

function sum(a, b){
    return a + b;
}

//Mandar un solo módulo
//module.exports = sum;

//Mandar varios modulos

module.exports = {
    sum
}
