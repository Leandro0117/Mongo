import { Router } from "express";
import {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = Router();

// Rutas para la gestión de productos
router.get("/productos", getProducts); // Obtener todos los productos
router.get("/producto/:id", getProduct); // Obtener un producto por ID
router.post("/producto", addProduct); // Crear un nuevo producto
router.put("/producto/:id", updateProduct); // Actualizar un producto existente
router.delete("/producto/:id", deleteProduct); // Eliminar un producto

export default router;
