import React from 'react'
import '../style/NotFound.css'
import error404 from '../assets/error404.png'

function NotFound({texto}) {
  return (
    <div className='fondo-notfound'>
        <div className='contenedor-notfound'>
            <img className='imagen-notfound' src={error404} alt="error 404" />
            <p className='titulo-notfound'>page not found</p>
            <p className='texto-notfound'>Error: {texto}</p>
        </div>
    </div>
  )
}

export default NotFound