/**
 * External Dependencies
 */
const { STATUS_CODES } = require('http');

/**
 * Internal Dependencies
 */
const { getPathSequence } = require( 'server/utils/path' );
const { getBody } = require( 'server/utils/request' );
const { NoMatchingRoute } = require('server/errors');
const api = require( 'server/routes/api' );
const assets = require('server/routes/assets.js');

/**
 * Handle routing for path
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @throws {NoMatchingRoute}
 */
const routes = async (req, res)=> {
    switch (res.locals.path.next().value) {
        case 'api':
            return await api(req, res);
    
        default:
            return await assets.serve(req, res);
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
        const payload = await getBody(req);

        // Mimic expressJS API and add context to this request
        res.locals = {
            path: getPathSequence(req),
            payload,
        };

        await routes(req, res);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        const code = error.code || 404;
        const json = {
            error: true,
            code,
            message: STATUS_CODES[code],
        };
        res.writeHead(code);
        res.end( JSON.stringify(json) );
    }
};

module.exports = handleRoutes;