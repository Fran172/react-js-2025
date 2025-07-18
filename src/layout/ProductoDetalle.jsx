import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/estaticos/Header.jsx'
import Nav from '../components/estaticos/Nav.jsx'
import Detalle from '../components/productos/Detalle.jsx'
import Footer from '../components/estaticos/Footer.jsx'
import '../styles/Detalle.css'
import { useCarrito } from '../context/CarritoContext.jsx';

function ProductoDetalle() {
  const { productos } = useCarrito();
  const { id } = useParams();
  const producto = productos.find((prod) => prod.id == id);

  return (
    <>
      <Header />
      <Nav />
      <Detalle id={id} producto={producto} />
      <Footer />
    </>
  )
}

export default ProductoDetalle