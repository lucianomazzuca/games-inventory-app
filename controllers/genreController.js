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
    add_post: async (req, res) => {
        let genre = new Genre({
            name: req.body.name
        })

        await genre.save();

        res.redirect(genre.url)
    },
    update_get: async (req, res) => {
        const genre = await Genre.findById(req.params.id);

        res.render('genre_update', {
            title: 'Update Genre',
            genre
        })
        
    },
    update_put: async (req, res) => {
        let genre = await Genre.findById(req.params.id);
        genre.name = req.body.name,

        await genre.save();

        res.redirect('/genres')
    }
}