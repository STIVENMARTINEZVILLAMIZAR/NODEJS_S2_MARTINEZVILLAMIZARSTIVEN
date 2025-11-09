import { Usuario } from "../models/Usuario.js";

export class UsuarioController {
  static async crear(req, res) {
    try {
      const nuevo = new Usuario(req.body);
      await nuevo.save();
      res.status(201).json(nuevo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async listar(req, res) {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  }

  static async actualizar(req, res) {
    const { id } = req.params;
    const usuario = await Usuario.findByIdAndUpdate(id, req.body, { new: true });
    res.json(usuario);
  }

  static async eliminar(req, res) {
    const { id } = req.params;
    await Usuario.findByIdAndDelete(id);
    res.json({ mensaje: "Usuario eliminado" });
  }
}
