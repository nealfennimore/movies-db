/**
 * External Dependencies
 */
const { STATUS_CODES } = require('http');

/**
 * Internal Dependencies
 */
const { getSubpath } = require( 'server/utils/path' );
const api = require( 'server/routes/api' );
const { NoMatchingRoute } = require('server/errors');

/**
 * Handle routing for path
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @throws {NoMatchingRoute}
 */
const routes = async (req, res)=> {
    const path = getSubpath(req, 0);

    switch (path) {
        case 'api':
            return await api(req, res);
    
        default:
            throw new NoMatchingRoute();
    }
};

/**
 * Handle requests for routes
 * If any errors are thrown, write the status code to the page
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const handleRoutes = async (req, res)=> {
    try {
        await routes(req, res);
    } catch (error) {
        console.error(error);
        res.writeHead(error.code);
        res.end(STATUS_CODES[error.code]);
    }
};

module.exports = handleRoutes;