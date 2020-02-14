/**
 * Return the paths for the current request
 *
 * @param {Request} req Request object
 * @returns {Array<String>}
 */
const parsePaths = (req) => {
    // TODO: Cache by req url
    const url = req.url.replace(/^\//, '');
    return url.split('/');
};

/**
 * Return the current subpath for the level
 *
 * @param {Request} req Request object
 * @param {Number} level Level of route
 * @returns {String|void}
 */
const getSubpath = (req, level=0) => {
    const routes = parsePaths(req);
    return routes[level];
};

module.exports = {
    parsePaths,
    getSubpath,
};