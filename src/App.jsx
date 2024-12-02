import './App.css'
import { Route, Routes } from "react-router-dom";
import NotFound from './pages/NotFound';
import Principal from './pages/Principal';
import Crear from './pages/CrearProducto';
import Mostrar from './pages/MostrarProductos';
import Detalles from './pages/DetallesProducto';

function App() {

  return (
    <Routes>
      <Route path='/'
        element={<Principal />}>
      </Route>
      <Route path='/crear'
        element={<Crear />}>
      </Route>
      <Route path='/mostrar'
        element={<Mostrar />}>
      </Route>
      <Route path='/detalles/:id'
        element={<Detalles />}>
      </Route>
      <Route path='*'
        element={<NotFound />}>
      </Route>
    </Routes>
  )
}

export default App
