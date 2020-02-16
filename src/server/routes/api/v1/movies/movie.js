/**
 * Internal Dependencies
 */
const { NoMatchingRoute } = require('server/errors');
const MovieDAO = require('server/models/movie/MovieDAO');

/**
 * Read movie
 * 
 * @param {Request} req 
 * @param {Response} res
 * @param {Number} id Movie id
 */
const readMovie = async (req, res, id) => {
    const data = await MovieDAO.selectById(id);
    res.end( JSON.stringify( data ) );
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
 * @param {Number} id Movie id
 */
const updateMovie = async (req, res, id) => {
    res.end( 'TODO: Implement update movie' );
};

/**
 * Delete movie
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {Number} id Movie id
 */
const deleteMovie = async (req, res, id) => {
    const data = await MovieDAO.deleteById(id);
    res.end( JSON.stringify(data) );
};

/**
 * Handle routing for path
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @throws {NoMatchingRoute}
 */
const handleMovie = async (req, res, id)=> {
    switch (req.method) {
        case 'GET':
            return await readMovie(req, res, id);

        case 'POST':
            return await createMovie(req, res);

        case 'PATCH':
        case 'PUT':
            return await updateMovie(req, res, id);
            
        case 'DELETE':
            return await deleteMovie(req, res, id);

        default:
            throw new NoMatchingRoute('Made it to movie');
    }
};

module.exports = handleMovie;