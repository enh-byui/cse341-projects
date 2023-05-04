const express = require('express');

const ordersController = require('../controllers/orders');

const router = express.Router();

// GET /feed/posts
router.get('/', ordersController.getAll);
router.get('/:id', ordersController.getSingle);
// localhost:8080/professional/
router.post('/', ordersController.addOrder);
router.put('/:id', ordersController.updateOrder);
router.delete('/:id', ordersController.destroyOrder);

module.exports = router;