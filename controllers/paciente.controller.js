import { getAllPacientes } from '../models/paciente.model.js';
import { deletePacienteById } from '../models/paciente.model.js';
import { addPaciente } from '../models/paciente.model.js';

// Agregar un nuevo paciente
export const addPacienteController = async (req, res) => {
  const pacienteData = req.body;
  try {
    const newPacienteId = await addPaciente(pacienteData);
    res.status(201).json({ message: 'Paciente agregado correctamente', id: newPacienteId });
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar el paciente' });
  }
};

// Eliminar un paciente por ID
export const deletePacienteController = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await deletePacienteById(id);
    if (result) {
      res.status(200).json({ message: 'Paciente eliminado correctamente' });
    } else {
      res.status(404).json({ message: 'Paciente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el paciente' });
  }
};

// Obtener todos los pacientes
export const getAllPacientesController = async (req, res) => {
  try {
    const pacientes = await getAllPacientes();
    res.json(pacientes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los pacientes' });
  }
};
