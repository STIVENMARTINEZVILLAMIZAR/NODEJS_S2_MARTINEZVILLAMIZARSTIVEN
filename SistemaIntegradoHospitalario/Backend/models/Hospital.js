import mongoose from "mongoose";

const HospitalSchema = new mongoose.Schema({
  nombre: String,
  direccion: String,
  ciudad: String,
});

export default mongoose.model("Hospital", HospitalSchema);
