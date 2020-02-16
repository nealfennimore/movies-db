/* eslint-disable camelcase */
class MovieModel {
    constructor({
        title,
        format,
        movie_length,
        release_year,
        rating
    }){
        this.title = title;
        this.format = format;
        this.movie_length = movie_length;
        this.release_year = release_year;
        this.rating = rating;
    }
}

module.exports = MovieModel;