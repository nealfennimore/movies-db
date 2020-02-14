/**
 * Internal Dependencies
 */
const { NoMatchingRoute } = require('server/errors');

/**
 * Read movie
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const readMovie = async (req, res) => {
    res.end( 'TODO: Implement get movie' );
};

/**
 * Create movie
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const createMovie = async (req, res) => {
    res.end( 'TODO: Implement create movie' );
};

/**
 * Update movie
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const updateMovie = async (req, res) => {
    res.end( 'TODO: Implement update movie' );
};

/**
 * Delete movie
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const deleteMovie = async (req, res) => {
    res.end( 'TODO: Implement delete movie' );
};

/**
 * Handle routing for path
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @throws {NoMatchingRoute}
 */
const handleMovie = async (req, res)=> {
    switch (req.method) {
        case 'GET':
            return await readMovie(req, res);

        case 'POST':
            return await createMovie(req, res);

        case 'PATCH':
        case 'PUT':
            return await updateMovie(req, res);
            
        case 'DELETE':
            return await deleteMovie(req, res);

        default:
            throw new NoMatchingRoute('Made it to movie');
    }
};

module.exports = handleMovie;