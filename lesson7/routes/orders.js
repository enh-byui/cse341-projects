const express = require('express');
const router = express.Router();

const ordersController = require('../controllers/orders');
const validation = require('../middleware/validate');

//Orders routes

router.get('/', ordersController.getAll
// #swagger.tags = ['Orders']
);
router.get('/:id', ordersController.getSingle
// #swagger.tags = ['Orders']
);
router.post('/', validation.saveOrder, ordersController.addOrder);
router.put('/:id', validation.saveOrder, ordersController.updateOrder);
router.delete('/:id', ordersController.destroyOrder);

module.exports = router;