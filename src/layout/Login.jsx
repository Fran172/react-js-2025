import React from 'react'
import '../styles/Nav.css'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

function Login() {
  const { email, setEmail, password, setPassword, error, handleSubmit } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <ul className="navbar-nav w-100 justify-content-between">
            <li className='nav-item'>
              <button className='nav-link w-100' onClick={() => {
                navigate("/");
              }}>
                Volver
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <section className='formulario font-pangolin centrar-contenedor'>
        <h2 className='titulo'>Login</h2>
        <form className='formulario-form' onSubmit={handleSubmit}>
          <input id='formBasicEmail' type="email" className='formulario-input' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo electrónico"
            style={{
              border: `4px inset ${error.email ? "red" : "#48d688"}`
            }}
          />
          {error.email && (
            <div style={{ color: "#9e0909", fontSize: "0.85rem" }}>
              {error.email}
            </div>
          )}
          <input id='formBasicPassword' type="password" className='formulario-input' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña"
            style={{
              border: `4px inset ${error.email ? "red" : "#48d688"}`
            }}
          />
          {error.password && (
            <div style={{ color: "#9e0909", fontSize: "0.85rem" }}>
              {error.password}
            </div>
          )}
          <button type="submit" className='formulario-enviar'>Iniciar sesión</button>
        </form>
      </section>
    </>
  );
}

export default Login