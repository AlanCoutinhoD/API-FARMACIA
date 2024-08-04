// models/meds.model.js
import { pool } from "../config/db.js";



export const getMeds = async () => {
  try {
    // Consulta SQL normal para seleccionar todos los registros de la tabla 'medicamentos'
    const [rows] = await pool.query("SELECT * FROM medicamentos");
    return rows;
  } catch (error) {
    throw new Error("Database query failed");
  }
};
export const getMedById = async (id_medicamento) => {
  try {
    // Consulta SQL estándar para obtener un medicamento por su ID
    const [rows] = await pool.query(
      `SELECT * FROM medicamentos WHERE id_medicamento = ?`,
      [id_medicamento]
    );
    return rows;
  } catch (error) {
    throw new Error("Database query failed");
  }
};
export const getMedByAny = async (buscar) => {
  try {
    // Define el término de búsqueda con comodines para coincidencias parciales
    const searchTerm = `%${buscar}%`;

    // Consulta SQL para obtener todos los atributos del medicamento
    const [rows] = await pool.query(
      `SELECT * 
       FROM medicamentos 
       WHERE nombre_comercial LIKE ?`,
      [searchTerm]
    );

    return rows;
  } catch (error) {
    console.error("Error querying database:", error);
    throw new Error("Database query failed");
  }
};



export const addMed = async (medData) => {
  try {
    // Desestructurar los datos recibidos
    const { nombre_generico_ingresado, nombre_comercial_ingresado, clasificacion_ingresado, 
            presentacion_ingresado, concentracion_ingresado, volumen_ingresado, unidades_totales_ingresado } = medData;
    
    // Consulta SQL directa para insertar datos
    const query = `
      INSERT INTO medicamentos (nombre_generico, nombre_comercial, clasificacion_medicamento, 
                                presentacion_medicamento, concentracion, volumen, unidades_totales) 
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    
    // Ejecutar la consulta
    const [result] = await pool.query(query, [
      nombre_generico_ingresado, 
      nombre_comercial_ingresado, 
      clasificacion_ingresado, 
      presentacion_ingresado, 
      concentracion_ingresado, 
      volumen_ingresado, 
      unidades_totales_ingresado
    ]);
    
    // Devolver el resultado
    return result;
  } catch (error) {
    console.error('Database query failed:', error);
    throw new Error("Database query failed");
  }
};


export const addProviderToMed = async (providerData) => {
  try {
    const { id_medicamento_ingresado, proveedor_ingresado, telefono_ingresado } = providerData;
    const [rows] = await pool.query("CALL insert_medicamento_proveedor(?, ?, ?)", [
      id_medicamento_ingresado, proveedor_ingresado, telefono_ingresado
    ]);
    return rows;
  } catch (error) {
    throw new Error("Database query failed");
  }
};

export const addLabToMed = async (labData) => {
  try {
    const { id_medicamento_ingresado, laboratorio_ingresado } = labData;
    const [rows] = await pool.query("CALL insert_medicamento_laboratorio(?, ?)", [
      id_medicamento_ingresado, laboratorio_ingresado
    ]);
    return rows;
  } catch (error) {
    throw new Error("Database query failed");
  }
};

export const updateMed = async (medData) => {
  try {
    const { id_medicamento_modificando, nombre_generico, nombre_comercial, clasificacion_medicamento, 
            presentacion_medicamento, concentracion, volumen, unidades_totales } = medData;
    const query = `
      UPDATE medicamentos
      SET
        nombre_generico = ?,
        nombre_comercial = ?,
        clasificacion_medicamento = ?,
        presentacion_medicamento = ?,
        concentracion = ?,
        volumen = ?,
        unidades_totales = ?
      WHERE id_medicamento = ?;
    `;
    const [result] = await pool.query(query, [
      nombre_generico, nombre_comercial, clasificacion_medicamento, 
      presentacion_medicamento, concentracion, volumen, unidades_totales, id_medicamento_modificando
    ]);
    return result;
  } catch (error) {
    throw new Error("Database query failed");
  }
};


export const updateProviderOfMed = async (providerData) => {
  try {
    const { id_medicamento_ingresado, id_proveedor_original, id_proveedor_ingresado } = providerData;
    const [rows] = await pool.query("CALL update_medicamento_proveedor(?, ?, ?)", [
      id_medicamento_ingresado, id_proveedor_original, id_proveedor_ingresado
    ]);
    return rows;
  } catch (error) {
    throw new Error("Database query failed");
  }
};

export const updateLabOfMed = async (labData) => {
  try {
    const { id_medicamento_ingresado, id_laboratorio_original, id_laboratorio_ingresado } = labData;
    const [rows] = await pool.query("CALL update_medicamento_laboratorio(?, ?, ?)", [
      id_medicamento_ingresado, id_laboratorio_original, id_laboratorio_ingresado
    ]);
    return rows;
  } catch (error) {
    throw new Error("Database query failed");
  }
};



export const deleteMed = async (id_medicamento) => {
  try {
    // Consulta SQL normal para eliminar un registro basado en el ID
    const [result] = await pool.query("DELETE FROM medicamentos WHERE id_medicamento = ?", [id_medicamento]);
    
    // Verificar si se ha realizado alguna eliminación
    if (result.affectedRows === 0) {
      throw new Error("No record found with the given ID");
    }

    return result;
  } catch (error) {
    throw new Error("Database query failed");
  }
};


export const deleteProviderOfMed = async (providerData) => {
  try {
    const { id_medicamento_ingresado, id_proveedor_ingresado } = providerData;
    const [rows] = await pool.query("CALL delete_medicamento_proveedor(?, ?)", [
      id_medicamento_ingresado, id_proveedor_ingresado
    ]);
    return rows;
  } catch (error) {
    throw new Error("Database query failed");
  }
};

export const deleteLabOfMed = async (labData) => {
  try {
    const { id_medicamento_ingresado, id_laboratorio_ingresado } = labData;
    const [rows] = await pool.query("CALL delete_medicamento_laboratorio(?, ?)", [
      id_medicamento_ingresado, id_laboratorio_ingresado
    ]);
    return rows;
  } catch (error) {
    throw new Error("Database query failed");
  }
};

export const getBatches = async () => {
  try {
    const [rows] = await pool.query("CALL get_lotes()");
    return rows;
  } catch (error) {
    throw new Error("Database query failed");
  }
};

export const getBatchesByMedId = async (id_medicamento) => {
  try {
    const [rows] = await pool.query("CALL get_lotes_por_id_medicamento(?)", [id_medicamento]);
    return rows;
  } catch (error) {
    throw new Error("Database query failed");
  }
};

export const getSales = async () => {
  try {
    const [rows] = await pool.query("CALL get_ventas()");
    return rows;
  } catch (error) {
    throw new Error("Database query failed");
  }
};

export const getSalesToday = async () => {
  try {
    const [rows] = await pool.query("CALL get_ventas_hoy()");
    return rows;
  } catch (error) {
    throw new Error("Database query failed");
  }
};

export const getSalesTodayByMedNames = async (buscar) => {
  try {
    const [rows] = await pool.query("CALL get_ventas_dia_por_nombres(?)", [buscar]);
    return rows;
  } catch (error) {
    throw new Error("Database query failed");
  }
};
