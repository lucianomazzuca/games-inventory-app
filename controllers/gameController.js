const Game = require("../models/game");
const Genre = require("../models/genre");
const Developer = require("../models/developer");

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
        res.render('game_add', {
            title: 'Add New Game'
        })
    }
};
