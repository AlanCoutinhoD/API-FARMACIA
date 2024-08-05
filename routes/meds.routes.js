import express from 'express';
import * as medsController from '../controllers/meds.controller.js';

const router = express.Router();

router.get('/meds', medsController.getMeds);
router.get('/meds/:id_medicamento', medsController.getMedById);
router.get('/meds/search/:buscar', medsController.getMedByAny);
router.post('/meds', medsController.addMed);
router.post('/meds/provider', medsController.addProviderToMed);
router.post('/meds/lab', medsController.addLabToMed);
router.put('/meds', medsController.updateMed);
router.put('/meds/provider', medsController.updateProviderOfMed);
router.put('/meds/lab', medsController.updateLabOfMed);
router.delete('/meds', medsController.deleteMed);
router.delete('/meds/provider', medsController.deleteProviderOfMed);
router.delete('/meds/lab', medsController.deleteLabOfMed);
router.get('/batches', medsController.getBatches);
router.get('/batches/:id_medicamento_ingresado', medsController.getBatchesByMedId);
router.get('/sales', medsController.getSales);
router.get('/sales/today', medsController.getSalesToday);
router.get('/sales/today/search/:buscar', medsController.getSalesTodayByMedNames);

export default router;
