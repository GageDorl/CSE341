import express from 'express';
const routes = express.Router();
import { getRoutes, getRouteById, createRoute, updateRoute, deleteRoute } from '../controllers/routes.ts';

routes.get('/', getRoutes);
routes.get('/:id', getRouteById);
routes.post('/', createRoute);
routes.put('/:id', updateRoute);
routes.delete('/:id', deleteRoute);

export default routes;