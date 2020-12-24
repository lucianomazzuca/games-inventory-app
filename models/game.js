const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema
const gameSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    release: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    genre: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Genre'
        }
    ],
    developer: {
        type: Schema.Types.ObjectId,
        ref: 'Developer',
    }
});

// Virtuals
gameSchema.virtual('url').get(function() {
    return `/games/${this._id}`
})

// Model
const Game = mongoose.model('Game', gameSchema);

module.exports = Game;