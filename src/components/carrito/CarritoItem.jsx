import React from 'react'
import '../../styles/Carrito.css'
import { useCarrito } from '../../context/CarritoContext.jsx';

function CarritoItem({ item }) {
  const { handleAddToCart, handleRemoveFromCart } = useCarrito();

  return (
    <article className='card item-carrito'>
      <div className='row g-0'>
        <div className='col-md-4'>
          <img
            className='img-fluid imagen-item'
            src={item.imagen}
            alt={item.nombre}
            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
          />
        </div>
        <div className='col-md-8'>
          <div className='card-body detalles-item font-pangolin'>
            <h3 className='nombre-item'>{item.nombre}</h3>
            <p className='m-0'>
              <span className='precio-item'>${item.precio} x </span>
              <span className='cantidad-item'>{item.cantidad}</span>
              <span className='subtotal-item'>= ${(item.precio * item.cantidad).toFixed(2)}</span>
            </p>
            <div>
              <button className='boton-restar-item' onClick={() => item.cantidad > 1 && handleRemoveFromCart(item, 1)}>&#xFF0D;</button>
              <button className='boton-sumar-item' onClick={() => handleAddToCart(item, 1)}>&#xFF0B;</button>
            </div>
            <button className='boton-borrar-item' onClick={() => handleRemoveFromCart(item, item.cantidad)}>Borrar</button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default CarritoItem