const router = require('express').Router();
const imageRouter = require('./image.route');
const homeRouter = require('./home.route');

router.use('/', homeRouter);
router.use('/images', imageRouter);

module.exports = router;
