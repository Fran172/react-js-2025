import React from 'react'
import Header from '../components/estaticos/Header.jsx'
import Nav from '../components/estaticos/Nav.jsx'
import Footer from '../components/estaticos/Footer.jsx'
import CarritoLista from '../components/carrito/CarritoLista.jsx'
import '../styles/Carrito.css'

function Carrito() {
  return (
    <>
      <Header />
      <Nav />
      <CarritoLista />
      <Footer />
    </>
  )
}

export default Carrito