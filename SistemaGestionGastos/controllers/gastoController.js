// controllers/gastoController.js
import Gasto from "../models/Gasto.js";

export class GastoController {
  // Crear un nuevo gasto
  static async crear(req, res) {
    try {
      const nuevoGasto = new Gasto(req.body);
      await nuevoGasto.save();
      res.status(201).json(nuevoGasto);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  // Listar todos los gastos
  static async listar(req, res) {
    try {
      const gastos = await Gasto.find().populate("usuario", "nombre");
      res.json(gastos);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // 🔹 Obtener un gasto por ID
  static async obtenerPorId(req, res) {
    try {
      const gasto = await Gasto.findById(req.params.id);
      if (!gasto) return res.status(404).json({ error: "Gasto no encontrado" });
      res.json(gasto);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  // Actualizar un gasto
  static async actualizar(req, res) {
    try {
      const { id } = req.params;
      const gastoActualizado = await Gasto.findByIdAndUpdate(id, req.body, { new: true });
      res.json(gastoActualizado);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  // Eliminar un gasto
  static async eliminar(req, res) {
    try {
      const { id } = req.params;
      await Gasto.findByIdAndDelete(id);
      res.json({ mensaje: "Gasto eliminado correctamente" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}
