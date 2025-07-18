import React from 'react'
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import '../../styles/Nav.css'

function NavAdmin() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <ul className="navbar-nav w-100 justify-content-between">
          <li className='nav-item'>
            <button className='nav-link w-100' onClick={() => navigate("/")}><FaHome />Inicio</button>
          </li>
          <li className='nav-item'>
            <button className='nav-link w-100' onClick={() => logout()}><TbLogout2 />Logout</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavAdmin