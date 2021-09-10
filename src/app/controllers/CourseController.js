const Courses = require('../models/Courses');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    detail(req, res, next) {
        Courses.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('./course/detail', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }
}

module.exports = new CourseController();
