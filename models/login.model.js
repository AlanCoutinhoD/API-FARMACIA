import { pool } from '../config/db.js';
import bcrypt from 'bcryptjs';

// Obtener un usuario por su nombre de usuario
export const getUserByUsername = async (username) => {
  try {
    const [rows] = await pool.query('SELECT * FROM user WHERE username = ?', [username]);
    return rows[0]; // Retornar el primer resultado
  } catch (error) {
    console.error("Error al obtener usuario:", error);
    throw new Error("Database query failed");
  }
};

// Verificar contraseña
export const verifyPassword = async (inputPassword, hashedPassword) => {
  try {
    const match = await bcrypt.compare(inputPassword, hashedPassword);
    return match;
  } catch (error) {
    console.error("Error al verificar la contraseña:", error);
    throw new Error("Password verification failed");
  }
};
