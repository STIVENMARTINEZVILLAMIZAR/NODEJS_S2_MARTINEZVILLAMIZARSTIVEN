import mongoose from "mongoose";

const PabellonSchema = new mongoose.Schema({
  nombre: String,
  capacidad: Number,
  idHospital: { type: mongoose.Schema.Types.ObjectId, ref: "Hospital" },
});

export default mongoose.model("Pabellon", PabellonSchema);
