class NewsController {
    // [GET] /news/news
    news(req, res, next) {
        res.render('./news/news');
    }

    // [GET] /news/detail
    detail(req, res, next) {
        res.render('./news/detail');
    }
}

module.exports = new NewsController();
