const Movie = require('../Movie');

function assert(assertion, ...args){
    console.assert(assertion, ...args);
    if(assertion !== true){
        throw new Error('Assertion Failed');
    }
}

//
// ──────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: T I T L E   V A L I D A T I O N   T E S T S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────
//

//
// ─── CONSTRUCTORS ───────────────────────────────────────────────────────────────
//

// Test for invalid titles that are not a string
try {
    Movie.create({
        title: null
    });
} catch (error) {
    assert(error.message === 'Cannot create: title is invalid');
    assert(error instanceof TypeError);    
}

// Test for invalid titles that are below minimum range
try {
    Movie.create({
        title: ''
    });
} catch (error) {
    assert(error.message === 'Cannot create: title is invalid');
    assert(error instanceof TypeError);    
}

// Test for invalid titles that are outside maximum length
try {
    Movie.create({
        title: '*'.repeat(51)
    });
} catch (error) {
    assert(error.message === 'Cannot create: title is invalid');
    assert(error instanceof TypeError);    
}

//
// ─── SETTERS ────────────────────────────────────────────────────────────────────
//

// Test for invalid title set
try {
    const movie = Movie.create();
    movie.title = ''; 
} catch (error) {
    assert(error.message === 'Cannot set: title is invalid');
    assert(error instanceof TypeError);
}

// Test for valid title set
{
    const movie = Movie.create();
    movie.title = 'Valid';
    assert(movie.title === 'Valid'); 
}

//
// ────────────────────────────────────────────────────────────────────────────────────── II ──────────
//   :::::: F O R M A T   V A L I D A T I O N   T E S T S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────────
//

//
// ─── CONSTRUCTORS ───────────────────────────────────────────────────────────────
//

// Test for invalid formats
try {
    Movie.create({
        format: 'BluRay'
    });
} catch (error) {
    assert(error.message === 'Cannot create: format is invalid');
    assert(error instanceof TypeError);
}

// Test for all valid formats
{  
    ['VHS', 'DVD', 'Streaming'].forEach( format => {
        Movie.create({
            format
        });
    });
    assert(true, 'Should be valid on all formats');
}

//
// ─── SETTERS ────────────────────────────────────────────────────────────────────
//

// Test for invalid format set
try {
    const movie = Movie.create();
    movie.format = 'BluRay';
} catch (error) {
    assert(error.message === 'Cannot set: format is invalid');
    assert(error instanceof TypeError);
}

// Test for all valid format sets
{
    const movie = Movie.create();
    ['VHS', 'DVD', 'Streaming'].forEach(format => {
        movie.format = format;
    });
    assert(true, 'Should be valid on all format sets');
}

//
// ────────────────────────────────────────────────────────────────────────────────────── III ──────────
//   :::::: L E N G T H   V A L I D A T I O N   T E S T S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────────
//

//
// ─── CONSTRUCTORS ───────────────────────────────────────────────────────────────
//

// Test for invalid length
try {
    Movie.create({
        movie_length: null
    });
} catch (error) {
    assert(error.message === 'Cannot create: movie_length is invalid');
    assert(error instanceof TypeError);
}

// Test for invalid movie_length below minimum
try {
    Movie.create({
        movie_length: -1
    });
} catch (error) {
    assert(error.message === 'Cannot create: movie_length is invalid');
    assert(error instanceof TypeError);
}

// Test for invalid movie_length above maximum
try {
    Movie.create({
        movie_length: 501
    });
} catch (error) {
    assert(error.message === 'Cannot create: movie_length is invalid');
    assert(error instanceof TypeError);
}

// Test for all valid movie_length
{
    Movie.create({
        movie_length: 0
    });
    Movie.create({
        movie_length: 125
    });
    Movie.create({
        movie_length: 500
    });
    assert(true, 'Should all be valid');
}

//
// ─── SETTERS ────────────────────────────────────────────────────────────────────
//

// Test for invalid movie_length set
try {
    const movie = Movie.create();
    movie.movie_length = -1;
} catch (error) {
    assert(error.message === 'Cannot set: movie_length is invalid');
    assert(error instanceof TypeError);
}

