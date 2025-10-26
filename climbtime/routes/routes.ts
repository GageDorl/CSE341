import express from 'express';
const routes = express.Router();
import { getRoutes, getRouteById, createRoute, updateRoute, deleteRoute } from '../controllers/routes.ts';
import { validateRoute, validate } from '../validator.ts';

routes.get('/', getRoutes);
routes.get('/:id', getRouteById);
routes.post('/', createRoute, validateRoute(), validate);
routes.put('/:id', updateRoute, validateRoute(), validate);
routes.delete('/:id', deleteRoute);

export default routes;