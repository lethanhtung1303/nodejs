const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Courses = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 255 },
    thumbnail: { type: String, maxLength: 255 },
    createdAt: { type: Date, default: Date.now },
    updatesAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Courses', Courses);