const Courses = require('../models/Courses');
const { mongooseToObject } = require('../../util/mongoose');
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /me
    me(req, res, next) {
        res.render('./me/me');
    }

    // [GET] /me/course
    course(req, res, next) {
        Promise.all([Courses.find({}), Courses.countDocumentsDeleted()])
            .then(([course, countDeleted]) =>
                res.render('./me/course', {
                    course: multipleMongooseToObject(course),
                    countDeleted,
                }),
            )
            .catch(next);
    }

    // [GET] /me/trash
    trash(req, res, next) {
        Courses.findDeleted({})
            .then((course) =>
                res.render('./me/trash', {
                    course: multipleMongooseToObject(course),
                }),
            )
            .catch(next);
    }

    // [GET] /me/create
    create(req, res, next) {
        res.render('./me/create');
    }

    // [POST] /me/store
    store(req, res, next) {
        req.body.thumbnail = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Courses(req.body);
        course
            .save()
            .then(() => res.redirect('./course'))
            .catch((error) => {});
    }

    // [GET] /me/edit-:_id
    edit(req, res, next) {
        Courses.findById(req.params._id)
            .then((course) =>
                res.render('./me/edit', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }

    // [PUT] /me/update-:_id
    update(req, res, next) {
        Courses.updateOne({ _id: req.params._id }, req.body)
            .then(() => res.redirect('./course'))
            .catch(next);
    }

    // [DELETE] /me/destroy-:_id
    destroy(req, res, next) {
        Courses.delete({ _id: req.params._id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [DELETE] /me/destroy-:_id/force
    destroyForce(req, res, next) {
        Courses.deleteOne({ _id: req.params._id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [PATH] /me/restore-:_id
    restore(req, res, next) {
        Courses.restore({ _id: req.params._id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [POST] /me/handle-form-action
    handleFormAction(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Courses.delete({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            case 'restore':
                Courses.restore({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            case 'force-delete':
                Courses.deleteMany({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ msg: 'Invalid action!' });
        }
    }
}
module.exports = new MeController();
