import React from 'react';
import Header from '../components/estaticos/Header.jsx'
import Nav from '../components/estaticos/Nav.jsx'
import Footer from '../components/estaticos/Footer.jsx'
import ProductosLista from '../components/productos/ProductosLista.jsx'

function Productos() {
  return (
    <>
      <Header />
      <Nav />
      <ProductosLista />
      <Footer />
    </>
  )
}

export default Productos