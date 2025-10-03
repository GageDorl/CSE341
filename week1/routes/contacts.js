const routes = require('express').Router();
const {getAllContacts, getContact, createContact, updateContact, deleteContact} = require('../controllers');

routes.get('/contacts', getAllContacts);
routes.get('/contact/:id', getContact);
routes.post('/new_contact', createContact);
routes.put('/update_contact/:id', updateContact);
routes.delete('/delete_contact/:id', deleteContact);

module.exports = routes;