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
        length: null
    });
} catch (error) {
    assert(error.message === 'Cannot create: length is invalid');
    assert(error instanceof TypeError);
}

// Test for invalid length below minimum
try {
    Movie.create({
        length: -1
    });
} catch (error) {
    assert(error.message === 'Cannot create: length is invalid');
    assert(error instanceof TypeError);
}

// Test for invalid length above maximum
try {
    Movie.create({
        length: 501
    });
} catch (error) {
    assert(error.message === 'Cannot create: length is invalid');
    assert(error instanceof TypeError);
}

// Test for all valid length
{
    Movie.create({
        length: 0
    });
    Movie.create({
        length: 125
    });
    Movie.create({
        length: 500
    });
    assert(true, 'Should all be valid');
}

//
// ─── SETTERS ────────────────────────────────────────────────────────────────────
//

// Test for invalid length set
try {
    const movie = Movie.create();
    movie.length = -1;
} catch (error) {
    assert(error.message === 'Cannot set: length is invalid');
    assert(error instanceof TypeError);
}

// Test for invalid length set
try {
    const movie = Movie.create();
    movie.length = 501;
} catch (error) {
    assert(error.message === 'Cannot set: length is invalid');
    assert(error instanceof TypeError);
}

// Test for all valid length sets
{
    const movie = Movie.create();
    [0, 125, 500].forEach(length => {
        movie.length = length;
    });
    assert(true, 'Should be valid on all length sets');
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
        release: null
    });
} catch (error) {
    assert(error.message === 'Cannot create: release is invalid');
    assert(error instanceof TypeError);
}

// Test for invalid release below minimum
try {
    Movie.create({
        release: 1799
    });
} catch (error) {
    assert(error.message === 'Cannot create: release is invalid');
    assert(error instanceof TypeError);
}

// Test for invalid release above maximum
try {
    Movie.create({
        release: 2101
    });
} catch (error) {
    assert(error.message === 'Cannot create: release is invalid');
    assert(error instanceof TypeError);
}

// Test for all valid release
{
    Movie.create({
        release: 1800
    });
    Movie.create({
        release: 1900
    });
    Movie.create({
        release: 2100
    });
    assert(true, 'Should all be valid');
}

//
// ─── SETTERS ────────────────────────────────────────────────────────────────────
//

// Test for invalid release set
try {
    const movie = Movie.create();
    movie.release = 1799;
} catch (error) {
    assert(error.message === 'Cannot set: release is invalid');
    assert(error instanceof TypeError);
}

// Test for invalid release set
try {
    const movie = Movie.create();
    movie.release = 2101;
} catch (error) {
    assert(error.message === 'Cannot set: release is invalid');
    assert(error instanceof TypeError);
}

// Test for all valid release sets
{
    const movie = Movie.create();
    [1800, 1900, 2100].forEach(release => {
        movie.release = release;
    });
    assert(true, 'Should be valid on all release sets');
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