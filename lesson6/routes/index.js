const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/products', require('./products'));
router.use('/orders', require('./orders'));

module.exports = router;