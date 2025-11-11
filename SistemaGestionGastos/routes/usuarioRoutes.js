import express from "express";
import { UsuarioController } from "../controllers/usuarioController.js";

const router = express.Router();

router.post("/", UsuarioController.crear);
router.get("/", UsuarioController.listar);
router.put("/:id", UsuarioController.actualizar);
router.delete("/:id", UsuarioController.eliminar);

export default router;
    