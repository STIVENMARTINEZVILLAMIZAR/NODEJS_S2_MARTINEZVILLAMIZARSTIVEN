// index.js
import { connectDB } from "./config/database.js";

await connectDB();
console.log("🚀 Base de datos conectada con éxito!");
process.exit();
