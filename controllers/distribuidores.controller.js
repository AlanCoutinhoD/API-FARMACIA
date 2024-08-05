import { getAllDistribuidores } from '../models/distribuidores.model.js';
import { deleteDistributorById } from "../models/distribuidores.model.js";

export const deleteDistributor = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deleteDistributorById(id);
    if (result.affectedRows > 0) {
      res.json({ message: "Distribuidor eliminado con éxito" });
    } else {
      res.status(404).json({ message: "Distribuidor no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar distribuidor" });
  }
};

export const getDistribuidores = async (req, res) => {
  try {
    const distribuidores = await getAllDistribuidores();
    res.json(distribuidores);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener distribuidores" });
  }
};
