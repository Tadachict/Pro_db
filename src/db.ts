import {Pool} from "pg";
import dotenv from "dotenv";
 
dotenv.config();
 
//Configuracion de la base de datos
export const pool = new Pool ({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
});
 
//Verifica la conexion
pool.connect()
.then(()=> console.log("Conectando a PostgreSQL"))
.catch (err => console.error("Error de conexion a PostgreeSQL:", err));

