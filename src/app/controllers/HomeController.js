class HomeController {
    // [GET] /
    home(req, res, next) {
        res.render('./home/home');
    }
}
module.exports = new HomeController();
