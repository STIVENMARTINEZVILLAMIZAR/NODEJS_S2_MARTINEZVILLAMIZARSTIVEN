import Persona from "../models/Persona.js";

export const getPersonas = async (req, res) => {
  const personas = await Persona.find();
  res.json(personas);
};

export const addPersona = async (req, res) => {
  try {
    const persona = new Persona(req.body);
    await persona.save();
    res.json({ message: "👤 Persona creada con éxito" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
