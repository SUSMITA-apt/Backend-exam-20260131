const {Buffer} = require('node:buffer');
const buf = Buffer.from("Hello")
buf [0] = 72
// console.log(buf);
console.log(buf.toString());