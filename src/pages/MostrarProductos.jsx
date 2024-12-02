import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Estilos/Mostrar.css";
import axios from "axios";

export default function MostrarProductos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fillProductosFromDB = async () => {
      try {
        const response = await axios.get("http://localhost:3000/productos");
        setProductos(response.data);
      } catch (error) {
        console.error(
          "Error al cargar productos desde la base de datos:",
          error
        );
      }
    };

    fillProductosFromDB();
  }, []);

  return (
    <div className="fondo_estu">
      <div className="cont_home_estu">
        <div className="cont_principal_estu">
          <div className="tex_home_estu">
            <h1>Fashion Line</h1>
            <h3>Lista de productos</h3>
          </div>
          <div className="cont_opc_estu">
            <div className="opc_top_estu">
              <div className="lista_productos_container">
                <ul className="lista_productos">
                  {productos.map((producto) => (
                    <li key={producto._id} className="producto_item">
                      <Link to={`/detalles/${producto._id}`}>
                        {producto.nombre} - ${producto.precio}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link to="/crear" className="link_reg_dat">
                  Crear Producto
                </Link>
                <Link to="/" className="link_reg_dat">
                  Regresar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
