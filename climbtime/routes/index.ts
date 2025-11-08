import express from 'express';
const routes = express.Router();
import cragRoutes from './crags.ts';
import routeRoutes from './routes.ts';
import frontEndRoutes from './frontend.ts';

routes.use('/api/crags', cragRoutes);
routes.use('/api/routes', routeRoutes);
routes.use('/', frontEndRoutes);


export default routes;