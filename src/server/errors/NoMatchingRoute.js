/**
 * 404 Not Found Error
 *
 * @class NoMatchingRoute
 * @extends {Error}
 */
class NoMatchingRoute extends Error {
    constructor( message = 'No matching route' ) {
        super( message );
        this.name = 'NoMatchingRoute';
        this.code = 404;
    }
}

module.exports = NoMatchingRoute;
