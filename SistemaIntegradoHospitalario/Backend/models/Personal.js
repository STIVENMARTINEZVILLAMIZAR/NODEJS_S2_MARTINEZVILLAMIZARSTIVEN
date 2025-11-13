import mongoose from "mongoose";

const PersonalSchema = new mongoose.Schema({
  idPersona: { type: mongoose.Schema.Types.ObjectId, ref: "Persona" },
  idDepartamento: { type: mongoose.Schema.Types.ObjectId, ref: "Departamento" },
  fechaVinculacion: Date,
  salario: Number,
  rol: String,
});

export default mongoose.model("Personal", PersonalSchema);
