/**
 * Internal Dependencies
 */
const { getSubpath } = require( 'server/utils/path' );
const { NoMatchingRoute } = require('server/errors');
const v1 = require('./v1');

/**
 * Handle routing for path
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @throws {NoMatchingRoute}
 */
const handleApi = async (req, res)=> {
    const path = getSubpath(req, 1);

    switch (path) {
        case 'v1':
            return await v1(req, res);

        default:
            throw new NoMatchingRoute('Made it to api');
    }
};

module.exports = handleApi;