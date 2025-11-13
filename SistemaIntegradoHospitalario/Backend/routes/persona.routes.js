import express from "express";
import { getPersonas, addPersona } from "../controllers/persona.controller.js";
const router = express.Router();

router.get("/", getPersonas);
router.post("/", addPersona);

export default router;
