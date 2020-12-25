const Genre = require('../models/genre');
const Game = require('../models/game');

module.exports = {
    index: async (req, res) => {
        const genres = await Genre.find();
        res.render('genre_list', {
            title: "Genres list",
            genres
        })
    },
    detail: async (req, res) => {
        const genre = await Genre.findById(req.params.id);
        const games = await Game.find({ genre: genre._id });
        
        res.render('genre_detail', {
            title: genre.name,
            genre,
            games
        })
    },
    add_get: (req, res) => {
        res.render('genre_add', {
            title: 'Add New Genre'
        })
    },
    add_post: (req, res) => {
        
    }
}