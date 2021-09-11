const Courses = require('../models/Courses');
const { mongooseToObject } = require('../../util/mongoose');
const { multipleMongooseToObject } = require('../../util/mongoose');

class CourseController {
    course(req, res, next) {
        Courses.find({})
            .then((course) =>
                res.render('./course/course', {
                    course: multipleMongooseToObject(course),
                }),
            )
            .catch(next);
    }

    detail(req, res, next) {
        Courses.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('./course/detail', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }

    create(req, res) {
        res.render('./course/create');
    }

    store(req, res) {
        const formData = req.body;
        formData.thumbnail = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Courses(formData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }
}

module.exports = new CourseController();
