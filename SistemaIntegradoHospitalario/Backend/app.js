import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";

// Rutas
import hospitalRoutes from "./routes/hospital.routes.js";
import personaRoutes from "./routes/persona.routes.js";
import pacienteRoutes from "./routes/paciente.routes.js";
import departamentoRoutes from "./routes/departamento.routes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Conectar base de datos
connectDB();

// Usar rutas
app.use("/api/hospitales", hospitalRoutes);
app.use("/api/personas", personaRoutes);
app.use("/api/pacientes", pacienteRoutes);
app.use("/api/departamentos", departamentoRoutes);

// Puerto
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
