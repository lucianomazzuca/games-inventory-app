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
    return `/inventory/genre/${this._id}` 
})

const Genre = mongoose.model('Model', genreSchema);

module.exports = Genre;