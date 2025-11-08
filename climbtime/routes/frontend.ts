import express from 'express';
const routes = express.Router();
import path from 'path';
import auth from 'express-openid-connect';

let requiresAuth = auth.requiresAuth;

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
routes.get('/views/:view', (req, res) => {
    let view = req.params.view;
    res.sendFile(path.join(process.cwd(), 'views', "view-"+view +".html" ));
});
routes.get('/me', (req, res) => {
  // If logged in, req.oidc.user will exist
  if (req.oidc.isAuthenticated()) {
    res.json(req.oidc.user);
  } else {
    res.status(401).json({ loggedIn: false });
  }
});
routes.get('/:page', requiresAuth(), (req, res) => {
    let page = req.params.page;
    res.sendFile(path.join(process.cwd(), 'views', page+'.html'));
});

export default routes;