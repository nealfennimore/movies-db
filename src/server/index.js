require('dotenv').config();
/**
 * External Dependencies
 */
const http = require('http');

/**
 * Internal Dependencies
 */
const routeHandler = require('./routes');
require('./database');

const PORT = process.env.PORT || 3000;

const server = http.createServer(routeHandler);

server.listen(PORT);

console.log('Server running at http://127.0.0.1:%d', PORT );
