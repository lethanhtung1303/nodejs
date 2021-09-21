const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.get('/:slug', newsController.detail);
router.get('/', newsController.news);

module.exports = router;
