const METHODS = ['POST', 'PUT', 'PATCH'];

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
                    body = {};
                } finally {
                    resolve(body);
                }
            });
    });
}

module.exports = {
    getBody
};