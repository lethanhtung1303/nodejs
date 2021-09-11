class HomeController {
    home(req, res) {
        res.render('./home/home');
    }
}
module.exports = new HomeController();
