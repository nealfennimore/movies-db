/**
 * 404 Not Found Error
 *
 * @class NoResourceFound
 * @extends {Error}
 */
class NoResourceFound extends Error {
    constructor(message='No resource found') {
        super(message);
        this.name = 'NoResourceFound';
        this.code = 404;
    }
}

module.exports = NoResourceFound;