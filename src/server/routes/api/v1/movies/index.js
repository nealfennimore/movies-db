const { NoMatchingRoute } = require('server/errors');
const MovieDAO = require('server/models/movie/MovieDAO');
const movie = require('./movie');

/**
 * Read all movies
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const readMovies = async (req, res) => {
    const data = await MovieDAO.selectAll();
    res.end( JSON.stringify( data ) );
};

/**
 * Create movie
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const createMovie = async (req, res) => {
    const data = await MovieDAO.create(res.locals.payload);
    res.end( JSON.stringify( data ) );
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
        return await movie(req, res, path);

    // We have no path, so determine what route to take based off of request method
    } else if ( ! path ) {
        switch (req.method) {
            case 'GET':
                return await readMovies(req, res);

            case 'POST':
                return await createMovie(req, res);
        }
    }

    throw new NoMatchingRoute('Made it to movies');
};

module.exports = handleMovies;