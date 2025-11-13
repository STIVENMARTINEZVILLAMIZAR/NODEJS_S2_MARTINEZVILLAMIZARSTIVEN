import Hospital from "../models/Hospital.js";

export const getHospitales = async (req, res) => {
  const hospitales = await Hospital.find();
  res.json(hospitales);
};

export const addHospital = async (req, res) => {
  try {
    const nuevo = new Hospital(req.body);
    await nuevo.save();
    res.json({ message: "🏥 Hospital agregado correctamente" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
