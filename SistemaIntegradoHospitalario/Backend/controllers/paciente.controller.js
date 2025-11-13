import Paciente from "../models/Paciente.js";

export const getPacientes = async (req, res) => {
  const pacientes = await Paciente.find().populate("idPersona").populate("idPabellon");
  res.json(pacientes);
};

export const addPaciente = async (req, res) => {
  try {
    const paciente = new Paciente(req.body);
    await paciente.save();
    res.json({ message: "🧑‍⚕️ Paciente agregado con éxito" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
