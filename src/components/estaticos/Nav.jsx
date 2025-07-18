import React from 'react'
import '../../styles/Nav.css'
import { NavLink } from 'react-router-dom'
import { FaShoppingBag } from "react-icons/fa";
import { FaCarrot } from "react-icons/fa";
import { TbMessageCircleFilled } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaBars } from "react-icons/fa";

import { useCarrito } from '../../context/CarritoContext.jsx';
import { useAuth } from '../../context/AuthContext.jsx';

function Nav() {
  const { total } = useCarrito();
  const { isAuth } = useAuth();
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg">
        <div className="container-fluid">
          <button className="navbar-toggler m-2 w-100" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FaBars />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav w-100 justify-content-evenly mb-2 mb-lg-0">
              <li className="nav-item"><NavLink to="/" className='nav-link '><FaHome />Inicio</NavLink></li>
              <li className="nav-item"><NavLink to="/contacto" className='nav-link'><TbMessageCircleFilled />Contacto</NavLink></li>
              <li className="nav-item"><NavLink to="/productos" className='nav-link'><FaCarrot />Productos</NavLink></li>
              <li className="nav-item"><NavLink to="/carrito" className='nav-link'><FaShoppingBag />Carrito <span className='contador'>{total}</span></NavLink></li>
              {isAuth ? (
                <li className="nav-item"><NavLink to="/admin" className='nav-link'><MdAdminPanelSettings /> Admin</NavLink></li>
              ) : (
                <li className="nav-item"><NavLink to="/login" className='nav-link'><CgProfile /> Login</NavLink></li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav