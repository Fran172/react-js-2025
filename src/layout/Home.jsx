import React from 'react';
import Header from '../components/estaticos/Header.jsx'
import Nav from '../components/estaticos/Nav.jsx'
import Main from '../components/Main.jsx'
import Footer from '../components/estaticos/Footer.jsx'
import ProductosLista from '../components/productos/ProductosLista.jsx'
import CarritoLista from '../components/carrito/CarritoLista.jsx'
import loading from '../assets/loading.gif'

function Home({carrito, countCart, productos, cargando, handleAddToCart, handleRemoveFromCart, handleEmptyCart}) {

  return (
    <>
      <Header/>
      <Nav countCart={countCart}/>
      <Main/>
      {
        cargando ? <img src={loading} alt="loading" style={{display:"block",margin:"auto"}}/> :
      <ProductosLista productos={productos} handleAddToCart={handleAddToCart}/>
      }
      <CarritoLista carritoLista={carrito} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart}/>
      <Footer/>
    </>
  )
}

export default Home