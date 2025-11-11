// config/database.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Lee el archivo .env

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Conexión exitosa con MongoDB Atlas");
  } catch (error) {
    console.error("❌ Error al conectar con MongoDB:", error.message);
    process.exit(1);
  }
}