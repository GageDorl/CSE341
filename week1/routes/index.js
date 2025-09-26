const routes = require('express').Router();
const { beautifulGirl } = require('../controllers');

routes.get('/', beautifulGirl);

module.exports = routes;