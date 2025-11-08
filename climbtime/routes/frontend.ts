import express from 'express';
const routes = express.Router();
import path from 'path';

routes.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'views', 'home.html'));
});
routes.get('/styles.css', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'views', 'styles', 'styles.css'));
});
routes.get('/register', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'views', 'register.html'));
});
routes.get('/scripts/:script', (req, res) => {
    let query = req.params.script;
    res.sendFile(path.join(process.cwd(), 'views', 'scripts', query as string));
});
routes.get('/:page', (req, res) => {
    let page = req.params.page;
    res.sendFile(path.join(process.cwd(), 'views', page+'.html'));
});

export default routes;