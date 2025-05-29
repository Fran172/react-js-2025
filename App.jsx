import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {

  const [carrito, setCarrito] = useState([])
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);
  const [total, setTotal] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const sumaTotal = (cart) => {
    return cart.reduce((suma, item) => suma + item.cantidad, 0);
  }

  const handleAddToCart = (prod, addCant) => {
    if (prod.stock < addCant) {
      return
    }
    const productoEnCarrito = carrito.find((item) => item.id === prod.id);
    let nuevoCarrito;
    if (productoEnCarrito) {
      if (productoEnCarrito.cantidad + addCant > prod.stock) {
        return
      }
      nuevoCarrito = carrito.map((item) => {
        if (item.id === prod.id) {
          return { ...item, cantidad: item.cantidad + addCant }
        } else {
          return item
        }
      })
    } else {
      nuevoCarrito = [...carrito, {...prod, cantidad:addCant}];
    }
    setCarrito(nuevoCarrito);
    setTotal(sumaTotal(nuevoCarrito));
  }

  const handleRemoveFromCart = (prod, removeCant) => {
    const eliminarProducto = removeCant >= prod.cantidad;
    let nuevoCarrito;
    if (eliminarProducto) {
      nuevoCarrito = carrito.filter((item) => item.id!==prod.id);
    } else {
      nuevoCarrito = carrito.map((item) => {
        if (item.id === prod.id) {
          return { ...item, cantidad: item.cantidad - removeCant}
        } else {
          return item
        }
      })
    }
    setCarrito(nuevoCarrito);
    setTotal(sumaTotal(nuevoCarrito));
  }

  const handleEmptyCart = () => {
    setCarrito([]);
    setTotal(0);
  }


  useEffect(() => {
    fetch('https://6834f7f2cd78db2058bfe772.mockapi.io/2025-react-js/productos')
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      setTimeout(() => {
        setProductos(datos)
        setCargando(false)
      }, 2000);
    })
    .catch((error) => {
      console.error('error', error)
      setCargando(false);
      setError(true);
    });
	}, []);

  if (error) {
    return <NotFound texto="no se han podido cargar los productos"/>
  }

  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <Home carrito={carrito} countCart={total} productos={productos} cargando={cargando} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart}/>
          }/>
          <Route
            path='/productos'
            element={
              <Productos countCart={total} productos={productos} cargando={cargando} handleAddToCart={handleAddToCart}/>
          }/>
          <Route
            path='/productos/:id'
            element={
              <ProductoDetalle productos={productos} countCart={total}/>
          }/>
          <Route
            path='/carrito'
            element={
              <Carrito carrito={carrito} countCart={total} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart}/>
          }/>
          <Route
            path='/contacto'
            element={
              <Contacto countCart={total}/>
          }/>
          <Route
            path='/admin'
            element={
              <RutaProtegida isAuthenticated={isAuthenticated}>
                <Admin/>
              </RutaProtegida>
          }/>
          <Route
            path='/login'
            element={
                <Login/>
          }/>


          <Route path='*' element={
            <NotFound texto={"ruta inválida"}/>
          }/>
        </Routes>
      </Router>
    </>
  )
}

export default App