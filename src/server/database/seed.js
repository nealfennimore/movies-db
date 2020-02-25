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
    },
];

async function seed( db ) {
    const { rows: [{ count }] } = await db.query( `SELECT COUNT(*) FROM movies;` );

    if ( count == 0 ) {
        FAKE_MOVIES.forEach( async( movie ) => {
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
                    movie.rating,
                ],
            );
        } );
    }
}

module.exports = seed;
