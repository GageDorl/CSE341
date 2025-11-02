import express from 'express';
const routes = express.Router();
import cragRoutes from './crags.ts';
import routeRoutes from './routes.ts';
import path from 'path';

routes.use('/crags', cragRoutes);
routes.use('/routes', routeRoutes);
routes.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'views', 'home.html'));
});
routes.get('/view-crags', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'views', 'view-crags.html'));
});

export default routes;