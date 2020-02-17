/**
 * Internal Dependencies
 */
const db = require('server/database');
const Movie = require('server/models/movie/Movie');
const { NoResourceFound, BadRequest } = require('server/errors');

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
    static async select(id){
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
            'SELECT * FROM movies ORDER BY id'
        );
        return rows;
    }

    /**
     * Create a new movie
     * 
     * @static
     * @param {Object} payload Payload
     * @throws {BadRequest}
     * @returns {Movie}
     * @memberof MovieDAO
     */
    static async create(payload){
        const movie = Movie.create(payload);

        const { rowCount, rows: [ row ] } = await db.query(
            `
                INSERT INTO movies(title, format, movie_length, release_year, rating)
                VALUES($1, $2, $3, $4, $5)
                RETURNING id
            `,
            [
                movie.title,
                movie.format,
                movie.movie_length,
                movie.release_year,
                movie.rating
            ]
        );

        if(! rowCount){
            throw new BadRequest();
        }

        movie.id = Number( row.id );
        return movie;
    }

    /**
     * Update a movie by id and payload
     * 
     * @static
     * @param {Number} id Movie id
     * @param {Object} payload Payload
     * @throws {BadRequest}
     * @returns {Movie}
     * @memberof MovieDAO
     */
    static async update(id, payload){
        const movie = Movie.create({ ...payload, id });

        const { rowCount } = await db.query(
            `
                UPDATE movies
                SET title = $2,
                    format = $3,
                    movie_length = $4,
                    release_year = $5,
                    rating = $6
                WHERE id = $1
            `,
            [
                id,
                movie.title,
                movie.format,
                movie.movie_length,
                movie.release_year,
                movie.rating
            ]
        );

        if(! rowCount){
            throw new BadRequest();
        }

        return movie;
    }

    /**
     * Delete movie by id
     *
     * @static
     * @param {Number} id Movie id
     * @returns {Number} Rows deleted
     * @memberof MovieDAO
     */
    static async delete(id){
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