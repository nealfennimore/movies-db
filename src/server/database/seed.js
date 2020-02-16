const FAKE_MOVIES = [
    {
        title: 'Movie1',
        format: 'VHS',
        movie_length: 10,
        release_year: 1800,
        rating: 1,
    },
    {
        title: 'Movie2',
        format: 'DVD',
        movie_length: 400,
        release_year: 1900,
        rating: 3,
    },
    {
        title: 'Movie3',
        format: 'Streaming',
        movie_length: 499,
        release_year: 2100,
        rating: 5,
    }
];

async function seed(db){

    // Create table
    await db.query(
        `CREATE TABLE IF NOT EXISTS movies (
	        id SERIAL PRIMARY KEY,
	        title VARCHAR(50) NOT NULL CHECK(length(title) >= 1),
	        format VARCHAR(20) not null check(format in ('VHS', 'DVD', 'Streaming')),
            movie_length SMALLINT NOT NULL CHECK(movie_length >= 0 AND movie_length <= 500),
            release_year SMALLINT NOT NULL CHECK(release_year >= 1800 AND release_year <= 2100),
            rating smallint NOT NULL CHECK(rating >= 1 AND rating <= 5)
        );`
    );

    const {rows: [{count}] } = await db.query(
        `SELECT COUNT(*) FROM movies;`
    );

    if ( count == 0 ) {
        FAKE_MOVIES.forEach( async function(movie) {
            await db.query(
                `
                    INSERT INTO movies(title, format, movie_length, release_year, rating)
                    VALUES ($1, $2, $3, $4, $5)
                `,
                [
                    movie.title,
                    movie.format,
                    movie.movie_length,
                    movie.release_year,
                    movie.rating
                ]
            );
        });
    }
}

module.exports = seed;