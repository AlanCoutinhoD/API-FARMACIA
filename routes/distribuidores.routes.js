import express from 'express';
import { getDistribuidores } from '../controllers/distribuidores.controller.js';
import { deleteDistributor,createDistributor, updateDistributorById, getDistributor } from '../controllers/distribuidores.controller.js';

const router = express.Router();
// Ruta para agregar un nuevo distribuidor
router.post('/distribuidores', createDistributor);
// Ruta para eliminar un distribuidor por ID
router.delete('/distribuidores/:id', deleteDistributor);
router.put('/distribuidores/:id', updateDistributorById);
router.get('/distribuidores', getDistribuidores);
router.get('/distribuidores/:id', getDistributor);

export default router;
