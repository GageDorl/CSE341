const routes = require('express').Router();
const {getAllContacts, getContact} = require('../controllers');

routes.get('/contacts', getAllContacts);
routes.get('/contact', getContact);

module.exports = routes;