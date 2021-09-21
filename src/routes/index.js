const newsRouter = require('./news');
const courseRouter = require('./course');
const searchRouter = require('./search');
const homeRouter = require('./home');
const meRouter = require('./me');

function route(app) {
    app.use('/me', meRouter);
    app.use('/news', newsRouter);
    app.use('/course', courseRouter);
    app.use('/search', searchRouter);
    app.use('/', homeRouter);
}

module.exports = route;
