import { pool } from '../config/db.js';

export const getMedicoById = async (id) => {
    try {
      const [rows] = await pool.query('SELECT * FROM medicos_especialistas WHERE id = ?', [id]);
      return rows[0]; // Retornar el primer resultado (si existe)
    } catch (error) {
      console.error('Error al obtener el médico:', error);
      throw new Error('Database query failed');
    }
  };
  
export const updateMedico = async (id, medData) => {
    try {
      const { nombre, apellido, especialidad, telefono, email, direccion, disponibilidad, notas } = medData;
      const [result] = await pool.query(
        `UPDATE medicos_especialistas 
         SET nombre = ?, apellido = ?, especialidad = ?, telefono = ?, email = ?, direccion = ?, disponibilidad = ?, notas = ?
         WHERE id = ?`,
        [nombre, apellido, especialidad, telefono, email, direccion, disponibilidad, notas, id]
      );
      return result;
    } catch (error) {
      console.error('Error al actualizar el médico:', error);
      throw new Error('Database query failed');
    }
  };

export const addMedico = async (medicoData) => {
  try {
    const { nombre, apellido, especialidad, telefono, email, direccion, disponibilidad, notas } = medicoData;
    const [result] = await pool.query(`
      INSERT INTO medicos_especialistas (nombre, apellido, especialidad, telefono, email, direccion, disponibilidad, notas)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [nombre, apellido, especialidad, telefono, email, direccion, disponibilidad, notas]
    );
    return result;
  } catch (error) {
    throw new Error("Database query failed");
  }
};


export const getAllMedicos = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM medicos_especialistas');
    return rows;
  } catch (error) {
    console.error('Error al obtener médicos:', error);
    throw new Error('Database query failed');
  }
};


export const deleteMedicoById = async (id) => {
    try {
      const [result] = await pool.query('DELETE FROM medicos_especialistas WHERE id = ?', [id]);
      return result.affectedRows > 0; // Retorna true si se eliminó alguna fila, false si no
    } catch (error) {
      console.error('Error al eliminar médico:', error);
      throw new Error('Database query failed');
    }
  };
