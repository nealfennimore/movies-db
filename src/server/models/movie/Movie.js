/* eslint-disable camelcase */
/**
 * Internal Dependencies
 */
const MovieModel = require('./MovieModel');
const modelValidator = require('../validator');

/**
 * Default values for a movie
 */
const defaultArgs = {
    title: 'Movie',
    format: 'Streaming',
    movie_length: 0,
    release_year: 1800,
    rating: 1,
};

/**
 * Validators for valid movie properties
 */
const validators = {
    title: value => typeof value === 'string' && value.length >= 1 && value.length <= 50,
    format: value => typeof value === 'string' && ['VHS', 'DVD', 'Streaming'].includes(value),
    movie_length: value => typeof value === 'number' && value >= 0 && value <= 500,
    release_year: value => typeof value === 'number' && value >= 1800 && value <= 2100,
    rating: value => typeof value === 'number' && value >= 1 && value <= 5,
};

/**
 * Movie
 *
 * @class Movie
 */
class Movie {
    /**
     * Validator for the model
     *
     * @static
     * @memberof Movie
     */
    static validator = modelValidator(validators);

    /**
     * Create a movie instance
     *
     * @static
     * @param {*} [passedArgs={}] Passed constructor arguments
     * @param {*} args
     * @returns {MovieModel} Instance of MovieModel
     * @throws {TypeError} When invalid constructor args used
     * @memberof Movie
     */
    static create( passedArgs={}, ...args){
        const constructorArgs = Object.assign({}, defaultArgs, passedArgs);

        const ConstructorProxy = new Proxy(MovieModel, Movie.validator);
    
        // Create movie instance by running it through constructor validity handler
        const movie = new ConstructorProxy(constructorArgs,...args);

        // Return new proxy with movie instance to use setter validity handlers correctly
        return new Proxy(movie, Movie.validator);
    }
}

module.exports = Movie;