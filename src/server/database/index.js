/**
 * External Dependencies
 */
const { Client } = require('pg');

/**
 * Internal Dependencies
 */
const seed = require('./seed');

const client = new Client({
    host     : process.env.RDS_HOSTNAME,
    user     : process.env.RDS_USERNAME,
    password : process.env.RDS_PASSWORD,
    port     : process.env.RDS_PORT,
    database : process.env.RDS_DATABASE,
});

(async function init(){
    await client.connect();
    await seed(client);
})();

module.exports = client;