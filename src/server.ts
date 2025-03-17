import express from "express";
import cors from "cors";
import path from "path";
import { router } from "./routes";
import dotenv from "dotenv";
 
dotenv.config();
 
const app = express();
const  PORT = process.env.PORT || 3000;
 
//Middlewares
app.use(cors());
app.use(express.json()); //Para leer JSON en las peticiones
app.use(express.urlencoded({extended:true})); //Para leer datos de formularios
 
//Ruta de archivos estaticos (HTML, JS)
app.use(express.static(path.join(__dirname, "public")));
 
//Rutas
app.use("/api", router);
//Servidor escuchando
app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

