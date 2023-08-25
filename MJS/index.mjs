// .js -► por defecto utiliza CommonJS
// .mjs -► para utilizar ES Modules VERSION OFICIAL DE NODE
// .cjs -► para utilizar CommonJS

import {sum, mult, rest} from './sum.mjs'

console.log(sum(1,2));

console.log(mult(1,2));

console.log(rest(1,2));