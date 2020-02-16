/**
 * Handlers for determining validity of a model when constructing and setting
 */
const modelValidator = (validators={}) => ({
    /**
     * Intercept constructor and validate
     * 
     * @param {Function} target The target to be constructed
     * @param {Array} args Arguments passed into the constructor
     */
    construct: function(target, args){
        const [ constructorArgs={} ] = args;

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
});

module.exports = modelValidator;