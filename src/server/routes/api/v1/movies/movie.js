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
    const data = await MovieDAO.select(id);
    res.end( JSON.stringify( data ) );
};

/**
 * Update movie
 * 
 * @param {Request} req 
 * @param {Response} res
 * @param {Number} id Movie id
 */
const updateMovie = async (req, res, id) => {
    const data = await MovieDAO.update(id, res.locals.payload);
    res.end( JSON.stringify( data ) );
};

/**
 * Delete movie
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {Number} id Movie id
 */
const deleteMovie = async (req, res, id) => {
    await MovieDAO.deleteById(id);
    res.writeHead(204);
    res.end();
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