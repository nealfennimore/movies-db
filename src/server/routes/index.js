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
        const payload = await getBody(req);

        // Mimic expressJS API and add context to this request
        const locals = {
            path: getPathSequence(req),
            payload,
        };
        res.locals = locals;

        await routes(req, res);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        res.writeHead(error.code);
        const json = {
            error: true,
            code: error.code,
            message: STATUS_CODES[error.code],
        };
        res.end( JSON.stringify(json) );
    }
};

module.exports = handleRoutes;