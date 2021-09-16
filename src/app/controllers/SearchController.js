class SearchController {
    // [GET] /search/search
    search(req, res, next) {
        res.render('./search/search');
    }

    // [GET] /search/detail
    detail(req, res, next) {
        res.render('./search/detail');
    }
}

module.exports = new SearchController();
