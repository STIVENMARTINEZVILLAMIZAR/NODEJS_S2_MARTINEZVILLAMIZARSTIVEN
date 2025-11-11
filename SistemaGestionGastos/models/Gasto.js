// models/Gasto.js
import mongoose from "mongoose";

const gastoSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true },
  categoria: { type: String, required: true },
  valor: { type: Number, required: true },
  descripcion: { type: String },
  fecha: { type: Date, default: Date.now }
});

export default mongoose.model("Gasto", gastoSchema);
