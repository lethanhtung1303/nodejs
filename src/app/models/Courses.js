const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Courses = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        thumbnail: { type: String },
        videoId: { type: String, required: true },
        level: { type: String },
        slug: { type: String, slug: 'name', unique: true },
        deletedAt: { type: Date },
    },
    {
        timestamps: true,
    },
);

mongoose.plugin(slug);
Courses.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model('Courses', Courses);
