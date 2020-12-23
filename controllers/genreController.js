const Genre = require('../models/genre');

module.exports = {
    index: async (req, res) => {
        const genres = await Genre.find();
        res.render('genre_list', {
            title: "Genres list",
            genres
        })
    }
}