const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Jhon Doe');
});

module.exports = routes;
