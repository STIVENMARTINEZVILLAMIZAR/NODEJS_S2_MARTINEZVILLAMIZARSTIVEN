import express from "express";
import { GastoController } from "../controllers/gastoController.js";

const router = express.Router();

router.get("/", GastoController.listar);
router.get("/:id", GastoController.obtenerPorId);
router.post("/", GastoController.crear);
router.put("/:id", GastoController.actualizar);
router.delete("/:id", GastoController.eliminar);

export default router;
