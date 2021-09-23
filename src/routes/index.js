const courseRouter = require('./course');
const homeRouter = require('./home');
const meRouter = require('./me');

function route(app) {
    app.use('/me', meRouter);
    app.use('/course', courseRouter);
    app.use('/', homeRouter);
}

module.exports = route;
