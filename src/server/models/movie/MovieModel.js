/* eslint-disable camelcase */
class MovieModel {
    constructor( {
        id,
        title,
        format,
        movie_length,
        release_year,
        rating,
    } ) {
        this.id = id;
        this.title = title;
        this.format = format;
        this.movie_length = movie_length;
        this.release_year = release_year;
        this.rating = rating;
    }
}

module.exports = MovieModel;
