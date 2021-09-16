class HomeController {
    // [GET] /home/home
    home(req, res, next) {
        res.render('./home/home');
    }
}
module.exports = new HomeController();
