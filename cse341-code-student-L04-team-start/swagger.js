const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Temple API',
        description: 'API to create, read, update, and delete temples.'
    },
    host: 'localhost:8080'
};

const outputFile = './swagger-output.json';
const routes = ['./index.js'];

swaggerAutogen(outputFile, routes, doc);