/**
 * External Dependencies
 */
const { resolve } = require('path');
const staticAssets = require('node-static');

/**
 * Internal Dependencies
 */
const { NoMatchingRoute } = require('server/errors');

/**
 * Static asset server
 */
const fileServer = new staticAssets.Server( resolve( __dirname, '../../client' ) );

/**
 * Serve static assets
 * @param {Request} req 
 * @param {Response} res 
 * @throws {NoMatchingRoute}
 */
async function serve(req, res){
    try {
        await fileServer.serve(req, res);
    } catch (error) {
        throw new NoMatchingRoute(error);
    }
}

module.exports = {
    serve
};