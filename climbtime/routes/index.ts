import express from 'express';
const routes = express.Router();
import cragRoutes from './crags.ts';
import routeRoutes from './routes.ts';

routes.use('/crags', cragRoutes);
routes.use('/routes', routeRoutes);

export default routes;