const mongoose = require('mongoose');

// create schema
const PostSchema = new mongoose.Schema({
    title: String,
    content: String,
    imgUrl: String,
    tags: [String],
    clap: {
        type: Number,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    },
    datePosted: {
        type: Date,
        default: Date.now
    },
});

// export model
module.exports = mongoose.model('Post', PostSchema);