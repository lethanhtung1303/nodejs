class SearchController {
    search(req, res) {
        res.render('./search/search');
    }

    detail(req, res) {
        res.render('./search/detail');
    }
}

module.exports = new SearchController();
