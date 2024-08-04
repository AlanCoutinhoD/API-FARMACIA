import { addSale } from "../models/sales.model.js";
import { getAllSales } from "../models/sales.model.js";
import { deleteSaleById } from "../models/sales.model.js";
import { updateSale } from '../models/sales.model.js';
import { getSaleById } from '../models/sales.model.js';



export const getSaleByIdController = async (req, res) => {
    try {
      const { id } = req.params;
      console.log("ID recibido para búsqueda:", id);  // Para depuración
  
      const sale = await getSaleById(id);
     
      if (sale.length > 0) {
        res.json(sale[0]);
      } else {
        res.status(404).json({ message: "Sale not found" });
      }
    } catch (error) {
      console.error("Error al obtener la venta:", error);
      res.status(500).json({ message: "Error al obtener la venta" });
    }
  };


export const updateSaleController = async (req, res) => {
    try {
        console.log("Datos recibidos para actualización:", req.body);
      const saleData = req.body;
      const result = await updateSale(saleData);
      
      const saleId = req.params.id;  // Obtener el ID desde los parámetros de la URL
      console.log("ID de venta recibido para actualizar:", saleId);
      console.log("Datos de la venta recibidos:", saleData); // Verificar los datos de la venta
  
      console.log(result); // Añadir este log para depuración
  
      if (result.affectedRows > 0) {
        res.json({ message: "Sale updated successfully" });
      } else {
        res.status(404).json({ message: "Sale not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong" });
    }
  };



export const deleteSale = async (req, res) => {
  const { id_venta } = req.params;  // Obtener el id_venta de los parámetros de la URL
  
  try {
    const result = await deleteSaleById(id_venta);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Sale not found" });
    }
    res.status(200).json({ message: "Sale deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};

export const createSale = async (req, res) => {
  try {
    const saleData = req.body;
    const result = await addSale(saleData);
    res.status(201).json({ message: "Sale created successfully", result });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};

export const getSales = async (req, res) => {
    try {
      const sales = await getAllSales();
      res.status(200).json(sales);
    } catch (error) {
      res.status(500).json({ message: "Something went wrong", error: error.message });
    }
  };