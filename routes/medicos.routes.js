import express from 'express';
import { createMedico } from '../controllers/medicos.controller.js';
import { fetchAllMedicos } from '../controllers/medicos.controller.js';
import { deleteMedico } from '../controllers/medicos.controller.js';
import { updateMedicoD } from '../controllers/medicos.controller.js';
import { getMedico } from '../controllers/medicos.controller.js';
import { searchMedicosByName } from '../controllers/medicos.controller.js';

const router = express.Router();

// Ruta para buscar médicos por nombre
router.get('/search/:nombre', searchMedicosByName);

// Ruta para obtener un médico por ID
router.get('/medicos/:id', getMedico);


// Ruta para actualizar un médico por ID
router.put('/medicos/:id', updateMedicoD);


// Ruta para obtener todos los médicos
router.get('/Allmedicos', fetchAllMedicos);

// Ruta para eliminar un médico por su id
router.delete('/medicos/:id', deleteMedico);

// Ruta para crear un nuevo médico
router.post('/addMedico', createMedico);

export default router;
