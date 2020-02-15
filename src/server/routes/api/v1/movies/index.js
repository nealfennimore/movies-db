const { NoMatchingRoute } = require('server/errors');
const movie = require('./movie');

/**
 * Read all movies
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const readMovies = async (req, res) => {
    res.end( 'TODO: Implement get movies' );
};

/**
 * Handle routing for path
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @throws {NoMatchingRoute}
 */
const handleMovies = async (req, res)=> {
    const path = res.locals.path.next().value;

    // Check to see if path is a movie id
    if( /^\d+$/.test(path) ){
        return await movie(req, res);

    // We have no path, so determine what route to take based off of request method
    } else if ( ! path ) {
        switch (req.method) {
            case 'GET':
                return await readMovies(req, res);                       
        }
    }

    throw new NoMatchingRoute('Made it to movies');
};

module.exports = handleMovies;