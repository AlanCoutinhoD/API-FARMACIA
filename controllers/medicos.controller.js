import { addMedico } from '../models/medico.model.js';
import { getAllMedicos } from '../models/medico.model.js';
import { deleteMedicoById } from '../models/medico.model.js';
import { updateMedico } from '../models/medico.model.js';
import { getMedicoById } from '../models/medico.model.js';


export const getMedico = async (req, res) => {
  const { id } = req.params;

  try {
    const medico = await getMedicoById(id);

    if (!medico) {
      return res.status(404).json({ message: 'Médico no encontrado' });
    }

    res.json(medico);
  } catch (error) {
    console.error('Error al obtener el médico:', error);
    res.status(500).json({ message: 'Error al obtener el médico' });
  }
};

export const updateMedicoD = async (req, res) => {
  const { id } = req.params;
  const medData = req.body;

  try {
    const result = await updateMedico(id, medData);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Médico no encontrado' });
    }
    
    res.json({ message: 'Médico actualizado exitosamente' });
  } catch (error) {
    console.error('Error al actualizar el médico:', error);
    res.status(500).json({ message: 'Error al actualizar el médico' });
  }
};

export const deleteMedico = async (req, res) => {
  const { id } = req.params;
  try {
    const isDeleted = await deleteMedicoById(id);
    if (isDeleted) {
      res.status(200).json({ message: 'Médico eliminado exitosamente' });
    } else {
      res.status(404).json({ message: 'Médico no encontrado' });
    }
  } catch (error) {
    console.error('Error al eliminar médico:', error);
    res.status(500).json({ message: 'Error al eliminar médico' });
  }
};


export const createMedico = async (req, res) => {
  try {
    const result = await addMedico(req.body);
    res.status(201).json({ message: "Médico creado exitosamente", insertId: result.insertId });
  } catch (error) {
    res.status(500).json({ message: "Error al crear el médico", error: error.message });
  }
};

export const fetchAllMedicos = async (req, res) => {
  try {
    const medicos = await getAllMedicos();
    res.json(medicos);
  } catch (error) {
    console.error('Error al obtener médicos:', error);
    res.status(500).json({ message: 'Error al obtener médicos' });
  }
};
