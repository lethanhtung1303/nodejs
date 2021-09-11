class NewsController {
    news(req, res) {
        res.render('./news/news');
    }

    detail(req, res) {
        res.render('./news/detail');
    }
}

module.exports = new NewsController();
