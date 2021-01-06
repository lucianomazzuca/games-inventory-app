const Developer = require('../models/developer');
const Game = require('../models/game');

const { body, validationResult } = require('express-validator');

module.exports = {
    index: async (req, res) => {
        const developers = await Developer.find();
        res.render('developer_list', {
            title: 'Developers list',
            developers
        })
    },
    add_get: (req, res) => {
        res.render('developer_add', {
            title: 'Add New Developer'
        })
    },
    add_post: async (req, res) => {
        let errors = validationResult(req);
        if(!errors.isEmpty()) {
            errors = errors.array()
            return res.render('developer_add', {
                title: 'Add New Developer',
                errors
            })
        } 

        let developer = new Developer({
            name: req.body.name,
        });

        await developer.save()

        res.redirect(developer.url)

    },
    detail: async (req, res) => {
        const developer = await Developer.findById(req.params.id);
        const games = await Game.find({ developer: developer._id })

        res.render('developer_detail', {
            title: developer.name,
            developer,
            games
        })
    },
    update_get: async (req, res) => {
        const developer = await Developer.findById(req.params.id);
        
        res.render('developer_update', {
            title: 'Update Developer',
            developer
        })
    },
    update_put: async (req, res) => {
        let errors = validationResult(req);
        let developer = await Developer.findById(req.params.id);

        if(!errors.isEmpty()) {
            errors = errors.array()
            return res.render('developer_update', {
                title: 'Update Developer',
                developer,
                errors
            })
        } 
        

        developer.name = req.body.name,
        await developer.save();

        res.redirect(developer.url)
    },
    delete: async (req, res) => {
        await Developer.findByIdAndDelete(req.params.id);

        res.redirect('/developers')
    }
}