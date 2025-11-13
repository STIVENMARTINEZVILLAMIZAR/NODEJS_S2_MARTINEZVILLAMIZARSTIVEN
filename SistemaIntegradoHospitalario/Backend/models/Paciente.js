import mongoose from "mongoose";

const PacienteSchema = new mongoose.Schema({
  idPersona: { type: mongoose.Schema.Types.ObjectId, ref: "Persona" },
  idPabellon: { type: mongoose.Schema.Types.ObjectId, ref: "Pabellon" },
  fechaNacimiento: Date,
  fechaIngreso: Date,
  diagnostico: String,
});

export default mongoose.model("Paciente", PacienteSchema);
