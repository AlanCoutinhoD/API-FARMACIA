
import { pool } from '../config/db.js';

export const getDistributorById = async (id) => {
  try {
    const [rows] = await pool.query('SELECT * FROM distribuidores WHERE id = ?', [id]);
    return rows[0]; // Retornar el primer resultado (debe ser un solo distribuidor)
  } catch (error) {
    console.error("Error al obtener distribuidor por ID:", error);
    throw new Error("Database query failed");
  }
};

export const updateDistributor = async (id, distributorData) => {
  try {
    const { nombre_empresa, contacto_nombre, telefono, email, direccion, ciudad, estado, pais, codigo_postal, fecha_registro, estado_activo } = distributorData;
    const [result] = await pool.query(
      `UPDATE distribuidores 
       SET nombre_empresa = ?, contacto_nombre = ?, telefono = ?, email = ?, direccion = ?, 
           ciudad = ?, estado = ?, pais = ?, codigo_postal = ?, fecha_registro = ?, estado_activo = ?
       WHERE id = ?`,
      [nombre_empresa, contacto_nombre, telefono, email, direccion, ciudad, estado, pais, codigo_postal, fecha_registro, estado_activo, id]
    );
    return result;
  } catch (error) {
    console.error("Error al actualizar distribuidor:", error);
    throw new Error("Database query failed");
  }
};  

export const addDistributor = async (distributorData) => {
  try {
    const { nombre_empresa, contacto_nombre, telefono, email, direccion, ciudad, estado, pais, codigo_postal, fecha_registro, estado_activo } = distributorData;
    const [result] = await pool.query(
      "INSERT INTO distribuidores (nombre_empresa, contacto_nombre, telefono, email, direccion, ciudad, estado, pais, codigo_postal, fecha_registro, estado_activo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [nombre_empresa, contacto_nombre, telefono, email, direccion, ciudad, estado, pais, codigo_postal, fecha_registro, estado_activo]
    );
    return result;
  } catch (error) {
    console.error("Error al agregar distribuidor:", error);
    throw new Error("Database query failed");
  }
};

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
