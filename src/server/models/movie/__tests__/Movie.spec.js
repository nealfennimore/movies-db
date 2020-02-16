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
        movieLength: null
    });
} catch (error) {
    assert(error.message === 'Cannot create: movieLength is invalid');
    assert(error instanceof TypeError);
}

// Test for invalid movieLength below minimum
try {
    Movie.create({
        movieLength: -1
    });
} catch (error) {
    assert(error.message === 'Cannot create: movieLength is invalid');
    assert(error instanceof TypeError);
}

// Test for invalid movieLength above maximum
try {
    Movie.create({
        movieLength: 501
    });
} catch (error) {
    assert(error.message === 'Cannot create: movieLength is invalid');
    assert(error instanceof TypeError);
}

// Test for all valid movieLength
{
    Movie.create({
        movieLength: 0
    });
    Movie.create({
        movieLength: 125
    });
    Movie.create({
        movieLength: 500
    });
    assert(true, 'Should all be valid');
}

//
// ─── SETTERS ────────────────────────────────────────────────────────────────────
//

// Test for invalid movieLength set
try {
    const movie = Movie.create();
    movie.movieLength = -1;
} catch (error) {
    assert(error.message === 'Cannot set: movieLength is invalid');
    assert(error instanceof TypeError);
}

// Test for invalid movieLength set
try {
    const movie = Movie.create();
    movie.movieLength = 501;
} catch (error) {
    assert(error.message === 'Cannot set: movieLength is invalid');
    assert(error instanceof TypeError);
}

// Test for all valid movieLength sets
{
    const movie = Movie.create();
    [0, 125, 500].forEach(movieLength => {
        movie.movieLength = movieLength;
    });
    assert(true, 'Should be valid on all movieLength sets');
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
        releaseYear: null
    });
} catch (error) {
    assert(error.message === 'Cannot create: releaseYear is invalid');
    assert(error instanceof TypeError);
}

// Test for invalid releaseYear below minimum
try {
    Movie.create({
        releaseYear: 1799
    });
} catch (error) {
    assert(error.message === 'Cannot create: releaseYear is invalid');
    assert(error instanceof TypeError);
}

// Test for invalid releaseYear above maximum
try {
    Movie.create({
        releaseYear: 2101
    });
} catch (error) {
    assert(error.message === 'Cannot create: releaseYear is invalid');
    assert(error instanceof TypeError);
}

// Test for all valid releaseYear
{
    Movie.create({
        releaseYear: 1800
    });
    Movie.create({
        releaseYear: 1900
    });
    Movie.create({
        releaseYear: 2100
    });
    assert(true, 'Should all be valid');
}

//
// ─── SETTERS ────────────────────────────────────────────────────────────────────
//

// Test for invalid releaseYear set
try {
    const movie = Movie.create();
    movie.releaseYear = 1799;
} catch (error) {
    assert(error.message === 'Cannot set: releaseYear is invalid');
    assert(error instanceof TypeError);
}

// Test for invalid releaseYear set
try {
    const movie = Movie.create();
    movie.releaseYear = 2101;
} catch (error) {
    assert(error.message === 'Cannot set: releaseYear is invalid');
    assert(error instanceof TypeError);
}

// Test for all valid releaseYear sets
{
    const movie = Movie.create();
    [1800, 1900, 2100].forEach(releaseYear => {
        movie.releaseYear = releaseYear;
    });
    assert(true, 'Should be valid on all releaseYear sets');
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