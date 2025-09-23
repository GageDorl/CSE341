const routes = require('express').Router();
const path = require('path');
const data = require('../data');

const parentDirectory = path.join(__dirname, '..');

routes.get('/', (req, res) =>{
    res.sendFile(parentDirectory + '/index.html');
})

routes.get('/script.js', (req, res) =>{
    res.sendFile(parentDirectory + '/script.js');
});

routes.get('/style.css', (req, res) =>{
    res.sendFile(parentDirectory + '/style.css');
});

routes.get('/professional', (req, res) => {
    res.json(data)
})

module.exports = routes;