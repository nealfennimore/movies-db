/**
 * Internal Dependencies
 */
const { NoMatchingRoute, BadRequest, NoResourceFound } = require('server/errors');
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
    if (! data) {
        throw new NoResourceFound();
    }
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
      if (! data) {
        throw new BadRequest();
    }
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
    const count = await MovieDAO.delete(id);
    if (! count ) {
        throw new BadRequest();
    }
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