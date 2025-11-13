import mongoose from "mongoose";

const DepartamentoSchema = new mongoose.Schema({
  nombre: String,
  idHospital: { type: mongoose.Schema.Types.ObjectId, ref: "Hospital" },
});

export default mongoose.model("Departamento", DepartamentoSchema);
