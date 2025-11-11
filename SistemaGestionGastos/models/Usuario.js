import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  rol: { type: String, default: "usuario" }
});

export default mongoose.model("Usuario", usuarioSchema);
