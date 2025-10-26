import express from 'express';
const routes = express.Router();
import { getCrags, getCragById, createCrag, updateCrag, deleteCrag } from '../controllers/crags.ts';
import { validateCrag, validate } from '../validator.ts';

routes.get('/', getCrags);
routes.get('/:id', getCragById);
routes.post('/', createCrag, validateCrag(), validate);
routes.put('/:id', updateCrag, validateCrag(), validate);
routes.delete('/:id', deleteCrag);

export default routes;