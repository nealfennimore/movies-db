class MovieModel {
    constructor({
        title,
        format,
        movieLength,
        releaseYear,
        rating
    }){
        this.title = title;
        this.format = format;
        this.movieLength = movieLength;
        this.releaseYear = releaseYear;
        this.rating = rating;
    }
}

module.exports = MovieModel;