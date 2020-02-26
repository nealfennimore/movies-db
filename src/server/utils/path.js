/**
 * Return the paths for the current request
 *
 * @param {Request} req Request object
 * @returns {Array<String>}
 */
const parsePaths = ( req ) => {
    // TODO: Cache by req url
    const url = req.url.replace( /^\//, '' );
    return url.split( '/' );
};

/**
 * Build out an iterable generator for getting the path
 *
 * @param {Request} req Request object
 * @returns {Generator} Generator for returning the current path
 */
function* getPathSequence( req ) {
    const paths = parsePaths( req );
    for ( const path of paths ) {
        yield path;
    }
}

module.exports = {
    parsePaths,
    getPathSequence,
};
