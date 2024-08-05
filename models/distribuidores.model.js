
import { pool } from '../config/db.js';  

export const deleteDistributorById = async (id) => {
  try {
    const [result] = await pool.query("DELETE FROM distribuidores WHERE id = ?", [id]);
    return result;
  } catch (error) {
    console.error("Error al eliminar distribuidor:", error);
    throw new Error("Database query failed");
  }
};

export const getAllDistribuidores = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM distribuidores');
    return rows;
  } catch (error) {
    console.error("Error al obtener distribuidores:", error);
    throw new Error("Database query failed");
  }
};
