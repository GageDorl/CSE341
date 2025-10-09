const routes = require('express').Router();
const { beautifulGirl } = require('../controllers');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger.json');

routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerFile));

routes.get('/', beautifulGirl);


module.exports = routes;