import { pool } from "../config/db.js";


export const getSaleById = async (id) => {
    try {
      const [rows] = await pool.query(
        `SELECT * FROM ventas WHERE id = ?`,
        [id]
      );
      return rows;
    } catch (error) {
      console.error("Error al obtener la venta:", error);
      throw new Error("Database query failed");
    }
  };

// Actualizar una venta por ID
export const updateSale = async (saleData) => {
    try {
      const { id, fecha, medicamentos_vendidos, total } = saleData;
      
      // Verifica que todos los campos necesarios estén presentes
      if (!id || !fecha || !medicamentos_vendidos || total === undefined) {
        throw new Error("Missing fields");
      }
      
      // Realiza la actualización usando una consulta SQL
      const [result] = await pool.query(
        `UPDATE ventas
         SET fecha = ?, medicamentos_vendidos = ?, total = ?
         WHERE id = ?`,
        [fecha, medicamentos_vendidos, total, id]
      );
  
      return result;
    } catch (error) {
      console.error("Error en la actualización de la venta:", error);
      throw new Error("Database query failed");
    }
  };

export const addSale = async (saleData) => { //Metodo para guardar una venta 
    try {
      const { fecha, medicamentos_vendidos, total } = saleData;
      const [result] = await pool.query(
        "INSERT INTO ventas (fecha, medicamentos_vendidos, total) VALUES (?, ?, ?)",
        [fecha, medicamentos_vendidos, total]
      );
      return result;
    } catch (error) {
      throw new Error("Database query failed: " + error.message);
    }
  };

  export const getAllSales = async () => {
    try {
      const [rows] = await pool.query(
        "SELECT * FROM ventas ORDER BY fecha DESC"
      );
      return rows;
    } catch (error) {
      throw new Error("Database query failed: " + error.message);
    }
  };


  export const deleteSaleById = async (id_venta) => {
    try {
      const [result] = await pool.query("DELETE FROM ventas WHERE id = ?", [id_venta]);
      return result;
    } catch (error) {
      throw new Error("Database query failed: " + error.message);
    }
  };