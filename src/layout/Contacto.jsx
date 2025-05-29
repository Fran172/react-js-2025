import React from 'react'
import Header from '../components/estaticos/Header.jsx'
import Nav from '../components/estaticos/Nav.jsx'
import Formulario from '../components/contacto/Formulario.jsx'
import Footer from '../components/estaticos/Footer.jsx'
import '../style/Carrito.css'

function Contacto({countCart}) {
  return (
    <>
        <Header/>
        <Nav countCart={countCart}/>
        <Formulario/>
        <Footer/>
    </>
  )
}

export default Contacto