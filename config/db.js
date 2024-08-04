
import mysql from 'mysql2/promise';

// Crea y exporta el pool de conexiones
export const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'database_medico_amigo'
});



// Probar la conexión
pool.getConnection()
  .then(() => {
    console.log('Conectado a la base de datos MySQL');
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err);
    process.exit(1);
  });



