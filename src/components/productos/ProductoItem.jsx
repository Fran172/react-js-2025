import React from 'react'
import {Link} from 'react-router-dom';
import '../../style/Producto.css'

function Producto({producto, onAddToCart}) {
  return (
    <article className='tarjeta-producto font-pangolin'>
      <Link to={`/productos/${producto.id}`}>
        <img className='imagen-producto' src={producto.imagen} alt={producto.titulo} title="Ver detalles del producto"/>
      </Link>
      <h3 className='titulo-producto'>{producto.titulo}</h3>
      <p className='precio-producto'>${producto.precio}</p>
      <button className='boton-agregar-producto' onClick={() => onAddToCart(producto, 1)}>Agregar</button>
    </article>
  )
}

export default Producto