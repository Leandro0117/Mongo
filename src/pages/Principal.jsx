import { Link } from "react-router-dom";
import "../Estilos/Principal.css";
export default function Principal() {
  return (
    <div className="fondo_estu">
      <div className="cont_home_estu">
        <div className="tex_home_estu">
          <h1>Fashion Line</h1>
        </div>
        <div className="text_home_estu">
          <p>
            Bienvenido a Fashion Line. Explora nuestras colecciones y déjate
            inspirar por diseños únicos que realzan tu personalidad.
          </p>
        </div>

        <div className="opc_top_estu">
          <div className="link_estu">
            <Link to="/mostrar" className="link_estu">
              <span>Mostrar Productos</span>
            </Link>
          </div>
          <div className="link_estu">
            <Link to="/crear" className="link_estu">
              <span>Crear Productos</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
