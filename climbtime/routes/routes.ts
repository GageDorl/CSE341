import express from 'express';
const routes = express.Router();
import { getRoutes, getRouteById, createRoute, updateRoute, deleteRoute } from '../controllers/routes.ts';
import { validateRoute, validate } from '../validator.ts';
import * as openid from 'express-openid-connect';
const requiresAuth = openid.default.requiresAuth;

routes.get('/', getRoutes);
routes.get('/:id', getRouteById);
routes.post('/', requiresAuth(), createRoute, validateRoute(), validate);
routes.put('/:id', requiresAuth(), updateRoute, validateRoute(), validate);
routes.delete('/:id', requiresAuth(), deleteRoute);

export default routes;