// create a Buffer from a string
// const {Buffer} = require('node:buffer');
// const buf = Buffer.from("Hello")
// buf [0] = 72
// // console.log(buf);
// console.log(buf.toString());

// convert a Buffer to a JSON object
// const buf = Buffer.from("Hello");

// const json = buf.toJSON();
// console.log(json);
// concatenate two Buffers

// const buf1 = Buffer.from("Hello ");
// const buf2 = Buffer.from("World");

// const result = Buffer.concat([buf1, buf2]);

// console.log(result.toString());
// pipe method
// const fs = require("fs");

// const readStream = fs.createReadStream("input.txt");
// const writeStream = fs.createWriteStream("output.txt");

// readStream.pipe(writeStream);

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World from Node.js Server");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

