import express from "express";
import { getHospitales, addHospital } from "../controllers/hospital.controller.js";

const router = express.Router();

router.get("/", getHospitales);
router.post("/", addHospital);

export default router;
