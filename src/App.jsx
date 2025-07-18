import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './layout/Home.jsx'
import Productos from './layout/Productos.jsx';
import ProductoDetalle from './layout/ProductoDetalle.jsx';
import Carrito from './layout/Carrito.jsx';
import NotFound from './layout/NotFound.jsx';
import Contacto from './layout/Contacto.jsx';
import RutaProtegida from './auth/RutaProtegida.jsx'
import Admin from './layout/Admin.jsx'
import Login from './layout/Login.jsx'
import { useCarrito } from './context/CarritoContext.jsx';

function App() {
  const { error } = useCarrito()

  if (error) {
    return <NotFound texto="no se han podido cargar los productos" />
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/productos/:id' element={<ProductoDetalle />} />
        <Route path='/carrito' element={<Carrito />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/admin' element={
          <RutaProtegida>
            <Admin />
          </RutaProtegida>}
        />
        <Route path='/login' element={<Login />} />

        <Route path='*' element={<NotFound texto={"ruta inválida"} />} />
      </Routes>
    </>
  )
}

export default App