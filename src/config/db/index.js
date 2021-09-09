const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8-education-dev');
        console.log('done');
    } catch (e) {
        console.log('fail');
    }
}

module.exports = { connect };
