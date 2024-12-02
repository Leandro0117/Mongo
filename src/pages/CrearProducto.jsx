import { Form, Formik, Field } from "formik";
import { Link } from "react-router-dom";
import "../Estilos/Crear.css";
import axios from "axios";

export default function CrearProducto() {
  const initialValues = {
    nombre: "",
    categoria: "",
    precio: "",
    cantidad: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/producto",
        values
      );
      if (response.data.acknowledged) {
        resetForm();
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <div className="background_dat">
      <div className="container_dat">
        <h1>Tienda de Ropa</h1>
        <h3>Crear Producto</h3>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <Field type="text" name="nombre" placeholder="Nombre" />
            <Field type="text" name="categoria" placeholder="Categoría" />
            <Field type="number" name="precio" placeholder="Precio" />
            <Field type="number" name="cantidad" placeholder="Cantidad en stock" />
            <button type="submit">CREAR</button>
          </Form>
        </Formik>
        <Link to="/">Regresar</Link>
      </div>
    </div>
  );
}
