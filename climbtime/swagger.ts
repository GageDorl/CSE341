import swaggerAutogen from 'swagger-autogen';
const doc = {
    info: {
        title: 'ClimbTime API',
        description: 'API for finding climbing crags, routes, and viewing comments on routes',
    },
    host: 'localhost:3000'
};

const outputFile = './swagger.json';
const routes = ['./server.ts'];

swaggerAutogen()(outputFile, routes, doc);