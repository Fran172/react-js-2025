import React from 'react'
import Header from '../components/estaticos/Header.jsx'
import Nav from '../components/estaticos/Nav.jsx'
import Footer from '../components/estaticos/Footer.jsx'
import CarritoLista from '../components/carrito/CarritoLista.jsx'
import '../style/Carrito.css'

function Carrito({carrito, countCart, handleAddToCart, handleRemoveFromCart, handleEmptyCart}) {
  return (
    <>
        <Header/>
        <Nav countCart={countCart}/>
        <CarritoLista carritoLista={carrito} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart}/>
        <Footer/>
    </>
  )
}

export default Carrito