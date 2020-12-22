#! /usr/bin/env node

console.log('This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true');

// Get arguments passed on command line
const userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
const async = require('async')
const Book = require('./models/book')
const Author = require('./models/author')
const Genre = require('./models/genre')
const BookInstance = require('./models/bookinstance')


const mongoose = require('mongoose');
const Game = require('./models/game');
const mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let developers = []
let genres = []
let games = []

function developerCreate(name) {
    const developerDetail = {name: name};

    const developer = new Developer(developerDetail);

    developer.save(function (err) {
    if (err) {
        cb(err, null)
        return
        }
        console.log('New developer: ' + developer);
        developers.push(developer)
        cb(null, developer)
    }  );
}

function genreCreate(name, cb) {
    const genre = new Genre({ name: name});

    genre.save(function (err){
        if(err) {
            cb(err, null);
            return;
        }
        console.log('New Genre: ' + genre)
        genres.push(genre)
        cb(null, genre)
    })
}

function gameCreate(title, description, price, release, stock, genre, developer, cb) {
    const gameDetail = {
        title,
        description, 
        price,
        release,
        stock,
        genre,
        developer
    }

    if(genre != false) gameDetail.genre = genre;

    const game = new Game(gameDetail);
    game.save(function (err) {
        if(err) {
            cb(err, null)
            return
        }
        console.log('New Game: ' + game);
        games.push(game)
        cb(null, book)
    })
}

function createGenreDevelopers(cb) {
    async.series([
        function(callback) {
            developerCreate('Ubisoft')
        },
        function(callback) {
            developerCreate('CD Projekt Red')
        },
        function(callback) {
            developerCreate('Rockstar')
        },
        function(callback) {
            developerCreate('EA Vancouver')
        },
        function(callback) {
            genreCreate('Action', callback)
        },
        function(callback) {
            genreCreate('Sports', callback)
        },
        function(callback) {
            genreCreate('Sandbox', callback)
        },
    ],
    cb);
}

function createGames(cb) {
    async.parallel([
        function(callback) {
            gameCreate('Test 1', 'Test description', 60, 2020, 10, [genres[0], genres[2]], developers[1], callback)
        },
        function(callback) {
            gameCreate('Test 2', 'Test description', 40, 2019, 5, [genres[0]], developers[1], callback)
        }
    ])
}

async.series([
    createGenreDevelopers,
    createGames
],
function(err, results) {
    if(err) {
        console.log('FINAL ERR: ' + err)
    } else {
        console.log('Populate succes')
    }

    mongoose.connection.close()

})