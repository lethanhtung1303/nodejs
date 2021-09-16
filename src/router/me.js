const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/course', meController.course);
router.get('/trash', meController.trash);
router.get('/create', meController.create);
router.post('/store', meController.store);
router.put('/update-:_id', meController.update);
router.get('/edit-:_id', meController.edit);
router.delete('/destroy-:_id', meController.destroy);
router.delete('/destroy-:_id/force', meController.destroyForce);
router.patch('/restore-:_id', meController.restore);
router.get('/', meController.me);

module.exports = router;
