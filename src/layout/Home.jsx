import React from 'react';
import Header from '../components/estaticos/Header.jsx'
import Nav from '../components/estaticos/Nav.jsx'
import Main from '../components/Main.jsx'
import Footer from '../components/estaticos/Footer.jsx'
import ProductosLista from '../components/productos/ProductosLista.jsx'
import CarritoLista from '../components/carrito/CarritoLista.jsx'

function Home() {
  return (
    <>
      <Header />
      <Nav />
      <Main />
      <ProductosLista />
      <CarritoLista />
      <Footer />
    </>
  )
}

export default Home