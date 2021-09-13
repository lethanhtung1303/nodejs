const Courses = require('../models/Courses');
const { mongooseToObject } = require('../../util/mongoose');
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    course(req, res, next) {
        Courses.find({})
            .then((course) =>
                res.render('./me/course', {
                    course: multipleMongooseToObject(course),
                }),
            )
            .catch(next);
    }
    me(req, res, next) {
        res.render('./me/me');
    }

    create(req, res) {
        res.render('./me/create');
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

    edit(req, res, next) {
        Courses.findById(req.params._id)
            .then((course) =>
                res.render('./me/edit', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }

    update(req, res, next) {
        Courses.updateOne({ _id: req.params._id }, req.body)
            .then(() => res.redirect('./course'))
            .catch(next);
    }
}
module.exports = new MeController();
