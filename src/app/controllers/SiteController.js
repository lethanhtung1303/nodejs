const Courses = require('../models/Courses');
class NewsController {
    home(req, res) {
        // res.render('home');
        Courses.find({}, function (err, courses) {
            if (!err) {
                res.json(courses);
            } else {
                res.status(400).json({ error: 'Error!!!' });
            }
        });
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new NewsController();
