const Genre = require('../models/genre');
const Game = require('../models/game');
const { body, validationResult } = require('express-validator')

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
        let errors = validationResult(req);

        if(!errors.isEmpty()) {
            errors = errors.array();
            return res.render('genre_add', {
                title: 'Add New Genre',
                errors
            })
        }

        
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
        let errors = validationResult(req);
        let genre = await Genre.findById(req.params.id);
        
        if(!errors.isEmpty()) {
            errors = errors.array()
            return res.render('genre_update', {
                title: 'Update Genre',
                genre,
                errors
            })
        } 
        
        genre.name = req.body.name,

        await genre.save();

        res.redirect(genre.url)
    },
    delete: async (req, res) => {
        await Genre.findByIdAndDelete(req.params.id);

        res.redirect('/genres');
    }
}