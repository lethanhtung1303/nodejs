const Courses = require('../models/Courses');
const { multipleMongooseToObject } = require('../../util/mongoose');

class NewsController {
    home(req, res, next) {
        Courses.find({})
            .then((course) =>
                res.render('home', {
                    course: multipleMongooseToObject(course),
                }),
            )
            .catch(next);
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new NewsController();
