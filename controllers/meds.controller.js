// controllers/meds.controller.js
import * as medsModel from '../models/meds.model.js';

export const getMeds = async (req, res) => {
  try {
    const meds = await medsModel.getMeds();
    res.json(meds);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getMedById = async (req, res) => {
  try {
    const { id_medicamento } = req.params;
    console.log(id_medicamento)
    console.log(req.params)
    const med = await medsModel.getMedById(id_medicamento);
    if (med.length <= 0) {
      return res.status(404).json({ message: "Medication not found" });
    }
    res.json(med);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getMedByAny = async (req, res) => {
  try {
    const { buscar } = req.params;

    const meds = await medsModel.getMedByAny(buscar);
    res.json(meds);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const addMed = async (req, res) => {
  try {
    console.log('Datos recibidos:', req.body); // Verificar datos recibidos
    const result = await medsModel.addMed(req.body);
    res.status(201).json(result); // Usar código de estado 201 para creación exitosa
  } catch (error) {
    console.error('Error al agregar medicamento:', error); // Registrar el error
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const addProviderToMed = async (req, res) => {
  try {
    const result = await medsModel.addProviderToMed(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const addLabToMed = async (req, res) => {
  try {
    const result = await medsModel.addLabToMed(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateMed = async (req, res) => {
  try {
    const result = await medsModel.updateMed(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateProviderOfMed = async (req, res) => {
  try {
    const result = await medsModel.updateProviderOfMed(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateLabOfMed = async (req, res) => {
  try {
    const result = await medsModel.updateLabOfMed(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteMed = async (req, res) => {
  try {
    const result = await medsModel.deleteMed(req.body.id_medicamento_ingresado);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteProviderOfMed = async (req, res) => {
  try {
    const result = await medsModel.deleteProviderOfMed(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteLabOfMed = async (req, res) => {
  try {
    const result = await medsModel.deleteLabOfMed(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getBatches = async (req, res) => {
  try {
    const batches = await medsModel.getBatches();
    res.json(batches);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getBatchesByMedId = async (req, res) => {
  try {
    const { id_medicamento_ingresado } = req.params;
    const batches = await medsModel.getBatchesByMedId(id_medicamento_ingresado);
    res.json(batches);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getSales = async (req, res) => {
  try {
    const sales = await medsModel.getSales();
    res.json(sales);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getSalesToday = async (req, res) => {
  try {
    const sales = await medsModel.getSalesToday();
    res.json(sales);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getSalesTodayByMedNames = async (req, res) => {
  try {
    const { buscar } = req.params;
    const sales = await medsModel.getSalesTodayByMedNames(buscar);
    res.json(sales);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
