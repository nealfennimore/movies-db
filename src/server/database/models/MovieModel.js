class MovieModel {
    constructor({
        title,
        format,
        length,
        release,
        rating
    }){
        this.title = title;
        this.format = format;
        this.length = length;
        this.release = release;
        this.rating = rating;
    }
}

module.exports = MovieModel;