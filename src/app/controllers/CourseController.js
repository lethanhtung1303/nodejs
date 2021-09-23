const Courses = require('../models/Courses');
const { mongooseToObject } = require('../../util/mongoose');
const { multipleMongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [GET] /course
    course(req, res, next) {
        Courses.find({})
            .then((course) =>
                res.render('./course/course', {
                    course: multipleMongooseToObject(course),
                }),
            )
            .catch(next);
    }

    // [GET] /course/:slug
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
