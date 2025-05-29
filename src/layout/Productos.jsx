import React from 'react';
import Header from '../components/estaticos/Header.jsx'
import Nav from '../components/estaticos/Nav.jsx'
import Footer from '../components/estaticos/Footer.jsx'
import ProductosLista from '../components/productos/ProductosLista.jsx'
import loading from '../assets/loading.gif'

function Productos({countCart, productos, cargando, handleAddToCart}) {
  return (
    <>
        <Header/>
        <Nav countCart={countCart}/>
        {
            cargando ? <img src={loading} alt="loading" style={{display:"block",margin:"auto"}}/> :
            <ProductosLista productos={productos} handleAddToCart={handleAddToCart}/>
        }
        <Footer/>
    </>
  )
}

export default Productos