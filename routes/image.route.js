const router = require('express').Router();
const imageController = require('../controllers/image.controller');
const storage = require('../middleware/multer');

router.post('/uploads', storage.array('images', 10), imageController.uploads);

module.exports = router;
