import { getUserByUsername, verifyPassword } from '../models/login.model.js';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your_jwt_secret'; // Cambia esto por una clave secreta segura

// Manejar el login
export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Obtener usuario por nombre de usuario
    const user = await getUserByUsername(username);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Verificar contraseña
    const isPasswordValid = await verifyPassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Crear JWT
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });

    // Enviar respuesta
    res.json({ token });
  } catch (error) {
    console.error("Error en el proceso de login:", error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};
