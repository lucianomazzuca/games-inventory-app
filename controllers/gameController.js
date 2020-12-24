const Game = require("../models/game");
const Genre = require("../models/genre");
const Developer = require("../models/developer");
const mongoose = require("mongoose");

module.exports = {
    index: async (req, res, next) => {
        const games = await Game.find().populate("genre").populate("developer");

        res.render("game_list", {
            title: "Games List",
            games,
        });
    },
    detail: async (req, res) => {
        const game = await Game.findById(req.params.id).populate("genre").populate("developer");
        
        res.render('game_detail', {
            title: game.title,
            game
        })
    },
    add_get: (req, res) => {
        const developers = Developer.find().sort('name');
        const genres = Genre.find().sort('name');
        
        Promise.all([developers, genres])
        .then((data) => {
            res.render('game_add', {
                title: 'Add New Game',
                developers: data[0],
                genres: data[1],
            })
        })
    },
    add_post: (req, res) => {
        const game = new Game({
            title: req.body.title,
            description: req.body.description,
            price: Number(req.body.price),
            release: Number(req.body.release),
            stock: Number(req.body.stock),
            developer: req.body.developer,
            genre: req.body.genre
        })

        game.save(function(err) {
            if (err) console.log(err);
            res.redirect('/games')
        })

    },
    update_get: (req, res) => {
        const game = Game.findById(req.params.id);
        const developers = Developer.find().sort('name');
        const genres = Genre.find().sort('name');
        
        Promise.all([game, developers, genres])
        .then((data) => {
            res.render('game_update', {
                title: 'Update Game',
                game: data[0],
                developers: data[1],
                genres: data[2]
            })
        
        })
    },
    update_put: async (req, res) => {
            let game = await Game.findById(req.params.id)
            game.title = req.body.title 
            game.description = req.body.description 
            game.price = Number(req.body.price)
            game.release = Number(req.body.release)
            game.stock = Number(req.body.stock)
            game.developer = req.body.developer 
            game.genre = req.body.genre 

            game.save(function(err) {
                if (err) console.log(err)

                res.redirect('/games/' + game._id)
            })
        }
}
