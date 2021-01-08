const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { DateTime } = require('luxon');

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
        type: Date,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    image: {
        type: String,
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

gameSchema.virtual('release_formatted').get(function() {
    return DateTime.fromJSDate(this.release).toUTC().toISODate();
})

// Model
const Game = mongoose.model('Game', gameSchema);

module.exports = Game;