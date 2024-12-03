import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../Estilos/Detalles.css";

export default function DetallesProducto() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [editando, setEditando] = useState(false);
  const [productoEditado, setProductoEditado] = useState(null);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/producto/${id}`
        );
        setProducto(response.data);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    fetchProducto();
  }, [id]);

  const handleEditar = () => {
    setEditando(true);
    setProductoEditado(producto);
  };

  const handleGuardar = async () => {
    try {
      await axios.put(`http://localhost:3000/producto/${id}`, productoEditado);
      setProducto(productoEditado);
      setEditando(false);
    } catch (error) {
      console.error("Error al guardar los cambios:", error);
    }
  };

  const handleCancelar = () => {
    setEditando(false);
    setProductoEditado(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductoEditado({ ...productoEditado, [name]: value });
  };

  const handleEliminar = async () => {
    const confirmacion = window.confirm(
      "¿Estás seguro de que deseas eliminar este producto?"
    );
    if (confirmacion) {
      try {
        await axios.delete(`http://localhost:3000/producto/${id}`);
        window.location.href = "/mostrar";
      } catch (error) {
        console.error("Error al eliminar el producto:", error);
      }
    }
  };

  return (
    <div className="fondo_estu">
      <div className="cont_home_estu">
        <h1>Fashion Line</h1>
        <h3>Detalles del Producto</h3>
        {producto && (
          <div className="detalle_cliente_container">
            {editando ? (
              <>
                <input
                  type="text"
                  name="nombre"
                  value={productoEditado.nombre}
                  onChange={handleChange}
                  placeholder="Nombre"
                />
                <input
                  type="text"
                  name="descripcion"
                  value={productoEditado.descripcion}
                  onChange={handleChange}
                  placeholder="Descripcción"
                />
                <input
                  type="number"
                  name="precio"
                  value={productoEditado.precio}
                  onChange={handleChange}
                  placeholder="precio"
                />
                <input
                  type="text"
                  name="categoria"
                  value={productoEditado.categoria}
                  onChange={handleChange}
                  placeholder="categoria"
                />
                <input
                  type="number"
                  name="cantidad"
                  value={productoEditado.cantidad}
                  onChange={handleChange}
                  placeholder="Cantidad"
                />
              </>
            ) : (
              <>
                <p>
                  <strong>Nombre:</strong> {producto.nombre}
                </p>
                <p>
                  <strong>Precio:</strong> {producto.precio}
                </p>
                <p>
                  <strong>Categoría:</strong> {producto.categoria}
                </p>
                <p>
                  <strong>Cantidad:</strong> {producto.cantidad}
                </p>
                <p>
                  <strong>Descripción:</strong> {producto.descripcion}
                </p>
              </>
            )}
          </div>
        )}
        <div className="botones_container">
          {editando ? (
            <>
              <button className="boton_guardar" onClick={handleGuardar}>
                Guardar
              </button>
              <button className="boton_cancelar" onClick={handleCancelar}>
                Cancelar
              </button>
            </>
          ) : (
            <>
              <button className="boton_eliminar" onClick={handleEliminar}>
                Eliminar
              </button>
              <button className="boton_editar" onClick={handleEditar}>
                Editar
              </button>
              <Link to="/mostrar">Regresar</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
