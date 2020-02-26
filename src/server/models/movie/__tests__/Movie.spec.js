/* eslint-disable camelcase */
const Movie = require( '../Movie' );

describe( 'Movie Validation', () => {
    describe( 'ID', () => {
        it( 'should throw an error on invalid types when instantiating', () => {
            expect( () => Movie.create( {
                id: NaN,
            } ) ).toThrow( new TypeError( 'Cannot create: id is invalid' ) );

            expect( () => Movie.create( {
                id: null,
            } ) ).toThrow( new TypeError( 'Cannot create: id is invalid' ) );
        } );

        it( 'should throw an error on invalid types when setting', () => {
            expect( () => {
                const movie = Movie.create();
                movie.id = -1;
            } ).toThrow( new TypeError( 'Cannot set: id is invalid' ) );
        } );

        it( 'should set the id correctly', () => {
            const movie = Movie.create();
            movie.id = 1;
            expect( movie.id ).toEqual( 1 );
        } );
    } );

    describe( 'Title', () => {
        it( 'should throw an error on invalid types when instantiating', () => {
            expect( () => Movie.create( {
                title: null,
            } ) ).toThrow( new TypeError( 'Cannot create: title is invalid' ) );

            expect( () => Movie.create( {
                title: '',
            } ) ).toThrow( new TypeError( 'Cannot create: title is invalid' ) );

            expect( () => Movie.create( {
                title: '*'.repeat( 51 ),
            } ) ).toThrow( new TypeError( 'Cannot create: title is invalid' ) );
        } );

        it( 'should throw an error on invalid types when setting', () => {
            expect( () => {
                const movie = Movie.create();
                movie.title = '';
            } ).toThrow( new TypeError( 'Cannot set: title is invalid' ) );
        } );

        it( 'should set the title correctly', () => {
            const movie = Movie.create();
            movie.title = 'Valid';
            expect( movie.title ).toEqual( 'Valid' );
        } );
    } );

    describe( 'Format', () => {
        it( 'should throw an error on invalid types when instantiating', () => {
            expect( () => Movie.create( {
                format: 'BluRay',
            } ) ).toThrow( new TypeError( 'Cannot create: format is invalid' ) );
        } );
        it( 'should instantiate correctly', () => {
            expect( () => ['VHS', 'DVD', 'Streaming'].forEach( ( format ) => {
                Movie.create( {
                    format,
                } );
            } ) ).not.toThrow();
        } );

        it( 'should throw an error on invalid types when setting', () => {
            expect( () => {
                const movie = Movie.create();
                movie.format = 'BluRay';
            } ).toThrow( new TypeError( 'Cannot set: format is invalid' ) );
        } );

        it( 'should set correctly', () => {
            expect( () => ['VHS', 'DVD', 'Streaming'].forEach( ( format ) => {
                const movie = Movie.create();
                movie.format = format;
            } ) ).not.toThrow();
        } );
    } );

    describe( 'Movie Length', () => {
        it( 'should throw an error on invalid types when instantiating', () => {
            expect( () => Movie.create( {
                movie_length: null,
            } ) ).toThrow( new TypeError( 'Cannot create: movie_length is invalid' ) );

            expect( () => Movie.create( {
                movie_length: -1,
            } ) ).toThrow( new TypeError( 'Cannot create: movie_length is invalid' ) );

            expect( () => Movie.create( {
                movie_length: 501,
            } ) ).toThrow( new TypeError( 'Cannot create: movie_length is invalid' ) );
        } );
        it( 'should instantiate correctly', () => {
            expect( () => [0, 125, 500].forEach( ( movie_length ) => {
                Movie.create( {
                    movie_length,
                } );
            } ) ).not.toThrow();
        } );

        it( 'should throw an error on invalid types when setting', () => {
            expect( () => {
                const movie = Movie.create();
                movie.movie_length = null;
            } ).toThrow( new TypeError( 'Cannot set: movie_length is invalid' ) );
            expect( () => {
                const movie = Movie.create();
                movie.movie_length = -1;
            } ).toThrow( new TypeError( 'Cannot set: movie_length is invalid' ) );
            expect( () => {
                const movie = Movie.create();
                movie.movie_length = 501;
            } ).toThrow( new TypeError( 'Cannot set: movie_length is invalid' ) );
        } );

        it( 'should set correctly', () => {
            expect( () => [0, 125, 500].forEach( ( movie_length ) => {
                const movie = Movie.create();
                movie.movie_length = movie_length;
            } ) ).not.toThrow();
        } );
    } );

    describe( 'Release Year', () => {
        it( 'should throw an error on invalid types when instantiating', () => {
            expect( () => Movie.create( {
                release_year: null,
            } ) ).toThrow( new TypeError( 'Cannot create: release_year is invalid' ) );

            expect( () => Movie.create( {
                release_year: 1799,
            } ) ).toThrow( new TypeError( 'Cannot create: release_year is invalid' ) );

            expect( () => Movie.create( {
                release_year: 2101,
            } ) ).toThrow( new TypeError( 'Cannot create: release_year is invalid' ) );
        } );
        it( 'should instantiate correctly', () => {
            expect( () => [1800, 1900, 2100].forEach( ( release_year ) => {
                Movie.create( {
                    release_year,
                } );
            } ) ).not.toThrow();
        } );

        it( 'should throw an error on invalid types when setting', () => {
            expect( () => {
                const movie = Movie.create();
                movie.release_year = null;
            } ).toThrow( new TypeError( 'Cannot set: release_year is invalid' ) );
            expect( () => {
                const movie = Movie.create();
                movie.release_year = 1799;
            } ).toThrow( new TypeError( 'Cannot set: release_year is invalid' ) );
            expect( () => {
                const movie = Movie.create();
                movie.release_year = 2101;
            } ).toThrow( new TypeError( 'Cannot set: release_year is invalid' ) );
        } );

        it( 'should set correctly', () => {
            expect( () => [1800, 1900, 2100].forEach( ( release_year ) => {
                const movie = Movie.create();
                movie.release_year = release_year;
            } ) ).not.toThrow();
        } );
    } );

    describe( 'Rating', () => {
        it( 'should throw an error on invalid types when instantiating', () => {
            expect( () => Movie.create( {
                rating: null,
            } ) ).toThrow( new TypeError( 'Cannot create: rating is invalid' ) );

            expect( () => Movie.create( {
                rating: 0,
            } ) ).toThrow( new TypeError( 'Cannot create: rating is invalid' ) );

            expect( () => Movie.create( {
                rating: 6,
            } ) ).toThrow( new TypeError( 'Cannot create: rating is invalid' ) );
        } );
        it( 'should instantiate correctly', () => {
            expect( () => [1, 2, 3, 4, 5].forEach( ( rating ) => {
                Movie.create( {
                    rating,
                } );
            } ) ).not.toThrow();
        } );

        it( 'should throw an error on invalid types when setting', () => {
            expect( () => {
                const movie = Movie.create();
                movie.rating = null;
            } ).toThrow( new TypeError( 'Cannot set: rating is invalid' ) );
            expect( () => {
                const movie = Movie.create();
                movie.rating = 0;
            } ).toThrow( new TypeError( 'Cannot set: rating is invalid' ) );
            expect( () => {
                const movie = Movie.create();
                movie.rating = 6;
            } ).toThrow( new TypeError( 'Cannot set: rating is invalid' ) );
        } );

        it( 'should set correctly', () => {
            expect( () => [1, 2, 3, 4, 5].forEach( ( rating ) => {
                const movie = Movie.create();
                movie.rating = rating;
            } ) ).not.toThrow();
        } );
    } );
} );
