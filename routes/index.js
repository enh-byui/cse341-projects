const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Erick Nava');
});

module.exports = routes;
