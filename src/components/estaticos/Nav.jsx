import React from 'react'
import '../../style/Nav.css'
import {NavLink} from 'react-router-dom'

function Nav({countCart}) {
  return (
    <nav>
        <ul>
            <li><NavLink to="/" className='nav-link'>Inicio</NavLink></li>
            {/* <li><a href="#">Acerca de</a></li> */}
            <li><NavLink to="/contacto" className='nav-link'>Contacto</NavLink></li>
            <li><NavLink to="/productos" className='nav-link'>Productos</NavLink></li>
            <li><NavLink to="/carrito" className='nav-link'>Carrito <span className='contador'>{countCart}</span></NavLink></li>
        </ul>
    </nav>
  )
}

export default Nav