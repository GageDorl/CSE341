import express from 'express';
const routes = express.Router();
import { getCrags, getCragById, createCrag, updateCrag, deleteCrag } from '../controllers/crags.ts';
import { validateCrag, validate } from '../validator.ts';
import * as openid from 'express-openid-connect';
const requiresAuth = openid.default.requiresAuth;

routes.get('/', getCrags);
routes.get('/:id', getCragById);
routes.post('/', requiresAuth(),  validateCrag(), validate, createCrag);
routes.put('/:id', requiresAuth(), validateCrag(), validate, updateCrag);
routes.delete('/:id', requiresAuth(), deleteCrag);

export default routes;