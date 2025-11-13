import express from "express";
const router = express.Router();

// Ruta base de prueba
router.get("/", (req, res) => {
  res.json({ mensaje: "✅ Rutas de departamentos funcionando correctamente" });
});

export default router;
