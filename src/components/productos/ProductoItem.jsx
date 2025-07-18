import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/Producto.css'
import { useCarrito } from '../../context/CarritoContext.jsx';

function Producto({ producto }) {
  const { handleAddToCart } = useCarrito();

  return (
    <>
      <div className='col-12 col-md-6 col-lg-4 mb-4'>
        <article className='card card-producto font-pangolin h-100'>
          <Link to={`/productos/${producto.id}`}>
            <img className='imagen-producto card-img-top img-fluid' src={producto.imagen} alt={producto.nombre} title="Ver detalles del producto" />
          </Link>
          <h5 className='nombre-producto card-title'>{producto.nombre}</h5>
          <p className='precio-producto card-text'>${producto.precio}</p>
          <button className='boton-agregar-producto' onClick={() => handleAddToCart(producto, 1)}>Agregar</button>
        </article>
      </div>
    </>
  )
}

export default Producto