// Test for invalid movie_length set
try {
    const movie = Movie.create();
    movie.movie_length = 501;
} catch (error) {
    assert(error.message === 'Cannot set: movie_length is invalid');
    assert(error instanceof TypeError);
}

// Test for all valid movie_length sets
{
    const movie = Movie.create();
    [0, 125, 500].forEach(movie_length => {
        movie.movie_length = movie_length;
    });
    assert(true, 'Should be valid on all movie_length sets');
}


//
// ──────────────────────────────────────────────────────────────────────────────────────── IV ──────────
//   :::::: R E L E A S E   V A L I D A T I O N   T E S T S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────────
//

//
// ─── CONSTRUCTORS ───────────────────────────────────────────────────────────────
//

// Test for invalid release
try {
    Movie.create({
        release_year: null
    });
} catch (error) {
    assert(error.message === 'Cannot create: release_year is invalid');
    assert(error instanceof TypeError);
}

// Test for invalid release_year below minimum
try {
    Movie.create({
        release_year: 1799
    });
} catch (error) {
    assert(error.message === 'Cannot create: release_year is invalid');
    assert(error instanceof TypeError);
}

// Test for invalid release_year above maximum
try {
    Movie.create({
        release_year: 2101
    });
} catch (error) {
    assert(error.message === 'Cannot create: release_year is invalid');
    assert(error instanceof TypeError);
}

// Test for all valid release_year
{
    Movie.create({
        release_year: 1800
    });
    Movie.create({
        release_year: 1900
    });
    Movie.create({
        release_year: 2100
    });
    assert(true, 'Should all be valid');
}

//
// ─── SETTERS ────────────────────────────────────────────────────────────────────
//

// Test for invalid release_year set
try {
    const movie = Movie.create();
    movie.release_year = 1799;
} catch (error) {
    assert(error.message === 'Cannot set: release_year is invalid');
    assert(error instanceof TypeError);
}

// Test for invalid release_year set
try {
    const movie = Movie.create();
    movie.release_year = 2101;
} catch (error) {
    assert(error.message === 'Cannot set: release_year is invalid');
    assert(error instanceof TypeError);
}

// Test for all valid release_year sets
{
    const movie = Movie.create();
    [1800, 1900, 2100].forEach(release_year => {
        movie.release_year = release_year;
    });
    assert(true, 'Should be valid on all release_year sets');
}

//
// ────────────────────────────────────────────────────────────────────────────────────── V ──────────
//   :::::: R A T I N G   V A L I D A T I O N   T E S T S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────────
//

//
// ─── CONSTRUCTORS ───────────────────────────────────────────────────────────────
//

// Test for invalid rating
try {
    Movie.create({
        rating: null
    });
} catch (error) {
    assert(error.message === 'Cannot create: rating is invalid');
    assert(error instanceof TypeError);
}

// Test for invalid rating below minimum
try {
    Movie.create({
        rating: 0
    });
} catch (error) {
    assert(error.message === 'Cannot create: rating is invalid');
    assert(error instanceof TypeError);
}

// Test for invalid rating above maximum
try {
    Movie.create({
        rating: 6
    });
} catch (error) {
    assert(error.message === 'Cannot create: rating is invalid');
    assert(error instanceof TypeError);
}

// Test for all valid rating
{
    Movie.create({
        rating: 1
    });
    Movie.create({
        rating: 2
    });
    Movie.create({
        rating: 5
    });
    assert(true, 'Should all be valid');
}

//
// ─── SETTERS ────────────────────────────────────────────────────────────────────
//

// Test for invalid rating set
try {
    const movie = Movie.create();
    movie.rating = 0;
} catch (error) {
    assert(error.message === 'Cannot set: rating is invalid');
    assert(error instanceof TypeError);
}

// Test for invalid rating set
try {
    const movie = Movie.create();
    movie.rating = 6;
} catch (error) {
    assert(error.message === 'Cannot set: rating is invalid');
    assert(error instanceof TypeError);
}

// Test for all valid rating sets
{
    const movie = Movie.create();
    [1,2,3,4,5].forEach(rating => {
        movie.rating = rating;
    });
    assert(true, 'Should be valid on all rating sets');
}