import express from 'express';
import { getAllPacientesController, deletePacienteController, addPacienteController } from '../controllers/paciente.controller.js';

const router = express.Router();

// Ruta para obtener todos los pacientes
router.get('/pacientes', getAllPacientesController);
router.delete('/pacientes/:id', deletePacienteController);
router.post('/pacientes', addPacienteController);

export default router;
