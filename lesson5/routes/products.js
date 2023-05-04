const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

// GET /feed/posts
router.get('/', productsController.getAll);
router.get('/:id', productsController.getSingle);
// localhost:8080/professional/
router.post('/', productsController.addProduct);
router.put('/:id', productsController.updateProduct);
router.delete('/:id', productsController.destroyProduct);

module.exports = router;