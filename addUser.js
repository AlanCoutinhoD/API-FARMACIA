import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise';

// Configura la conexión con la base de datos
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'database_medico_amigo'
});

// Encripta la contraseña y añade el usuario a la base de datos
const addUser = async (username, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await pool.query('INSERT INTO user (username, password) VALUES (?, ?)', [username, hashedPassword]);
    return result;
};

// Agrega un usuario de ejemplo
const run = async () => {
    try {
        await addUser('admin', '1234');
        console.log('Usuario añadido con éxito');
    } catch (error) {
        console.error('Error al añadir el usuario:', error);
    } finally {
        await pool.end();
    }
};

run();