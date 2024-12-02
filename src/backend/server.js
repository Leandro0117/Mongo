import { MongoClient, ServerApiVersion } from "mongodb"; //comunicacion con mongo
import express from "express";
import cors from "cors";
import productRouter from "./routes/productRoutes.js";
// app.use("/", productRouter);

//coneccion con el cluster
const uri =
  "mongodb+srv://kehibermorelo82212:nuEpdpO5rE7UBIuF@cluster0.ux7xc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const app = express();

app.use(cors());
app.use(express.json());
app.use(productRouter);

const port = 3000;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

client
  .connect()
  .then(() => {
    console.log("Conectado a MongoDB");
  })
  .catch((err) => {
    console.error("Error de conexión a MongoDB:", err);
  });

const database = client.db("tiendaRopa");
const productsCollection = database.collection("tiendaRopa");
export { productsCollection  };

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});