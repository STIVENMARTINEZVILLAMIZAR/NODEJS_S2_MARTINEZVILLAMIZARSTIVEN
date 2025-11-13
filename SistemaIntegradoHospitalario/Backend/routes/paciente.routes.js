import express from "express";
import { getPacientes, addPaciente } from "../controllers/paciente.controller.js";
const router = express.Router();

router.get("/", getPacientes);
router.post("/", addPaciente);

export default router;
