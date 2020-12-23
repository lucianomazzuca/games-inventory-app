const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const developerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
})

// Virtual url
developerSchema.virtual('url').get(function() {
    return `/developer/${this._id}` 
})


const Developer = mongoose.model('Developer', developerSchema);

module.exports = Developer;