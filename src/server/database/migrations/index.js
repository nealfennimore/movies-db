async function migrations( db ) {
    // Create table
    await db.query( `
        CREATE TABLE IF NOT EXISTS movies (
            id SERIAL PRIMARY KEY,
            title VARCHAR(50) NOT NULL CHECK(length(title) >= 1),
            format VARCHAR(20) NOT NULL CHECK(format in ('VHS', 'DVD', 'Streaming')),
            movie_length SMALLINT NOT NULL CHECK(movie_length >= 0 AND movie_length <= 500),
            release_year SMALLINT NOT NULL CHECK(release_year >= 1800 AND release_year <= 2100),
            rating SMALLINT NOT NULL CHECK(rating >= 1 AND rating <= 5)
        );
    ` );
}

module.exports = migrations;
