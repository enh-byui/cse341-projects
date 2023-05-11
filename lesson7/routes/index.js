const express = require('express');
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');


router.get("/", (req, res) => {
  // #swagger.ignore = true
    res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
  });

router.use('/', require('./swagger'));
router.use('/products', require('./products'));
router.use('/orders', require('./orders'));
router.use('/profile', requiresAuth(), require('./profile'));

module.exports = router;