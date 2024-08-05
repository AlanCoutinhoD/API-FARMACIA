import { pool } from '../config/db.js';


// Agregar un nuevo paciente
export const addPaciente = async (pacienteData) => {
  try {
    const { nombre, apellido, fecha_nacimiento, telefono, direccion, ciudad, estado, pais, codigo_postal, fecha_registro, correo } = pacienteData;
    const [result] = await pool.query(
      `INSERT INTO pacientes (nombre, apellido, fecha_nacimiento, telefono, direccion, ciudad, estado, pais, codigo_postal, fecha_registro, correo_electronico)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [nombre, apellido, fecha_nacimiento, telefono, direccion, ciudad, estado, pais, codigo_postal, fecha_registro, correo]
    );
    return result.insertId; // Retorna el ID del nuevo registro
  } catch (error) {
    console.error("Error al agregar paciente:", error);
    throw new Error("Database query failed");
  }
};


export const deletePacienteById = async (id) => {
    try {
      const [result] = await pool.query('DELETE FROM pacientes WHERE id = ?', [id]);
      return result.affectedRows > 0; // Retorna true si se eliminó algún registro
    } catch (error) {
      console.error("Error al eliminar paciente:", error);
      throw new Error("Database query failed");
    }
  };

// Obtener todos los pacientes
export const getAllPacientes = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM pacientes');
    return rows;
  } catch (error) {
    console.error("Error al obtener pacientes:", error);
    throw new Error("Database query failed");
  }
};
