import express from 'express';
import { getDistribuidores } from '../controllers/distribuidores.controller.js';
import { deleteDistributor } from '../controllers/distribuidores.controller.js';

const router = express.Router();

// Ruta para eliminar un distribuidor por ID
router.delete('/distribuidores/:id', deleteDistributor);

router.get('/distribuidores', getDistribuidores);

export default router;
