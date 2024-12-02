import { productsCollection } from "../server.js"; 
import { ObjectId } from "mongodb"; 

// Obtener todos los productos
export const getProducts = async (req, res) => {
  try {
    const products = await productsCollection.find({}).toArray();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un producto por ID
export const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productsCollection.findOne({ _id: new ObjectId(id) });
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Producto no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Agregar un nuevo producto
export const addProduct = async (req, res) => {
  const newProduct = req.body;
  try {
    const result = await productsCollection.insertOne(newProduct);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un producto
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const updatedProduct = { ...req.body };
  delete updatedProduct._id; // No se debe actualizar el _id
  
  try {
    const result = await productsCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedProduct }
    );
    if (result.matchedCount > 0) {
      res.status(200).json({ message: "Producto actualizado" });
    } else {
      res.status(404).json({ message: "Producto no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un producto
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await productsCollection.deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount > 0) {
      res.status(200).json({ message: "Producto eliminado" });
    } else {
      res.status(404).json({ message: "Producto no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};