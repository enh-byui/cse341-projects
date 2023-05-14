const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products');
const validation = require('../middleware/validate');

router.get('/', productsController.getAll
/* 
#swagger.tags = ['Products']
#swagger.summary = 'Lists all products'
*/
);

router.get('/:id', productsController.getSingle
/* 
#swagger.tags = ['Products']
#swagger.summary = 'Shows one product'
*/
);

router.post('/', validation.saveProduct, productsController.createProduct
/* 
#swagger.tags = ['Products']
#swagger.summary = 'Creates a new product'
*/
);

router.put('/:id', validation.saveProduct, productsController.updateProduct
/* 
#swagger.tags = ['Products']
#swagger.summary = 'Updates one product'
*/
);

router.delete('/:id', productsController.deleteProduct
/* 
#swagger.tags = ['Products']
#swagger.summary = 'Deletes one product'
*/
);

module.exports = router;
