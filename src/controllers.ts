import { Request, Response } from "express";
import { pool } from "./db";

// Controlador para obtener datos
export const getData = async (req: Request, res: Response) => {
    try {
        console.log("Obteniendo datos de la tabla usuarios");
        const result = await pool.query("SELECT * FROM usuarios");
        console.log("Datos obtenidos:", result.rows);
        res.json(result.rows);
    } catch (error) {
        console.error("Error obteniendo datos:", error);
        res.status(500).json({ message: "Error obteniendo datos", error });
    }
};

// Controlador para insertar datos
export const postData = async (req: Request, res: Response) => {
    try {
        const { nombre, correo } = req.body;
        console.log("Insertando datos:", { nombre, correo });
        await pool.query("INSERT INTO usuarios (nombre, correo) VALUES ($1, $2)", [nombre, correo]);
        res.json({ message: "Datos insertados correctamente" });
    } catch (error) {
        console.error("Error insertando datos:", error);
        res.status(500).json({ message: "Error insertando datos", error });
    }
};