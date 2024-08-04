import express from 'express';
import medsRoutes from './routes/meds.routes.js'; // Asegúrate de que esta ruta es correcta
import router from './routes/meds.routes.js';
import salesRoutes from './routes/sales.routes.js';
import loginRoutes from './routes/login.routes.js'
const app = express();
const port = 3000;
import cors from 'cors'; // Importa el paquete CORS
// Middleware para parsear JSON
app.use(express.json());
app.use(cors());
app.use(express.json()); // Middleware para analizar JSON

// // Middleware para registrar solicitudes
// app.use((req, res, next) => {
//   console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
//   next(); // Pasa el control al siguiente middleware
// });


// Rutas
app.use('/sales',salesRoutes);
app.use('/api', medsRoutes); // 
app.use('/login',loginRoutes);

router.get("/test", (req,res)=> {
  res.send("su");
});


// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});


app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});