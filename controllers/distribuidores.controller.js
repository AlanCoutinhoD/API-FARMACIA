import { getAllDistribuidores } from '../models/distribuidores.model.js';
import { deleteDistributorById } from "../models/distribuidores.model.js";
import { addDistributor } from "../models/distribuidores.model.js";
import { updateDistributor } from "../models/distribuidores.model.js";
import { getDistributorById } from "../models/distribuidores.model.js";

export const getDistributor = async (req, res) => {
  const { id } = req.params;

  try {
    const distributor = await getDistributorById(id);

    if (!distributor) {
      return res.status(404).json({ message: "Distribuidor no encontrado" });
    }

    res.json(distributor);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener distribuidor" });
  }
};

export const updateDistributorById = async (req, res) => {
  const { id } = req.params;
  const distributorData = req.body;

  try {
    const result = await updateDistributor(id, distributorData);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Distribuidor no encontrado" });
    }

    res.json({ message: "Distribuidor actualizado con éxito" });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar distribuidor" });
  }
};

export const createDistributor = async (req, res) => {
  const distributorData = req.body;

  try {
    const result = await addDistributor(distributorData);
    res.status(201).json({ message: "Distribuidor agregado con éxito", id: result.insertId });
  } catch (error) {
    res.status(500).json({ message: "Error al agregar distribuidor" });
  }
};

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
