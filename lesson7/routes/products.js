const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products');
const validation = require('../middleware/validate');

router.get('/', productsController.getAll
// #swagger.tags = ['Products']
);

router.get('/:id', productsController.getSingle
// #swagger.tags = ['Products']
);

router.post('/', validation.saveProduct, productsController.createProduct
// #swagger.tags = ['Products']
);

router.put('/:id', validation.saveProduct, productsController.updateProduct
// #swagger.tags = ['Products']
);

router.delete('/:id', productsController.deleteProduct
// #swagger.tags = ['Products']
);

module.exports = router;
