import mongoose from "mongoose";

const PersonaSchema = new mongoose.Schema({
  titulo: String,
  nombre: String,
  segundoNombre: String,
  apellido: String,
  direccion: String,
  tipoPersona: {
    type: String,
    enum: ["paciente", "doctor", "enfermera", "tecnico", "administrativo"],
  },
});

export default mongoose.model("Persona", PersonaSchema);
