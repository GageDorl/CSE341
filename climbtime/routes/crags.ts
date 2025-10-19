import express from 'express';
const routes = express.Router();
import { getCrags, getCragById, createCrag, updateCrag, deleteCrag } from '../controllers/crags.ts';

routes.get('/', getCrags);
routes.get('/:id', getCragById);
routes.post('/', createCrag);
routes.put('/:id', updateCrag);
routes.delete('/:id', deleteCrag);

export default routes;