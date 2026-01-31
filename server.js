const http = require('http');

const server = http.createServer((req, res) => {
  // Handle GET requests
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Received a GET request\n');
  } 
  // Handle POST requests
  else if (req.method === 'POST') {
    let body = '';
    
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    
    req.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Received a POST request\n');
    });
  }
});

server.listen(4000, () => {
  console.log('Server running at http://localhost:4000/');
});