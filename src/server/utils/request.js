const METHODS = ['POST', 'PUT', 'PATCH'];

/**
 * Get the body for a request if it's a POST, PUT, or PATCH request
 *
 * @param {Request} req Request object
 * @returns {Promise} Promise returns a JS object if valid JSON, otherwise null
 */
function getBody(req){
    return new Promise(( resolve, reject )=> {
        if (! METHODS.includes(req.method)) {
            return resolve(null);
        }

        let body = [];
        req
            .on('error', reject)
            .on('data', chunk => body.push(chunk))
            .on('end', ()=> {
                try {
                    body = Buffer.concat(body).toString();
                    body = body.length ? JSON.parse( body ) : null;
                } catch (error) {
                    console.error(error);
                    body = null;
                } finally {
                    resolve(body);
                }
            });
    });
}

module.exports = {
    getBody
};