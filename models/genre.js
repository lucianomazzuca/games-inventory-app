const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
})

// Virtual url
genreSchema.virtual('url').get(function() {
    return `/genres/${this._id}` 
})

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;