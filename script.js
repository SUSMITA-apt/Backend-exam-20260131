// create a Buffer from a string
// const {Buffer} = require('node:buffer');
// const buf = Buffer.from("Hello")
// buf [0] = 72
// // console.log(buf);
// console.log(buf.toString());

// convert a Buffer to a JSON object
const buf = Buffer.from("Hello");

const json = buf.toJSON();
console.log(json);