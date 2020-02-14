/**
 * External Dependencies
 */
const http = require('http');

const PORT = process.env.PORT || 3000;

const requestHandler = (req, res)=>{
    res.writeHead(200);
    res.end('hello world\n');
};

const server = http.createServer(requestHandler);

server.listen(PORT);

console.log('Server running at http://127.0.0.1:%d', PORT );
