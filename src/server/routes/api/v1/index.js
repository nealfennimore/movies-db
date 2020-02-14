/**
 * Internal Dependencies
 */
const { getSubpath } = require( 'server/utils/path' );
const { NoMatchingRoute } = require('server/errors');
const movies = require('./movies');

/**
 * Handle routing for path
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @throws {NoMatchingRoute}
 */
const handleV1 = async (req, res)=> {
    const path = getSubpath(req, 2);

    switch (path) {
        case 'movies':
            return await movies(req, res);

        default:
            throw new NoMatchingRoute('Made it to v1');
    }
};

module.exports = handleV1;