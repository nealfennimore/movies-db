/**
 * Internal Dependencies
 */
const MovieModel = require('./MovieModel');

/**
 * Validators for a valid movie properties
 */
const validators = {
    title: value => typeof value === 'string' && value.length >= 1 && value.length <= 50,
    format: value => typeof value === 'string' && ['VHS', 'DVD', 'Streaming'].includes(value),
    length: value => typeof value === 'number' && value >= 0 && value <= 500,
    release: value => typeof value === 'number' && value >= 1800 && value <= 2100,
    rating: value => typeof value === 'number' && value >= 1 && value <= 5,
};

/**
 * Default values for a movie
 */
const defaultArgs = {
    title: 'Movie',
    format: 'Streaming',
    length: 0,
    release: 1800,
    rating: 1,
};

/**
 * Handlers for determining validity of a model when constructing and setting
 */
const validityHandler = {
    /**
     * Intercept constructor and validate
     * 
     * @param {Function} target The target to be constructed
     * @param {Array} args Arguments passed into the constructor
     */
    construct: function(target, args){
        const [ passedArgs={} ] = args;
        const constructorArgs = Object.assign({}, defaultArgs, passedArgs );

        Object.entries(constructorArgs).forEach(([key, value])=> {
            const validator = validators[key];
            if (! validator(value) ) {
                throw new TypeError(`Cannot create: ${key} is invalid`);
            }            
        });

        return new target(constructorArgs, ...args);
    },

    /**
     * Intercept setters and validate
     * 
     * @param {Object} obj The object being proxied
     * @param {String} prop The property to be set
     * @param {*} value The value the property should be
     */
    set: function(obj, prop, value) {
        const validator = validators[prop];
        if (! validator(value) ) {
            throw new TypeError(`Cannot set: ${prop} is invalid`);
        }
        obj[prop] = value;
    }
};

class Movie {
    static create( constructorArgs={}, ...args){
        const ConstructorProxy = new Proxy(MovieModel, validityHandler);
    
        // Create movie instance by running it through constructor validity handler
        const movie = new ConstructorProxy(constructorArgs,...args);

        // Return new proxy with movie instance to use setter validity handlers correctly
        return new Proxy(movie, validityHandler);
    }
}

module.exports = Movie;