/**
 * 400 Not Found Error
 *
 * @class BadRequest
 * @extends {Error}
 */
class BadRequest extends Error {
    constructor( message = 'Bad Request' ) {
        super( message );
        this.name = 'BadRequest';
        this.code = 400;
    }
}

module.exports = BadRequest;
