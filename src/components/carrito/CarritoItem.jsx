import React from 'react'
import '../../style/Carrito.css'

function CarritoItem({item, onAddToCart, onRemoveFromCart}) {
  return (
    <article className='item-carrito font-lxgw-wenkai'>
      <img className='imagen-item' src={item.imagen} alt={item.titulo}/>
      <div className='detalles-item'>
        <h3 className='titulo-item font-pangolin'>{item.titulo}</h3>
        <p className='calculo-item'>
          <span className='precio-item'>${item.precio} x </span>
          <span className='cantidad-item'>{item.cantidad}</span>
          <span className='subtotal-item font-pangolin'>= ${(item.precio*item.cantidad).toFixed(2)}</span>
        </p>
        <button className='boton-borrar-item' onClick={() => onRemoveFromCart(item, item.cantidad)}>Borrar</button>
        <button className='boton-restar-item' onClick={() => item.cantidad > 1 && onRemoveFromCart(item, 1)}>&#xFF0D;</button>
        <button className='boton-sumar-item' onClick={() => onAddToCart(item, 1)}>&#xFF0B;</button>
      </div>
    </article>
  )
}

export default CarritoItem