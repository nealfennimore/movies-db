/**
 * Internal Dependencies
 */
const db = require('server/database');
const { NoResourceFound } = require('server/errors');

class MovieDAO {

    /**
     * Get a movie by id
     * 
     * @static
     * @param {Number} id Movie id
     * @throws {NoResourceFound}
     * @returns {Movie}
     * @memberof MovieDAO
     */
    static async selectById(id){
        const { rows: [ row ] } = await db.query(
            'SELECT * FROM movies WHERE id = $1',
            [ id ]
        );
        if (! row) {
            throw new NoResourceFound();
        }
        return row;
    }
    
    /**
     * Get all movies
     *
     * @static
     * @returns {Array<Movie>} 
     * @memberof MovieDAO
     */
    static async selectAll(){
        const { rows } = await db.query(
            'SELECT * FROM movies'
        );
        return rows;
    }

    /**
     * Delete movie by id
     *
     * @static
     * @param {Number} id Movie id
     * @returns {Number} Rows deleted
     * @memberof MovieDAO
     */
    static async deleteById(id){
        const { rowCount } = await db.query(
            'DELETE FROM movies WHERE id = $1',
            [ id ]
        );
        if (! rowCount) {
            throw new NoResourceFound();
        }
        return rowCount;
    }

}

module.exports = MovieDAO;