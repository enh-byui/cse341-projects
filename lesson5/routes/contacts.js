const express = require('express');

const contactsController = require('../controllers/contacts');

const router = express.Router();

// GET /feed/posts
router.get('/', contactsController.getAll);
router.get('/:id', contactsController.getSingle);
// localhost:8080/professional/
router.post('/', contactsController.addContact);
router.put('/:id', contactsController.updateContact);
router.delete('/:id', contactsController.destroyContact);

module.exports = router;