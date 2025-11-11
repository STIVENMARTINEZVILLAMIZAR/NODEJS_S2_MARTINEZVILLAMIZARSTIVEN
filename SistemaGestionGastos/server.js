import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import gastoRoutes from "./routes/gastoRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/usuarios", usuarioRoutes);
app.use("/api/gastos", gastoRoutes);



const PORT = process.env.PORT || 3000;
connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Servidor en http://localhost:${PORT}`);
});
