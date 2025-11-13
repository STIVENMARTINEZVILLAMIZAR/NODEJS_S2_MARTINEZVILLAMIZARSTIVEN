import express from "express";
import cors from "cors";
import connectDB from "./config/database.js";
import personaRoutes from "./routes/persona.routes.js";
import hospitalRoutes from "./routes/hospital.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/personas", personaRoutes);
app.use("/api/hospitales", hospitalRoutes);

// Conexión DB
connectDB();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
