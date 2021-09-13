const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/course', meController.course);
router.get('/create', meController.create);
router.post('/store', meController.store);
router.put('/update-:_id', meController.update);
router.get('/edit-:_id', meController.edit);
router.get('/', meController.me);

module.exports = router;
