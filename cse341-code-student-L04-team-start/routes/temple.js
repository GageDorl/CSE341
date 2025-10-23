const routes = require('express').Router();
const temples = require('../controllers/temple.js');
const {validateTemple, validate} = require('../validator.js');

routes.get('/', temples.findAll);
routes.get('/:temple_id', temples.findOne);
routes.get('/temples/published', temples.findAllPublished);

routes.post('/', validateTemple(), validate, temples.create);

routes.put('/:temple_id', validateTemple(), validate, temples.update);

routes.delete('/:temple_id', temples.delete);
routes.delete('/', temples.deleteAll);



module.exports = routes;
